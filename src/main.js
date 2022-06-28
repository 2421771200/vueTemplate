import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'vant/lib/index.css';//vant样式

Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
