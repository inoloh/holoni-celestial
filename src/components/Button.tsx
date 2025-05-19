interface ButtonProps {
  onClick: () => void;
  label: string;
  additionalClasses?: string;
}

const Button = ({ onClick, label, additionalClasses }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`mt-6 px-4 py-2 rounded text-sm ${additionalClasses}`}>
      {label}
    </button>
  );
};

export default Button;
