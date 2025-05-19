import { Link } from 'react-router-dom';

type NavbarProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

const Navbar = ({ isOpen, closeMenu }: NavbarProps) => {
  return (
    <nav
      className={`
        ${isOpen ? 'flex' : 'hidden'} 
        flex-col items-center space-y-2 
        md:flex md:flex-row md:space-y-0 md:justify-between 
        w-full max-w-screen-md px-6 py-2 text-gray-700 font-bold text-xl 
      `}
    >
      <Link to="/" className="px-3 py-2" onClick={closeMenu}>
        Home
      </Link>
      <Link to="/art" className="px-3 py-2" onClick={closeMenu}>
        Art
      </Link>
      <Link to="/about" className="px-3 py-2" onClick={closeMenu}>
        About
      </Link>
    </nav>
  );
};


export default Navbar;
