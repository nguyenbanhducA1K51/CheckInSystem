import React, { useState, useEffect, useRef } from "react";

import "../../style.css";
const CreateForm = () => {
  const [err, setErr] = useState("");
  const week = useRef();
  const day = useRef();
  const checkInOpponent = useRef();
  const progress = useRef();
  const difficulty = useRef();
  const idea = useRef();
  const commitment = useRef();
  const response = useRef();
  function validateData() {
    if (!isValidDate(day.current.value)) {
      setErr(" dữ liệu ngày không hợp lệ");
    }
  }
  function isValidDate(dateString) {
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
      return false;
    }

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month === 0 || month > 12) return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
      monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  }

  async function submitForm() {
console.log(localStorage.getItem("jwt_token"))
    validateData();
    console.log("abcd");
    const data = {
      week: week.current.value,
      day: day.current.value,
      checkInOpponent: checkInOpponent.current.value,
      progress: progress.current.value,
      difficulty: difficulty.current.value,
      idea: idea.current.value,
      commitment: commitment.current.value,
      response: response.current.value,
    };

  
    const options = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
      body: JSON.stringify({
        week: data.week,
        day: data.day,
        checkInOpponent: data.checkInOpponent,
        progress: data.progress,
        difficulty: data.difficulty,
        idea: data.idea,
        commitment: data.commitment,
        response: data.response,
        //   created_time: Date.now()
      }),
    };
    //   console.log(options.headers)
    const res = await fetch("http://localhost:3100/form/post", options);
    // console.log(res.status())
    // console.log(res);
    if (res.status !== 200) {
      alert("Looks like there was a problem.");
    } else {
      const info = await res.json();
      console.log(info);
      if (!info.success) {
        console.log(res.body.error);
        alert("fail to create");
      } else {
        alert("create successfully");
        setErr("")
      }
    }
  }
  return (
    <>
      {err && <div style={{ color: "red", margin: "10px" }}>{err}</div>}
      <table class="table1">
        <thead>
          <tr class="head1">
            <th>Tuần </th>
            <th>Ngày (MM/DD/YYYY)</th>
            <th>Người được checkin</th>
            <th>Tiến độ công việc </th>
            <th>Trở ngại/Khó khăn</th>
            <th>Sáng kiến/đề xuất</th>
            <th>Mức độ tự tin/Cam kết(Không ổn lắm-Ổn-Rất ổn)</th>
            <th>
              Phản hồi của Cấp trên (người trực tiếp checkin hoặc cấp trên nữa){" "}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <textarea
                ref={week}
                id="week"
                name=""
                rows="30"
                cols="5"
              ></textarea>
            </td>
            <td>
              <textarea
                ref={day}
                id="date"
                name=""
                rows="30"
                cols="5"
              ></textarea>
            </td>
            <td>
              <textarea
                ref={checkInOpponent}
                id="checkinOpponent"
                name=""
                rows="30"
                cols="5"
              ></textarea>
            </td>
            <td>
              <textarea
                ref={progress}
                id="progress"
                name=""
                rows="30"
                cols="5"
              ></textarea>
            </td>
            <td>
              <textarea
                ref={difficulty}
                id="difficulty"
                name=""
                rows="30"
                cols="5"
              ></textarea>
            </td>
            <td>
              <textarea
                ref={idea}
                id="idea"
                name=""
                rows="30"
                cols="15"
              ></textarea>
            </td>
            <td>
              {/* <textarea ref={commitment}id="commitmentLevel" name="" rows="30" cols="25">
                    </textarea> */}
              <select
                style={{ verticalAlign: "top" }}
                ref={commitment}
                name="cars"
                id="cars"
              >
                <option value="không ổn lắm">không ổn lắm</option>
                <option value="ổn">ổn</option>
                <option value="rất ổn">rất ổn</option>
              </select>
            </td>
            <td>
              <textarea
                ref={response}
                id="response"
                name=""
                rows="30"
                cols="30"
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="container">
        <button
          type="button"
          onClick={submitForm}
          class="text-center border border-light rounded p-2"
        >
          {" "}
          Submit
        </button>
      </div>
    </>
  );
};
export default CreateForm;
