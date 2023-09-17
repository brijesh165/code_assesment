const Button: React.FC<ButtonProps> = ({ text, type, className, onClick }) => {
  return (
    <button
      type={type}
      className={`rounded-md bg-primary py-2 px-4 text-base font-medium text-offWhite ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <span>{text}</span>
      </div>
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;

  onClick?: React.MouseEventHandler<any>;
};

export default Button;
