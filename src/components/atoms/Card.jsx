const Card = ({ children, className, ...props }) => {
  return (
    <div className={`rounded-md p-2 ${className || "border-2"}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
