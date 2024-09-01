import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // In a real app, you'd handle actual authentication here
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/profile');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;