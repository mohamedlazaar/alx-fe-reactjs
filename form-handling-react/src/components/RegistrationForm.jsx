import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is missing and set error if true
    if (!email) {
      setErrors('setErrors');
      return;
    }

    // Check if password is missing and set error if true
    if (!password) {
      setErrors('setErrors');
      return;
    }

    // Check if username is missing and set error if true
    if (!username) {
      setErrors('setErrors');
      return;
    }

    // Mock API submission
    console.log('User registered:', { username, email, password });

    // Clear error message after successful submission
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
