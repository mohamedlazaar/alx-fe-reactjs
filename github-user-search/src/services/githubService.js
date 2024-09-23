// src/services/githubService.js
import axios from 'axios';

const SEARCH_URL = 'https://api.github.com/search/users?q=';

export const fetchGitHubUsers = async (query, location = '', minRepos = 0) => {
  const apiKey = import.meta.env.VITE_GITHUB_API_KEY;
  
  // Construct the search query
  let searchQuery = query;

  if (location) {
    searchQuery += `+location:${location}`;
  }

  if (minRepos) {
    searchQuery += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`${SEARCH_URL}${searchQuery}`, {
      headers: {
        Authorization: `token ${apiKey}`, // Use your GitHub API key
      },
    });
    return response.data.items; // `items` contains an array of user objects
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    return [];
  }
};
