<template>
  <footer class="site-footer">
    <div class="footer-container">
      <p class="copyright-text">
        &copy; 2025-{{ currentYear }} Mochi Lab
        <a href="mailto:tiemi.suyama@gmail.com" class="email-link">
          tiemi.suyama@gmail.com
        </a>
      </p>
      <div class="quick-links">
        <router-link to="/" class="quick-link-text">Home</router-link>
        <span class="quick-link-separator">•</span>
        <router-link to="/test" class="quick-link-text">Test</router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.site-footer {
  background-color: var(--bg-navbar);
  border-top: 1px solid var(--rose);
  padding: 1rem 0;
  margin-top: 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright-text {
  color: var(--text-secondary);
  font-size: 0.9em;
  margin: 0;
}

.email-link {
  color: var(--link-footer);
  text-decoration: none;
  margin-left: 0.5em;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: var(--text-primary);
  text-decoration: underline;
}

.quick-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quick-link-text {
  color: var(--link-footer);
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.quick-link-text:hover {
  color: var(--text-primary);
  text-decoration: underline;
}

.quick-link-separator {
  color: var(--border-strong);
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
