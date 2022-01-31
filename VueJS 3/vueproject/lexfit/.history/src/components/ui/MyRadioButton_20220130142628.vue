<template v-for="user in users">
    <input type="radio" v-bind:value="user" v-model="selectedUser" />
    <label>{{ user.name }}</label
    ><br />
</template>

<script>
export default {
  data () {
    return {

    };
  },
  props: {
    option: {
      type: Array,
      default:
    },
  },
}
</script>

<style scoped></style>
