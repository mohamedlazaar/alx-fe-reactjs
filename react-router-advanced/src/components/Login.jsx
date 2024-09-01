import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleLogin = () => {
    // In a real app, you'd handle actual authentication here
    login({ id: 1, name: 'Test User' });
    
    // Redirect to the page they were trying to access, or to profile if they weren't redirected
    const from = location.state?.from?.pathname || '/profile';
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;