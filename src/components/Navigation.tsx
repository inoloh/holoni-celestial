import React from 'react';

type NavigationProps = {
  children: React.ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
};

const Navigation = ({ children, onPrev, onNext }: NavigationProps) => {
return (
    <div className="flex items-center justify-center gap-3 mb-4">
      {onPrev && (
        <button
          onClick={onPrev}
          className="text-white text-3xl hover:text-pink-300 transition"
          aria-label="Previous artwork"
        >
          ←
        </button>
      )}

      <div>{children}</div>

      {onNext && (
        <button
          onClick={onNext}
          className="text-white text-3xl hover:text-pink-300 transition"
          aria-label="Next artwork"
        >
          →
        </button>
      )}
    </div>
  );
};

export default Navigation;
