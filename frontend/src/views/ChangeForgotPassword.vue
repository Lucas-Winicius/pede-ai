<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { changeForgotPassword } from '@/services/auth.service'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const password = ref('')
const loading = ref(false)
const token = route.query.token as string;

async function handleRecover() {
  if (!password.value.trim()) {
    alert('Digite uma nova senha.')
    return
  }

  loading.value = true

  try {
    await changeForgotPassword(token, password.value)
    alert('Senha alterada com sucesso!')
    router.push('/login')
  } catch (error) {
    alert('Erro ao alterar senha.')
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <HeaderComponent />

  <main class="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-10">
    <div class="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 border border-gray-100">

      <h1 class="text-2xl font-bold text-gray-800 text-center mb-2">
        Recuperar senha
      </h1>

      <p class="text-gray-500 text-center mb-6 text-sm">
        Digite sua nova senha para continuar.
      </p>

      <form class="flex flex-col gap-4" @submit.prevent="handleRecover">
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700">Nova senha</label>
          <input v-model="password" type="password" required placeholder="Digite sua nova senha" class="px-4 py-3 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-green-400 transition-all" />
        </div>

        <button type="submit" :disabled="loading" class="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg
                 font-semibold transition-colors duration-150 disabled:opacity-50">
          {{ loading ? 'Alterando...' : 'Alterar senha' }}
        </button>
      </form>

      <div class="text-center mt-6">
        <router-link to="/login" class="text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
          Voltar para login
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
