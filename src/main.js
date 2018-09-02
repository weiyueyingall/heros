import Vue from 'vue';
import vueRouter from 'vue-router';
import App from './App.vue';

// 导入全局样式
// 导入bootstrap的样式
import 'bootstrap/dist/css/bootstrap.css';

import './assets/css/index.css';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [

    ]
})

new Vue({
    el: '#app',
    render: h => h(App)
});