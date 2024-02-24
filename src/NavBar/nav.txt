
import { Button, DarkThemeToggle, Flowbite, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

import {FaBars, FaHospitalUser, FaPhoneAlt} from 'react-icons/fa';
import { customTheme } from '../customTheme';
import { NavLink } from 'react-router-dom';
import { MouseEventHandler, useEffect, useState } from 'react';

interface NavbarLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavbarLinkPass: React.FC<NavbarLinkProps> = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      activeClassName="text-green-500 bg-transparent dark:text-white"  // Replace with your Tailwind CSS class for the active state
      className="text-gray-500 hover:text-green-500 dark:hover:text-white"  // Replace with your Tailwind CSS class for the non-active state
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

interface MyNavBarProps {
  toggleSidebar: MouseEventHandler<SVGSVGElement>;
}

export const MyNavBar: React.FC<MyNavBarProps> = ({ toggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  const ChangeStateOfNav=()=>{
    setIsActive(true)
  }

  return (
    <Flowbite theme={{theme:customTheme}}>
    <Navbar fluid rounded className='bg-green-50'>
      {/* Your navbar content */}
      
         <NavbarBrand> 
         <FaBars className='mr-3 ml-6 text-2xl' onMouseEnter={toggleSidebar} onMouseLeave={handleMouseLeave} />
        <FaHospitalUser className="mr-3 h-6 sm:h-9 text-green-500 dark:text-white" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mpore Clinic</span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        
         <DarkThemeToggle className='bg-green-50' />
         <Button color="button_primary"  >
          LogIn
        </Button>

        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink navbar="link" as={NavbarLinkPass} to="/accueil" onClick={ChangeStateOfNav}>
        ACCUEIL
        </NavbarLink>
        <NavbarLink navbar="link" as={NavbarLinkPass} to="apropos" onClick={ChangeStateOfNav}>
        A PROPOS
        </NavbarLink>
        <NavbarLink navbar="link" as={NavbarLinkPass}  to="/services" onClick={ChangeStateOfNav}>
         SERVICES
        </NavbarLink>
        <NavbarLink navbar="link" as={NavbarLinkPass} to="/opportunites" onClick={ChangeStateOfNav}>
       OPPORTUNITES
        </NavbarLink>
        <NavbarLink navbar="link" as={NavbarLinkPass} to="/blog" onClick={ChangeStateOfNav}>
          BLOG
        </NavbarLink>
        <NavbarLink navbar="link" as={NavbarLinkPass} to="/contact" onClick={ChangeStateOfNav}>
          CONTACTS
        </NavbarLink>
        <NavbarLink navbar="link" as={NavbarLinkPass} to="/articles" onClick={ChangeStateOfNav}>
          ARTICLES
        </NavbarLink>
        
       
      </NavbarCollapse>
    </Navbar>
  </Flowbite>
  );
}
