// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Adjust the path as necessary

function UserProfile() {
  // Use the context
  const userData = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
