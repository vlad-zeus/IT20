<template>
<div id="v-model-radiobutton">
    <div v-for>
      <input type="radio" v-bind:value="user" v-model="selectedUser" />
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
