<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import ItemComponent from '@/components/ItemComponent.vue'
</script>

<template>
  <HeaderComponent />

  <main class="bg-gray-50 min-h-screen px-6 md:px-12 py-10">
    <!-- Barra de pesquisa -->
    <div class="flex justify-center mb-10">
      <form
        class="flex gap-2 bg-white shadow-md rounded-xl p-2 border border-gray-100 w-full sm:w-auto"
      >
        <input
          type="text"
          name="search"
          placeholder="Pesquise seus itens..."
          class="px-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
        />
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-all"
        >
          Pesquisar
        </button>
      </form>
    </div>

    <!-- Lista de itens -->
    <section
      class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center"
    >
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
    </section>
  </main>
</template>
