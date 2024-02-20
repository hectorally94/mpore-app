
'use client';



import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import { customTheme } from '../../customTheme';

export function ShortContacts() {

    const customTheme: CustomFlowbiteTheme['carousel'] = {
        "root": {
            "base": "relative h-full w- full",
            "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
            "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
          },
      };
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      
    <Carousel theme={customTheme} pauseOnHover onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full text-4xl items-center justify-center bg-blue-100 dark:bg-gray-700 dark:text-white">
        +265 777 777 777
        </div>
        <div className="flex h-full text-4xl items-center justify-center bg-blue-100 dark:bg-gray-700 dark:text-white">
        +265 777 777 777
        </div>
        <div className="flex h-full text-4xl items-center justify-center bg_blue-100 dark:bg-gray-700 dark:text-white">
        +265 777 777 777
        </div>
      </Carousel>
    </div>
  );
}

