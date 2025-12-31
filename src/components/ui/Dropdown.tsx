import React from "react";
import "./Dropdown.css";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
}

export function Dropdown({
  label,
  id,
  options,
  value,
  onChange,
  className = "",
  required,
  ...props
}: DropdownProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="dropdown-group">
      <label htmlFor={id} className="dropdown-label">
        {label}
      </label>
      <select
        id={id}
        className={`dropdown-select ${className}`}
        value={value}
        onChange={handleChange}
        required={required}
        {...props}
      >
        <option value="">בחר אפשרות</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

