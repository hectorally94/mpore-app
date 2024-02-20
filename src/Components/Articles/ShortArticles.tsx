import React from 'react';
import { Post } from './Post';
import BlogCard from '../Blog/shortBlogDetails/BlogCard';
import { Link } from 'react-router-dom';



interface ShortBlogComProps {
  posts: Post[];
}

export const ShortArticles: React.FC<ShortBlogComProps> = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <BlogCard typeCategory={post.typeCategory} date={post.date} title={post.title} content={post.content} />
          {post.paid ? (
            
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-3 mt-2 mb-3">
              <Link to={`/timeline/${post.id}`}>
              payer pour en savoir plus
          </Link>
            </button>
          ) : 
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-3 mt-2 mb-3">
               <Link to={`/articleFree/${post.id}`}>
              savoir plus
          </Link>
            </button>
          }
        </div>
      ))}
    </div>
  );
};
