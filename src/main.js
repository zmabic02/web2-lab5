import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import InfoBanner from "./components/InfoBanner.vue";
import TaskCard from "./components/TaskCard.vue";
import TaskForm from "./components/TaskForm.vue";
import TopBar from "./components/TopBar.vue";

const app = createApp(App);

// Pinia store korišten u /stores/taskStore.js
const pinia = createPinia();
app.use(pinia);

// koristim routing kroz /router/index.js
app.use(router);

// postoje 4 komponente što zadovoljava uvjet 2+ komponente
app.component("info-banner", InfoBanner);   // komponenta bez stanja
app.component("task-card", TaskCard);
app.component("task-form", TaskForm);       // komponenta sa stanjem
app.component("top-bar", TopBar);

app.mount("#app");
