import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-50">
      <Link
        to="/"
        className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      >
        About
      </Link>
      <Link
        to="/art"
        className="font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      >
        Art
      </Link>
    </nav>
  );
};

export default Navbar;
