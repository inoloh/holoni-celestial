import { Link } from 'react-router-dom';

type NavbarProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

const Navbar = ({ isOpen, closeMenu }: NavbarProps) => {
  return (
    <nav
      className={`${isOpen ? 'block' : 'hidden'} md:flex gap-x-90 text-gray-700 font-bold text-xl`}
    >
      <Link to="/" className="px-3 py-2" onClick={closeMenu}>
        Home
      </Link>
      <Link to="/about" className="px-3 py-2" onClick={closeMenu}>
        About
      </Link>
      <Link to="/art" className="px-3 py-2" onClick={closeMenu}>
        Art
      </Link>
    </nav>
  );
};

export default Navbar;
