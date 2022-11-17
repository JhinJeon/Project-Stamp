import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import BookView from '../views/BookView.vue'
import RegisterView from '../views/RegisterView.vue'
import DetailView from '../views/DetailView.vue'
import InitialLogin from '../views/InitialLogin.vue'

Vue.use(VueRouter)

// isLoggedIn = 로그인 확인용 변수(서비스 구현 시 수정 예정)
const isLoggedIn = false

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    beforeEnter(to, from, next) {
      if (isLoggedIn === true) {
        console.log('이미 로그인 되어있음')
        next({ name: 'home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
  },
  {
    path: '/hello',
    name: 'InitialLogin',
    component: InitialLogin,
  },
  {
    path: '/book',
    name: 'BookView',
    component: BookView,
  },
  {
    path: '/:id',
    name: 'DetailView',
    component: DetailView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
