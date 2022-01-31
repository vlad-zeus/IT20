<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <my-radio-button :options="radioOptions" />
    <my-checkbox :options="radioOptions" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyRadioButton from "../components/ui/MyRadioButton.vue";
import MyCheckbox from "../components/ui/MyCheckbox.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    MyRadioButton,
    MyCheckbox,
  },

  data() {
    return {
      radioOptions: ["one", "two", "three"],
    };
  },
};
</script>
