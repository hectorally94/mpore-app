import React from 'react';
import ShortRecents from '../ShortRecents/ShortRecents';

interface CategoryCardProps {
  categories: string[];
  setSelectedCategory: (category: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ categories, setSelectedCategory }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-4xl text-center font-semibold mb-4">Catégories</h2>
      <div className="grid gap-4 justify-center">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-4">
            <button className="text-blue-500 underline " onClick={() => setSelectedCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
      </div>
     
      <ShortRecents/>
    </div>
    
  );
};

export default CategoryCard;
