import './register.css'

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    try {
        await axios.post(
        "http://localhost:8080/api/auth/register",
        credentials
      );
      navigate("/login");
    } catch (err) {
        setError(err.response.data);
    }
  };
  console.log(credentials);
  return (
    <div className="register">  
        <div className="registerWrapper">   
        <h3 className="registerLogo">Booking</h3>
        <span className="registerDesc">
          Connect with friends and the world around you on Booking.
        </span>
        <div className="registerRight">
          <div className="registerBox">
            <input
              placeholder="Username"
              id="username"
              className="registerInput"
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              id="email"
              className="registerInput"
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              id="password"
              type="password"
              className="registerInput"
              onChange={handleChange}
            />
            {error && <span className='errorMessage' >{error}</span>}
            <button className="registerButton" onClick={handleClick}>
              Register
            </button>
            <Link to="/login">
              <button className="registerLoginButton">
                Log into Account
              </button>
            </Link>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Register;
