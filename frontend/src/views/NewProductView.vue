<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { ref } from 'vue'

const productImage = ref<string | null>(null)

function onImageUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => (productImage.value = reader.result as string)
    reader.readAsDataURL(file)
  }
}

function submitForm() {
  alert('Produto cadastrado com sucesso!')
}
</script>

<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div class="p-6 border-b">
          <h1 class="text-2xl font-bold text-green-600">Pede.ai</h1>
        </div>

        <nav class="flex flex-col gap-2 p-4">
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
            <i class="las la-home text-xl"></i>
            Dashboard
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg bg-green-50 text-green-600 font-semibold">
            <i class="las la-box text-xl"></i>
            Produtos
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
            <i class="las la-shopping-bag text-xl"></i>
            Pedidos
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
            <i class="las la-user text-xl"></i>
            Usuários
          </a>
        </nav>
      </div>

      <div class="p-4 border-t">
        <button class="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-all">
          <i class="las la-sign-out-alt text-xl"></i>
          Sair
        </button>
      </div>
    </aside>

    <!-- Conteúdo principal -->
    <main class="flex-1 p-10">
      <HeaderComponent />

      <!-- Cabeçalho -->
      <div class="flex justify-between items-center mt-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-800">Cadastrar Produto</h2>
        <button
          class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-5 py-2 rounded-lg transition-all shadow-sm"
        >
          Voltar
        </button>
      </div>

      <!-- Formulário -->
      <form
        @submit.prevent="submitForm"
        class="bg-white shadow-sm rounded-xl border border-gray-100 p-8 max-w-4xl mx-auto"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Lado esquerdo: informações -->
          <div class="flex flex-col gap-4">
            <div>
              <label class="font-semibold text-gray-700">Nome do Produto</label>
              <input
                type="text"
                required
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Ex: Pizza Calabresa"
              />
            </div>

            <div>
              <label class="font-semibold text-gray-700">Descrição</label>
              <textarea
                rows="4"
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none resize-none"
                placeholder="Descreva o produto..."
              ></textarea>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="font-semibold text-gray-700">Preço (R$)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label class="font-semibold text-gray-700">Tempo médio (min)</label>
                <input
                  type="number"
                  required
                  class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                  placeholder="Ex: 30"
                />
              </div>
            </div>
          </div>

          <!-- Lado direito: imagem -->
          <div class="flex flex-col items-center justify-center gap-4">
            <div
              class="w-56 h-56 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50"
            >
              <img
                v-if="productImage"
                :src="productImage"
                alt="Preview do Produto"
                class="object-cover w-full h-full"
              />
              <p v-else class="text-gray-400 text-sm text-center">Preview da imagem</p>
            </div>

            <input
              type="file"
              accept="image/*"
              @change="onImageUpload"
              class="block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0 file:text-sm file:font-semibold
                     file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
          </div>
        </div>

        <!-- Botão -->
        <div class="mt-10 flex justify-end">
          <button
            type="submit"
            class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow"
          >
            Salvar Produto
          </button>
        </div>
      </form>
    </main>
  </div>
</template>

<style scoped>
@import 'https://cdn.lineicons.com/4.0/lineicons.css';
</style>
