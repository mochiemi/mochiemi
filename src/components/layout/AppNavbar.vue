<template>
  <nav class="navbar">
    <div class="nav-container">
      <a href="/">
        <img class="nav-img" src="../../assets/images/4-leaf.png" />
      </a>
      <HamburgerButton
        :is-open="menuOpen"
        class="nav-hamburger"
        @toggle="menuOpen = !menuOpen"
      />

      <div
        id="mobile-menu"
        class="nav-links"
        :class="{ 'nav-links--open': menuOpen }"
      >
        <router-link to="/test" class="nav-link" @click="menuOpen = false">
          Test
        </router-link>
        <router-link to="/html" class="nav-link" @click="menuOpen = false">
  HTML
</router-link>
        <ThemeToggle />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import HamburgerButton from './HamburgerButton.vue'

const menuOpen = ref(false)
</script>

<style scoped>
.navbar {
  background: var(--bg-navbar);
  padding: 0.5em 0;
  box-shadow: 0 4px 12px var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 2px dashed var(--border-navbar);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.nav-img {
  max-width: 10%;
  transition: all 2s ease;
}

.nav-img:hover {
  transform: rotate(360deg);
}


.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-link {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.5em 1em;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: var(--navbar-surface);
  color: var(--text-secondary);
}


@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background-color: var(--bg-navbar);
    border-bottom: 2px dashed var(--border-navbar);
    padding: 1em 1.5em;
    gap: 0.75em;
    box-shadow: 0 8px 16px var(--shadow);
    transform: translateY(-10px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    z-index: 99;
  }

  .nav-links--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-links .nav-link {
    padding: 0.75em 1em;
    border-radius: 8px;
  }

  .nav-links .nav-link:hover,
  .nav-links .nav-link.router-link-active {
    background-color: var(--navbar-surface);
  }
}
</style>
