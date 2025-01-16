import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import PerfilView from '@/views/PerfilView.vue'
import { auth } from "../db/firebase.js"

const routes = [
  {
    path: '/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView,
    props: (route) => ({userName:route.params.userName}),//añade un parametro, que es el email, a la ruta
    meta: {requiresAuth: true},//protege la ruta
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  const currentUser=auth.currentUser

  if (to.matched.some((record)=>record.meta.requiresAuth) && !currentUser) {
    next({name:'Register'})// Si no está autenticado, redirige al registro
  }else{
    next()// Si está autenticado, permite el acceso
  }
})

export default router
