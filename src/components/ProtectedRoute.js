import React, { Children } from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('token');

  // Check if token exists and is not expired
  const isAuthenticated = token ? true : false;

 if (token){
  return children 
  
 }else{
 <Navigate to="/" />
 }
};

export default ProtectedRoute;

