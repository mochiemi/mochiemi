<template>
  <div class="resumins">
    <div class="page-shell">
      <header class="intro">
        <p class="intro__eyebrow">FERRAMENTAS · RESUMINS</p>
        <h1 class="intro__title">Resumins</h1>
        <p class="intro__lead">
          Resumos de estudo organizados por disciplina. O conteúdo segue, em
          geral, o currículo do <strong>ensino médio</strong>: ideias
          principais, fórmulas essenciais e exemplos resolvidos.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Ensino médio</span>
          <span class="intro__chip">Química · 2 resumos disponíveis</span>
        </div>
      </header>

      <aside class="study-note">
        <h2>Como usar</h2>
        <p>
          Cada resumo é uma página independente, com índice próprio e cartões
          curtos para revisar. Os tópicos seguem, em geral, a ordem vista em
          sala de aula, mas não substituem o material didático nem a resolução
          de exercícios.
        </p>
        <p class="study-note__source">
          Para começar, escolha um assunto abaixo.
        </p>
      </aside>

      <section class="subject" aria-labelledby="subject-quimica">
        <h2 id="subject-quimica">Química</h2>

        <div class="topic-grid">
          <router-link
            v-for="topic in chemistryTopics"
            :key="topic.to"
            :to="topic.to"
            class="topic-card"
          >
            <span class="topic-card__tag">
              Química · {{ topic.count }} tópicos
            </span>
            <h3 class="topic-card__title">{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
            <span class="topic-card__cta">Abrir resumo →</span>
          </router-link>
        </div>

        <p class="coming-soon">
          Novos resumos de química e de outras disciplinas serão adicionados
          aqui.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'

const chemistryTopics = [
  {
    to: '/resumins/quimica/equilibrio',
    title: 'Equilíbrio químico',
    count: 5,
    description:
      'Reações reversíveis, princípio de Le Chatelier, constante de equilíbrio (K e Q) e aplicações em solução.',
  },
  {
    to: '/resumins/quimica/cinetica',
    title: 'Cinética química',
    count: 5,
    description:
      'Velocidade das reações, energia de ativação, fatores que influenciam e lei da velocidade.',
  },
]
</script>
