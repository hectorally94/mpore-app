
'use client';

import { Carousel, Flowbite } from 'flowbite-react';
import { customTheme } from '../../customTheme';

export function PhotoClinic() {
  return (
    <Flowbite theme={{theme:customTheme}}>
       <div className="h-60 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel pauseOnHover>
        <img src="https://img.freepik.com/free-photo/medic-african-ethnicity-helping-sick-patient-clinic-hospital-ward-doctor-using-medical-equipment-technology-young-woman-healthcare-treatment-black-person-bed_482257-16526.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.1.26385261.1706876265&semt=sph" alt="..." />
        <img src="https://img.freepik.com/free-photo/modern-hospital-room-with-empty-bed-chair-generated-by-ai_188544-20204.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.1.26385261.1706876265&semt=sph" alt="..." />
        <img src="https://img.freepik.com/free-photo/male-patient-using-medical-machine_23-2148328441.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.1.26385261.1706876265&semt=sph" alt="..." />
        <img src="https://img.freepik.com/free-photo/interior-view-operating-room_1170-2254.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.1.26385261.1706876265&semt=sph" alt="..." />
        <img src="https://img.freepik.com/free-photo/empty-sad-hospital-bed_23-2149017251.jpg?size=626&ext=jpg&uid=R136554250&ga=GA1.1.26385261.1706876265&semt=sph" alt="..." />
      </Carousel>
    </div>
    </Flowbite>
   
  );
}
