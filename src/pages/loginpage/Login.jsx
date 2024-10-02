import React from "react";

// external packages
import "bootstrap-icons/font/bootstrap-icons.css";
//external css links
import "./Login.scss";

export default function Loginpage() {
  return (
    <div className=" Loginpage          loginpage-container container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        {/* Avatar Icon */}
        <div className="d-flex justify-content-center mb-4">
          <img
            src="avatar_icon.png"
            alt="Avatar Icon"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        </div>

        {/* Username Input */}
        <div className="form-group mb-3 l        ogin-input-section">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i> {/* Bootstrap Icon for user */}
            </span>
            <input type="text" className="form-control" id="username" />

            <label htmlFor="username" className="form-label form-lable-text">
              Username or Email
            </label>
          </div>
        </div>

        {/* Password Input */}
        <div className="form-group mb-3">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-lock"></i> {/* Bootstrap Icon for password */}
            </span>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
            <label htmlFor="password" className="form-label form-lable-text">
              Password
            </label>
          </div>
        </div>

        {/* Remember me and Forgot Password */}
        <div
          className="d-flex                      justify-content-between                     
  
        align-items-center mb-3"
        >
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="ms-2 ">
              Remember Me
            </label>
          </div>
          <a href="#">Forgot P assword?</a>
        </div>

        {/* Login Button */}
        <div className="d-grid mb-3">
          <button className="btn btn-primary">Login</button>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <p>Login with social media</p>
          <div className="d-flex justify-content-center gap-3">
            <i className="bi bi-google"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
