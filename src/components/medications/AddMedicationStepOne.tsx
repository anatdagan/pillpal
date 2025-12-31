import { useState } from "react";
import { Medication } from "../../context/MedicationsContext";
import { DatePicker } from "../ui/DatePicker";

function AddMedicationStepOne({ medication, setMedication, setAddMedStep }) {
  function onContinue() {
    setAddMedStep(2);
  }
  return (
    <>
      <div className="form-group">
        <DatePicker
          label="מתי רכשת את התרופה?"
          value={medication?.purchaseDate}
          onChange={(date) => {
            if (date) {
              setMedication((prev) => ({ ...prev, purchaseDate: date }));
            }
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity" className="form-label">
          כמה חבילות רכשת?
        </label>

        <input
          type="number"
          id="quantity"
          className="form-input"
          placeholder="1"
          required
          onChange={(e) => {
            if (e) {
              setMedication((prev) => ({
                ...prev,
                quantity: parseInt(e.target.value, 10) || 0,
              }));
            }
          }}
        />
      </div>
      <div className="form-group">
        <DatePicker
          label="מה התוקף?"
          value={medication?.expirationDate}
          onChange={(date) => {
            if (date) {
              setMedication((prev) => ({ ...prev, expirationDate: date }));
            }
          }}
          required
        />
      </div>
      <button onClick={onContinue}>המשך</button>
    </>
  );
}

export default AddMedicationStepOne;
