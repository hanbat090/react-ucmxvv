import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ login }) {
  let navigate = useNavigate();
  return (
    <div>
      <p>This is the Home Page</p>
      <button onClick={()=>{
        login();
        navigate('/dashboard')
      }}>
        Login
      </button>
      {/* {location.state && <p>From the About Page</p>} */}
    </div>
  );
}

export default Home;
