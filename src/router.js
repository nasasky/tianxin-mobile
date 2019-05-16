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
      path: '/substitute',
      name:'substitute',
      component: () => import('./views/substitute')
    },
    {
      path:'/publish',
      name:'publish',
      component:() => import('./views/publish')
    },
    {
      path:'/sengren',
      name:'sengren',
      component:() => import('./views/sengren')
    },
    {
      path:'/fabunews',
      name:'fabunews',
      component:() => import('./views/fabunews')
    },
    {
      path:'/fabushangpin',
      name:'fabushangpin',
      component:() => import('./views/fabushangpin')
    },
    {
      path:'/course',
      name:'course',
      component:() => import('./views/course')
      
    },
    {
      path:'/renlie',
      name:'renlie',
      component:() => import('./views/renlie')
    },
    {
      path:'/newslie',
      name:'newslie',
      component:() => import('./views/newslie')
    },
    {
      path:'/shanglie',
      name:'shanglie',
      component:() => import('./views/shanglie')

    }
    
  ]
})
