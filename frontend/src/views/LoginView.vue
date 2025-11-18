<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { reactive } from 'vue'
import { login } from '@/services/auth.service'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({ email: '', password: '' })

async function handleLogin() {
  try {
    await login(form.email, form.password)
    alert('Login realizado com sucesso!')
    router.push('/') // Redireciona para a página inicial ou dashboard
  } catch (error) {
    alert('Erro ao fazer login. Verifique suas credenciais.')
    console.error(error)
  }
}
</script>

<template>
  <HeaderComponent />

  <main
    class="flex items-center justify-center min-h-screen bg-gray-50 px-6 py-10"
  >
    <div
      class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-100"
    >
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-2">
        Bem-vindo de volta
      </h1>
      <p class="text-gray-500 text-center mb-8">
        Faça login para continuar
      </p>

      <form class="flex flex-col gap-5" @submit.prevent="handleLogin">
        <!-- E-mail -->
        <div class="flex flex-col gap-1">
          <label for="email" class="font-semibold text-gray-700">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            v-model="form.email"
          />
        </div>

        <!-- Senha -->
        <div class="flex flex-col gap-1">
          <label for="senha" class="font-semibold text-gray-700">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="********"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            v-model="form.password"
          />
        </div>

        <!-- Lembrar / Esqueci senha -->
        <div class="flex items-center justify-between text-sm mt-1">
          <label class="flex items-center gap-2 text-gray-600">
            <input type="checkbox" class="accent-green-500" />
            Lembrar de mim
          </label>
          <a
            href="/recuperar"
            class="text-green-500 hover:underline font-medium"
          >
            Esqueceu a senha?
          </a>
        </div>

        <!-- Botão -->
        <button
          type="submit"
          :disabled="!form.email || !form.password"
          class="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold text-lg transition-all"
        >
          Entrar
        </button>
      </form>

      <!-- Cadastro link -->
      <p class="text-center text-sm text-gray-600 mt-6">
        Ainda não tem uma conta?
        <a
          href="/cadastro"
          class="text-green-500 font-semibold hover:underline transition-all"
          >Cadastre-se</a
        >
      </p>
    </div>
  </main>
</template>

<style scoped></style>
