<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Farmacotécnica I</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · FARMÁCIA · DF 125</p>
        <h1 class="intro__title">Farmacotécnica I</h1>
        <p class="intro__lead">
          Resumos das aulas teóricas e práticas da disciplina: conceitos e classificação das formas
          farmacêuticas, operações farmacêuticas, conservação e acondicionamento, adjuvantes e
          corretivos, cálculos farmacêuticos e as preparações líquidas — soluções simples e
          extrativas, xaropes, elixires, alcóoleos, colírios, otofármacos e errinos.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Prof. Antonio Luengo Garcia</span>
          <span class="intro__chip">60 h · 30 teóricas + 30 práticas</span>
          <span class="intro__chip">5º período · 2026</span>
        </div>
      </header>

      <aside class="study-note">
        <h2>Como usar</h2>
        <p>
          Cada assunto tem uma página própria, com índice, cartões curtos e tabelas de referência
          rápida. As páginas seguem a ordem das unidades do programa de ensino: primeiro os tópicos
          gerais (classificação, operações, adjuvantes, corretivos, cálculos), depois as preparações
          líquidas e, por fim, as preparações de aplicação em mucosas.
        </p>
        <p class="study-note__source">
          Base: material das aulas do Prof. Antonio Luengo Garcia (UNIFAL-MG, 2026) e literatura
          farmacotécnica clássica (Farmacopeia Brasileira, Prista, Ansel, Remington, Fonseca &amp;
          Prista, Manual de Equivalência e Correção do CFF).
        </p>
      </aside>

      <section class="subject" aria-labelledby="subject-gerais">
        <h2 id="subject-gerais">Unidade I — Tópicos gerais</h2>

        <div class="topic-grid">
          <router-link
            v-for="topic in generalTopics"
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
      </section>

      <section class="subject" aria-labelledby="subject-liquidas">
        <h2 id="subject-liquidas">Unidade II — Preparações líquidas</h2>

        <div class="topic-grid">
          <router-link
            v-for="topic in liquidTopics"
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
      </section>

      <section class="subject" aria-labelledby="subject-pratica">
        <h2 id="subject-pratica">Aulas práticas</h2>

        <div class="topic-grid">
          <router-link
            v-for="topic in practicalTopics"
            :key="topic.to"
            :to="topic.to"
            class="topic-card"
          >
            <span class="topic-card__tag">{{ topic.tag }}</span>
            <h3 class="topic-card__title">{{ topic.title }}</h3>
            <p>{{ topic.description }}</p>
            <span class="topic-card__cta">Abrir relatório →</span>
          </router-link>
        </div>
      </section>

      <nav class="topic-nav" aria-label="Navegação entre resumos">
        <router-link class="topic-nav__link" to="/resumins">
          <span>Voltar</span>
          ← Todos os resumos
        </router-link>
        <router-link class="topic-nav__link" to="/resumins/farmacotec1/classificacao">
          <span>Começar por</span>
          Classificação dos medicamentos →
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'

const generalTopics = [
  {
    to: '/resumins/farmacotec1/classificacao',
    tag: 'Teórica · 10 tópicos',
    title: 'Classificação dos medicamentos',
    description:
      'Forma e fórmula farmacêutica, terminologia oficial, Farmacopeia Brasileira, critérios de classificação, medicamentos tópicos e anatomia da fórmula.',
  },
  {
    to: '/resumins/farmacotec1/conservacao',
    tag: 'Teórica · 8 tópicos',
    title: 'Operações, conservação e acondicionamento',
    description:
      'Operações gerais e específicas, fatores extrínsecos e intrínsecos de degradação, embalagem primária/secundária/terciária, materiais de envase e controle de qualidade.',
  },
  {
    to: '/resumins/farmacotec1/adjuvantes',
    tag: 'Teórica · 7 tópicos',
    title: 'Adjuvantes farmacotécnicos',
    description:
      'Conservantes, antioxidantes hidro e lipossolúveis, corretores de pH, anti-hidrolíticos e solubilizantes, com concentrações usuais e incompatibilidades.',
  },
  {
    to: '/resumins/farmacotec1/corretivos',
    tag: 'Teórica · 9 tópicos',
    title: 'Corretivos de cor, aroma e paladar',
    description:
      'Corantes e lacas, grupos químicos e classes FD&C, bicronismo e descoramento, edulcorantes e seu poder adoçante, aromatizantes e métodos de correção de sabor.',
  },
  {
    to: '/resumins/farmacotec1/calculos',
    tag: 'Teórica · 9 tópicos',
    title: 'Cálculos farmacêuticos',
    description:
      'Diluição (Q₁C₁ = Q₂C₂), sistema métrico, UI/UTR, fator de equivalência sal/base, fator de correção de teor e umidade e correção de minerais quelatos.',
  },
]

const liquidTopics = [
  {
    to: '/resumins/farmacotec1/solucoes',
    tag: 'Líquidos · 8 tópicos',
    title: 'Soluções simples',
    description:
      'Dissolução e solubilidade, modos de expressar concentração, tipos de soluções, água potável/purificada/destilada/deionizada/osmose reversa e solventes não aquosos.',
  },
  {
    to: '/resumins/farmacotec1/extrativas',
    tag: 'Líquidos · 10 tópicos',
    title: 'Soluções extrativas e extratos',
    description:
      'Maceração, digestão, infusão, decocção, percolação, diacolação, evaculação e Soxhlet; classificação dos extratos e padronização do extrato fluido.',
  },
  {
    to: '/resumins/farmacotec1/xaropes',
    tag: 'Líquidos · 8 tópicos',
    title: 'Xaropes, melitos e elixires',
    description:
      'Xarope simples da FB, açúcar invertido, clarificação, ensaios (densidade, polarimetria, viscosidade), xarope dietético, melitos, elixires e linctus.',
  },
  {
    to: '/resumins/farmacotec1/alcooleos',
    tag: 'Líquidos · 7 tópicos',
    title: 'Alcóoleos, gliceróleos e óleos',
    description:
      'Soluções alcoólicas, tinturas e alcoolaturas, gliceróleos, eteróleos e oleóleos — com ensaios, alterações e conservação (hidrólise e ranço).',
  },
  {
    to: '/resumins/farmacotec1/colirios',
    tag: 'Líquidos · 6 tópicos',
    title: 'Colírios',
    description:
      'Requisitos das preparações oftálmicas, isotonia pela fórmula de Lumière-Chavrotier, tampões, adjuvantes e sequência de preparo e esterilização.',
  },
  {
    to: '/resumins/farmacotec1/otologicos',
    tag: 'Líquidos · 6 tópicos',
    title: 'Otofármacos e errinos',
    description:
      'Anatomia do ouvido e das fossas nasais, otites externas e médias, cerumenolíticos, efeito de fármacos sobre os cílios e veículos compatíveis.',
  },
]

const practicalTopics = [
  {
    to: '/resumins/farmacotec1/relatorios',
    tag: 'Prática · 2 relatórios',
    title: 'Relatórios de aulas práticas',
    description:
      'Relatório 1 — solução fluoretada de uso diário; Relatório 2 — xarope simples e xarope medicamentoso, com cálculos, técnica, ensaios e discussão.',
  },
]
</script>
