import { createRouter, createWebHistory } from 'vue-router'

import JFB_HomeView from '@/views/JFB_HomeView.vue'
import JFB_AboutView from '@/views/JFB_AboutView.vue'
import JFB_404View from '@/views/JFB_404View.vue'

import VUE_HomeView from '@/views/HomeView.vue'
import VUE_AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: JFB_HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: JFB_AboutView,
    },
    {
      path: '/else',
      name: 'else',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: JFB_404View,
    },
    {
      path: '/vuehome',
      name: 'vuehome',
      component: VUE_HomeView,
    },
    {
      path: '/vueabout',
      name: 'vueabout',
      component: VUE_AboutView,
    },
  ],
})

export default router
