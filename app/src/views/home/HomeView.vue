<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue'
import HomeAbout from './ui/HomeAbout.vue'
import HomeGallery from './ui/HomeGallery.vue'
import HomeVariables from './ui/HomeVariables.vue'
import HomeHelp from './ui/HomeHelp.vue'
</script>

<template>
  <MainLayout>
    <div class="bg-[url('/images/background.jpg')] h-[50vh] bg-center bg-cover bg-no-repeat" />
    <HomeAbout />
    <HomeGallery />
    <HomeVariables />
    <HomeHelp />
  </MainLayout>
</template>
