import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from "../views/LandingPage/LandingPageView.vue"
import ComingSoonView from '../views/LandingPage/ComingSoonView.vue'
import ContactView from '../views/ContactView.vue'
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
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/coming-soon',
      name: 'comingSoon',
      component: ComingSoonView
    },  
  ]
})