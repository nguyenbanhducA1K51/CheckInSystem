<template >
  <div>
    <div class="formButton">
      <button @click="toggleCreateForm">Create form</button>
      <button @click="toggleFindForm">Find form</button>
      <button @click="logOut">Log out</button>
    </div>
    <div>
      <CreateForm v-if="isVisible.createForm" />
      <FindForm v-if="isVisible.findForm" :userForms="userForms" />
    </div>
  </div>
</template>
<script>
import CreateForm from "./createForm";
import FindForm from "./findForm";

export default {
  name: "v-formControl",
  data() {
    return {
      userForms: [],
      isVisible: {
        createForm: false,
        findForm: false,
      },
    };
  },
  created() {
    this.fetchData();
    this.emitter.on("reFetch", () => {
      console.log("fetch again");
      this.fetchData();
    });
  },
  methods: {
    logOut() {
      this.$emit("logOut");
    },
    async fetchData() {
      console.log("fetchData");
      const options = {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
          // authorization: localStorage.getItem("jwt-token"),
        },
      };
      try {
        const raw = await fetch("http://localhost:3100/form/all", options);

        if (raw.status !== 200) {
          // alert("Looks like there was a problem.");
          console.log("problem here formControl");
        } else {
          const info = await raw.json();

        
          
          console.log(info.data);
          console.log(info.data[0]);
          this.userForms = info.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    toggleCreateForm() {
      for (let element in this.isVisible) {
        if (element !== "createForm") {
          this.isVisible[element] = false;
        }
      }
      this.isVisible.findForm = false;
      this.isVisible.createForm = !this.isVisible.createForm;
      console.log(JSON.stringify(this.isVisible));
    },
    toggleFindForm() {
      for (let element in this.isVisible) {
        if (element !== "findForm") {
          this.isVisible[element] = false;
        }
      }
      this.isVisible.findForm = !this.isVisible.findForm;
      // this.emitter.emit('reFetch')
    },
  },
  components: {
    CreateForm,
    FindForm,
  },
};
</script>
<style >
.formButton button {
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  margin-right: 30px;
  cursor: pointer;
  background: rgb(148, 46, 211);
  color: #fff;
}
.formButton button:hover {
  background: rgb(120, 8, 190);
}
</style>
