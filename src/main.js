import Vue from 'vue';

import App from './App.vue';

// 导入全局样式
// 导入bootstrap的样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

// 导入路由模块
import router from './routers'

new Vue({
    el: '#app',
    render: h => h(App),
    router
});