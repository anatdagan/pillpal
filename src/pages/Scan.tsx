import { Card } from "../components/ui/Card";
import { useNavigate } from "react-router-dom";
import medications from "../images/med_qr.png";
export function Scan() {
  const navigate = useNavigate();
  function scanCode() {
    navigate("/scanned-med");
  }
  return (
    <div style={{ position: "relative" }}>
      <Card isClosable={true} onClose={() => navigate("/")}>
        <h2>סריקת קוד</h2>
        <p>סריקת ברקוד תרופה למידע נוסף</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={medications} alt="Medications" width={200} height={200} />
          <a onClick={scanCode}>לדימוי סריקת קוד לחץ כאן</a>
        </div>
      </Card>
    </div>
  );
}
