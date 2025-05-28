export async function getPosts() {
  const response = await fetch('/api/post?type=ALL&skip=0&take=12', {
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
