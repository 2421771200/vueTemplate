import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from "@/router/mobile/home"
const routes = [
    ...home
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