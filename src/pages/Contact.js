import React from 'react';
import { Link } from 'react-router-dom';

function Contact(){
  return (
    <div>
      <p>This is the Contact page</p>
      {/* Pass in any Values you want to save in state, inside the state prop */}
      <Link to="/" state={"From Contact Page"}>Back to Home</Link>
    </div>
  )
}

export default Contact;