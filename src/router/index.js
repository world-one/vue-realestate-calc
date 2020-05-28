import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '*', redirect : { name : 'main' } },
  
  {
    path: '/signup', //회원가입 
    name : 'signup',
    component : () => import('../views/user/signup.vue')
  },

  {
    path: '/signin', //로그인
    name : 'signin',
    component : () => import('../views/user/signin.vue')
  },
  {
    path: '/find',
    name : 'passowrdFind',
    component : () => import('../views/user/findPassword.vue')
  },
  {
    path: '/', //입력
    name : 'create',
    component : () => import('../views/estate/create.vue')
  },
  {
    path: '/list', //리스트
    name : 'main',
    component : () => import('../views/estate/list.vue')
  },
  
  {
    path: '/detail', //상세
    name : 'detail',
    component : () => import('../views/estate/detail.vue')
  },
  {
    path: '/calc', //공식 모아보기
    name : 'calc',
    component : () => import('../views/user/signup.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
