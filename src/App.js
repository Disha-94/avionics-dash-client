import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));
const Programs = lazy(() => import('./pages/Programs'));
const Files = lazy(() => import('./pages/Files'));
const Discussions = lazy(() => import('./pages/Discussions'));
const Payments = lazy(() => import('./pages/Payment'));
const Courses = lazy(() => import('./pages/Courses'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<h1>Loading Dashboard...</h1>}>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/programs" element={<Programs />} />
        <Route exact path="/files" element={<Files />} />
        <Route exact path="/discussions" element={<Discussions />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/payments" element={<Payments />} />
        <Route element={<NotFound />} status={404} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
