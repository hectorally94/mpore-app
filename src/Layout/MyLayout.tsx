import React, { useState } from 'react';
import { Flowbite } from 'flowbite-react';
import { customTheme } from '../customTheme';
import { MySideBar } from '../SideBar/MySideBar';
import { Myrouter } from '../Myrouters/Myrouter';
import { MyNavBar } from '../NavBar/MyNavBar';

export const MyLayout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    };
  

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="flex">
        {/* Sidebar */}
        <div className={`flex-none ${isSidebarCollapsed ? 'hidden' : ''}`}>
          <MySideBar />
        </div>
         
        <div className="flex-auto">
           {/* Navbar */}
           <MyNavBar toggleSidebar={toggleSidebar} />
          
          {/* Content */}
         <div className="flex-auto mr-3 ml-3">
          {/* Place your component here */}
          <Myrouter/>
        </div>
        </div>
        
      </div>
    </Flowbite>
  );
};
