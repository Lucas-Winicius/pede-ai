<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import ItemComponent from '@/components/ItemComponent.vue';

</script>

<template>
  <HeaderComponent />
  <main>
    <div class="w-full flex justify-center">
      <form class="mt-5 bg-green-500 rounded-md">
        <input type="text" name="search" placeholder="Pesquise seus itens"
          class="px-5 py-3 bg-white border-2 border-green-500 rounded-lg">
        <button class="px-5 text-amber-50 font-bold text-md">Pesquisar</button>
      </form>
    </div>
    <div class="flex justify-around gap-5 flex-wrap mx-5 my-10  ">
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
      <ItemComponent />
    </div>
  </main>
</template>
