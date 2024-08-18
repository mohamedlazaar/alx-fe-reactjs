// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
