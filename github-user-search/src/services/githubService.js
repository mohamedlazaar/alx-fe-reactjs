import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  const apiKey = import.meta.env.VITE_GITHUB_API_KEY; // Use environment variable
  const response = await axios.get(`${BASE_URL}/${username}`, {
    headers: {
      Authorization: `token ${apiKey}`,
    },
  });
  return response.data;
};
