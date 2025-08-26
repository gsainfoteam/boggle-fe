export async function getPosts(type) {
  try {
    console.log(`게시글 요청 중: type=${type}`);
    
    const response = await fetch(`/api/post?type=${type}&skip=0&take=50`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('API 응답 상태:', response.status, response.statusText);
    
    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('받은 데이터:', data);
    
    return data;
  } catch (error) {
    console.error('getPosts 에러:', error);
    throw error;
  }
}
