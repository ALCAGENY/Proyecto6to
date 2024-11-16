export function InpuT(props) {
  const { type, placeholder, value, onChange, name, className = "" } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`bg-ColorFondo bg-opacity-70 w-full sm:p-1 md:p-2 rounded-full mt-2 ${className} text-sm sm:text-base md:text-lg transform transition-transform duration-500 hover:scale-105`}
    />
  );
}
