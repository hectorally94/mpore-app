import { Card, Carousel, CustomFlowbiteTheme } from "flowbite-react";
import { FaPhoneAlt } from "react-icons/fa";

export const WelcomeClinicPhoto = () => {
    const customTheme: CustomFlowbiteTheme['carousel'] = {
        "root": {
            "base": "relative h-full w- full",
            "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
            "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
          },
      };
  const carouselItems = [
    {
      imageSrc: "https://img.freepik.com/free-psd/hallway-emergency-room-generative-ai_587448-2190.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.1.26385261.1706876265&semt=sph",
      comment: "Bienvenue à la Clinique Mpore",
    },
    {
      imageSrc: "https://img.freepik.com/free-psd/hallway-emergency-room-generative-ai_587448-2190.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.1.26385261.1706876265&semt=sph",
      comment: "Situé dans la ville de Bujumbura à quartier Asiatique à 100 m de Universite sagesse",
    },
    {
      imageSrc: "https://img.freepik.com/free-psd/hallway-emergency-room-generative-ai_587448-2190.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.1.26385261.1706876265&semt=sph",
      comment: "Un établissement de santé de premier plan dédié à fournir des services médicaux de haute qualité à notre communauté",
    },
    {
      imageSrc: "https://img.freepik.com/free-psd/hallway-emergency-room-generative-ai_587448-2190.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.1.26385261.1706876265&semt=sph",
      comment: "La Clinique     Mpore est la pierre angulaire de l'excellence des soins de santé depuis année de création 2023",
    }
    
  ];

  return (
    <>

<Carousel theme={customTheme} pauseOnHover>
      {carouselItems.map((item, index) => (
        <div key={index} className="relative">
          <img src={item.imageSrc} alt={`Image ${index + 1}`} className="relative w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
           
            <p className="text-3xl sm:text-6xl text-center font-semibold">{item.comment}</p>
          </div>
        </div>
      ))}
    </Carousel>
    <Card className="mt-5">
  <div className="flex items-center justify-center">
    <FaPhoneAlt className="mr-2 md:w-6 h-6 w-4 h-4  text-green-500 dark:text-white" />
    <h5 className="md:text-4xl text-center text-2xl font-bold tracking-tight text-gray-900 
     dark:text-white">
      Contactez nous
        
        </h5>
  </div>
  <h5 className="md:text-4xl text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    +257 66 666 666
  </h5>
</Card>


    </>
  );
};

