import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/home/home.vue"),
        meta: {
            footShow: false
        }
    },
]
const router = new VueRouter({
    mode: 'hash',
    // mode: 'history',
    publicPath : './',
    // base: '/vue/', // 基础路径
    base: process.env.BASE_URL,
    routes
})
export default router