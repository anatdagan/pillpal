import React, { useState } from "react";
import "./TimePicker.css";

interface TimePickerProps {
  defaultValue?: Date | null;
  onChange?: (time: Date | null) => void;
  label?: string;
  required?: boolean;
  minuteInterval?: number; // Interval for minutes (e.g., 5 for 5-minute intervals)
}

export function TimePicker({
  defaultValue,
  onChange,
  label,
  required,
  minuteInterval = 1,
}: TimePickerProps) {
  const [hour, setHour] = useState<string>(
    defaultValue ? defaultValue.getHours().toString() : ""
  );
  const [minute, setMinute] = useState<string>(
    defaultValue ? defaultValue.getMinutes().toString() : ""
  );

  const handleChange = (type: "hour" | "minute", val: string) => {
    let newHour = hour;
    let newMinute = minute;

    if (type === "hour") {
      newHour = val;
      setHour(val);
    } else if (type === "minute") {
      newMinute = val;
      setMinute(val);
    }

    if (newHour !== "" && newMinute !== "") {
      // Create a date with today's date and the selected time
      const today = new Date();
      const time = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        parseInt(newHour),
        parseInt(newMinute)
      );
      onChange?.(time);
    } else {
      onChange?.(null);
    }
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from(
    { length: Math.floor(60 / minuteInterval) },
    (_, i) => i * minuteInterval
  );

  return (
    <div className="time-picker-group">
      {label && <label className="time-picker-label">{label}</label>}
      <div className="time-picker-container">
        <select
          className="time-select hour"
          value={hour}
          onChange={(e) => handleChange("hour", e.target.value)}
          required={required}
        >
          <option value="">שעה</option>
          {hours.map((h) => (
            <option key={h} value={h}>
              {h.toString().padStart(2, "0")}
            </option>
          ))}
        </select>
        <select
          className="time-select minute"
          value={minute}
          onChange={(e) => handleChange("minute", e.target.value)}
          required={required}
        >
          <option value="">דקה</option>
          {minutes.map((m) => (
            <option key={m} value={m}>
              {m.toString().padStart(2, "0")}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
