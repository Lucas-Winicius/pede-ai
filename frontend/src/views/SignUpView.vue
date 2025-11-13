<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'

// Aqui você pode definir a lógica do formulário futuramente
// const form = reactive({ nome: '', email: '', senha: '' })
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
        Criar conta
      </h1>
      <p class="text-gray-500 text-center mb-8">
        Preencha os dados abaixo para se cadastrar
      </p>

      <form class="flex flex-col gap-5">
        <!-- Nome -->
        <div class="flex flex-col gap-1">
          <label for="nome" class="font-semibold text-gray-700">Nome completo</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        <!-- E-mail -->
        <div class="flex flex-col gap-1">
          <label for="email" class="font-semibold text-gray-700">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
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
          />
        </div>

        <!-- Confirmar senha -->
        <div class="flex flex-col gap-1">
          <label for="confirmar" class="font-semibold text-gray-700"
            >Confirmar senha</label
          >
          <input
            id="confirmar"
            type="password"
            placeholder="********"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        <!-- Botão -->
        <button
          type="submit"
          class="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold text-lg transition-all"
        >
          Cadastrar
        </button>
      </form>

      <!-- Login link -->
      <p class="text-center text-sm text-gray-600 mt-6">
        Já possui uma conta?
        <a
          href="/login"
          class="text-green-500 font-semibold hover:underline transition-all"
          >Entrar</a
        >
      </p>
    </div>
  </main>
</template>

<style scoped></style>
