import React, { useState } from 'react';
import './style.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  let activeClassName = 'nav-active';

  let [loggedIn, setLoggedIn] = useState(null);
  function handleLogin(){
    setLoggedIn(true);
  }
  function handleLogout(){
    setLoggedIn(false);
  }

  return (
    <BrowserRouter>
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink
          to=""
          className={({ isActive }) => isActive ? activeClassName : undefined}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => isActive ? activeClassName : undefined}
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => isActive ? activeClassName : undefined}
        >
          Contact
        </NavLink>
        <NavLink to="dashboard">Dashboard</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={
          loggedIn ? 
          <Navigate to="/dashboard"/> : 
          <Home login={handleLogin} />} 
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="dashboard"
          element={
            loggedIn ? 
            <Dashboard logout={handleLogout}/> : 
            <Navigate to="/" state="From Dashboard" />}
        >
          <Route path="settings" element={<p>This is the nested Settings Route</p>}/>
        </Route>
        <Route path="profile">
          <Route path=":userId" element={<Profile/>}/>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
