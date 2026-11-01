<template>
  <header class="navbar">
    <div class="navbar__inner">
      <!-- Marca: logo + nome do site -->
      <router-link to="/" class="navbar__brand" @click="closeMenu">
        <img
          class="navbar__logo"
          src="../../assets/images/4-leaf.png"
          alt=""
          aria-hidden="true"
        />
        <span class="navbar__brand-name">Mochi<em>Lab</em></span>
      </router-link>

      <!-- Navegação principal (linha no desktop, drawer no mobile) -->
      <nav
        id="mobile-menu"
        class="navbar__links"
        :class="{ 'navbar__links--open': menuOpen }"
        aria-label="Navegação principal"
      >
        <template v-for="item in links" :key="item.label">
          <!-- Item simples -->
          <router-link
            v-if="item.to"
            :to="item.to"
            class="navbar__link"
            :class="{ 'navbar__link--active': isActive(item) }"
            @click="closeMenu"
          >
            {{ item.label }}
          </router-link>

          <!-- Grupo (accordion): botão + submenu -->
          <div
            v-else
            class="navbar__group"
            :class="{ 'navbar__group--open': openGroup === item.label }"
          >
            <button
              type="button"
              class="navbar__link navbar__group-toggle"
              :class="{ 'navbar__link--active': isGroupActive(item) }"
              :aria-expanded="openGroup === item.label"
              :aria-controls="groupId(item.label)"
              @click="toggleGroup(item.label)"
            >
              {{ item.label }}
              <OhVueIcon
                name="oi-chevron-down"
                class="navbar__chevron"
                aria-hidden="true"
              />
            </button>

            <div :id="groupId(item.label)" class="navbar__submenu">
              <router-link
                v-for="child in item.children"
                :key="child.to"
                :to="child.to"
                class="navbar__sublink"
                :class="{ 'navbar__sublink--active': isActive(child) }"
                @click="closeMenu"
              >
                {{ child.label }}
              </router-link>
            </div>
          </div>
        </template>

        <ThemeToggle class="navbar__theme" />
      </nav>

      <HamburgerButton
        :is-open="menuOpen"
        class="navbar__hamburger"
        @toggle="toggleMenu"
      />
    </div>

    <!-- Overlay do menu mobile: clique fora fecha.
         Fica em <body> porque o navbar tem backdrop-filter, o que o tornaria
         o elemento de referência de um filho `position: fixed`. -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="menuOpen" class="navbar__backdrop" @click="closeMenu" />
      </transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import HamburgerButton from './HamburgerButton.vue'

const route = useRoute()
const menuOpen = ref(false)

/** Grupo (accordion) aberto no momento; string vazia = todos fechados. */
const openGroup = ref('')

/**
 * Fonte única da navegação do site.
 * Para adicionar uma página nova, basta incluir uma entrada aqui.
 * `also` = prefixos extras que também devem marcar o link como ativo
 * (ex.: /post/:id pertence visualmente ao Blog).
 * Itens com `children` viram accordion (ex.: Ferramentas > Horários).
 */
const links = [
  { to: '/', label: 'Home' },
  { to: '/posts', label: 'Blog', also: ['/post'] },
  { to: '/sobre', label: 'Sobre' },
  {
    label: 'Ferramentas',
    children: [{ to: '/horarios', label: 'Horários' }],
  },
]

/** Verifica se o link corresponde à rota atual (inclusive sub-rotas). */
const isActive = (link) =>
  [link.to, ...(link.also || [])].some(
    (base) =>
      route.path === base ||
      (base !== '/' && route.path.startsWith(`${base}/`)),
  )

/** O grupo fica "ativo" se qualquer filho estiver ativo. */
const isGroupActive = (group) =>
  group.children.some((child) => isActive(child))

const groupId = (label) =>
  `nav-group-${label.toLowerCase().replace(/\s+/g, '-')}`

function toggleGroup(label) {
  openGroup.value = openGroup.value === label ? '' : label
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

// Fecha drawer e accordion ao trocar de rota
watch(() => route.fullPath, () => {
  closeMenu()
  openGroup.value = ''
})

// ESC fecha o drawer e o submenu aberto
function handleKeydown(event) {
  if (event.key !== 'Escape') return
  if (openGroup.value) openGroup.value = ''
  if (menuOpen.value) closeMenu()
}

// Clique fora do grupo fecha o submenu
function handleDocumentClick(event) {
  if (!openGroup.value) return
  if (!event.target.closest('.navbar__group')) openGroup.value = ''
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleDocumentClick)
})
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 200;
  /* fallback para navegadores sem color-mix() */
  background: var(--bg-navbar);
  background: color-mix(in srgb, var(--bg-navbar) 88%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 2px solid var(--border-navbar);
  box-shadow: 0 4px 16px var(--shadow);
}

