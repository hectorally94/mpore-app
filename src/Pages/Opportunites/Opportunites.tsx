
import { Card } from 'flowbite-react';
import { FooterPage } from '../../Footer/FooterPage';
import ScrollToTopButton from '../../ScrollToTopButton ';
import SocialMediaButtons from '../../SocialMediaButton';
import { NewOpotunity } from '../../Components/Opotunity/NewOpotunity';
import { OldOpotunity } from '../../Components/Opotunity/OldOpotunity';
import { JobOpotunity } from '../../Components/Opotunity/JobOpotunity';
import { OldJobOpotunity } from '../../Components/Opotunity/OldJobOpotunity';

export function Oppotunites() {
  return (
  
    <>

<div className='flex flex-col min-h-screen'>
<div className='flex sm:flex-row gap-2 flex-col sm:gp-2 mt-3 mb-3 ml-3 mr-3'>
      <JobOpotunity/>
      <OldJobOpotunity/>
      <NewOpotunity/>
      <OldOpotunity/>
       </div>
    </div>
   
    <SocialMediaButtons/>
    <ScrollToTopButton/>
    <FooterPage/>
    </>
  );
}
