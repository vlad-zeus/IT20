<template>
  <div id="v-model-radiobutton">
    <div v-for="item in options" :key="item">
      <input type="radio" :id="item" :value="item" v-model="picked" />
      <label>{{ item }}</label>
    </div>
    <!--     <span>Selected: {{ picked }}</span> ЭТО ЕСЛИ МЫ ЗАХОТИМ УВИДЕТЬ,ЧТО ЖЕ ВЫБРАЛИ-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: "",
    };
  },
  props: {
    options: {
      type: Array,
    },
  },
  watch: {},
};
</script>

<style scoped></style>
