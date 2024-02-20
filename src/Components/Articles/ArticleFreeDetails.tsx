import React from 'react';
import BlogCard from '../../Components/Blog/shortBlogDetails/BlogCard';
import { FaBackspace, FaBackward, FaBlackTie } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
interface Post {

  typeCategory:string;  
  id: number;
  date: string;
  title: string;
  content: string;
}

interface BlogProps {
  selectedCategory: string | null;
}


export const ArticleFreeDetails: React.FC<BlogProps> = ({ selectedCategory }) => {
  const posts: Post[] = [
    {

  typeCategory: 'Test details',
      id: 1,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
    }
    // Add more blog posts as needed
  ];

  const history = useHistory();

 const handleClick = () => {
  // Navigate to the TargetComponent when the button is clicked
  history.push('/articles');
};
  return (
    <div>
      <div className="grid gap-4">
     
        {posts.map(post => (
          <>
           <BlogCard key={post.id} typeCategory={post.typeCategory} date={post.date} title={post.title} content={post.content} />
         {/* Button container */}
            {/* Backward button */}
            <button onClick={handleClick} className="bg-green-500 mb-4 mr-20 ml-20 text-white font-bold py-2 px-4 rounded text-center">
              Retour aux Articles

            </button>
         
        
        </>
         
        ))}
      </div>
    </div>
  );
};
