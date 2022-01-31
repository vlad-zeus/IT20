<template>
<div id="v-model-radiobutton">
    <div v-for="item in options" :key="item">
      <input type="radio" :id="item" value="item" v-model="picked" />
      <label>{{ item }}</label
      ><br />
    </div>
  </template>
</div>

<script>
export default {
  data() {
    return {
      picked: {},
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
