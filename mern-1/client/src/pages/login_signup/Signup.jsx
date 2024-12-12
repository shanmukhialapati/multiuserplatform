import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const Navigate = useNavigate();

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const sendSign = await fetch(`http://localhost:4000/user/Signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const response = await sendSign.json();

      if (sendSign.ok) {
        alert("Registration successful");
        Navigate("/");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.main}>
      <h1 className="hello">Signup</h1>
      <div className={style.signup}>
        <input
          type="text"
          name="Name"
          className={style.input}
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}
        />
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
        <button id="" onClick={onsubmit} type="submit">
          Submit
        </button>{" "}
        {/* Fixed here */}
      </div>
      <div>
        <h1>
          Already have an account? <Link to="/">Login</Link>
        </h1>
      </div>
    </div>
  );
};

export default Signup;
