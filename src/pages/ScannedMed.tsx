import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "../index.css";
import { DatePicker } from "../components/ui/DatePicker";
import { Medication, useMedications } from "../context/MedicationsContext";
import AddMedicationStepOne from "../components/medications/AddMedicationStepOne";
import AddMedicationStepTwo from "../components/medications/AddMedicationStepTwo";
import AddMedicationStepThree from "../components/medications/AddMedicationStepThree";

import { useNavigate } from "react-router-dom";

function ScannedMed() {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const [medication, setMedication] = useState<Medication>({
    id: "P1",
    name: "Prednisone",
  });
  const [addMedStep, setAddMedStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const medicationContext = useMedications();
  function onSubmit() {
    medicationContext.addMedication(medication);
    setSubmitted(true);
    navigate("/medications");
  }

  return (
    <div className="card">
      <h2 className="centered">PREDNISONE 5mg</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        {addMedStep === 1 && (
          <AddMedicationStepOne
            medication={medication}
            setMedication={setMedication}
            setAddMedStep={setAddMedStep}
          />
        )}
        {addMedStep === 2 && (
          <AddMedicationStepTwo
            medication={medication}
            setMedication={setMedication}
            setAddMedStep={setAddMedStep}
          />
        )}
        {addMedStep === 3 && (
          <AddMedicationStepThree
            medication={medication}
            setMedication={setMedication}
            setAddMedStep={setAddMedStep}
          />
        )}
        {addMedStep === 99 && (
          <div className="form-group">
            <p>התרופה נרשמה בהצלחה</p>
            <button type="submit" disabled={submitted}>
              סיום
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
export default ScannedMed;
