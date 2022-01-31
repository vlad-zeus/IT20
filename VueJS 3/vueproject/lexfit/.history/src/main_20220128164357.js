import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./components/ui/MyRadioButton.vue";
import "./components/ui/MySelect.vue";
import "./components/ui/checkbox.vue";
import "./components/ui/MyText.vue";
import "./components/ui/MyTextArea.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("checkbox");
app.mount("#app");
