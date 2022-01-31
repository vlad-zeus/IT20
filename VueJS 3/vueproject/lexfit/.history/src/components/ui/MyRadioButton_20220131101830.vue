<template>
  <div v-for="user in users">
    <input type="radio" v-bind:value="user" v-model="selectedUser" />
    <label>{{ user.name }}</label
    ><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      raidioOptions: ["one", "two", "
      
      +
      +9*-9+6
      3+0three"],
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
