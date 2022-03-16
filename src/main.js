import { createApp } from 'vue';
import App from './App.vue';
import "echarts";
import ElementPlus from 'element-plus'

// createApp(App).mount('#app');
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
