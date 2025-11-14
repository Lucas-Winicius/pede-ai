<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
    <img
      src="https://placehold.co/600x400"
      alt="Produto"
      class="w-full h-48 object-cover"
    />

    <div class="p-4 flex flex-col gap-2">
      <h3 class="font-semibold text-lg text-gray-800">Pizza Marguerita</h3>
      <p class="text-gray-500 text-sm">20 - 30 min</p>
      <p class="text-green-600 font-bold text-lg">R$ 25,90</p>
      <div class="mt-2 flex gap-2">
        <button
          class="bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-3 font-medium transition-all"
          @click="router.push('/produtos/novo')"
        >
          Editar
        </button>
        <button class="bg-gray-100 hover:bg-gray-200 py-2 px-3 rounded-md">Duplicar</button>
      </div>
    </div>
  </div>
</template>
