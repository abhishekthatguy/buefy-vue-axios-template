import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import Maska from 'maska'
import "./index.scss";
Vue.use(Buefy)
Vue.use(Maska)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
