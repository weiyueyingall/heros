import VueRouter from 'vue-router';
import Vue from 'vue';
import Heroslist from '../views/heros/list.vue';
import Weaponslist from '../views/weapons/list.vue';
import Equipslist from '../views/equips/list.vue';

import HeroAdd from '../views/heros/add.vue';
import edit from '../views/heros/edit.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/', redirect: '/heros' },
        { path: '/heros', component: Heroslist },
        { path: '/weapons', component: Weaponslist },
        { path: '/equips', component: Equipslist },
        { path: '/heros/add', component: HeroAdd },
        { path: '/heros/edit/:id', component: edit, props: true }
    ]
})


export default router;