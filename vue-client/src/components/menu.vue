<template>
  <div>
    <Authen v-if="isVisible.authen" @loginPass="show" />
    <Form v-if="isVisible.form" @logOut="logOut" />
  </div>
</template>

<script>
import Authen from "./authen/authen";
import Form from "./form/formControl";
export default {
  name: "v-index",
  data() {
    return {
      isVisible: {
        authen: true,
        form: false,
      },
    };
  },
  methods: {
    logOut() {
      this.isVisible.authen = true;
      this.isVisible.form = false;
      localStorage.removeItem("jwt-token");
    },
    show() {
      this.isVisible.authen = false;
      this.isVisible.form = true;
    },
  },
  components: {
    Authen,
    Form,
  },
};
</script>
<style>
.formButton {
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
}
</style>