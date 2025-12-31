import React, { useState } from "react";
import { DatePicker } from "../ui/DatePicker";
import TextField from "../ui/TextField";
import { RadioGroup } from "../ui/RadioGroup";

function IdForm({onSubmit}: {onSubmit: () => void}) {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [gender, setGender] = useState("");

  return (
    <div>

      <div className="form-group">
        <DatePicker
          label="מה תאריך הלידה?"
          value={birthDate}
          onChange={setBirthDate}
          required
        />
      </div>
      <div className="form-group">
        <RadioGroup
          label="כיצד לפנות אליך?"
          name="gender"
          value={gender}
          onChange={setGender}
          options={[
            { label: "זכר", value: "male" },
            { label: "נקבה", value: "female" },
            { label: "רבים", value: "plural" },
          ]}
          required
        />
      </div>
      
      <div className="form-group">
        <TextField
          label="נא להכניס את תעודת הזהות שלך"
          id="id"
          placeholder="123456789"
          required
        />
      </div>
      <button type="button" className="login-button" onClick={onSubmit}>
        המשך
      </button>
    </div>
  );
}

export default IdForm;