import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import Task from './pages/task.vue'
import Team from './pages/team.vue'
import Quiz from './pages/quiz.vue'
import Course from './pages/course.vue'
import History from './pages/history.vue'
import Message from './pages/message.vue'
import Library from './pages/library.vue'
import Dashboard from './pages/dashboard.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/task', component: Task },
  { path: '/team', component: Team },
  { path: '/quiz', component: Quiz },
  { path: '/course', component: Course },
  { path: '/message', component: Message },
  { path: '/library', component: Library },
  { path: '/history', component: History },
  { path: '/dashboard', component: Dashboard },
]

const router = new VueRouter({
  routes
})

export default router