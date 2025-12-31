function SuccessMessage({onSubmit}: {onSubmit: () => void}) {
  return (
    <div>
      <h2>מצוין! נרשמת לאפליקציה!</h2>
      <p>
        באפשרותך לעדכן את המידע בכל עת, להוסיף מצבים רפואיים, ותרופות בהתאם לצורך.
      </p>
      <button type="button" className="login-button" onClick={onSubmit}>
        כניסה
      </button>
    </div>
  );
}

export default SuccessMessage;
