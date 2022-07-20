import React, { useState, useEffect, useRef } from "react";
const FindForm = () => {
  const [err, setErr] = useState();
  const [data, setData] = useState([]);
  const [itemState, setItemState] = useState({ index: 0, isVisible: false });
  const day = useRef();
  const week = useRef();
  const item = useRef();
  async function handleFindForm() {
    const options = {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        authorization: localStorage.getItem("jwt_token"),
      },
    
    };
    const res = await fetch("http://localhost:3100/form/find", new URLSearchParams({
      week: week.current.value,
      date: day.current.value
  }));
    const info = await res.json();
    if (res.status !== 200) {
      alert("error cannot  get data");
    } else {
      setData(res.data);
    }
  }
  function showForm(index) {
    setItemState((prevState) => {
      return {
        ...prevState,
        isVisible: true,
        index: index,
      };
    });
  }
  return (
    <>
      {err && <div style={{ fontSize: "20px", color: "red" }}>{err}</div>}
      <input ref={day} type="text" placeholder="Ngày(MM/DD/YY)" />
      <input ref={week} type="text" placeholder="Tuần" />
      <button type="button" style={{ borderRadius: "5px", border: "none" }}>
        Tất cả form
      </button>
      {
        <div id="list">
          {data.map((form, index) => {
            return (
              <>
                <div style={{}} onClick={() => showForm(index)}>
                  <p style={{ margin: "10px" }}>{index + 1}</p>
                  <p style={{ margin: "10px" }}>form.day</p>
                  <p style={{ margin: "10px" }}>form.week</p>
                </div>
              </>
            );
          })}
          {itemState.isVisible && (
            <>
              <ul
                style={{
                  listStyleType: "none",
                  cursor: "pointer",
                }}
              >
                <li>
                  <p>Tuần</p>
                  <input
                    type="text"
                    disabled="disabled"
                    value={data[itemState.index].week}
                  />
                </li>
                <li>
                  <p>Ngày</p>{" "}
                  <input
                    type="text"
                    disabled="disabled"
                    value={data[itemState.index].day}
                  />
                </li>
                <li>
                  <p>Người được checkin</p>
                  <input
                    type="text"
                    disabled="disabled"
                    value={data[itemState.index].checkInOpponent}
                  />
                </li>
                <li>
                  <p>Tiến độ công việc</p>
                  <input
                    type="text"
                    disabled="disabled"
                    value={data[itemState.index].progress}
                  />
                </li>
                <li>
                  <p>Trở ngại khó khăn</p>
                  <input
                    type="text"
                    disabled="disabled"
                    value={data[itemState.index].difficulty}
                  />
                </li>
                <li>
                  <p>Sáng kiến đề xuất</p>
                  <input
                    type="text"
                    disabled="disabled"
                    value={data[itemState.index].idea}
                  />
                </li>
                <li>
                  <p>Mức độ tự tin/Cam kết(Không ổn lắm-Ổn-Rất ổn)</p>
                  <input
                    type="text"
                    disabled="disabled"
                    value={data[itemState.index].commitment}
                  />
                </li>
                <li>
                  <p>
                    Phản hồi của Cấp trên(người trực tiếp checkin hoặc cấp trên
                    nữa)
                  </p>
                  <input
                    type="text"
                    disabled="disabled"
                    value={data[itemState.index].response}
                  />
                </li>
              </ul>
            </>
          )}
        </div>
      }
      <div ref={item}></div>
      <button
        style={{ border: "none", padding: "10px" }}
        onClick={handleFindForm}
      >
        Tìm kiếm
      </button>
    </>
  );
};
export default FindForm;
