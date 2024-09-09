<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/app/AppHeader.vue'
import AppAbout from './components/app/AppAbout.vue'
import AppGallery from './components/app/AppGallery.vue'
import AppVariables from './components/app/AppVariables.vue'
import AppHelp from './components/app/AppHelp.vue'
import AppFooter from './components/app/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <AppAbout />
  <AppGallery />
  <AppVariables />
  <AppHelp />
  <AppFooter />
</template>
