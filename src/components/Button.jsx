const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-[#E50101] text-sm font-medium rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
