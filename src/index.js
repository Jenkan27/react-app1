import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { App, Grid, Navbar, SpinningBox } from './App';
import SecondPage from './SecondPage'; // Import the second page component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route //Homepage
          path="/"
          element={
            <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '10vh', width: '60vw', height: '40vh' }}>
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Navbar />
                <SpinningBox />
                <App />
                <Grid />
              </div>
            </div>
          }
        />
        
        <Route //Second Page
          path="/second" 
          element={
          <SecondPage />
          } 
        />
      
      </Routes>
    </Router>
  </React.StrictMode>
);