import React from 'react';

interface RecentArticle {
  title: string;
  date: string;
}

const ShortRecents: React.FC = () => {
  const articles: RecentArticle[] = [
    {
      title: "Remise d’un don d’équipements médicaux par l’OMS/Burundi",
      date: "14 décembre 2023"
    },
    {
      title: "Une compagne de 3 jours de sensibilisation sur les pathologies liées à l’albinisme.",
      date: "6 décembre 2023"
    },
    {
      title: "L’HMK a accueilli une équipe des experts intervenants dans le domaine de la santé maternelle et néonatale.",
      date: "24 novembre 2023"
    },
    {
      title: "Accueil d’une équipe de volontaires internationaux de l’association IVUmed à l’HMK.",
      date: "25 septembre 2023"
    },
    {
      title: "Formation du personnel paramédical de l’HMK",
      date: "4 août 2023"
    },
    {
        title: "Formation du personnel paramédical de l’HMK",
        date: "4 août 2023"
      },
      {
          title: "Formation du personnel paramédical de l’HMK",
          date: "4 août 2023"
        },
        {
            title: "Formation du personnel paramédical de l’HMK",
            date: "4 août 2023"
          },
          {
              title: "Formation du personnel paramédical de l’HMK",
              date: "4 août 2023"
            },
            {
                title: "Formation du personnel paramédical de l’HMK",
                date: "4 août 2023"
              },
              {
                  title: "Formation du personnel paramédical de l’HMK",
                  date: "4 août 2023"
                },
                {
                    title: "Formation du personnel paramédical de l’HMK",
                    date: "4 août 2023"
                  },
                  {
                      title: "Formation du personnel paramédical de l’HMK",
                      date: "4 août 2023"
                    },
                    {
                        title: "Formation du personnel paramédical de l’HMK",
                        date: "4 août 2023"
                      },
                      {
                          title: "Formation du personnel paramédical de l’HMK",
                          date: "4 août 2023"
                        },
                        {
                            title: "Formation du personnel paramédical de l’HMK",
                            date: "4 août 2023"
                          },
                          {
                              title: "Formation du personnel paramédical de l’HMK",
                              date: "4 août 2023"
                            },
                            {
                                title: "Formation du personnel paramédical de l’HMK",
                                date: "4 août 2023"
                              },
                              {
                                  title: "Formation du personnel paramédical de l’HMK",
                                  date: "4 août 2023"
                                },
                                {
                                    title: "Formation du personnel paramédical de l’HMK",
                                    date: "4 août 2023"
                                  },
                                  {
                                      title: "Formation du personnel paramédical de l’HMK",
                                      date: "4 août 2023"
                                    },
                                    {
                                        title: "Formation du personnel paramédical de l’HMK",
                                        date: "4 août 2023"
                                      },
                                      {
                                          title: "Formation du personnel paramédical de l’HMK",
                                          date: "4 août 2023"
                                        },
                                        {
                                            title: "Formation du personnel paramédical de l’HMK",
                                            date: "4 août 2023"
                                          }

  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Articles récents</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-gray-500">{article.date}</p>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default ShortRecents;
