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
      component: JFB_AboutView,
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
    {
      path: '/:pathMatch(.*)*',
      name: 'else',
      component: JFB_404View,
    },
  ],
})

export default router
