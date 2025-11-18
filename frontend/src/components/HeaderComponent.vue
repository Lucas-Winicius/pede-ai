<script setup lang="ts">
import { isAuthenticated } from '@/services/auth.service';
import { useRouter } from 'vue-router'
const router = useRouter()

function defineRedirecionamento() {
  if(isAuthenticated()) router.push('/usuarios')
  else router.push('/login')
}

</script>

<template>
  <header
    class="flex justify-between items-center px-10 py-5 bg-white shadow-sm sticky top-0 z-50"
  >
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <h1 class="font-extrabold text-3xl text-gray-900 tracking-tight cursor-pointer" @click="router.push('/')">
        <span class="text-green-500">Pede</span>.ai
      </h1>
    </div>

    <!-- Local de entrega -->
    <div class="hidden sm:flex flex-col items-center text-center" v-if="isAuthenticated()">
      <p class="text-sm text-gray-500 leading-tight">Entregar para</p>
      <p class="font-semibold text-gray-800">Lorem ipsum dolor sit</p>
    </div>

    <!-- Ícone do usuário -->
    <button
      class="bg-gray-100 hover:bg-gray-200 transition-colors p-2 rounded-full shadow-sm cursor-pointer"
      aria-label="Perfil do usuário"
      @click="defineRedirecionamento"
    >
      <v-icon name="la-user-alt-solid" scale="2" class="text-gray-700" />
    </button>
  </header>
</template>

<style scoped>
</style>
