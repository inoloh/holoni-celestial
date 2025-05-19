import { useState } from 'react';
import Hamburger from './Hamburger';
import Navbar from './Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-4 py-3">
      <div className="max-w-screen-md mx-auto flex flex-col items-center">
        <Hamburger isOpen={isOpen} toggle={toggleMenu} />
        <div className="w-full">
          <Navbar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
        </div>
      </div>
    </header>
  );
};


export default Header;
