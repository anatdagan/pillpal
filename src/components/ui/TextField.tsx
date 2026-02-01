import React from "react";
import "./TextField.css";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function TextField({ label, id, className = "", ...props }: TextFieldProps) {
  return (
    <div className="text-field-group">
      <label htmlFor={id} className="text-field-label">
        {label}
      </label>
      <input
        id={id}
        className={`text-field-input ${className}`}
        autoComplete="off"
        {...props}
      />
    </div>
  );
}
