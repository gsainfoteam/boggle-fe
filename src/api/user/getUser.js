export async function getUser(uuid) {
  const response = await fetch(`/api/user/${uuid}`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}
