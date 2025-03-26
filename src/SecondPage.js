import React from 'react';
import { Link } from 'react-router-dom';

function SecondPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>Welcome to the Second Page!</h1>
      <Link to="/">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Go Back to Home</button>
      </Link>
    </div>
  );
}

export default SecondPage;