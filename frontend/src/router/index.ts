import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PedidosView from '@/views/PedidosView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ProductsView from '@/views/ProductsView.vue'
import NewProductView from '@/views/NewProductView.vue'
import UserManagementView from '@/views/UserManagementView.vue'
import FinishOrderView from '@/views/FinishOrderView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: SignUpView },
  { path: '/produtos', name: 'products', component: ProductsView },
  { path: '/produtos/novo', name: 'product_new', component: NewProductView },
  { path: '/pedidos', name: 'orders', component: PedidosView },
  { path: '/usuarios', name: 'users', component: UserManagementView },
  { path: '/finalizar', name: 'finish', component: FinishOrderView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
