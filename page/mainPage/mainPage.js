//引入根组件
import mainPage from '../src/page/mainPage/mainPage.vue'
//引入路由器
import router from '../../src/router'
//引入ElementUI-plus组件
import ElementPlus from 'element-plus'
//引入样式
import 'element-plus/dist/index.css'

import { createApp } from 'vue';

const app = createApp(mainPage)
app.use(ElementPlus)
app.use(router).mount('#app')
