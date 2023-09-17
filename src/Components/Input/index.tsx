const Input: React.FC<InputProps> = ({
  id,
  name,
  placeholder,
  onChange,
  type,
  label,
  error,
  required,
  ...rest
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-5 text-fontDark min-h-[20px]"
      >
        {label}
        {required && (
          <span className="text-sm font-medium leading-5 text-fontError">
            *
          </span>
        )}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          id={id}
          className="block w-full rounded-[5px] border-0 py-2 px-3 text-fontDark ring-1 ring-inset ring-cardBorder placeholder:text-fontPlaceholder focus:ring-1 focus:ring-inset focus:ring-primary"
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
        {error && error.length ? (
          <p className="block text-sm font-medium leading-6 text-fontError">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  required?: boolean;
};

export default Input;
