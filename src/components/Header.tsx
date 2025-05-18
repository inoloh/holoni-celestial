import { useState } from 'react';
import Hamburger from './Hamburger';
import Navbar from './Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex px-4 py-3 justify-center">
      <Hamburger isOpen={isOpen} toggle={toggleMenu} />
      <Navbar isOpen={isOpen} closeMenu={() => setIsOpen(false)}></Navbar>
    </header>
  );
};

export default Header;
