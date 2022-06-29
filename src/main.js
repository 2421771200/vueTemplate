import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'vant/lib/index.css';//vant样式
import Vant from 'vant';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
