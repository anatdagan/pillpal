import { useState } from "react";
import { SpecialDatesList } from "../components/special-dates/SpecialDatesList";
import { AddSpecialDate } from "../components/special-dates/AddSpecialDate";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/ui/Card";

export function SpecialDates() {
    const navigate = useNavigate();
    const [dateRanges, setDateRanges] = useState<[string, string, string][]>([]);
    const [showAddSpecialDate, setShowAddSpecialDate] = useState(false);
    function handleAddSpecialDate() {
        setShowAddSpecialDate(true);
    }
    function handleAddSpecialDateSubmit(dateRange: [string, string, string]) {
        setShowAddSpecialDate(false);
        setDateRanges((prev) => [...prev, dateRange]);
    }
  return (
    <div style={{position: "relative"}}>
           <Card isClosable={true} onClose={() => navigate("/")}>

      {showAddSpecialDate && <AddSpecialDate onSubmit={handleAddSpecialDateSubmit} />}
      {!showAddSpecialDate && <SpecialDatesList dateRanges={dateRanges} />}
      {!showAddSpecialDate && <button type="button" className="login-button" onClick={handleAddSpecialDate}>
        הוספת טווח תאריכים
      </button>}
           </Card>

    </div>
  );
}