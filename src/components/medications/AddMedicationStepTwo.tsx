import { useState } from "react";
import { Medication } from "../../context/MedicationsContext";
import { DatePicker } from "../ui/DatePicker";
import CheckBox from "../ui/CheckBox";

function addMedicationStepTwo({ medication, setMedication, setAddMedStep }) {
  function onContinue() {
    setAddMedStep(nextStep);
  }

  const [showNumOfDays, setShowNumOfDays] = useState(false);
  const [nextStep, setNextStep] = useState(99);
  return (
    <>
      <div className="form-group">
        <CheckBox
          id="isFixedTerm"
          label="האם מספר הימים בהם תיטול את התרופה קצוב?"
          onChange={(e) => {
            if (e) {
              const isFixedTerm = Boolean(e.target.value);
              setMedication((prev) => ({
                ...prev,
                isFixedTem: isFixedTerm,
              }));
              if (isFixedTerm) setShowNumOfDays(true);
            }
          }}
        />
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
      <div className="form-group">
        <label htmlFor="dailyDoses" className="form-label">
          כמה פעמים ביום עליך ליטול את התרופה?
        </label>

        <input
          type="number"
          id="dailyDoses"
          className="form-input"
          placeholder="1"
          required
          onChange={(e) => {
            if (e) {
              setMedication((prev) => ({
                ...prev,
                dailyDoses: parseInt(e.target.value, 10) || 0,
              }));
            }
          }}
        />
      </div>
      <div className="form-group">
        <CheckBox
          id="isAlert"
          label="האם תרצה לקבל תזכורת לקראת כל נטילה מתוכננת?"
          onChange={(e) => {
            if (e) {
              const isAlert = Boolean(e.target.value);
              setMedication((prev) => ({
                ...prev,
                isAlert: isAlert,
              }));
              isAlert ? setNextStep(3) : setNextStep(99);
            }
          }}
        />
      </div>
      <button onClick={onContinue}>המשך</button>
    </>
  );
}

export default addMedicationStepTwo;
