import React, { useEffect, useState } from "react";
import "./DatePicker.css";

interface DatePickerProps {
  value?: Date | null;
  onChange: (date: Date | null) => void;
  label?: string;
  required?: boolean;
}

export function DatePicker({ value, onChange, label, required }: DatePickerProps) {
  const currentYear = new Date().getFullYear();
  const [day, setDay] = useState<string>(value ? value.getDate().toString() : "");
  const [month, setMonth] = useState<string>(value ? (value.getMonth() + 1).toString() : "");
  const [year, setYear] = useState<string>(value ? value.getFullYear().toString() : "");

  // Update internal state when value prop changes
  useEffect(() => {
    if (value) {
      setDay(value.getDate().toString());
      setMonth((value.getMonth() + 1).toString());
      setYear(value.getFullYear().toString());
    }
  }, [value]);

  const handleChange = (type: "day" | "month" | "year", val: string) => {
    let newDay = day;
    let newMonth = month;
    let newYear = year;

    if (type === "day") {
        newDay = val;
        setDay(val);
    } else if (type === "month") {
        newMonth = val;
        setMonth(val);
    } else if (type === "year") {
        newYear = val;
        setYear(val);
    }

    if (newDay && newMonth && newYear) {
      const date = new Date(parseInt(newYear), parseInt(newMonth) - 1, parseInt(newDay));
      // Basic validation
      if (
        date.getDate() === parseInt(newDay) &&
        date.getMonth() === parseInt(newMonth) - 1 &&
        date.getFullYear() === parseInt(newYear)
      ) {
        onChange(date);
      } else {
          // Invalid date (e.g. Feb 30), logic could be improved to clear or notify
          onChange(null);
      }
    } else {
      onChange(null);
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    { value: 1, label: "ינואר" },
    { value: 2, label: "פברואר" },
    { value: 3, label: "מרץ" },
    { value: 4, label: "אפריל" },
    { value: 5, label: "מאי" },
    { value: 6, label: "יוני" },
    { value: 7, label: "יולי" },
    { value: 8, label: "אוגוסט" },
    { value: 9, label: "ספטמבר" },
    { value: 10, label: "אוקטובר" },
    { value: 11, label: "נובמבר" },
    { value: 12, label: "דצמבר" },
  ];
  const years = Array.from({ length: 120 }, (_, i) => currentYear + 10- i);

  return (
    <div className="date-picker-group">
      {label && <label className="date-picker-label">{label}</label>}
      <div className="date-picker-container">
        <select
          className="date-select day"
          value={day}
          onChange={(e) => handleChange("day", e.target.value)}
          required={required}
        >
          <option value="">יום</option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select
          className="date-select month"
          value={month}
          onChange={(e) => handleChange("month", e.target.value)}
          required={required}
        >
          <option value="">חודש</option>
          {months.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
        <select
          className="date-select year"
          value={year}
          onChange={(e) => handleChange("year", e.target.value)}
          required={required}
        >
          <option value="">שנה</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
