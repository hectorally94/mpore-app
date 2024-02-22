
import { FooterPage } from '../../../Footer/FooterPage';
import ScrollToTopButton from '../../../ScrollToTopButton ';
import SocialMediaButtons from '../../../SocialMediaButton';
import { ShortBlogCom } from '../../Blog/shortBlogDetails/ShortBlog';
import CategoryCard from '../../Blog/shortCategory/CategoryCard';
import { useState } from 'react';
export function AdminDashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: string[] = [
    'Activites',
    'Confirence',
    'Conseils médicaux',
    'Publication',
  ];
  return (
    <>
    
    <div className='flex flex-col min-h-screen'>
    <div>

    <h1 className="text-3xl font-bold mb-4 mt-2 text-center">Bienvenue sur notre blog</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Render Blog posts */}
        <ShortBlogCom selectedCategory={selectedCategory}/> 
        
        {/* Render Category Card */}
            <CategoryCard categories={categories} setSelectedCategory={setSelectedCategory} />
      </div>
    </div>
    <SocialMediaButtons/>
    <ScrollToTopButton/>
    </div>
   
    <FooterPage/>
    </>
  );
}

