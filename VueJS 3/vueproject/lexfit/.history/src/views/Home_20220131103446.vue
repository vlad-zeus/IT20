<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <my-radio-button />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyRadioButton from "../components/ui/MyRadioButton.vue";

export default {
    
    name: "Home",
    components: {
       "HelloWorld",
        "MyRadioButton",
    },
};
</script>
