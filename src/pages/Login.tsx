import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { Card } from "../components/ui/Card";
export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    // Handle login logic
    console.log("Login submitted");

    login({ email: "test@example.com", password: "password" });
    navigate("/");
  };

  return (
    <>
      <Card className="login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              דואר אלקטרוני
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="name@example.com"
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
            />
            {errors.email && (
              <span className="error">
                {errors.email.message || "כתובת דוא״ל לא חוקית"}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              סיסמה
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="••••••••"
              {...register("password", { required: true })}
            />
            {errors.email && (
              <span className="error">
                {errors.email.password || "נא להזין סיסמה"}
              </span>
            )}
          </div>

          <a href="#" className="forgot-password">
            שכחתם סיסמה?
          </a>

          <button type="submit" className="login-button">
            התחברות
          </button>

          <div className="login-footer">
            <span className="login-footer-text">אין לכם חשבון?</span>
            <button
              type="button"
              className="register-button"
              onClick={() => navigate("/register")}
            >
              הרשמה
            </button>
          </div>
        </form>
      </Card>
    </>
  );
}
