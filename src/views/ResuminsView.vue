<template>
  <div class="resumins">
    <div class="page-shell">
      <header class="intro">
        <p class="intro__eyebrow">FERRAMENTAS · RESUMINS</p>
        <h1 class="intro__title">Resumins</h1>
        <p class="intro__lead">
          Resumos de estudo organizados por disciplina e por curso. Os materiais do
          <strong>ensino médio</strong> trazem ideias principais, fórmulas essenciais e exemplos
          resolvidos; os do <strong>ensino superior</strong> consolidam o conteúdo das aulas em uma
          página de revisão.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Ensino médio · Química</span>
          <span class="intro__chip">Ensino superior · UNIFAL-MG</span>
          <span class="intro__chip">18 resumos disponíveis</span>
        </div>
      </header>

      <aside class="study-note">
        <h2>Como usar</h2>
        <p>
          Cada resumo é uma página independente, com índice próprio e cartões curtos para revisar.
          Os tópicos seguem, em geral, a ordem vista em sala de aula, mas não substituem o material
          didático nem a resolução de exercícios.
        </p>
        <p class="study-note__source">Para começar, escolha um assunto abaixo.</p>
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
            <span class="topic-card__tag"> Química · {{ topic.count }} tópicos </span>
            <h3 class="topic-card__title">{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
            <span class="topic-card__cta">Abrir resumo →</span>
          </router-link>
        </div>

        <p class="coming-soon">Novos resumos de química serão adicionados aqui.</p>
      </section>

      <section class="subject" aria-labelledby="subject-unifal">
        <h2 id="subject-unifal">UNIFAL-MG</h2>

        <div class="topic-grid">
          <router-link
            v-for="topic in unifalTopics"
            :key="topic.to"
            :to="topic.to"
            class="topic-card"
          >
            <span class="topic-card__tag">{{ topic.tag }}</span>
            <h3 class="topic-card__title">{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
            <span class="topic-card__cta">Abrir resumo →</span>
          </router-link>
        </div>

        <p class="coming-soon">
          Resumos do curso de Farmácia da UNIFAL-MG, a partir do material das aulas.
        </p>
      </section>

      <section class="subject" aria-labelledby="subject-farmacotec1">
        <h2 id="subject-farmacotec1">UNIFAL-MG · Farmacotécnica I</h2>

        <div class="topic-grid">
          <router-link
            v-for="topic in farmacotecTopics"
            :key="topic.to"
            :to="topic.to"
            class="topic-card"
          >
            <span class="topic-card__tag">{{ topic.tag }}</span>
            <h3 class="topic-card__title">{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
            <span class="topic-card__cta">Abrir resumo →</span>
          </router-link>
        </div>

        <p class="coming-soon">
          Disciplina DF 125 — 13 páginas: tópicos gerais, preparações líquidas e relatórios de aulas
          práticas.
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

const unifalTopics = [
  {
    to: '/resumins/unifal/farmacovigilancia/resumogeral',
    title: 'Farmacovigilância — resumo geral',
    tag: 'Farmácia · 8 tópicos',
    description:
      'Conceito e histórico, evento adverso × RAM × erro de medicação, uso racional e automedicação, RWE e a base regulatória (RDC 406/2020 e IN 63/2020).',
  },
  {
    to: '/resumins/unifal/operacoes',
    title: 'Operações Unitárias — resumo geral',
    tag: 'Farmácia · 12 tópicos',
    description:
      'Operação × processo unitário, classificação, fluidos e sólidos particulados, cominuição, mistura, sedimentação, transferência de massa, destilação e extração.',
  },
  {
    to: '/resumins/unifal/operacoes/filtracao',
    title: 'Operações Unitárias — filtração resolvida',
    tag: 'Farmácia · 2 exercícios',
    description:
      'Equação de filtração a pressão constante, projeto de filtro de tambor rotatório e determinação da compressibilidade da torta a partir de dados experimentais.',
  },
]

const farmacotecTopics = [
  {
    to: '/resumins/farmacotec1',
    title: 'Farmacotécnica I — resumos por tema',
    tag: 'Farmácia · 13 páginas',
    description:
      'Classificação dos medicamentos, operações, conservação e acondicionamento, adjuvantes, corretivos, cálculos farmacêuticos, soluções simples e extrativas, xaropes, alcóoleos, colírios, otofármacos e errinos — além de 2 relatórios de aulas práticas.',
  },
]
</script>
