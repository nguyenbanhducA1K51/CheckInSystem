<template>
  <div class="login">
    <form action="">
      <div class="container">
        <label>
          <b>Email</b>
        </label>
        <input v-model="email" type="text" placeholder="Email" required />

        <label>
          <b>Password</b>
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          required
        />
        <p class="text-warning p-2">{{ err }}</p>
        <div class="loginAndSignupButton">
          <button @click="sendLogin" type="button" class="button-login">
            Login
          </button>
          <button @click="showSignUp" type="button" class="button-signup">
            Sign up
          </button>
        </div>
      </div>

      <div class="container">
        <!-- <button type="button" class="cancelbtn">Cancel</button> -->
        <!-- <span class="psw"> Forgot <a href="#">password?</a> </span> -->
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "v-login",
  data() {
    return {
      password: "",
      email: "",
      err: "",
    };
  },
  methods: {
    loginSuccessful() {
     
      this.$emit("loginSuccessful", true);
    },
    showSignUp() {
      this.$emit("showSignup", true);
    },
    async sendLogin() {
      if (!this.email) {
        this.err = "invalid email!";
      } else if (!this.password) {
        this.err = "invalid password";
      } else {
        const options = {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            authorization: `Bearrer ${localStorage.getItem("jwt-token")}`,
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        };

        const rawdata = await fetch(
          `http://localhost:3100/user/login`,
          options
        );
        const res = await rawdata.json();
        console.log(res);

        if (!res.success) {
          console.log(res.error);
          this.err = res.error;
        } else {
           localStorage.setItem("jwt-token", res.token);
          this.loginSuccessful();
        }
      }
    },
    async attemptLogin() {
      const options = {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
        body: JSON.stringify(),
      };
      try {
        const rawdata = await fetch(
          `http://localhost:3100/user/login`,
          options
        );

        const res = await rawdata.json();
        if (res.success) {
          this.loginSuccessful();
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.attemptLogin();
  },
};
</script>
<style scoped>
.login form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
.login input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
.loginAndSignupButton {
  display: flex;
}
.button-login {
  background-color: #c8e123;
  color: white;
  padding: 14px 20px;
  margin: 8px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}
.button-signup {
  background-color: #23e1bb;
  color: white;
  padding: 14px 20px;
  margin: 8px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
.login button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.login .cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
  border-radius: 5px;
}

/* Center the avatar image inside this container */
.login .imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
.login img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.login .container {
  padding: 16px;
}

/* The "Forgot password" text */
.login span.psw {
  float: right;
  padding-top: 16px;
}
</style>
