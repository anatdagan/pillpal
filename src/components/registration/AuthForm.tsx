import TextField from "../ui/TextField";

function AuthForm({onSubmit}: {onSubmit: () => void}) {
  return (
    <div>

      <div className="form-group">

        <TextField
          label="כתובת דואר אלקטרוני"
          id="email"
          placeholder="anat@example.com"
          required
        />
      </div>
      <div className="form-group">
        <TextField
          label="סיסמה"
          id="password"
          placeholder="********"
          type="password"
          required
        />
      </div>
      <div className="form-group">
        <TextField
          label="אימות סיסמה"
          id="passwordConfirm"
          placeholder="********"
          type="password"
          required
        />
      </div>    
      <div className="form-group">
        <TextField
          label="מספר טלפון"
          id="phone"
          placeholder="0501234567"
          required
        />
      </div>
      <button type="button" className="register-button" onClick={onSubmit}>
        המשך
      </button>
    </div>
    
  );
}

export default AuthForm;