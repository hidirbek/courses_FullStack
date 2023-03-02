import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const loginAuth = (e) => {
    e.preventDefault();

    let { email, password } = e.target;
    let verify_user = {
      email: email.value,
      password: password.value,
    };
    fetch("http://localhost:4040/login", {
      method: "POST",
      body: JSON.stringify(verify_user),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.msg);
        if (data.msg === "Success!") {
          localStorage.setItem("token", data.token);
          if (localStorage.getItem("token")) {
            window.location = "/";
          } else {
            alert("Token not available!");
            window.location = "/login";
          }
        }
      });
  };
  let history = useHistory();

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
      {localStorage.getItem("token")
        ? history.push("/")
        : history.push("/login")}
    </div>
  );
};

export default Login;
