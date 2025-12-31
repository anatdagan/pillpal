import "../../index.css";
import { useState } from "react";
import { TimePicker } from "../ui/TimePicker";
import Checkbox from "../ui/CheckBox";
import { Medication } from "../../context/MedicationsContext";

interface AddScheduleProps {
  medication: Medication;
  setMedication: React.Dispatch<React.SetStateAction<Medication>>;
}

function AddSchedule({ medication, setMedication }: AddScheduleProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<string | undefined>();
  const dummyArray = new Array(medication.dailyDoses || 1).fill(null);

  function toggleAllCheckboxes(checked: boolean) {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(".checkbox");
    checkboxes.forEach((checkbox) => (checkbox.checked = checked));
  }
  return (
    <div>
      <div className="form-group">
        <h3>נא לסמן את כל ימי השבוע בהם תיטול את התרופה</h3>
        {/* Checkboxes for each day of the week */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "1.5rem",
          }}
        >
          <Checkbox
            id="all"
            label="כל הימים"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              toggleAllCheckboxes(e.target.checked);
            }}
          ></Checkbox>
          <Checkbox id="sunday" label="ראשון" />
          <Checkbox id="monday" label="שני" />
          <Checkbox id="tuesday" label="שלישי" />
          <Checkbox id="wednesday" label="רביעי" />
          <Checkbox id="thursday" label="חמישי" />
          <Checkbox id="friday" label="שישי" />
          <Checkbox id="saturday" label="שבת" />
        </div>
      </div>
      <div className="form-group">
        {dummyArray.map((_, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <TimePicker
                label="משעה"
                onChange={(time) => {
                  // Optional: handle time changes if needed
                  console.log(`From time ${index + 1} selected:`, time);
                }}
                minuteInterval={15}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <TimePicker
                label="עד שעה"
                onChange={(time) => {
                  // Optional: handle time changes if needed
                  console.log(`Until time ${index + 1} selected:`, time);
                }}
                minuteInterval={15}
                required
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddSchedule;
