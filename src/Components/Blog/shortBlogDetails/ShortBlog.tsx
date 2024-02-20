import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard'; // Import the BlogCard component
import { FaRedo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Post {
  typeCategory: string;
  id: number;
  date: string;
  title: string;
  content: string;
}

interface BlogProps {
  selectedCategory: string | null;
}

export const ShortBlogCom: React.FC<BlogProps> = ({ selectedCategory }) => {
  const allPosts: Post[] = [
    {
      typeCategory: 'Activites',
      id: 1,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
    },
    {
      typeCategory: 'Confirence',
      id: 2,
      date: 'November 15, 2022',
      title: 'Example Blog Post 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...',
    },
    {
      typeCategory: 'Confirence',
      id: 3,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
    },
    {
      typeCategory: 'Conseils médicaux',
      id: 4,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
    },
    {
      typeCategory: 'Publication',
      id: 5,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
    },
    {
      typeCategory: 'Articles',
      id: 6,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
    },
    {
      typeCategory: 'Articles',
      id: 7,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
    },
  ];

  const [filteredPosts, setFilteredPosts] = useState<Post[]>(allPosts);
  const [originalData, setOriginalData] = useState<Post[]>(allPosts);

  // Update filteredPosts whenever selectedCategory changes
  useEffect(() => {
    if (selectedCategory) {
      setFilteredPosts(allPosts.filter(post => post.typeCategory === selectedCategory));
    } else {
      setFilteredPosts(allPosts);
    }
  }, [selectedCategory]);

  // Reload all data
  const reloadAllData = () => {
    setFilteredPosts(originalData);
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button onClick={reloadAllData} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          <FaRedo/>
        </button>
      </div>
      <div className="grid gap-4">
      {filteredPosts.map(post => (
          <div key={post.id}>
            <BlogCard typeCategory={post.typeCategory} date={post.date} title={post.title} content={post.content} />
            {/* Button to redirect to DescriptionComponent */}
            <Link to={`/publication/${post.id}`} className="bg-blue-500 text-white font-bold py-2 px-4 rounded block mt-2 text-center">
              Lire la suite
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
