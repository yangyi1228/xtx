import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入重置样式表
import 'normalize.css'
// 引入公共样式表
import '@/assets/styles/common.less'

createApp(App).use(store).use(router).mount('#app')
