<template>
  <div class="resumins">
    <div class="page-shell">
      <header class="intro">
        <p class="intro__eyebrow">FERRAMENTAS · RESUMINS</p>
        <h1 class="intro__title">Resumins</h1>
        <p class="intro__lead">
          Resumos de estudo organizados por <strong>nível de ensino</strong> e, dentro de cada
          nível, por disciplina. Os materiais do <strong>ensino médio</strong> trazem ideias
          principais, fórmulas essenciais e exemplos resolvidos; os do
          <strong>ensino superior</strong> consolidam o conteúdo das aulas da UNIFAL-MG em uma
          página de revisão.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Ensino médio · Química</span>
          <span class="intro__chip">Ensino superior · UNIFAL-MG</span>
          <span class="intro__chip">Por assunto e por disciplina</span>
        </div>
      </header>

      <aside class="study-note">
        <h2>Como usar</h2>
        <p>
          Cada resumo é uma página independente, com índice próprio e cartões curtos para revisar.
          Os tópicos seguem, em geral, a ordem vista em sala de aula, mas não substituem o material
          didático nem a resolução de exercícios.
        </p>
        <p class="study-note__source">Para começar, escolha um nível de ensino abaixo.</p>
      </aside>

      <section
        v-for="nivel in niveis"
        :id="nivel.id"
        :key="nivel.id"
        class="subject"
        :aria-labelledby="`${nivel.id}-titulo`"
      >
        <h2 :id="`${nivel.id}-titulo`">{{ nivel.titulo }}</h2>
        <p class="subject__lead">{{ nivel.descricao }}</p>

        <div v-for="grupo in nivel.grupos" :key="grupo.disciplina" class="subject__group">
          <h3 class="subject__group-title">{{ grupo.disciplina }}</h3>

          <div class="topic-grid" :class="{ 'topic-grid--single': grupo.topicos.length === 1 }">
            <router-link
              v-for="topic in grupo.topicos"
              :key="topic.to"
              :to="topic.to"
              class="topic-card"
            >
              <span class="topic-card__tag">{{ topic.tag }}</span>
              <h4 class="topic-card__title">{{ topic.title }}</h4>
              <p>{{ topic.description }}</p>
              <span class="topic-card__cta">Abrir resumo →</span>
            </router-link>
          </div>
        </div>

        <p class="coming-soon">{{ nivel.nota }}</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'

const niveis = [
  {
    id: 'subject-ensino-medio',
    titulo: 'Ensino médio',
    descricao:
      'Resumos de química do ensino médio: ideias principais, fórmulas essenciais e exemplos resolvidos.',
    nota: 'Novos resumos do ensino médio serão adicionados aqui.',
    grupos: [
      {
        disciplina: 'Química',
        topicos: [
          {
            to: '/resumins/ensinomedio/quimica/equilibrio',
            tag: 'Ensino médio',
            title: 'Equilíbrio químico',
            description:
              'Reações reversíveis, princípio de Le Chatelier, constante de equilíbrio (K e Q) e aplicações em solução.',
          },
          {
            to: '/resumins/ensinomedio/quimica/cinetica',
            tag: 'Ensino médio',
            title: 'Cinética química',
            description:
              'Velocidade das reações, energia de ativação, fatores que influenciam e lei da velocidade.',
          },
        ],
      },
    ],
  },
  {
    id: 'subject-unifal',
    titulo: 'UNIFAL-MG · Ensino superior',
    descricao:
      'Resumos do curso de Farmácia da UNIFAL-MG, agrupados por disciplina — das aulas teóricas e práticas aos guias de estudo por assunto.',
    nota: 'Novos resumos do ensino superior serão adicionados aqui.',
    grupos: [
      {
        disciplina: 'Farmacovigilância',
        topicos: [
          {
            to: '/resumins/unifal/farmacovigilancia',
            tag: 'Guia por assunto',
            title: 'Farmacovigilância — resumos por assunto',
            description:
              'Resumo geral, reações adversas e sua classificação, farmacovigilância hospitalar (busca ativa e monitorização intensiva), escalas e avaliação de causalidade, e as obrigações da indústria na RDC 406/2020 e na IN 63/2020.',
          },
        ],
      },
      {
        disciplina: 'Operações Unitárias',
        topicos: [
          {
            to: '/resumins/unifal/operacoes',
            tag: 'Resumo geral',
            title: 'Operações Unitárias — resumo geral',
            description:
              'Operação × processo unitário, classificação, fluidos e sólidos particulados, cominuição, mistura, sedimentação, transferência de massa, destilação e extração.',
          },
          {
            to: '/resumins/unifal/operacoes/filtracao',
            tag: 'Exercícios resolvidos',
            title: 'Operações Unitárias — filtração resolvida',
            description:
              'Equação de filtração a pressão constante, projeto de filtro de tambor rotatório e determinação da compressibilidade da torta a partir de dados experimentais.',
          },
        ],
      },
      {
        disciplina: 'Farmacotécnica I',
        topicos: [
          {
            to: '/resumins/unifal/farmacotec1',
            tag: 'Temas, práticas e formas',
            title: 'Farmacotécnica I — resumos por tema',
            description:
              'Classificação dos medicamentos, operações, conservação e acondicionamento, adjuvantes, corretivos, cálculos farmacêuticos, soluções simples e extrativas, xaropes, alcóoleos, colírios, otofármacos e errinos — além de 2 relatórios de aulas práticas e da análise crítica de 8 formas farmacêuticas.',
          },
        ],
      },
    ],
  },
]
</script>
