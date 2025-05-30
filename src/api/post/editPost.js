export async function editPost(uuid, title, content, type, maxParticipants, deadline) {
  const response = await fetch(`/api/post/${uuid}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      content: content,
      type: type,
      tags: [],
      maxParticipants: maxParticipants,
      deadline: deadline,
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}
