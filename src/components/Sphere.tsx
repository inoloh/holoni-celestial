type SphereProps = {
  size: string;
  color: string;
  className?: string;
  children?: React.ReactNode;
};

const Sphere = ({ size, color, className, children }: SphereProps) => {
  return (
    <div
      className={`rounded-full bg-radial ${size} ${color} ${className}`}
    >
      {children}
    </div>
  );
};

export default Sphere;
