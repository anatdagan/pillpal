import { useState } from "react";
import { Medication } from "../../context/MedicationsContext";
import { DatePicker } from "../ui/DatePicker";
import CheckBox from "../ui/CheckBox";
import AddSchedule from "./AddSchedule";
function addMedicationStepThree({ medication, setMedication, setAddMedStep }) {
  function onContinue() {
    setAddMedStep(99);
  }

  const [showNumOfDays, setShowNumOfDays] = useState(false);
  const [nextStep, setNextStep] = useState(99);
  return (
    <>
      <div className="form-group">
        <AddSchedule medication={medication} setMedication={setMedication} />
      </div>
      {showNumOfDays && (
        <div className="form-group">
          <label htmlFor="treatmentDaysCount" className="form-label">
            מה מספר הימים המתוכנן לטיפול?
          </label>

          <input
            type="number"
            id="treatmentDaysCount"
            className="form-input"
            placeholder="1"
            required
            onChange={(e) => {
              if (e) {
                setMedication((prev) => ({
                  ...prev,
                  treatmentDaysCount: parseInt(e.target.value, 10) || 0,
                }));
              }
            }}
          />
        </div>
      )}

      <button onClick={onContinue}>המשך</button>
    </>
  );
}

export default addMedicationStepThree;
