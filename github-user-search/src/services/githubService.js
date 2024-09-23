// src/services/githubService.js
import axios from 'axios';

const SEARCH_URL = 'https://api.github.com/search/users?q=';

export const fetchGitHubUsers = async (query) => {
  const apiKey = import.meta.env.VITE_GITHUB_API_KEY;
  try {
    const response = await axios.get(`${SEARCH_URL}${query}`, {
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
