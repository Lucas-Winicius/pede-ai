<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import OrderComponent from '@/components/OrderComponent.vue'
</script>

<template>
  <HeaderComponent />

  <main class="px-10 py-8 bg-gray-50 min-h-screen">
    <!-- Barra de busca -->
    <div class="flex justify-center mb-8">
      <form class="flex gap-3 bg-white shadow-sm rounded-lg p-2">
        <input
          type="text"
          name="search"
          placeholder="Pesquise seus pedidos..."
          class="px-4 py-2 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          class="px-6 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold transition-all duration-150"
        >
          Pesquisar
        </button>
      </form>
    </div>

    <!-- Tabela -->
    <div class="overflow-x-auto bg-white shadow rounded-xl p-6">
      <table class="w-full border-separate border-spacing-y-4">
        <thead>
          <tr class="text-left text-gray-600 border-b">
            <th class="pb-2">Pedido</th>
            <th class="pb-2">Data</th>
            <th class="pb-2">Nome</th>
            <th class="pb-2">Valor</th>
            <th class="pb-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <OrderComponent />
          <OrderComponent />
          <OrderComponent />
        </tbody>
      </table>
    </div>
  </main>
</template>
