// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const Navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendSign = await fetch(`http://localhost:4000/user/Login`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const response = await sendSign.json();

      if (sendSign.ok) {
        alert("Login Successfull");
        Navigate("/Home");
        localStorage.setItem("token", response.token);
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.login}>
        <h1 className={style.hello}>Login</h1>
        <input
          type="email"
          name="email"
          className={style.input}
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          className={style.input}
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button id="" onClick={onSubmit} type="submit">
          Login
        </button>
      </div>
      <div>
        <p>
          don't have an account?<Link to="/Signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
