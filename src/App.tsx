import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import { MedicationsProvider } from "./context/MedicationsContext";
import { SpecialDates } from "./pages/SpecialDates";
import { Scan } from "./pages/Scan";
import { Medications } from "./pages/Medications";
import AlertSim from "./pages/AlertSim";
import ScannedMed from "./pages/ScannedMed";
import SideEffects from "./pages/SideEffects";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MedicationsProvider>
          <div className="app">
            <main className="app-main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/special-dates" element={<SpecialDates />} />
                <Route path="/scan" element={<Scan />} />
                <Route path="/report" element={<SideEffects />} />
                <Route path="/medications" element={<Medications />} />
                <Route path="/alert" element={<AlertSim />} />
                <Route path="/scanned-med" element={<ScannedMed />} />
              </Routes>
            </main>
          </div>
        </MedicationsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
