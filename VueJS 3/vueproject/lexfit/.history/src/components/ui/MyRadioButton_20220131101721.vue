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
      raidioOptions: [one],
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
