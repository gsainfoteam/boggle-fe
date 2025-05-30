export async function getMyProfile() {
  const response = await fetch(`/api/user`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}
