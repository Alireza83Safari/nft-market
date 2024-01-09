export interface inputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  onfocus?: any;
  onChange?: any;
  className?: string;
  value?: string;
  defaultValue?: string;
}

const Input = ({
  label,
  name,
  className,
  value,
  onfocus,
  defaultValue,
  placeholder,
  type,
  error,
  onChange,
}: inputProps) => {
  return (
    <>
      <label className="bolck text-sm mb-2 px-1">{label}</label>
      <input
        className={`w-full py-2 bg-[#242435] border-2 border-borderColor rounded-lg px-3 focus:border-blue outline-0 ${className}`}
        type={type ? type : "text"}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onFocus={onfocus}
        required
      />
      <p className="text-red-600 text-sm mt-2">{error}</p>
    </>
  );
};

export default Input;
