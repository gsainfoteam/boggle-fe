export async function login(code) {
  const response = await fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: code
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to login');
  }
  return response.json();
}
