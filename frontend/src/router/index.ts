import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidosView from '@/views/PedidosView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ProductsView from '@/views/ProductsView.vue'
import NewProductView from '@/views/NewProductView.vue'
import UserManagementView from '@/views/UserManagementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: PedidosView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'Cadastro',
      component: SignUpView,
    },
    {
      path: '/products',
      name: 'Produtos',
      component: ProductsView,
    },
    {
      path: '/createproduct',
      name: 'Novo Produto',
      component: NewProductView,
    },
    {
      path: '/users',
      name: 'Gerenciamento de usuarios',
      component: UserManagementView,
    },
  ],
})

export default router
