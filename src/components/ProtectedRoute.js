import React from 'react';
import {  Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('token');

  // Check if token exists and is not expired
  const isAuthenticated = token ? true : false;

 if (isAuthenticated){
  return children 
  
 }else{
 return <Navigate to="/" />
 }
};

export default ProtectedRoute;