.navbar__inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.6rem 1.5rem;
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* ---------- Marca ---------- */
.navbar__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.25rem 0.75rem 0.25rem 0.25rem;
  border-radius: 999px;
  color: var(--text-primary);
  text-decoration: none;
  transition:
    background-color 0.25s ease,
    transform 0.25s ease;
}

.navbar__brand:hover {
  background-color: var(--navbar-surface);
  transform: translateY(-1px);
}

.navbar__logo {
  width: 38px;
  height: 38px;
  object-fit: contain;
  transition: transform 0.9s ease;
}

.navbar__brand:hover .navbar__logo {
  transform: rotate(360deg);
}

.navbar__brand-name {
  font-family: 'Bellota', cursive;
  font-weight: 700;
  font-size: 1.35rem;
  line-height: 1;
  letter-spacing: 0.02em;
}

.navbar__brand-name em {
  font-style: normal;
  color: var(--title-primary);
}

/* ---------- Links ---------- */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.navbar__link {
  position: relative;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
}

.navbar__link:hover {
  background-color: var(--navbar-surface);
}

.navbar__link--active {
  background-color: var(--navbar-surface);
  color: var(--text-secondary);
}

/* Bolinha indicadora da página atual */
.navbar__link--active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0.1rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--secondary);
  transform: translateX(-50%);
}

.navbar__theme {
  margin-left: 0.5rem;
}

/* ---------- Grupo (accordion) ---------- */
.navbar__group {
  position: relative;
}

/* O botão do grupo herda o visual de `.navbar__link` */
.navbar__group-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  border: 0;
  background: none;
  cursor: pointer;
}

/* .navbar__group-toggle vem depois de `.navbar__link--active` no arquivo,
   então precisa de mais especificidade para o fundo "ativo" aparecer */
.navbar__group-toggle.navbar__link--active {
  background-color: var(--navbar-surface);
}

.navbar__chevron {
  font-size: 0.75em;
  transition: transform 0.25s ease;
}

.navbar__group--open .navbar__chevron {
  transform: rotate(180deg);
}

/* No grupo a bolinha do link ativo fica redundante com o chevron */
.navbar__group-toggle.navbar__link--active::after {
  display: none;
}

.navbar__submenu {
  position: absolute;
  top: calc(100% + 0.4em);
  left: 0;
  z-index: 102;
  display: none;
  flex-direction: column;
  gap: 0.15em;
  min-width: 180px;
  padding: 0.4em;
  background-color: var(--bg-navbar);
  border: var(--border-width) solid var(--border-navbar);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.navbar__group--open .navbar__submenu {
  display: flex;
}

.navbar__sublink {
  padding: 0.55em 0.85em;
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95em;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

.navbar__sublink:hover,
.navbar__sublink--active {
  background-color: var(--navbar-surface);
}

.navbar__backdrop {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ---------- Mobile ---------- */
@media (max-width: 768px) {
  .navbar__inner {
    padding: 0.5rem 1rem;
    min-height: 60px;
  }

  .navbar__links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 101;
    flex-direction: column;
    align-items: stretch;
    gap: 0.4rem;
    padding: 1rem 1rem 1.25rem;
    background: var(--bg-navbar);
    border-bottom: 2px solid var(--border-navbar);
    box-shadow: 0 12px 24px var(--shadow);
    /* escondido por padrão; só aparece com --open */
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition:
      transform 0.25s ease,
      opacity 0.25s ease;
  }

  .navbar__links--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .navbar__link {
    padding: 0.8rem 1rem;
    border-radius: 12px;
    font-size: 1.05rem;
  }

  /* No drawer o indicador vai para a direita, alinhado ao texto */
  .navbar__link--active::after {
    left: auto;
    right: 1rem;
    bottom: 50%;
    transform: translateY(50%);
  }

  /* Accordion no mobile: submenu expande inline, sem position absolute */
  .navbar__group {
    position: static;
  }

  .navbar__group-toggle {
    width: 100%;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    font-size: 1.05rem;
  }

  .navbar__group-toggle.navbar__link--active::after {
    display: none;
  }

  .navbar__submenu {
    position: static;
    min-width: 0;
    margin-top: 0.15em;
    padding: 0.15em 0 0.15em 0.9em;
    background: none;
    border: 0;
    box-shadow: none;
  }

  .navbar__sublink {
    display: block;
    padding: 0.7em 0.95em;
    font-size: 1rem;
  }

  .navbar__theme {
    align-self: flex-start;
    margin: 0.35rem 0 0;
  }

  .navbar__backdrop {
    display: block;
    position: fixed;
    inset: 0;
    /* abaixo do drawer (que vive no stacking context do navbar, z-index 200) */
    z-index: 150;
    background-color: rgba(0, 0, 0, 0.28);
  }
}

@media (max-width: 400px) {
  .navbar__brand-name {
    display: none;
  }
}
</style>
