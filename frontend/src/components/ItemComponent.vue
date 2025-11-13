<script setup lang="ts">
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col"
  >
    <img
      class="w-full h-40 object-cover"
      src="https://placehold.co/600x400.png"
      alt="Item"
    />
    <div class="flex flex-col gap-1 p-4">
      <h1 class="font-semibold text-gray-800 text-lg">Lorem, ipsum.</h1>
      <p class="text-gray-500 text-sm">20 - 30 min</p>
      <p class="text-gray-700 font-medium">R$ 20,50</p>

      <button
        class="bg-green-500 hover:bg-green-600 mt-3 text-white py-2 rounded-lg font-semibold transition-all duration-150"
      >
        Comprar
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
