import styles from "./IconButton.module.css";

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      type="button"
      className={`${styles.root} ${className}`}
      data-testid="icon-button"
      {...rest}
    >
      {children}
    </button>
  );
};

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default IconButton;
