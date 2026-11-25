<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>UNIFAL-MG</span>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/unifal/farmacotec1">Farmacotécnica I</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Formas farmacêuticas</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · ANÁLISE CRÍTICA</p>
        <h1 class="intro__title">Formas farmacêuticas, componente por componente</h1>
        <p class="intro__lead">
          Oito preparações manipuladas na disciplina, cada uma aberta em quatro perguntas: o que é,
          como se prepara, por que cada insumo está na fórmula e o que pode dar errado. É o mesmo
          roteiro de um relatório técnico — e o mesmo raciocínio cobrado na bancada e na prova.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">8 módulos</span>
          <span class="intro__chip">Fórmulas quali-quantitativas</span>
          <span class="intro__chip">Pontos críticos de controle</span>
        </div>
      </header>

      <aside class="study-note">
        <h2>Como ler cada módulo</h2>
        <p>
          Toda fórmula responde a quatro perguntas: <strong>quem é o ativo</strong> (e em que
          concentração), <strong>quem o protege</strong> (antioxidantes, conservantes, tampões),
          <strong>quem o veicula</strong> (veículo, co-solvente, suspensor) e
          <strong>quem o corrige</strong> (edulcorante, aromatizante, corante). Quem sabe responder
          às quatro não decora fórmula: lê a fórmula.
        </p>
        <p class="study-note__source">
          Base: relatórios técnicos de formas farmacêuticas da disciplina DF 125 (UNIFAL-MG).
        </p>
      </aside>

      <div class="lesson">
        <article class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">00</span>
            <div>
              <p class="card-heading__eyebrow">Chave de leitura</p>
              <h2>Anatomia de uma fórmula farmacêutica</h2>
            </div>
          </header>
          <p>
            Em qualquer forma farmacêutica, os componentes se distribuem em quatro ou cinco papéis.
            A mesma substância pode mudar de papel conforme a forma: a glicerina é co-solvente no
            elixir, umectante na suspensão e veículo viscoso no otofármaco.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Funções farmacotécnicas e onde aparecem nos módulos
              </caption>
              <thead>
                <tr>
                  <th scope="col">Papel</th>
                  <th scope="col">Pergunta que responde</th>
                  <th scope="col">Exemplos nos módulos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Fármaco ativo</th>
                  <td>Qual é o efeito terapêutico e em que dose?</td>
                  <td>Iodeto de potássio, clorfeniramina, paracetamol, nafazolina</td>
                </tr>
                <tr>
                  <th scope="row">Veículo</th>
                  <td>Em que meio o ativo será dissolvido ou disperso?</td>
                  <td>Água purificada, água para injetáveis, etanol 70%, glicerina</td>
                </tr>
                <tr>
                  <th scope="row">Estabilizante</th>
                  <td>O que impede oxidação, hidrólise, precipitação ou contaminação?</td>
                  <td>Tiossulfato, EDTA, ácido cítrico, tampões fosfato e borato, parabenos</td>
                </tr>
                <tr>
                  <th scope="row">Corretivo</th>
                  <td>Como tornar a preparação palatável e apresentável?</td>
                  <td>Sacarose, sorbitol, sacarina, essências, amaranto</td>
                </tr>
                <tr>
                  <th scope="row">Auxiliar de processo</th>
                  <td>O que facilita fabricar, clarificar ou redispersar?</td>
                  <td>Talco (filtração), CMC-Na (suspensão), glicerina (umectação)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Nos relatórios, a <strong>fórmula quali-quantitativa</strong> vem sempre com nome usual,
            código DCB, concentração, quantidade para 100 mL e função. A análise crítica é a defesa
            técnica de cada linha dessa tabela.
          </p>
        </article>

        <section class="subject" aria-labelledby="formas-solucoes">
          <h2 id="formas-solucoes">Soluções</h2>
          <div class="topic-grid">
            <router-link
              v-for="topic in solutionTopics"
              :key="topic.to"
              :to="topic.to"
              class="topic-card"
            >
              <span class="topic-card__tag">{{ topic.tag }}</span>
              <h3 class="topic-card__title">{{ topic.title }}</h3>
              <p>{{ topic.description }}</p>
              <span class="topic-card__cta">Abrir análise →</span>
            </router-link>
          </div>
        </section>

        <section class="subject" aria-labelledby="formas-edulcoradas">
          <h2 id="formas-edulcoradas">Preparações edulcoradas</h2>
          <div class="topic-grid">
            <router-link
              v-for="topic in sweetTopics"
              :key="topic.to"
              :to="topic.to"
              class="topic-card"
            >
              <span class="topic-card__tag">{{ topic.tag }}</span>
              <h3 class="topic-card__title">{{ topic.title }}</h3>
              <p>{{ topic.description }}</p>
              <span class="topic-card__cta">Abrir análise →</span>
            </router-link>
          </div>
        </section>

        <section class="subject" aria-labelledby="formas-extrativas">
          <h2 id="formas-extrativas">Soluções extrativas</h2>
          <div class="topic-grid">
            <router-link
              v-for="topic in extractiveTopics"
              :key="topic.to"
              :to="topic.to"
              class="topic-card"
            >
              <span class="topic-card__tag">{{ topic.tag }}</span>
              <h3 class="topic-card__title">{{ topic.title }}</h3>
              <p>{{ topic.description }}</p>
              <span class="topic-card__cta">Abrir análise →</span>
            </router-link>
          </div>
        </section>

        <section class="subject" aria-labelledby="formas-mucosas">
          <h2 id="formas-mucosas">Aplicação em mucosas</h2>
          <div class="topic-grid">
            <router-link
              v-for="topic in mucosaTopics"
              :key="topic.to"
              :to="topic.to"
              class="topic-card"
            >
              <span class="topic-card__tag">{{ topic.tag }}</span>
              <h3 class="topic-card__title">{{ topic.title }}</h3>
              <p>{{ topic.description }}</p>
              <span class="topic-card__cta">Abrir análise →</span>
            </router-link>
          </div>
        </section>

        <section class="subject" aria-labelledby="formas-dispersas">
          <h2 id="formas-dispersas">Sistemas dispersos</h2>
          <div class="topic-grid">
            <router-link
              v-for="topic in dispersionTopics"
              :key="topic.to"
              :to="topic.to"
              class="topic-card"
            >
              <span class="topic-card__tag">{{ topic.tag }}</span>
              <h3 class="topic-card__title">{{ topic.title }}</h3>
              <p>{{ topic.description }}</p>
              <span class="topic-card__cta">Abrir análise →</span>
            </router-link>
          </div>
        </section>

        <aside class="study-note">
          <h2>Fio condutor dos oito módulos</h2>
          <ul class="key-points">
            <li>
              <strong>Solubilidade manda no processo.</strong> Se dissolve, a ordem é dissolver; se
              não dissolve, a ordem é umectar, suspender e estabilizar a dispersão.
            </li>
            <li>
              <strong>Temperatura é variável crítica</strong> em tudo que tem açúcar, aroma volátil
              ou fármaco termolábil.
            </li>
            <li>
              <strong>pH decide estabilidade</strong>: do iodo (7–9), da clorfeniramina (4–5), do
              zinco (6,5–6,8) e da nafazolina (6,4–6,8).
            </li>
            <li>
              <strong>Contaminação se combate por barreira</strong> — conservante em preparações
              multidose, filtração 0,22 µm e envase asséptico nas estéreis.
            </li>
          </ul>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1">
            <span>Voltar</span>
            ← Farmacotécnica I
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/formas/iodeto">
            <span>Começar por</span>
            Solução de iodeto de potássio →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'

