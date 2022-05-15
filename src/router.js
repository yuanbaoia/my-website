import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import Task from './pages/task.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/task', component: Task },
]

const router = new VueRouter({
  routes
})

export default router