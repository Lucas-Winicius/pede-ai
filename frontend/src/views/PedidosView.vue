<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import OrderComponent from '@/components/OrderComponent.vue'
</script>

<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Menu lateral -->
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div class="p-6 border-b">
          <h1 class="text-2xl font-bold text-green-600">Pede.ai</h1>
        </div>

        <nav class="flex flex-col gap-2 p-4">
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg bg-green-50 text-green-600 font-semibold">
            <i class="las la-home text-xl"></i>
            Dashboard
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
            <i class="las la-shopping-bag text-xl"></i>
            Orders
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
            <i class="las la-box text-xl"></i>
            Products
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
            <i class="las la-user text-xl"></i>
            Users
          </a>
        </nav>
      </div>

      <div class="p-4 border-t">
        <button class="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-all">
          <i class="las la-sign-out-alt text-xl"></i>
          Logout
        </button>
      </div>
    </aside>

    <!-- Conteúdo principal -->
    <main class="flex-1 p-10">
      <!-- Header -->
      <HeaderComponent />

      <!-- Título -->
      <div class="flex justify-between items-center mb-8 mt-6">
        <h2 class="text-2xl font-bold text-gray-800">Painel de Pedidos</h2>
        <div class="flex items-center gap-3">
          <i class="las la-bell text-2xl text-green-500"></i>
          <p class="text-green-600 font-medium">Novos pedidos recebidos!</p>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div class="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
          <p class="text-gray-500 text-sm mb-1">Pedidos Pendentes</p>
          <h3 class="text-3xl font-bold text-gray-800">12</h3>
        </div>
        <div class="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
          <p class="text-gray-500 text-sm mb-1">Faturamento Diário</p>
          <h3 class="text-3xl font-bold text-gray-800">R$ 325</h3>
        </div>
        <div class="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
          <p class="text-gray-500 text-sm mb-1">Produto em Alta</p>
          <h3 class="text-xl font-semibold text-gray-800">Pizza Marguerita</h3>
        </div>
      </div>

      <!-- Tabela -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Pedidos Recentes</h3>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-100 text-gray-600 text-sm uppercase">
              <th class="py-3 rounded-l-lg">Pedido</th>
              <th class="py-3">Data</th>
              <th class="py-3">Cliente</th>
              <th class="py-3">Valor</th>
              <th class="py-3 rounded-r-lg">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <OrderComponent @finalizar="$router.push('/finalizar')" />
            <OrderComponent @finalizar="$router.push('/finalizar')" />
            <OrderComponent @finalizar="$router.push('/finalizar')" />
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
