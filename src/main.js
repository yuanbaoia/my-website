import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar';
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

// Use v-calendar & v-date-picker components
Vue.use(VCalendar);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
