export async function getPost(uuid) {
  const response = await fetch(`/api/post/${uuid}`, {
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
