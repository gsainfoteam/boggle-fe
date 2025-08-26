import { useEffect, useState } from 'react';
import Card from './Card';
import { getPosts } from '../api/post/getPostList.js';

export default function CardList({ type }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    getPosts(type)
      .then((data) => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('게시글을 불러오는데 실패했습니다:', err);
        setError('게시글을 불러오는데 실패했습니다.');
        setLoading(false);
      });
  }, [type]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <div className="text-lg text-red-600 mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          다시 시도
        </button>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <div className="text-lg text-gray-600 mb-2">게시글이 없습니다</div>
        <div className="text-sm text-gray-500">새로운 게시글을 작성해보세요!</div>
      </div>
    );
  }

  return (
    <div
      className="
      grid 
      grid-cols-[repeat(auto-fit,minmax(240px,1fr))] 
      gap-6 
      w-full 
      box-border
    "
    >
      {posts.map((post) => (
        <Card key={post.uuid} post={post} />
      ))}
    </div>
  );
}
