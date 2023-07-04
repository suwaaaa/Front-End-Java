import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import axios from 'axios';
import VueAxios from 'vue-axios'
import App from './App.vue';

//css
import './assets/component.css'

const app = createApp(App);

app.config.devtools = true

// 使用 Element Plus 插件
app.use(ElementPlus).use(VueAxios, axios);

// 将 Axios 添加到应用程序的全局属性
app.config.globalProperties.$axios = axios;

app.mount('#app');