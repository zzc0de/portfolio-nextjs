const Card = ({ children, className, ...props }) => {
  return (
    <div className={`border-2 rounded-md p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
