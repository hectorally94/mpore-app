import { Carousel } from "flowbite-react";

export const CarouselWithDoctorPrentation = () => {
  const carouselItems = [
    {
      imageSrc: "https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.2.26385261.1706876265&semt=sph",
      comment: "Le docteur Dupont est un médecin expérimenté et dévoué, spécialisé en médecine interne. Il possède une vaste connaissance des maladies courantes",
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/portrait-confident-doctor-wearing-glasses-holding-folder_1262-12821.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.2.26385261.1706876265&semt=sph",
      comment: "Le docteur Dupont est un médecin expérimenté et dévoué, spécialisé en médecine interne. Il possède une vaste connaissance des maladies courantes",
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/confident-young-female-doctor-medical-robe-with-stethoscope-gestures-frame-isolated-white-background_141793-34357.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.2.26385261.1706876265&semt=sph",
      comment: "Le docteur Dupont est un médecin expérimenté et dévoué, spécialisé en médecine interne. Il possède une vaste connaissance des maladies courantes",
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.2.26385261.1706876265&semt=sph",
      comment: "Le docteur Dupont est un médecin expérimenté et dévoué, spécialisé en médecine interne. Il possède une vaste connaissance des maladies courantes",
    }
    ,
    {
      imageSrc: "https://img.freepik.com/free-photo/female-doctors-bathrobes-african-girl-stethoscope-doctor-s-neck_1157-47156.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.2.26385261.1706876265&semt=sph",
      comment: "Le docteur Dupont est un médecin expérimenté et dévoué, spécialisé en médecine interne. Il possède une vaste connaissance des maladies courantes",
    },
    
  ];

  return (
    <Carousel pauseOnHover>
      {carouselItems.map((item, index) => (
        <div key={index} className="relative">
          <img src={item.imageSrc} alt={`Image ${index + 1}`} className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <p className="text-lg font-semibold">{item.comment}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

