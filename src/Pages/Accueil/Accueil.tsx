
import { FooterPage } from '../../Footer/FooterPage';
import { PhotoClinic } from '../../Components/Accueil/PhotoClinic';
import { ShortAppropos } from '../../Components/Accueil/ShortAppropos';
import { ShortActivite } from '../../Components/Accueil/ShortActivite';
import { ShortBlog } from '../../Components/Accueil/ShortBlog';
import { ShortConseil } from '../../Components/Accueil/ShortConseil';
import { ShortContact } from '../../Components/Accueil/ShortContact';
import { ShortOppotunites } from '../../Components/Accueil/ShortOppotunites';
import { ShortService } from '../../Components/Accueil/ShortService';
import { Publication } from '../../Components/Accueil/Publication';
import ScrollToTopButton from '../../ScrollToTopButton ';
import SocialMediaButtons from '../../SocialMediaButton';
import { CarouselWithDoctorPrentation } from '../../Components/Accueil/CarouselWithDoctorPrentation';
import { WelcomeClinicPhoto } from '../../Components/Accueil/WelcomeClinicPhoto';
export function Accueil() {

  return (
    <>
    <div className='flex flex-col min-h-screen w-full'>
    <div className='mt-3 mb-3 ml-3 mr-3'>
      <WelcomeClinicPhoto/>
      </div>
      <div className='mt-3 mb-3 ml-3 mr-3'>
      <PhotoClinic/> 
      </div>
      <div className='flex sm:flex-row gap-2 flex-col sm:gp-2 mt-3 mb-3 ml-3 mr-3'>
      <ShortAppropos/>
      <ShortService/>
      <ShortOppotunites/>
      </div>
      <div className='flex sm:flex-row gap-2 flex-col sm:gp-2 mt-3 mb-3 ml-3 mr-3'>
      <ShortContact/>
      <ShortConseil/>
      <ShortBlog/>
      </div>
      
      <div className='flex sm:flex-row gap-2 flex-col sm:gp-2 mt-3 mb-3 ml-3 mr-3'>
      <ShortActivite/>
      <Publication/> 
      </div>
      <div className='mt-3 mb-3 ml-3 mr-3'>
      <CarouselWithDoctorPrentation/>
      </div>
    </div>
    <SocialMediaButtons/>
    <ScrollToTopButton/>
    <FooterPage/>
    </>
  );
}
