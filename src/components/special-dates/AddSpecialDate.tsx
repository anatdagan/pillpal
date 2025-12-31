import { useState } from "react";
import { DatePicker } from "../ui/DatePicker";

export function AddSpecialDate({onSubmit}: {onSubmit: (dateRange: [string, string, string]) => void}) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [type, setType] = useState("holiday");
    function formatDate(date: Date | null) {
        if (!date) return "";
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }
    return (
        <div>
            <h2>הוספת טווח תאריכים מיוחדים
            </h2>
            <div className="form-group">
                <label htmlFor="type">סוג תאריך מיוחד</label>
                <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
                    <option value="חג">חג</option>
                    <option value="חופשה">חופשה</option>
                </select>
            </div>
      <div className="form-group">
        <DatePicker
          label="התחלה"
          value={startDate}
          onChange={setStartDate}
          required
        />
      </div>
      <div className="form-group">
        <DatePicker
          label="סיום"
          value={endDate}
          onChange={setEndDate}
          required
        />
      </div>
      <button type="button" className="login-button" onClick={() => onSubmit([formatDate(startDate), formatDate(endDate), type]) }>
        הוספה
      </button>
    </div>
    );
}