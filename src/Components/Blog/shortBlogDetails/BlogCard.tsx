import React from 'react';

interface BlogCardProps {
  typeCategory:string;  
  date: string;
  title: string;
  content: string;

}

const BlogCard: React.FC<BlogCardProps> = ({ typeCategory,date, title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-sm italic text-gray-500 mb-2">{typeCategory}</p>
      <p className="text-gray-500 mb-2">{date}</p>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default BlogCard;
