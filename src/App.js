import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main'; // fallback for lazy pages
import './scss/main.scss'; // All of our styles
import courseData from './data/courseList';
import userData from './data/userList';

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
  const [courseList, setCourseList] = React.useState([...courseData]);
  const [userList, setUserList] = React.useState([...userData]);
  const handleUser = (userType, user) => {
    setUser(user)
    setUserType(userType);
  }
  
  React.useEffect(() => {
    if(Object.keys(user).length !== 0){
      if(user['cid'].length > 0 || user['userType'] === 'i') {
      setUserReg(true);
      setCourseId([ ...user['cid'] ]);
     } else setUserReg(false);
     const temp = userList.map(obj => { 
      if(user.uid === obj.uid) 
        return user 
      else 
        return obj
      });
      setUserList([...temp]);
    }
  },[user])

  React.useEffect(() => {
    if(userType === 'v'){
      setUser({});
      setUserReg(false);
      setCourseId([]);
      setCourseList([...courseData]);
      setUserList([...userData]);
    }
  },[userType]);

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route exact path="/" element={<Dashboard userType={userType} setUserType={setUserType}/>} />
          <Route exact path="/login" element={<Login handleUser={handleUser} userList={userList}/>} />
          <Route exact path="/signup" element={<Signup handleUser={handleUser}  setUserList={setUserList} userLength={userList.length} userList={userList}/>}/>
          <Route exact path="/profile" element={<Profile user={user} userType={userType} handleUser={handleUser} setUserType={setUserType}/>} />
          <Route exact path="/programs" element={<Programs userType={userType} userReg={userReg} setUserType={setUserType}/>} />
          <Route exact path="/files" element={<Files userType={userType} handleUser={handleUser} setUserType={setUserType}/>}  />
          <Route exact path="/discussions" element={<Discussions userType={userType} handleUser={handleUser} setUserType={setUserType}/>} />
          <Route exact path="/courseStudent" element={<CourseStudent user={user} userType={userType} courseId={courseId} courseList={courseList} setCourseList={setCourseList} setUserType={setUserType}/>} />
          <Route exact path="/courseInstructor" element={<CourseInstructor user={user} userType={userType} courseId={courseId} courseList={courseList} userList={userList} setCourseList={setCourseList} setUserType={setUserType}/>} />
          <Route exact path="/selectCourse" element={<CourseSelect user={user} courseList={courseList} setUserType={setUserType}/>} />
          <Route exact path="/payments" element={<Payments userReg={userReg} user={user} setUser={setUser} handleUser={handleUser} />} />
          <Route path="*" element={<NotFound />} status={404} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
