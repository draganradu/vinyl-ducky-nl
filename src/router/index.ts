import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from "../views/LandingPage/LandingPage.vue"

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageView
    }]
})