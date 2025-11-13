<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductComponent from '@/components/ProductComponent.vue';
</script>

<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div class="p-6 border-b">
          <h1 class="text-2xl font-bold text-green-600">Pede.ai</h1>
        </div>

        <nav class="flex flex-col gap-2 p-4">
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
            <i class="las la-home text-xl"></i>
            Dashboard
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg bg-green-50 text-green-600 font-semibold">
            <i class="las la-box text-xl"></i>
            Produtos
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
            <i class="las la-shopping-bag text-xl"></i>
            Pedidos
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
            <i class="las la-user text-xl"></i>
            Usuários
          </a>
        </nav>
      </div>

      <div class="p-4 border-t">
        <button class="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-all">
          <i class="las la-sign-out-alt text-xl"></i>
          Sair
        </button>
      </div>
    </aside>

    <!-- Conteúdo principal -->
    <main class="flex-1 p-10">
      <HeaderComponent />

      <!-- Cabeçalho da página -->
      <div class="flex justify-between items-center mt-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-800">Produtos</h2>
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-all shadow"
        >
          + Novo Produto
        </button>
      </div>

      <!-- Filtros / Busca -->
      <div class="flex justify-center mb-10">
        <form class="flex gap-3 bg-white shadow-sm rounded-lg p-2">
          <input
            type="text"
            name="search"
            placeholder="Pesquisar produtos..."
            class="px-4 py-2 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            class="px-6 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold transition-all duration-150"
          >
            Pesquisar
          </button>
        </form>
      </div>

      <!-- Cards de estatísticas -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div class="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
          <p class="text-gray-500 text-sm mb-1">Produtos Ativos</p>
          <h3 class="text-3xl font-bold text-gray-800">48</h3>
        </div>
        <div class="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
          <p class="text-gray-500 text-sm mb-1">Mais Vendido</p>
          <h3 class="text-xl font-semibold text-gray-800">Pizza Calabresa</h3>
        </div>
        <div class="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
          <p class="text-gray-500 text-sm mb-1">Faturamento Total</p>
          <h3 class="text-3xl font-bold text-gray-800">R$ 2.430</h3>
        </div>
      </div>

      <!-- Grade de produtos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </div>
    </main>
  </div>
</template>

<style scoped>
@import 'https://cdn.lineicons.com/4.0/lineicons.css';
</style>
