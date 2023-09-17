const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  onChange,
  value,
  checked,
  label,
}) => {
  return (
    <div className="flex items-center gap-1">
      <input
        id={id}
        name={name}
        type="radio"
        className="h-5 w-5 border-[#D8D8D8] focus:ring-primary"
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <label
        htmlFor={id}
        className="block text-sm font-normal text-gray2 leading-6"
      >
        {label}
      </label>
    </div>
  );
};

type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default RadioButton;
