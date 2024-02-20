import React, { ReactNode } from 'react';

interface CategoryCardContainerProps {
  children: ReactNode;
}

const CategoryCardContainer: React.FC<CategoryCardContainerProps> = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-64 overflow-y-auto">
      {children}
    </div>
  );
};

export default CategoryCardContainer;
