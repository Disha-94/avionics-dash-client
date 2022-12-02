import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main'; // fallback for lazy pages
import './scss/main.scss'; // All of our styles

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
  const [courseId, setCourseId] = React.useState(['ad101', 'ad201']);
  const handleUser = (userType, user) => {
    setUser(user)
    setUserType(userType);
  }
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route exact path="/" element={<Dashboard user={user} userType={userType} handleUser={handleUser} />} />
          <Route exact path="/login" element={<Login handleUser={handleUser} setUserReg={setUserReg} />} />
          <Route exact path="/signup" element={<Signup userType={userType} handleUser={handleUser} />} />
          <Route exact path="/profile" element={<Profile user={user} userType={userType} handleUser={handleUser} />} />
          <Route exact path="/programs" element={<Programs userType={userType} userReg={userReg} />} />
          <Route exact path="/files" element={<Files userType={userType} handleUser={handleUser} />} />
          <Route exact path="/discussions" element={<Discussions userType={userType} handleUser={handleUser} />} />
          <Route exact path="/courseStudent" element={<CourseStudent user={user} userType={userType} courseId={courseId} />} />
          <Route exact path="/courseInstructor" element={<CourseInstructor user={user} userType={userType} courseId={courseId} />} />
          <Route exact path="/selectCourse" element={<CourseSelect user={user} />} />
          <Route exact path="/payments" element={<Payments userReg={userReg} setUserReg={setUserReg} setCourseId={setCourseId} />} />
          <Route path="*" element={<NotFound />} status={404} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
