import VueRouter from 'vue-router';
import Vue from 'vue';
import Heroslist from '../views/heros/list.vue';
import Weaponslist from '../views/weapons/list.vue';
import Equipslist from '../views/equips/list.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', redirect: '/heros' },
        { path: '/heros', component: Heroslist },
        { path: '/weapons', component: Weaponslist },
        { path: '/equips', component: Equipslist }
    ]
})


export default router;