import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheHeader from '../components/TheHeader.vue'
import CartWidget from '../components/CartWidget.vue'
import AppCountInput from '../components/AppCountInput.vue'
import AppButton from '../components/AppButton.vue'
import AppModalOverlay from '../components/AppModalOverlay.vue'
import CartItem from '../components/CartItem.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/theHeader',
      name:'theHeader',
      component:TheHeader
    },
    {
      path:'/cartwidget',
      name:'cartwidget',
      component: CartWidget
    },
    {
      path:'/appcountinput',
      name:'appcountinput',
      component:AppCountInput
    },
    {
      path:'/appbutton',
      name:'appbutton',
      component:AppButton
    },
    {
      path:'/appmodaloverlay',
      name:'appmodaloverlay',
      component: AppModalOverlay
    },
    {
      path:'/cartitem',
      name:'cartitem',
      component: CartItem
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
