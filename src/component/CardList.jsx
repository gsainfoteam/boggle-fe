import { useEffect, useState } from 'react';
import Card from './Card';
import { getPosts } from '../api/post/postList.js';

export default function CardList({ type }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(type).then((data) => {
      setPosts(data.posts);
    });
  }, [type]);

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
