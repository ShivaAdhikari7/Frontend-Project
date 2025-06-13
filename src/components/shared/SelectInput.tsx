const SelectInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  icon?: React.ComponentType<any>;
  className?: string;
}> = ({
  value,
  onChange,
  options,
  placeholder,
  icon: Icon,
  className = "",
}) => (
  <div className={`relative ${className}`}>
    {Icon && (
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
    )}
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`block w-full pr-8 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
        Icon ? "pl-10" : "pl-3"
      }`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
