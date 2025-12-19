import "./Login.css";
import React from "react";

export function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login submitted");
  };

  return (
    <div className="app">
      <main className="app-main">

        <section className="card login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">דואר אלקטרוני</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="name@example.com"
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">סיסמה</label>
              <input 
                type="password" 
                id="password" 
                className="form-input" 
                placeholder="••••••••"
                required 
              />
            </div>

            <a href="#" className="forgot-password">שכחתם סיסמה?</a>

            <button type="submit" className="login-button">
              התחברות
            </button>

            <div className="login-footer">
              <span className="login-footer-text">אין לכם חשבון?</span>
              <button type="button" className="register-button">
                הרשמה
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
