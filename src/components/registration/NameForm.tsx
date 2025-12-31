function NameForm({onSubmit}: {onSubmit: () => void}) {
    return (
            <div className="form-group">
                <p>נתחיל בהיכרות קצרה. אנו זקוקים לפרטים הבאים כדי לזהות אותך מול קופת החולים. הם לא יישמרו אצלנו.
</p>
              <label htmlFor="fullName" className="form-label">שם מה שמך המלא?</label>
              <input 
                type="text" 
                id="firstName" 
                className="form-input" 
                placeholder="ישראל"
                required 
              />
              <input 
                type="text" 
                id="lastName" 
                className="form-input" 
                placeholder="ישראלי"
                required 
              />   
              <button type="button" className="login-button" onClick={onSubmit}>
                המשך
              </button>
            </div>
    );
}
export default NameForm;