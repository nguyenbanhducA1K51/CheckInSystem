import React, { useState, useEffect, useRef } from "react";
import "../style.css";
const LogIn = ({ handleLogin, errorMessage }) => {
  const emailElement = useRef();
  const passwordElement = useRef();
  const [err, setErr] = useState("");
  useEffect(() => {
    setErr(errorMessage);
  }, [errorMessage]);
  function sendLogin() {
    if (!emailElement.current.value) {
      setErr("invalid email input");
    } else if (!passwordElement.current.value) {
      setErr("invalid password input");
    } else {
      console.log(
        emailElement.current.value + " " + passwordElement.current.value
      );
      handleLogin(emailElement.current.value, passwordElement.current.value);
    }
  }
  return (
    <>
      <div class="login">
        <form action="">
          <div class="container">
            <label>
              <b>Email</b>
            </label>
            <input
              ref={emailElement}
              type="text"
              placeholder="Email"
              required
            />

            <label>
              <b>Password</b>
            </label>
            <input
              ref={passwordElement}
              type="password"
              placeholder="Enter Password"
              required
            />
            <p class="text-warning p-2">{err}</p>
            <button onClick={sendLogin} type="button" class="bg-info">
              Login
            </button>
          </div>

          <div class="container">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <span class="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
