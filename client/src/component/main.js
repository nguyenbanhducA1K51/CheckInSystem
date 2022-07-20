import React, { useState, useEffect } from "react";
import Authen from "./authen";
import FormControl from "./form/formControl";
import "../style.css";
const Main = () => {
  const [Cvisible, CsetVisible] = useState({ authen: true, form: false });

  function saveJWT(token) {
    localStorage.setItem("jwt_token", token);
  }
  function getJWT() {
    localStorage.getItem("jwt_token");
  }
  useEffect(() => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization: getJWT(),
        },
      };

      fetch(`http://localhost:3100/user/login`, options).then((res) => {
        res.json().then((data) => {
          if (data.success === 200) {
            CsetVisible((prevState) => {
              return {
                ...prevState,
                authen: false,
                form: true,
              };
            });
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  },[]);


  function load(){
    const options = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        authorization: getJWT(),
      },
    };

    fetch(`http://localhost:3100/user/login`, options).then((res) => {
      res.json().then((data) => {
        if (data.success === 200) {
          CsetVisible((prevState) => {
            return {
              ...prevState,
              authen: false,
              form: true,
            };
          });
        }
      });
    });
  }
  return (
    <>
      {load()}
      {Cvisible.authen && (
        <Authen
          getToken={getJWT}
          setToken={saveJWT}
          PsetVisible={CsetVisible}
        />
      )}
      {Cvisible.form && <FormControl />}
    </>
  );
};
export default Main;
