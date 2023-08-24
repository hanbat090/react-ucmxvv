import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Dasboard({ logout }){
  return (
    <div>
      <p>Welcome User </p>
      <Link to="settings">Settings</Link>
      <Outlet/>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dasboard;