//IMPORTS
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios"; // Import axios for API calls
import user from "../../assets/user.png";
import email from "../../assets/email.png";
import pass_icon from "../../assets/password.png";

const Signup = () => {
  //PROBLEMATIC PAGE
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    //CHECKS FOR EMPTY FIELD
    if (!name || !emailInput || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/user", {
        name,
        emailadd: emailInput,
        pass: password,
      });

      //TO LOGIN PAGE
      if (response.status === 201) {
        alert("Sign Up Successful! Redirecting to Login page...");
        navigate("/login");
      }
    } catch (error) {
      alert(
        error.response?.data?.message || "Error signing up. Please try again."
      );
    }
  };

  return (
    //SIGN IN PAGE
    <div className="signmaincon">
      <div className="signcon">
        <div className="signheader">
          <div className="signtext">Sign Up</div>
          <div className="underline"></div>
        </div>
        {/* INPUT FIELDS */}
        {/* NAME*/}
        <div className="signinputs">
          <div className="input">
            <img src={user} alt="User Icon" />
            <input
              type="text"
              id="signup-name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* EMAIL ADD*/}
          <div className="input">
            <img src={email} alt="Email Icon" />
            <input
              type="text"
              id="signup-email"
              placeholder="Email Address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          {/* PASS*/}
          <div className="input">
            <img src={pass_icon} alt="Password Icon" />
            <input
              type="password"
              id="signup-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {/* SUBMIT*/}
        <div className="submitcon">
          <div className="submit" onClick={handleSignup}>
            Continue
          </div>
        </div>
        {/* TO LOGIN */}
        <div className="tologin">
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                Click Here
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
//END I SLEEP NOW PLS