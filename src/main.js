import Vue from 'vue';
import vueRouter from 'vue-router';
import App from './App.vue';

// 导入全局样式
// 导入bootstrap的样式
import 'bootstrap/dist/css/bootstrap.css';

import './assets/css/index.css';
import VueRouter from 'vue-router';

import Heroslist from './views/heros/list.vue';
import Weaponslist from './views/weapons/list.vue';
import Equipslist from './views/equips/list.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes: [
        { path: '/heros', component: Heroslist },
        { path: '/weapons', component: Weaponslist },
        { path: '/equips', component: Equipslist }
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
});