const solutionTopics = [
  {
    to: '/resumins/unifal/farmacotec1/formas/iodeto',
    tag: 'Solução oral · 4 componentes',
    title: 'Iodeto de potássio 10% m/v',
    description:
      'Antioxidantes antes do ativo, filtração clarificante e vidro âmbar: a química de proteger um sal oxidável.',
  },
]

const sweetTopics = [
  {
    to: '/resumins/unifal/farmacotec1/formas/xarope',
    tag: 'Xarope · 7 componentes',
    title: 'Xarope de maleato de clorfeniramina',
    description:
      'Sacarose a 65% como edulcorante e conservante osmótico, controle de temperatura contra a inversão e ensaios de densidade e polarimetria.',
  },
  {
    to: '/resumins/unifal/farmacotec1/formas/elixir',
    tag: 'Elixir · 9 componentes',
    title: 'Elixir de paracetamol 40 mg/mL',
    description:
      'Co-solvência ternária água–etanol–polióis para um fármaco pouco solúvel, adição cruzada das fases e limites do teor alcoólico.',
  },
]

const extractiveTopics = [
  {
    to: '/resumins/unifal/farmacotec1/formas/tintura',
    tag: 'Extrato · percolação',
    title: 'Tintura de beladona 10%',
    description:
      'Extração sólido-líquido exaustiva: cominuição, imbibição, velocidade de gotejamento e prova de esgotamento com reagente de Mayer.',
  },
]

const mucosaTopics = [
  {
    to: '/resumins/unifal/farmacotec1/formas/colirio',
    tag: 'Oftálmico · 5 componentes',
    title: 'Colírio de sulfato de zinco 0,25%',
    description:
      'Esterilidade por filtração 0,22 µm, isotonia calculada e tampão borato que mantém o zinco solúvel em pH compatível com a córnea.',
  },
  {
    to: '/resumins/unifal/farmacotec1/formas/otologico',
    tag: 'Otológico · 3 componentes',
    title: 'Cerumenolítico de carbonato de sódio',
    description:
      'Saponificação do cerume com liberação de CO₂ e glicerina como veículo de retenção, emoliência e proteção da pele do conduto.',
  },
  {
    to: '/resumins/unifal/farmacotec1/formas/errino',
    tag: 'Nasal · 5 componentes',
    title: 'Errino de nafazolina 0,05%',
    description:
      'Tampão fosfato em pH 6,5, isotonia e conservante compatível com o batimento ciliar — e o risco da rinite medicamentosa.',
  },
]

const dispersionTopics = [
  {
    to: '/resumins/unifal/farmacotec1/formas/suspensao',
    tag: 'Suspensão · 10 componentes',
    title: 'Suspensão antiácida floculada',
    description:
      'Lei de Stokes, umectação por glicerina, CMC-Na como suspensor e teoria DLVO: por que flocular é melhor que deflocular.',
  },
]
</script>
