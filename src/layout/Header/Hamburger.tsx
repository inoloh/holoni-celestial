type HamburgerProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Hamburger = ({ isOpen, toggle }: HamburgerProps) => {
  return (
    <button onClick={toggle} className="md:hidden focus:outline-none" aria-label="Toggle menu">
      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
};

export default Hamburger;
