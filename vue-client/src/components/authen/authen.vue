 <!-- @loginSuccessful="passLogin" -->
<template>
  <div>
    <Login
      v-if="isVisible.login"
      @loginSuccessful="passLogin"
      @showSignup="
        () => {
          isVisible.login = false;
          isVisible.signup = true;
        }
      "
    />
    <Signup
      v-if="isVisible.signup"
      @showLogin="
        () => {
          isVisible.login = true;
          isVisible.signup = false;
        }
      "
    />
  </div>
</template>
<script>
import Login from "./login";
import Signup from "./signup.vue";
export default {
  name: "v-authen",
  data() {
    return {
      isVisible: {
        login: true,
        signup: false,
      },
    };
  },
  created() {
    this.test();
  },
  methods: {
    passLogin() {
      this.$emit("loginPass");
    },
    test() {
      this.$emit("test");
    },
  },
  components: {
    Login,
    Signup,
  },
};
</script>
<style></style>
