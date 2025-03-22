const Button = ({ children, className }) => {
  return <button className={`px-4 py-2 ${className}`}>{children}</button>;
};

export default Button;
