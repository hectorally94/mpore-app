// ScrollToTopButton.js

import { Flowbite } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { customTheme } from './customTheme';

const ScrollToTopButton: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 100; // Adjust the threshold as needed
    setShowScrollButton(window.scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    // Add a scroll event listener to detect scroll position
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (showScrollButton) {
      scrollToTop();
    }
  };

  return (

    <Flowbite theme={{theme:customTheme}}>

<button
       onClick={handleClick}
       className={`fixed bottom-40 right-4 p-4 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700 transition duration-300 transform ${
         showScrollButton ? 'scale-100' : 'scale-0'
       } text-lg`} 
     >
       {showScrollButton ? <FaArrowUp /> : <FaArrowDown />}
     </button>
    </Flowbite>
  );
};

export default ScrollToTopButton;
