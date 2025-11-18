<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { ref, onMounted, inject } from 'vue'
import { createOrder } from '@/services/order.service'
import { AxiosInstance } from 'axios'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const api = inject('$api') as AxiosInstance
const order = ref<{
  id: string | number
  client: string
  total: string
  items: { productId: number; quantity: number; price: number }[]
}>({
  id: route.query.id || '1001',
  client: 'Cliente Desconhecido',
  total: 'R$ 0,00',
  items: [],
})

onMounted(() => {
  // Tenta ler os itens do carrinho do localStorage
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
  if (cartItems && cartItems.length) {
    order.value.items = cartItems
    order.value.total = 'R$ ' + cartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0).toFixed(2).replace('.', ',')
  }
  // Lógica de carregamento de pedido existente (se houver) - Mantida para compatibilidade, mas o foco é o carrinho
  // const orders = JSON.parse(localStorage.getItem('orders') || '[]')
  // if(orders && orders.length){
  //   const o = orders.find((x:any)=> String(x.id) === String(route.query.id))
  //   if(o){ order.value = o }
  // }
})

const address = ref('')
const paymentMethod = ref('PIX')

async function conclude() {
  if (!order.value.items.length) {
    alert('Seu carrinho está vazio!')
    return
  }

  try {
    const payload = {
      items: order.value.items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
      address: address.value,
      paymentMethod: paymentMethod.value,
    }

    const response = await createOrder(payload)
    alert(`Pedido ${response.orderId} criado com sucesso!`)
    localStorage.removeItem('cart')
    router.push('/pedidos')
  } catch (error) {
    console.error(error)
    alert('Erro ao finalizar o pedido. Verifique se está logado e tente novamente.')
  }
}
</script>

<template>
  <HeaderComponent />
  <main class="px-10 py-8 bg-gray-50 min-h-screen">
    <div class="max-w-xl mx-auto bg-white shadow rounded-xl p-8">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-700">Finalizar Pedido</h2>

      <div class="flex flex-col gap-4">
        <p class="text-lg"><strong>Pedido:</strong> {{ order.id }}</p>
        <p class="text-lg"><strong>Cliente:</strong> {{ order.client }}</p>
        <p class="text-lg"><strong>Total:</strong> {{ order.total }}</p>

        <div class="flex flex-col gap-3">
          <label class="font-semibold text-gray-700">Endereço de Entrega</label>
          <input class="border p-2 rounded-md" placeholder="Rua, número, complemento" v-model="address" />
        </div>

        <div class="flex flex-col gap-3">
          <label class="font-semibold text-gray-700">Forma de Pagamento</label>
          <select class="border p-2 rounded-md" v-model="paymentMethod">
            <option>PIX</option>
            <option>Cartão</option>
            <option>Dinheiro</option>
          </select>
        </div>

        <div class="mt-6 flex justify-center">
          <button
            class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            @click="conclude"
          >
            Concluir Pedido
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
