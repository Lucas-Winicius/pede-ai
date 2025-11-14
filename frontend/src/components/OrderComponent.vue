<script setup lang="ts">
const emit = defineEmits(['finalizar'])
function onFinish() {
  emit('finalizar')
}
</script>

<template>
  <tr class="hover:bg-gray-50 transition-all">
    <td class="text-center py-3 font-medium text-gray-800">#1001</td>
    <td class="text-center text-gray-600">12 Nov 2025</td>
    <td class="text-center text-gray-700">Lucas Winicius</td>
    <td class="text-center text-gray-800 font-semibold">R$ 43,50</td>
    <td class="text-center">
      <button
        class="bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 px-4 rounded-lg shadow-sm transition-all"
        @click="onFinish"
      >
        Concluir
      </button>
    </td>
  </tr>
</template>
