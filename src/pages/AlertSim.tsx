import { useState } from "react";
import Alert from "./Alert";
import "../index.css";

function AlertSim() {
  const [showAlert, setShowAlert] = useState(false);
  function simulateAlert() {
    setShowAlert(true);
  }
  return (
    <div className="alert-sim-container card">
      <h2>כדי לדמות תזכורת לנטילת תרופות, יש ללחוץ על הכפתור</h2>
      <button onClick={simulateAlert}>דימוי תזכורת</button>
      {showAlert && <Alert />}
    </div>
  );
}

export default AlertSim;
