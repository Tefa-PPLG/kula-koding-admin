import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import('@/views/Index.vue')
const IndexUser = () => import('@/views/user/Index.vue')
const IndexTools = () => import('@/views/tools/Index.vue')
const DetailTools = () => import('@/views/tools/detail.vue')
const Login = () => import('@/views/auth/Login.vue')
const IndexVerifikasi = () => import('@/views/verifikasi/Index.vue')
const IndexProject = () => import('@/views/project/Index.vue')
const DetailProject = () => import('@/views/project/Detail.vue')
const Dashboard = () => import('@/views/Dashboard.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Index,
      children: [
        {
          path: '/user',
          name: 'user',
          component: IndexUser
        },
        {
          path: '/tool',
          name: 'tools',
          component: IndexTools
        },
        {
          path: '/tool/:id',
          name: 'tools.detail',
          component: DetailTools
        },
        {
          path: '/verifikasi',
          name: 'verifikasi',
          component: IndexVerifikasi
        },
        {
          path: '/project',
          name: 'project',
          component: IndexProject
        },
        {
          path: '/project/:id',
          name: 'project.detail',
          component: DetailProject
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})

export default router
