import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home'),
      children: [
        {
          path: '/home',
          redirect: '/home/substitute'
        },
        {
          path: '/home/mine',
          name: 'mine',
          component: () => import('./views/mine')
        },
        {
          path: '/home/publish',
          name: 'publish',
          component: () => import('./views/publish')
        },
        {
          path: '/home/substitute',
          name: 'substitute',
          component: () => import('./views/substitute')
        },
        {
          path: '/home/course',
          name: 'course',
          component: () => import('./views/course')
        }
      ]
    }
  ]
})
