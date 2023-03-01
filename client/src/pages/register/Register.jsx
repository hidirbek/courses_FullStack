import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const registerAuth = (e) => {
    e.preventDefault();
    let { name, email, verify_email, password } = e.target;
    let register_user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    if (email.value === verify_email.value) {
      fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify(register_user),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          window.location = "/login";
        });
    } else {
      alert("Your email doesn't match");
    }
  };
  return (
    <div className="register-wrapper">
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          registerAuth(e);
        }}
        className="register-from"
        action=""
      >
        <input
          className="register_input-name"
          type="text"
          name=""
          id=""
          placeholder="Username"
        />
        <input
          className="register__input-email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="register__input-email"
          type="email"
          name="verify_email"
          placeholder="Confirm email"
        />
        <input
          className="register__input-password"
          type="password"
          name="password"
          placeholder="password"
        />
        <button className="register__submit-btn" type="submit">
          Register
        </button>
      </form>
      <div className="register__link-wrapper">
        <span>if you have account please</span>
        <Link className="register-link" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
