import React, { useState, useEffect } from "react";

function Login() {
  return (
    <div className="login">
      <form className="">
        <label className="login-center2">
          <h1>Advisor Login</h1>
        </label>
        <label className="login-center">username: </label>
        <input
          className="login-center large-input"
          type="text"
          name="username"
        />

        <label className="login-center">password: </label>
        <input
          className="progress-bar-center large-input"
          type="password"
          name="password"
        />
        <button type="submit" className="login-submit">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
