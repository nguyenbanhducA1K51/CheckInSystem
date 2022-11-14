<template>
  <div>
    <div v-if="showDetail" class="detail">
      <div class="detailData">
        <p class="detailTag">Tuần(Week)</p>
        <input
          type="text"
          name=""
          class="detailInfo"
          id=""
          v-model="temp.content.week"
          :disabled="input.disabled"
        />
        <p class="detailTag">Ngày(Day)</p>
        <input
          type="text"
          name=""
          class="detailInfo"
          id=""
          v-model="temp.content.day"
          :disabled="input.disabled"
        />
        <p class="detailTag">Đối tượng checkin(Check in person)</p>
        <input
          type="text"
          name=""
          id=""
          class="detailInfo"
          v-model="temp.content.checkInOpponent"
          :disabled="input.disabled"
        />
        <p class="detailTag">Tiến độ công việc(Work progress)</p>
        <input
          type="text"
          name=""
          id=""
          class="detailInfo"
          v-model="temp.content.progress"
          :disabled="input.disabled"
        />
        <p class="detailTag">Trở ngại khó khăn(difficulty)</p>
        <input
          type="text"
          name=""
          id=""
          class="detailInfo"
          v-model="temp.content.difficulty"
          :disabled="input.disabled"
        />
        <p class="detailTag">Sáng kiến/đề xuất(propose idea)</p>
        <input
          type="text"
          name=""
          id=""
          class="detailInfo"
          v-model="temp.content.idea"
          :disabled="input.disabled"
        />
        <p class="detailTag">
          Mức độ tự tin/Cam kết (Không ổn lắm - Ổn - Rất ổn) (commitment level)
        </p>
        <input
          type="text"
          name=""
          id=""
          class="detailInfo"
          v-model="temp.content.commitment"
          :disabled="input.disabled"
        />
        <p class="detailTag">
          Phản hồi của Cấp trên (người trực tiếp checkin hoặc cấp trên nữa)(response from manager)
        </p>
        <input
          type="text"
          name=""
          id=""
          class="detailInfo"
          v-model="temp.content.response"
          :disabled="input.disabled"
        />
      </div>
      <div class="detailButton">
        <button ref="cancelBut" class="button-7" type="button" @click="cancel">
          Cancel
        </button>
        <button v-if="but.save" ref="saveBut" class="button-8" @click="save">
          Save
        </button>
        <button
          v-if="but.update"
          ref="updateBut"
          class="button-8"
          @click="update"
        >
          Update
        </button>
      </div>
    </div>

    <div class="itemP" @click="toggleDetail">
      <div class="item">
        <p>{{ data.content.week }}</p>
        <p>{{ data.content.day }}</p>
        <p>{{ data.content.checkInOpponent }}</p>
        <button id="deleteBut" @click="deleteForm">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "formItem",
  created() {},
  data() {
    return {
      showDetail: false,
      temp: structuredClone(this.data),
      but: {
        update: true,
        save: false,
      },
      input: {
        disabled: true,
      },
    };
  },
  watch: {
    data() {
      this.temp = this.data;
    },
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    cancel() {
      this.but.save = false;
      this.but.update = true;
      this.showDetail = !this.showDetail;
      this.temp = this.data;
    },
    async deleteForm(event) {
      event.stopPropagation();
      const options = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
        body: JSON.stringify({
          _id: this.temp._id,

          deleted_time: Date.now(),
        }),
      };
      try {
        console.log(this.temp);
        console.log('123');
        
        const res = await fetch(
          "http://localhost:3100/form/deleteOne",
          options
        );

        if (res.status !== 200) {
          alert("Looks like there was a problem.");
          throw "error here";
        } else {
          const data = await res.json();
          if (!data.success) {
            alert(data.error);
          } else {
            console.log(data);
            alert("delete successful");
            this.emitter.emit("reFetch");
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    toggleDetail() {
      this.showDetail = !this.showDetail;
    },
    update() {
      this.but.save = true;
      this.but.update = false;
      this.input.disabled = false;
    },
    async save() {
      console.log("vao1");
      const options = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
        body: JSON.stringify({
          _id: this.temp._id,
          week: this.temp.content.week,
          " day": this.temp.content.day,
          checkInOpponent: this.temp.content.checkInOpponent,
          progress: this.temp.content.progress,
          difficulty: this.temp.content.difficulty,
          idea: this.temp.content.idea,
          " commitment": this.temp.content.commitment,
          " response": this.temp.content.response,
          update_time: Date.now(),
        }),
      };
      try {
        console.log("vao2");
        console.log(this.temp);
        const res = await fetch("http://localhost:3100/form/update", options);

        if (res.status !== 200) {
          alert("Looks like there was a problem.");
          throw "cannot validate user";
        } else {
          const data = await res.json();
          if (!data.success) {
            alert(data.error);
          } else {
            console.log(data);
            alert("update successful");
            this.emitter.emit("reFetch");
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.detailInfo {
  border: none;
  background: none;
  text-align: center;
}
.detailInfo:hover {
  border: none;
  background: none;
}
.detailInfo:focus {
  outline: none;
}
.detailTag {
  /* background: #0095ff; */
  text-align: center;
}
.detailData {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.button-7 {


  width: 70px;
  text-align: right;
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans",
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;

  outline: none;
  padding: 8px 0.8em;
  /* position: absolute; */
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-7:hover,
.button-7:focus {
  background-color: #07c;
}

.button-7:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
}

.button-7:active {
  background-color: #0064bd;
  box-shadow: none;
}

.button-8 {
  
  /* right: 0;
  bottom: 0; */
  /* text-align: right; */
  background-color: #4bf064;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans",
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;

  outline: none;
  padding: 8px 0.8em;
  /* position: absolute; */
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-8:hover,
.button-8:focus {
  background-color: rgb(6, 222, 78);
}

.button-8:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
}

.button-8:active {
  background-color: #09bd00;
  box-shadow: none;
}

.detail {
  position: absolute;
  background: #fff;
  width: 80vw;

  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  left: 0;
  right: 0;
  border-radius: 10px;
  transition: box-shadow 0.3s;
  border-top: 1px solid rgb(181, 181, 181, 0.7);
}
.itemP {
  transition: box-shadow 0.3s;

  cursor: pointer;
}
.item:hover {
  background: #cdcdcd;
  transition: box-shadow 0.3s;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
.item {
  text-align: center;
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 2fr 0.5fr;
  border-top: 1px solid rgb(181, 181, 181);
  background: #f8f8f8;
}
.detailButton {
 display:flex;
 justify-content: space-evenly;
  /* display:inline-grid;
  grid-template-columns: 1fr 1fr; */
  
}
#deleteBut {
  width: 50px;
  height: 30px;
  border: none;
  background: #0095ff;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  align-self: center;
}
</style>