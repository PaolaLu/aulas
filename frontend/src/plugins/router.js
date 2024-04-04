import Vue from 'vue';

import VueRouter from 'vue-router'
import AulasHome from '../components/AulasHome'
import AulasAbout from '../components/AulasAbout'


Vue.use(VueRouter)


const routes = [
    { path: '/', name: 'AulasHome', component: AulasHome },
    { path:'/about', name: 'AulasAbout', component: AulasAbout }

]

const router = new VueRouter({

routes
})

export default router
 