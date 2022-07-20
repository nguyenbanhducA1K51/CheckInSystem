<template>
  <div>
    <Menu />
  </div>
</template>

<script>
import Menu from "./components/menu.vue";
export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
