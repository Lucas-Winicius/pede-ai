<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { computed, ref, onMounted } from 'vue'

interface User {
  id: number
  name: string
  email: string
  role: 'cliente' | 'admin'
}

const search = ref('')
const users = ref<User[]>([])

onMounted(()=>{
  const raw = localStorage.getItem('users')
  if(raw){ users.value = JSON.parse(raw) }
  else{
    users.value = [
      { id: 1, name: 'Lucas Ferreira', email: 'lucas@gmail.com', role: 'cliente' },
      { id: 2, name: 'Ana Paula', email: 'ana@gmail.com', role: 'cliente' },
      { id: 3, name: 'João Mendes', email: 'joao@gmail.com', role: 'admin' }
    ]
    localStorage.setItem('users', JSON.stringify(users.value))
  }
})

function saveUsers(){ localStorage.setItem('users', JSON.stringify(users.value)) }


function promoteToAdmin(id: number) {
  users.value = users.value.map(u => u.id === id ? { ...u, role: 'admin' } : u)
  saveUsers()
}

const filteredUsers = computed(() =>
  users.value.filter(u =>
    u.name.toLowerCase().includes(search.value.toLowerCase()) ||
    u.email.toLowerCase().includes(search.value.toLowerCase())
  )
)
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
          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100">
            <i class="las la-home text-xl"></i> Dashboard
          </a>

          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100">
            <i class="las la-box text-xl"></i> Produtos
          </a>

          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100">
            <i class="las la-shopping-bag text-xl"></i> Pedidos
          </a>

          <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg bg-green-50 text-green-600 font-semibold">
            <i class="las la-user text-xl"></i> Usuários
          </a>
        </nav>
      </div>

      <div class="p-4 border-t">
        <button class="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-all">
          <i class="las la-sign-out-alt text-xl"></i> Sair
        </button>
      </div>
    </aside>

    <!-- Conteúdo -->
    <main class="flex-1 p-10">
      <HeaderComponent />

      <!-- Header da página -->
      <div class="flex justify-between items-center mt-6 mb-8">
        <h2 class="text-2xl font-bold text-gray-800">Gerenciamento de Usuários</h2>
      </div>

      <!-- Caixa de busca -->
      <div class="mb-6 flex justify-end">
        <input
          v-model="search"
          type="text"
          placeholder="Buscar usuário..."
          class="px-4 py-2 border border-gray-300 rounded-lg w-72 focus:ring-2 focus:ring-green-400"
        />
      </div>

      <!-- Tabela -->
      <div class="bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden">
        <table class="w-full text-left">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="px-6 py-4 font-semibold text-gray-700">Nome</th>
              <th class="px-6 py-4 font-semibold text-gray-700">Email</th>
              <th class="px-6 py-4 font-semibold text-gray-700">Tipo</th>
              <th class="px-6 py-4 font-semibold text-gray-700 text-right">Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="user in filteredUsers"
              :key="user.id"
              class="border-b last:border-0 hover:bg-gray-50 transition"
            >
              <td class="px-6 py-4">{{ user.name }}</td>
              <td class="px-6 py-4 text-gray-600">{{ user.email }}</td>
              <td class="px-6 py-4">
                <span
                  v-if="user.role === 'admin'"
                  class="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700"
                >
                  Administrador
                </span>

                <span
                  v-else
                  class="px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-700"
                >
                  Cliente
                </span>
              </td>

              <td class="px-6 py-4 text-right">
                <button
                  v-if="user.role !== 'admin'"
                  @click="promoteToAdmin(user.id)"
                  class="px-4 py-2 rounded-lg text-sm font-semibold bg-green-500 text-white hover:bg-green-600 transition"
                >
                  Tornar Administrador
                </button>

                <span
                  v-else
                  class="text-green-600 font-semibold text-sm"
                >
                  ✓ Já é admin
                </span>
              </td>
            </tr>

            <tr v-if="filteredUsers.length === 0">
              <td colspan="4" class="px-6 py-6 text-center text-gray-500">
                Nenhum usuário encontrado.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>
