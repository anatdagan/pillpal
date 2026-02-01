import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/ui/Card"; 

function SideEffects() {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
  function onClickHandler() {
    setShowInfo(true);
  }
  function reset() {
    setShowInfo(false);
    const textarea = document.querySelector(
      "textarea"
    ) as HTMLTextAreaElement | null;
    if (textarea) {
      textarea.value = "";
    }
  }
  return (
    <div className="side-effects-container">
      <Card isClosable={true} onClose={() => navigate("/")}>
        <p>תאר את תופעת הלוואי שהרגשת:</p>
        <textarea rows={5} cols={30}></textarea>
        <div className="buttons">
          <button onClick={onClickHandler}>סיימתי</button>
          <button onClick={reset}>נקה</button>
        </div>
      </Card>

      {showInfo && (
        <section className="card info">
          <p>
            התופעה שתיארת עלולה במקרים מסויימים להגרם בשל נטילה ממושכת של
            Prednisone. נא לפנות לרופא לצורך בחינה נוספת והתאמת הטיפול במקרה
            הצורך.
          </p>
        </section>
      )}
    </div>
  );
}

export default SideEffects;
