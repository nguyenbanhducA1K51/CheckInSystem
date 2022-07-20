import React, { useState, useEffect, useRef } from "react";
import CreateForm from "./createForm";
import FindForm from "./findForm";
const FormControl = () => {
  const [Cvisible, CsetVisible] = useState({ newForm: false, findForm: false });
  const [err, setErr] = useState("");

  function showNewForm() {
    CsetVisible((prevState) => {
      return {
        ...prevState,
        newForm: !Cvisible.newForm,
        findForm: false,
      };
    });
  }
  function showFindForm() {
    CsetVisible((prevState) => {
      return {
        ...prevState,
        newForm: false,
        findForm: !Cvisible.findForm,
      };
    });
  }

  return (
    <>
      <div>{err}</div>
      <div class="button-control">
        <button type="button " class="main-button1" onClick={showNewForm}>
          Create new form
        </button>
        <button type="button " class="main-button1" onClick={showFindForm}>
          Find form
        </button>
       
      </div>
      {Cvisible.newForm && <CreateForm />}
      {Cvisible.findForm&&<FindForm/>}

      {}
    </>
  );
};
export default FormControl;
