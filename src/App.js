

// App.js
import './App.css';
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import EmailForm from './components/EmailForm';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/send-email" element={<EmailForm />} /> */}
          <Route path="/send-email" element={<ProtectedRoute><EmailForm /></ProtectedRoute>} />
          {/* <Route path="/send-email" element={<EmailForm />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
     
    </div>
  );
}

export default App;

