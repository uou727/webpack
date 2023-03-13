import { createApp } from 'vue'
import { str } from "@/add";
import App from "@/index.vue"
import { createPinia } from 'pinia';
import './style.css';


import router from "@/routes"
console.log(str)
console.log("Hello world!")
createApp(App)
    .use(router)
    .use(createPinia())
    .mount("#app")