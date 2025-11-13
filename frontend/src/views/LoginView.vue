<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="w-full max-w-sm bg-white shadow-lg rounded-2xl p-8">
      <!-- Logo + Título -->
      <div class="flex flex-col items-center mb-8">
        <h1 class="text-3xl font-semibold text-gray-800">Pede.ai</h1>
      </div>

      <!-- Formulário -->
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-sm text-gray-600 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm text-gray-600 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition"
        >
          Login
        </button>
      </form>

      <!-- Links inferiores -->
      <div class="text-center mt-4">
        <a href="#" class="text-sm text-gray-500 hover:text-teal-500">Forgot Password?</a>
      </div>

      <div class="flex items-center my-4">
        <div class="grow border-t border-gray-300"></div>
        <span class="mx-2 text-gray-400 text-sm">OR</span>
        <div class="grow border-t border-gray-300"></div>
      </div>

      <div class="text-center">
        <a
          href="#"
          class="w-full block py-2 border border-gray-300 rounded-lg hover:bg-gray-100 font-semibold"
        >
          Sign Up
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  alert('Login executado!')
}
</script>
