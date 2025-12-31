import React from "react";
import "./RadioGroup.css";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label?: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  required,
}: RadioGroupProps) {
  return (
    <div className="radio-group-container">
      {label && <label className="radio-group-label">{label}</label>}
      <div className="radio-options">
        {options.map((option) => (
          <label
            key={option.value}
            className={`radio-option ${value === option.value ? "selected" : ""}`}
            htmlFor={`${name}-${option.value}`}
          >
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="radio-input"
              required={required}
            />
            <span className="radio-label-text">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
