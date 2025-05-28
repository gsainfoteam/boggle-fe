import { useEffect, useState } from 'react';
import Card from './Card';
import { getPosts } from '../api/post/postList.js';

export default function CardList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data.posts);
    });
  }, []);

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
      {posts.map((post, i) => (
        <Card key={i} post={post} />
      ))}
    </div>
  );
}
