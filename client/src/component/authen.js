import React, { useState, useRef, useEffect } from "react";
import SignUpForm from "./signUp";
import LogInForm from "./logIn";
const Authen = ({ getToken, setToken, PsetVisible }) => {
  const [resMes, setResMes] = useState({ signUp: "", logIn: "" });
  const [visible, CsetVisible] = useState({ signUp: true, logIn: false });
  document.onload=async ()=>{
    try {
      const options = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization: getToken(),
        },

      };

      const rawdata = await fetch(`http://localhost:3100/user/login`, options);
      const res = await rawdata.json();
      console.log(res);
    
        
        PsetVisible((prevState) => {
          return { 
            ...prevState ,
            authen:false,
            form:true
          };
        });
      
    } catch (error) {
      console.log(error);
    }
  }
  async function handleLogin(email, password) {

    try {
      const options = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization: getToken(),
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };

      const rawdata = await fetch(`http://localhost:3100/user/login`, options);
      const res = await rawdata.json();
      console.log(res);
      if (!res.success) {
       
        console.log(res.error);

        setResMes((prevMes) => {
          return {
            ...prevMes,
            logIn: res.error,
          };
        });
      } else {
        setToken(res.token)
        PsetVisible((prevState) => {
          return { 
            ...prevState ,
            authen:false,
            form:true
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function handleSignup(userEmail, userPassword) {
    const options = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        authorization: getToken(),
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    };
    try {
      const rawtoken = await fetch(
        `http://localhost:3100/user/signup`,
        options
      );
      const res = await rawtoken.json();
      if (!res.success) {
        console.log("fail");

        console.log(res);
        setResMes((prevMes) => {
          return {
            ...prevMes,
            signUp: res.error,
          };
        });
      } else {
        console.log(res.token);

        setToken(res.token);
        CsetVisible((prevElement) => {
          return { ...prevElement, signUp: false, logIn: true };
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  function showLogin() {
    CsetVisible((prevElement) => {
      return { ...prevElement, signUp: false, logIn: true };
    });
  }
  return (
    <>
      {visible.signUp && (
        <SignUpForm
          handleSignup={handleSignup}
          errorMessage={resMes.signUp}
          showLogin={showLogin}
        />
      )}
      {visible.logIn && (
        <LogInForm handleLogin={handleLogin} errorMessage={resMes.logIn} />
      )}
    </>
  );
};
export default Authen;
