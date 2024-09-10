<script setup lang="ts">
import TheHeader from '~/components/app/TheHeader.vue'
import TheFooter from '~/components/app/TheFooter.vue'
</script>

<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>
