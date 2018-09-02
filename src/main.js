import Vue from 'vue';

import App from './App.vue';

// 导入全局样式
// 导入bootstrap的样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

// 导入路由模块
import router from './routers'
// 导入axios
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/';
// // 在vue的原型上加上axios属性;
// Vue.prototype.$axios = axios;

import MyHttp from './plugins/MyHttp.js';

Vue.use(MyHttp);

new Vue({
    el: '#app',
    render: h => h(App),
    router
});