import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const loginAuth = (e) => {
    e.preventDefault();

    let { email, password } = e.target;
    let verify_user = {
      email: email.value,
      password: password.value,
    };
    console.log(verify_user);
  };
  return (
    <div className="login-wrapper">
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          loginAuth(e);
        }}
        className="login-form"
      >
        <input
          required
          className="login-email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          required
          className="login-password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      <div className="register__link-wrapper">
        <span>or</span>
        <Link className="register-link" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
