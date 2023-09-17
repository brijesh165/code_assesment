import { useState } from "react";

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  type,
  className,
  withLoader,
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: any) => {
    if (!onClick) return;
    setLoading(true);
    try {
      await onClick(e);
    } finally {
      setLoading(false);
    }
  };

  const renderSpinner = () => (
    <div className="flex relative w-5 h-5">
      <div className="w-full h-full rounded-full absolute border-[3px] border-solid border-cardColor" />
      <div className="w-full h-full rounded-full animate-spin absolute border-[3px] border-solid border-bgGrey border-t-transparent" />
    </div>
  );
  return (
    <button
      type={type}
      className={`rounded-md bg-primary py-2 px-4 text-base font-medium text-fontWhite ${className}`}
      onClick={withLoader ? handleClick : onClick}
    >
      <div className="flex items-center gap-2">
        <span>{text}</span>
        {loading && renderSpinner()}
      </div>
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

type ButtonProps = {
  onClick?: React.MouseEventHandler<any>;
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  withLoader?: boolean;
};

export default Button;
