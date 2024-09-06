<script setup lang="ts">
import { ref } from 'vue'
import Textarea from 'primevue/textarea'
import InputMask from 'primevue/inputmask'

const value = ref('')
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold text-gray-500">Hello</h1>
    <Textarea />

    <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
  </main>
</template>
