import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入样式重置文件
import 'styles/_reset.styl'

//引入  rem.js
import 'utils/rem.js'

/* import 'utils/swiper.min.js' */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
