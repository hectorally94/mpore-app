
'use client';

import { Flowbite, Footer } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { customTheme } from '../customTheme';


export function FooterPage() {

  const [isScrolled, setIsScrolled] = useState(false);
  const currentYear = new Date().getFullYear();
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition < 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // mt-auto border-t
  return (

    <Flowbite theme={{theme:customTheme}}>

<Footer container >
      <div className="w-full text-center">
        <Footer.Divider  />
        <Footer.Copyright href="#" by="Produce By Ramadhani Ally" year={currentYear} />
      </div>
    </Footer>
    </Flowbite>
  );
}
