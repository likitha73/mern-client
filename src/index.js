import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <h1>Welcome</h1>{/Add this tag here/}
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
  
      </Routes>
    </Router>
  </React.StrictMode>
);