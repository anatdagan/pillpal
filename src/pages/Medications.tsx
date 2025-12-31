import { Card } from "../components/ui/Card";
import { useNavigate } from "react-router-dom";
import { MedicationList } from "../components/medications/MedicationList";
import { useMedications } from "../context/MedicationsContext";

export function Medications() {
  const navigate = useNavigate();
  const { medications } = useMedications();
  return (
    <div style={{ position: "relative" }}>
      <Card isClosable={true} onClose={() => navigate("/")}>
        <MedicationList medications={medications.map((med) => med.name)} />
      </Card>
    </div>
  );
}
