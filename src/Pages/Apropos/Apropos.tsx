
import { Card } from 'flowbite-react';
import { FooterPage } from '../../Footer/FooterPage';
import { ShortHistorique } from '../../Components/Apropos/ShortHistorique';
import { ShortMission } from '../../Components/Apropos/ShortMission';
import { ShortOrganisation } from '../../Components/Apropos/ShortOrganisation';
import { ShortRessources } from '../../Components/Apropos/ShortRessources';
import ScrollToTopButton from '../../ScrollToTopButton ';
import SocialMediaButtons from '../../SocialMediaButton';

export function Apropos() {
  
  return (
    <>
    
    <div className='flex flex-col min-h-screen'>
    <div className='mt-3 mb-3 ml-3 mr-3'>
      <ShortHistorique/>
      </div>
      <div className='mt-3 mb-3 ml-3 mr-3'>
      <ShortMission/>
      </div>
      <div className='mt-3 mb-3 ml-3 mr-3'>
      <ShortRessources/>
      </div>
      <div className='mt-3 mb-3 ml-3 mr-3'>
      <ShortOrganisation/>
      </div>
    </div>
   
    <SocialMediaButtons/>
    <ScrollToTopButton/>
    <FooterPage/>
    </>
  );
}
