import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAllCourses, getUserCourse } from './data/api';
import Main from './components/Main'; // fallback for lazy pages
import './scss/main.scss'; // All of our styles
import courseData from './data/courseList';

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Profile = lazy(() => import('./pages/Profile'));
const Programs = lazy(() => import('./pages/Programs'));
const Files = lazy(() => import('./pages/Files'));
const Discussions = lazy(() => import('./pages/Discussions'));
const Payments = lazy(() => import('./pages/Payment'));
const CourseStudent = lazy(() => import('./pages/CourseStudent'));
const CourseInstructor = lazy(() => import('./pages/CourseInstructor'));
const CourseSelect = lazy(() => import('./pages/CourseSelect'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  const [user, setUser] = React.useState({});
  const [userReg, setUserReg] = React.useState(false);
  const [userType, setUserType] = React.useState('v');
  const [courseId, setCourseId] = React.useState([]);
  const [courseList, setCourseList] = React.useState([]);
  const [allCourse, setAllCourse] = React.useState([])
  const [token, setToken] = React.useState('');
  const handleUser = (userType, user) => {
    setUser(user)
    setUserType(userType);
  }

  React.useEffect(() => {
    getAllCourses().then(value => {
      if (value.data) {
        setAllCourse([ ...value.data]);
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if(user.id){
    getUserCourse(user.id, token).then(value => {
      if(value.data){
        setCourseList([ ...value.data]);
      }
    })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  React.useEffect(() => {
    if (Object.keys(user).length !== 0) {
      if (user['course_ids'].length > 0 || user['userType'] === 'i') {
        setUserReg(true);
        user['course_ids'] && setCourseId([...user['course_ids']]);
      } else setUserReg(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  React.useEffect(() => {
    if (userType === 'v') {
      setUser({});
      setUserReg(false);
      setCourseId([]);
      setCourseList([...courseData]);
    }
  }, [userType]);

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route exact path="/" element={<Dashboard userType={userType} setUserType={setUserType} />} />
          <Route exact path="/login" element={
            <Login
              handleUser={handleUser}
              user={user}
              token={token}
              setToken={setToken}
            />
          } />
          <Route exact path="/signup" element={
            <Signup
              handleUser={handleUser}
              setToken={setToken}
            />}
          />
          <Route exact path="/profile" element={token ?
            <Profile
              user={user}
              userType={userType}
              userReg={userReg}
              handleUser={handleUser}
              setUserType={setUserType}
            /> : <Dashboard userType={userType} setUserType={setUserType} />}
          />
          <Route exact path="/programs" element={
            <Programs
              userType={userType}
              userReg={userReg}
              setUserType={setUserType}
            />}
          />
          <Route exact path="/files" element={
            <Files
              userType={userType}
              userReg={userReg}
              setUserType={setUserType}
            />}
          />
          <Route exact path="/discussions" element={
            <Discussions
              userType={userType}
              userReg={userReg}
              setUserType={setUserType}
            />}
          />
          <Route exact path="/courseStudent" element={token ?
            <CourseStudent
              user={user}
              userType={userType}
              courseId={courseId}
              courseList={courseList}
              setCourseList={setCourseList}
              setUserType={setUserType}
              token={token}
            /> : <Dashboard userType={userType} setUserType={setUserType} />}
          />
          <Route exact path="/courseInstructor" element={token ?
            <CourseInstructor
              user={user}
              userType={userType}
              courseId={courseId}
              courseList={courseList}
              setCourseList={setCourseList}
              setUserType={setUserType}
              token={token}
            /> : <Dashboard userType={userType} setUserType={setUserType} />}
          />
          <Route exact path="/selectCourse" element={token ?
            <CourseSelect
              user={user}
              courseList={allCourse}
              setUserType={setUserType}
              token={token}
              setCourseList={setCourseList}
            /> : <Dashboard userType={userType} setUserType={setUserType} />}
          />
          <Route exact path="/payments" element={token ?
            <Payments
              userReg={userReg}
              user={user}
              setUser={setUser}
              handleUser={handleUser}
              token={token}
            /> : <Dashboard userType={userType} setUserType={setUserType} />}
          />
          <Route path="*" element={<NotFound />} status={404} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
