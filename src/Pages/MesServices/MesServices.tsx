
import { ShortService } from '../../Components/ShortServices/ShortService';
import { FooterPage } from '../../Footer/FooterPage';
import ScrollToTopButton from '../../ScrollToTopButton ';
import SocialMediaButtons from '../../SocialMediaButton';

export function MesServices() {
  return (
   
    <>

    <div className='flex flex-col min-h-screen w-full'>
    <div className='mt-3 mb-3 ml-3 mr-3'>
    <ShortService/>
      </div>
    </div>
   
    <SocialMediaButtons/>
    <ScrollToTopButton/>
    <FooterPage/>
    </>
  );
}
