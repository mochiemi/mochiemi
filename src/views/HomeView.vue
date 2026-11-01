<template>
  <div class="home-view">
    <div class="home-container">

      <BaseCard class="home-card home-card--welcome">
        <div class="welcome-content">
          <h1 class="welcome-title">Bem-vindo! 🌸</h1>
          <p class="welcome-date">
            Hoje é <strong>{{ weekday }}</strong>, {{ day }} de {{ month }} de {{ year }}.
          </p>
          <p class="welcome-subtitle">Que seu dia seja leve e produtivo.</p>
        </div>
      </BaseCard>

      <BaseCard class="home-card home-card--about">
        <div class="about-content">
          <div class="about-image">
            <img
              src="../assets/images/mochimain.png"
              alt="Mochiemi"
              class="about-img"
            />
          </div>
          <div class="about-text">
            <h2 class="about-title"><img src="../assets/images/4-leaf.png" alt="Logo" class="logo-img">Mochiemi Lab</h2>
            <p>
              Aqui é apenas um laboratório pessoal onde crio ferramentas web, registro sobre ideias, entre outras coisas aleatórias que uma mente plural pode criar.<br />
              Esta aqui ao lado é a Mochiemi, uma das personas e a idealizadora deste espaço. Tenho outro semelhante, que logo irá ser desativado.
            </p>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { BaseCard } from '@/components/ui'

const now = new Date()

const weekday = computed(() => {
  const days = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ]
  return days[now.getDay()]
})

const day = computed(() => now.getDate())

const month = computed(() => {
  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ]
  return months[now.getMonth()]
})

const year = computed(() => now.getFullYear())
</script>

<style scoped>
.home-view {
  padding: 2em 1em;
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5em;
  align-items: stretch;
}

.home-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
}

.home-card :deep(.base-card__body) {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em;
}

.welcome-content {
  text-align: center;
}

.welcome-title {
  font-family: 'Bellota', cursive;
  font-size: 2em;
  color: var(--title-secondary);
  margin: 0 0 0.5em;
  background: none;
  border: none;
  padding: 0;
}

.welcome-date {
  font-size: 1.25em;
  color: var(--text-primary);
  margin: 0.5em 0;
}

.welcome-date strong {
  color: var(--strong-rose);
}

.welcome-subtitle {
  font-size: 1em;
  color: var(--text-secondary);
  margin-top: 0.75em;
}

.about-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5em;
  width: 100%;
}

.about-image {
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-img {
  width: 100%;
  max-width: 180px;
  height: auto;
  object-fit: contain;
  transition: transform 0.6s ease;
}

.about-img:hover {
  transform: scale(1.5);
}

.logo-img {
  transform: scale(0.25)
}

.about-text {
  flex: 1;
}

.about-title {
  font-family: 'Bellota', cursive;
  font-size: 2em;
  color: var(--title-secondary);
  margin: 0 0 0.5em;
  background: none;
  border: none;
  padding: 0;
}

.about-text p {
  font-size: 1em;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}


@media (max-width: 768px) {
  .home-container {
    grid-template-columns: 1fr;
  }

  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .about-image {
    flex: none;
  }

  .welcome-title {
    font-size: 1.6em;
  }

  .about-title {
    font-size: 1.4em;
  }
}
</style>
