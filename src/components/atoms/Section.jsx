const Section = ({ children, index, className, ...props }) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`w-full min-h-screen mx-auto ${
        isEven ? "bg-black" : "bg-white"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Section;
