import "../App.css";
import { HomeIcons } from "../components/HomeIcons";
import { useAuth } from "../context/AuthContext";
import {Navigate} from "react-router-dom";

export function Home() {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
        <section className="card">
          <p>בחרו פעולה כדי להתחיל:</p>
          <HomeIcons />
        </section>
    </>
  );
}
