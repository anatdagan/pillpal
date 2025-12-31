import "./Register.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import NameForm from "../components/registration/NameForm";
import IdForm from "../components/registration/IdForm";
import AuthForm from "../components/registration/AuthForm";
import SuccessMessage from "../components/registration/SuccessMessage";
import { useAuth } from "../context/AuthContext";

export function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
    console.log("Registration submitted");
  };

  const [registrationStep, setRegistrationStep] = React.useState(1);
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleNameSubmit = (name: string, birthDate: string, gender: string) => {
    const user = {
      name}
      register(user);
    setRegistrationStep(2);
  };

  const handleIdSubmit = () => {
    setRegistrationStep(3);
  };

  const handleAuthSubmit = () => {
    setRegistrationStep(4);
  };

  const handleSuccessSubmit = () => {
    navigate("/");
  };

  return (
    <>
        <section className="card register-container">
          <form className="register-form" onSubmit={handleSubmit}>
            {registrationStep === 1 && <NameForm onSubmit={handleNameSubmit} />}

            {registrationStep === 2 && <IdForm onSubmit={handleIdSubmit} />}
            {registrationStep === 3 && <AuthForm onSubmit={handleAuthSubmit} />}
            {registrationStep === 4 && <SuccessMessage onSubmit={handleSuccessSubmit} />}


           {registrationStep < 4 && <div className="register-footer">
              <span className="register-footer-text">כבר יש לכם חשבון?</span>
              <button type="button" onClick={handleLoginClick} className="login-link-button">
                התחברות
              </button>
            </div>}
          </form>
  
        </section>
    </>
  );
}
