//IMPORTS
import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import email from "../../assets/email.png";
import pass_icon from "../../assets/password.png";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    //MOST ERROR PAGE
    //CHECKS TO SEE IF FRM IS FILLED
    if (!emailInput || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        emailadd: emailInput,
        pass: password,
      });

      if (response.status === 200) {
        alert(`Welcome back, ${response.data.user.name}!`);
      }
    } catch (error) { //ERROR MSSG
      alert(error.response?.data?.message || "Invalid email or password. Please try again.");
    }
  };

  return (
    //LOGIN PAGE START
    <div className="logmaincon">
      <div className="logcon">
        <div className="logheader">
          <div className="logtext">Log In</div>
          <div className="underline"></div>
        </div>
        {/* INPUT FIELDS */}
        {/* EMAIL ADD */}
        <div className="loginputs">
          <div className="input">
            <img src={email} alt="Email Icon" />
            <input
              type="text"
              id="login-email"
              placeholder="Email Address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          {/* PASS */}
          <div className="input">
            <img src={pass_icon} alt="Password Icon" />
            <input
              type="password"
              id="login-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {/* SUBMIT */}
        <div className="submitcon">
          <div className="submit" onClick={handleLogin}>
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
//END 
