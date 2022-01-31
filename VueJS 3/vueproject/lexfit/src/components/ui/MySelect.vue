<template>

  <div id="v-model-select">
    <select v-model="picked">
      <option v-for="item in options"  :key="item" :value="item" >
        <label>{{ item }}</label>
      </option>
    </select>
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
