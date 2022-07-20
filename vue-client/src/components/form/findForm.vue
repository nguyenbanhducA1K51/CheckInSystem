<template>
  <div>
    <div class="allForm">
      <div class="formHeader">
        <li>Tuần</li>
        <li>Ngày</li>
        <li>Người được checkin</li>
      </div>

      <FormItem v-for="item in formList" :key="item._id" :data="item" />
    </div>
  </div>
</template>

<script>
import FormItem from "./formItem";

export default {
  name: "v-findForm",
  props: {
    userForms: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      // formList: structuredClone(this.userForms),
    };
  },
  computed: {
    formList() {
      return structuredClone(this.userForms);
    },
  },

  methods: {},
  components: {
    FormItem,
  },
};
</script>

<style>
.formHeader {
  width: 100vw;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 2fr 0.5fr;
  text-align: center;

  margin-bottom: 20px;
}
.formHeader li {
  list-style-type: none;
  font: 500;
}
</style>