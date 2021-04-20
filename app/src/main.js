import Vue from 'vue'
import App from './App.vue'
import News from './News.vue'
import Home from './Home'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/news/:id',
    component: News
  }
];

const router = new VueRouter({
  mode: 'history',
  routes 
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
