import { createApp } from 'vue';
import App from './App.vue';
import * as echarts from 'echarts';
import "vue-echarts";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { router } from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// createApp(App).mount('#app');
const app = createApp(App)
app.config.globalProperties.echarts = echarts;
app.use(ElementPlus)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
