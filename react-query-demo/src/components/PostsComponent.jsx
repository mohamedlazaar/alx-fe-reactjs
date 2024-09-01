import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async (page = 1) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    isPreviousData
  } = useQuery(['posts', page], () => fetchPosts(page), {
    keepPreviousData: true,
    staleTime: 60000, // Data will be considered fresh for 1 minute
    cacheTime: 300000, // Data will remain in cache for 5 minutes
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      {isFetching && <div>Fetching...</div>}
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPage(old => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <span>Current Page: {page}</span>
        <button
          onClick={() => setPage(old => old + 1)}
          disabled={isPreviousData}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PostsComponent;