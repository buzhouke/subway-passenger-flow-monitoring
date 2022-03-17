import { createApp } from 'vue';
import App from './App.vue';
import "echarts";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { router } from './router'

// createApp(App).mount('#app');
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
