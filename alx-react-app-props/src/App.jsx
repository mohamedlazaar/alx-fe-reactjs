import React from 'react';
import ProfilePage from './components/UserProfilePage';
import UserContext from './components/UserContext.js';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
