import React from 'react';
import { Navigate } from 'react-router-dom';

// This is a simple authentication check. In a real app, you'd use a more robust method.
const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;