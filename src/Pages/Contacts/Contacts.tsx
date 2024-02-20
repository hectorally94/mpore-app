
import { FooterPage } from '../../Footer/FooterPage';
import ScrollToTopButton from '../../ScrollToTopButton ';
import SocialMediaButtons from '../../SocialMediaButton';
import { ShortContacts } from '../../Components/ShortContacts/ShortContacts';
import { Map } from '../../Components/GoogleMap/Map';

export function Contacts() {
  return (
    <>
    
    <div className='min-h-screen'>
      
    <Map/>
    </div>
   
    <SocialMediaButtons/>
    <ScrollToTopButton/>
    <FooterPage/>
    </>
  );
}
