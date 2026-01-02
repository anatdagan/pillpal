import "../App.css";
import { HomeIcons } from "../components/HomeIcons";
import { Card } from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function Home() {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Card>
        <p>בחרו פעולה כדי להתחיל:</p>
        <HomeIcons />
      </Card>
    </>
  );
}
