
import { Post } from '../../Components/Articles/Post';
import { ShortArticles } from '../../Components/Articles/ShortArticles';
import { FooterPage } from '../../Footer/FooterPage';
import ScrollToTopButton from '../../ScrollToTopButton ';
import SocialMediaButtons from '../../SocialMediaButton';

export function Articles() {
  const allPosts: Post[] = [
    {
      typeCategory: 'Activites',
      id: 1,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
      paid: true // Example of a paid article
    },
    {
      typeCategory: 'Activites',
      id: 2,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
      paid: false // Example of a paid article
    },
    {
      typeCategory: 'Activites',
      id: 3,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
      paid: true // Example of a paid article
    },
    {
      typeCategory: 'Activites',
      id: 3,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
      paid: false // Example of a paid article
    },
    {
      typeCategory: 'Activites',
      id: 3,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
      paid: true // Example of a paid article
    }
    ,
    {
      typeCategory: 'Activites',
      id: 3,
      date: 'March 26, 2023',
      title: 'APPEL A CANDIDATURE',
      content: "En vue d’encadrer et de soutenir de jeunes talents, Mpore HOSPITAL désire recruter des stagiaires professionnels titulaires de diplômes A2 ou Baccalauréat en Soins infirmiers, Baccalauréat en Logistics and supply chain management et Baccalauréat en Gestion des Ressources Humaines. Pour plus de détails nous vous prions de lire le document d’appel à […]",
      paid: false // Example of a paid article
    },
    
    // Add more posts as needed
  ];
  return (
    <>
    
    <div className='flex flex-col min-h-screen'>
    <ShortArticles posts={allPosts}/>
    </div>
   
    <SocialMediaButtons/>
    <ScrollToTopButton/>
    <FooterPage/>
    </>
  );
}
