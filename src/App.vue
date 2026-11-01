<template>
  <div id="app">
    <AppNavbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
    <ToTop />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

import AppNavbar from '@/components/layout/AppNavbar.vue'
import Footer from '@/components/layout/Footer.vue'
import ToTop from '@/components/layout/ToTop.vue'

import '@/assets/styles/variables.css'
import '@/assets/styles/global.css'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initializeTheme()
})
</script>

<style>
#app {
  min-height: 100vh;
  transition: all 0.3s ease;
}

.main-content {
  min-height: calc(100vh - 80px);
  transition: all 0.3s ease;
}
</style>
