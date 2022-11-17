import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import NotFoundView from '../views/NotFoundView'
import ChatView from '../views/ChatView'
import FriendView from '../views/FriendView'
import PostView from '../views/PostView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
  {
    path: '/friend',
    name: 'friend',
    component: FriendView
  },
  {
    path: '/post',
    name: 'post',
    component: PostView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
