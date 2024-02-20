import type { CustomFlowbiteTheme } from 'flowbite-react';

export const customTheme: CustomFlowbiteTheme = {
    
  button: {
    color: {
        button_primary: 'bg-blue-500 dark:bg-gray-500 hover:bg-blue-600 dark:hover:bg-gray-600 text-white dark:text-white',
      },
        
  },
  navbar: {
    link: {
      "base": "block py-2 pr-4 pl-3 md:p-0",
      "active": {
        "on": "bg-blue-500 text-white dark:text-white md:bg-transparent md:text-blue-500 ",
        "off": "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-500 md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
        
  },

  
},

footer: {
  "root": {
    "base": "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between bg-green-200 mt-5",
    "container": "w-full p-6 ",
    "bgDark": "bg-gray-800"
  },
  "groupLink": {
    "base": "flex flex-wrap text-sm text-gray-500 dark:text-white",
    "link": {
      "base": "last:mr-0 md:mr-6 me-4",
      "href": "hover:underline"
    },
    "col": "flex-col space-y-4"
  },
  "icon": {
    "base": "text-gray-500 dark:hover:text-white",
    "size": "h-5 w-5"
  },
  "title": {
    "base": "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
  },
  "divider": {
    "base": "w-full my-6 border-green-500 sm:mx-auto dark:border-white lg:my-8"
  },
  "copyright": {
    "base": "text-sm sm:text-center text-gray-800 dark:text-white ",
    "href": "ml-1 hover:underline",
    "span": "ml-1"
  },
  "brand": {
    "base": "mb-4 flex items-center sm:mb-0",
    "img": "mr-3 h-8",
    "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
},
carousel:{
  "root": {
    "base": "relative h-full - w-full",
    "leftControl": "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    "rightControl": "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },
  "indicators": {
    "active": {
      "off": "bg-green-500/50 hover:bg-blue-50 dark:bg-gray-800/50 dark:hover:bg-gray-800",
      "on": "bg-blue-500 dark:bg-white "
    },
    "base": "h-3 w-3 rounded-full",
    "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
  },
  "item": {
    "base": "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    "wrapper": {
      "off": "w-full flex-shrink-0 transform cursor-default snap-center",
      "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
    }
  },
  "control": {
    "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-blue-500 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    "icon": "h-5 w-5 text-green-500 dark:text-gray-800 sm:h-6 sm:w-6"
  },
  "scrollContainer": {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    "snap": "snap-x"
  }
}

};