import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import socket from "./socket";

const app = createApp(App).use(router);

app.use(socket);
app.use(ElementPlus);
app.mount("#app");
