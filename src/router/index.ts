import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from "../views/LandingPage/LandingPageView.vue"
import Help from "../views/Helpers/HelpersView.vue"

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageView
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
  
  ]
})