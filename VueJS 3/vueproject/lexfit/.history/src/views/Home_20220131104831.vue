<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <my-radio-button :option="radioOptions" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyRadioButton from "@/components/ui/MyRadioButton.vue";

export default {
  components: { MyRadioButton },
  data() {
    return {
      radioOptions: ["one", "two", "three"],
    };
  },
};
</script>
