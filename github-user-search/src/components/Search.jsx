import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState(0);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await fetchUserData(username, location, repos);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub Username"
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border p-2 rounded ml-2"
        />
        <input
          type="number"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          placeholder="Min Repos"
          className="border p-2 rounded ml-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can’t find the user{error}</p>}

      {userData && (
        <div className="mt-4">
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mb-2" />
          <h3 className="text-2xl font-bold">{userData.name || userData.login}</h3>
          <p>{userData.bio}</p>
          <p>Location: {userData.location}</p>
          <p>Repositories: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
