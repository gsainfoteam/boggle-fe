export async function login(code) {
  try {
    console.log('Attempting login with code:', code);
    console.log('API endpoint:', '/api/user/login');
    
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code
      }),
    });
    
    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Login failed with status:', response.status);
      console.error('Error response:', errorText);
      throw new Error(`Login failed: ${response.status} - ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Login successful, response:', data);
    return data;
    
  } catch (error) {
    console.error('Login error details:', error);
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error: Backend server might not be running');
    }
    throw error;
  }
}
