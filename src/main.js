import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueDPlayer)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')