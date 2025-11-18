<script setup lang="ts">
interface Product {
  id: string
  title: string
  description: string
  image: string
  price: number
}

const props = defineProps<{
  product: Product
}>()
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">

    <!-- Imagem -->
    <img
      class="w-full h-40 object-cover"
      :src="`http://localhost:3000/public/${props.product.image}`"
      :alt="props.product.title"
      @error="(e) => e.target.src = 'https://placehold.co/600x400.png'"
    />

    <div class="flex flex-col gap-1 p-4">

      <!-- Título -->
      <h1 class="font-semibold text-gray-800 text-lg">
        {{ props.product.title }}
      </h1>

      <!-- Descrição curta -->
      <p class="text-gray-500 text-sm line-clamp-2">
        {{ props.product.description }}
      </p>

      <!-- Preço -->
      <p class="text-gray-700 font-medium text-lg">
        {{ props.product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
      </p>

      <!-- Botão -->
      <button
        class="bg-green-500 hover:bg-green-600 mt-3 text-white py-2 rounded-lg font-semibold transition-colors">
        Comprar
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Limita a descrição a duas linhas */
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
