import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/board',
    name: 'board',
    component: () => import('../views/Board.vue')
  },
  {
    path:'/project/:id',
    name: 'project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import('../views/TaskDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
