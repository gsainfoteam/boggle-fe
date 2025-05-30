export async function getPosts(type) {
  const response = await fetch(`/api/post?type=${type}&skip=0&take=50`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}
