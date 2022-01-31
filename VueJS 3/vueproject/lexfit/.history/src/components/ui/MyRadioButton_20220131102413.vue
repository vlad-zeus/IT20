<template>
<div id="v-model-radiobutton">
    <div v-for="item in options">
      <input type="radio" :id="item" value="item" v-model="picked" />
      <label>{{ user.name }}</label
      ><br />
    </div>
  </template>
</div>

<script>
export default {
  data() {
    return {
      raidioOptions: ["one", "two", "three"],
    };
  },
  props: {
    option: {
      type: Array,
    },
  },
  watch: {},
};
</script>

<style scoped></style>
