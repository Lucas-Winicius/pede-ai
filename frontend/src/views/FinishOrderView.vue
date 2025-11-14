<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const order = ref({
  id: route.query.id || '1001',
  client: 'Cliente Desconhecido',
  total: 'R$ 0,00'
})

onMounted(()=>{
  // try read orders from localStorage
  const orders = JSON.parse(localStorage.getItem('orders') || '[]')
  if(orders && orders.length){
    const o = orders.find((x:any)=> String(x.id) === String(route.query.id))
    if(o){ order.value = o }
  }
})

function conclude(){
  // mark order as finished in localStorage
  const orders = JSON.parse(localStorage.getItem('orders') || '[]')
  const idx = orders.findIndex((x:any)=> String(x.id) === String(order.value.id))
  if(idx >= 0){
    orders[idx].status = 'concluido'
    localStorage.setItem('orders', JSON.stringify(orders))
  }
  router.push('/pedidos')
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
          <input class="border p-2 rounded-md" placeholder="Rua, número, complemento" />
        </div>

        <div class="flex flex-col gap-3">
          <label class="font-semibold text-gray-700">Forma de Pagamento</label>
          <select class="border p-2 rounded-md">
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
