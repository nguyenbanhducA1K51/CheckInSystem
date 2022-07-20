<template>
  <div>
    <p>{{ error.errorDisplay }}</p>
    <table class="table1">
      <thead>
        <tr class="head1">
          <th>Tuần</th>
          <th>Ngày (MM/DD/YYYY)</th>
          <th>Người được checkin</th>
          <th>Tiến độ công việc</th>
          <th>Trở ngại/Khó khăn</th>
          <th>Sáng kiến/đề xuất</th>
          <th>Mức độ tự tin/Cam kết(Không ổn lắm-Ổn-Rất ổn)</th>
          <th>
            Phản hồi của Cấp trên (người trực tiếp checkin hoặc cấp trên nữa){"
            "}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <textarea
              v-model="data.week"
              id="week"
              name=""
              rows="30"
              cols="5"
            ></textarea>
          </td>
          <td>
            <textarea
              v-model="data.day"
              id="date"
              name=""
              rows="30"
              cols="5"
            ></textarea>
          </td>
          <td>
            <textarea
              v-model="data.checkInOpponent"
              id="checkinOpponent"
              name=""
              rows="30"
              cols="5"
            ></textarea>
          </td>
          <td>
            <textarea
              v-model="data.progress"
              id="progress"
              name=""
              rows="30"
              cols="5"
            ></textarea>
          </td>
          <td>
            <textarea
              v-model="data.difficulty"
              id="difficulty"
              name=""
              rows="30"
              cols="5"
            ></textarea>
          </td>
          <td>
            <textarea
              v-model="data.idea"
              id="idea"
              name=""
              rows="30"
              cols="15"
            ></textarea>
          </td>
          <td>
            <select v-model="data.commitment">
              <option value="không ổn lắm">không ổn lắm</option>
              <option value="ổn">ổn</option>
              <option value="rất ổn">rất ổn</option>
            </select>
          </td>
          <td>
            <textarea
              v-model="data.response"
              id="response"
              name=""
              rows="30"
              cols="30"
            ></textarea>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="submitDiv">
      <button @click="submit" class="submitBut" type="button">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-creatForm",
  data() {
    return {
      data: {
        week: "",
        day: "",
        checkInOpponent: "",
        progress: "",
        difficulty: "",
        idea: "",
        commitment: "",
        response: "",
      },
      error: {
        errorDisplay: "",
        errorMessage: "",
      },
    };
  },
  methods: {
    async submit() {
      console.log("vao");
      if (!this.validateForm()) {
        this.error.errorDisplay = this.errorMessage;
      } else {
        const options = {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
          },
          body: JSON.stringify({
            week: this.data.week,
            day: this.data.day,
            checkInOpponent: this.data.checkInOpponent,
            progress: this.data.progress,
            difficulty: this.data.difficulty,
            idea: this.data.idea,
            commitment: this.data.commitment,
            response: this.data.response,
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
             this.emitter.emit("reFetch");
            this.errorDisplay = "";
          }
        }
      }
    },
    validateForm() {
      console.log(this.data.day);
      
      if (!this.isValidDate(this.data.day)) {
        this.errorMessage = " dữ liệu ngày không hợp lệ";
        return false;
      }
      return true;
    },
    isValidDate(dateString) {
      // First check for the pattern
      if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
        return false;
      }
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
    },
  },
};
</script>

<style>
.submitDiv {
  display: flex;
  width: 100vw;
}
.submitBut {
  cursor: pointer;
  border: none;
  background: rgb(28, 224, 214);
  border-radius: 5px;
  padding: 10px 20px;
}
.table1 {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.table1 thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.table1 th,
.table1 td {
  padding: 12px 20px;
}

.table1 tbody td textarea {
  border: none;
  word-wrap: break-word;
  word-break: break-all;
}
.main-button1 {
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
}
.main-button1:hover {
  background-color: #ccc;
}
</style>