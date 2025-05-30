export async function joinPost(uuid) {
  const response = await fetch(`/api/post/${uuid}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}
