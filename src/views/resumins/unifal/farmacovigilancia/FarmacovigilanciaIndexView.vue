<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>UNIFAL-MG</span>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Farmacovigilância</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · FARMACOVIGILÂNCIA</p>
        <h1 class="intro__title">Farmacovigilância</h1>
        <p class="intro__lead">
          Resumos didáticos organizados <strong>assunto por assunto</strong>. A sequência acompanha
          o material da disciplina: das reações adversas e sua classificação, passando pela
          farmacovigilância hospitalar (notificação espontânea, busca ativa e monitorização
          intensiva), pelos instrumentos de avaliação de causalidade, até as obrigações da indústria
          sob a RDC 406/2020 e a IN 63/2020.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Guia de estudo</span>
          <span class="intro__chip">8 páginas</span>
          <span class="intro__chip">Prof. Dr. Ricardo Radighieri Rascado</span>
        </div>
      </header>

      <aside class="study-note">
        <h2>Como estudar esta disciplina</h2>
        <p>
          A farmacovigilância só faz sentido quando as peças se encaixam: sem
          <strong>notificação</strong> não existe dado; sem <strong>avaliação de causalidade</strong>
          o dado não vira informação; sem <strong>regulação</strong> a informação não se transforma
          em proteção. Por isso os resumos estão em ordem: cada página usa o vocabulário da
          anterior.
        </p>
        <p class="study-note__source">
          Fontes: material das aulas de Farmacovigilância da UNIFAL-MG (Prof. Dr. Ricardo Radighieri
          Rascado) — assuntos 2 a 6.1 — e os cadernos complementares sobre a RDC 406/2020, a IN
          63/2020 e o Plano de Minimização de Risco.
        </p>
      </aside>

      <section class="subject" aria-labelledby="subject-fv-paginas">
        <h2 id="subject-fv-paginas">Páginas por assunto</h2>

        <div class="topic-grid">
          <router-link
            v-for="topico in topicos"
            :key="topico.rota"
            :to="topico.rota"
            class="topic-card"
          >
            <span class="topic-card__tag">{{ topico.tag }}</span>
            <h3 class="topic-card__title">{{ topico.titulo }}</h3>
            <p>{{ topico.descricao }}</p>
            <span class="topic-card__cta">Abrir resumo →</span>
          </router-link>
        </div>

        <p class="coming-soon">
          Ordem sugerida de leitura: conceitos → reações adversas → hospital → causalidade →
          indústria.
        </p>
      </section>

      <aside class="study-note">
        <h2>Mapa mental da disciplina</h2>
        <ul class="key-points">
          <li>
            <strong>Entrada do sistema (o dado):</strong> notificação espontânea, busca ativa e
            monitorização intensiva — hospital, Rede Sentinela, profissionais de saúde e pacientes.
          </li>
          <li>
            <strong>Processamento (a informação):</strong> classificação da reação (tipo e
            gravidade) e avaliação de causalidade (OMS-UMC, Naranjo, Kramer, bayesianos).
          </li>
          <li>
            <strong>Saída (a ação):</strong> sinal, RPBR, PGR/PMR, alteração de bula, restrição de
            uso, recolhimento — decisão da Anvisa a partir do que a indústria e os serviços
            notificaram.
          </li>
        </ul>
        <p class="study-note__source">
          Regra que atravessa todos os assuntos: <strong>na dúvida, notifique</strong>. Um caso
          isolado é apenas uma suspeita; o conjunto estruturado de notificações é o que gera sinal.
        </p>
      </aside>

      <nav class="topic-nav" aria-label="Navegação entre resumos">
        <router-link class="topic-nav__link" to="/resumins">
          <span>Voltar</span>
          ← Todos os resumins
        </router-link>
        <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/resumogeral">
          <span>Começar pelo início</span>
          Farmacovigilância — resumo geral →
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'

const topicos = [
  {
    rota: '/resumins/unifal/farmacovigilancia/resumogeral',
    tag: 'Assuntos 2 e 3 · visão geral',
    titulo: 'Resumo geral da disciplina',
    descricao:
      'Conceito e histórico, evento adverso × RAM × erro de medicação, uso racional e automedicação, RWE, intercambialidade e a base regulatória (RDC 406/2020 e IN 63/2020).',
  },
  {
    rota: '/resumins/unifal/farmacovigilancia/reacoes-adversas',
    tag: 'Assunto 4 · 10 tópicos',
    titulo: 'Reações adversas: conceito e classificação',
    descricao:
      'Definição de RAM, os seis tipos de reação por mecanismo, a classificação A–H, a gradação de gravidade, a relação benefício-risco e as agências de vigilância (CNMM, Notivisa e VigiMed, CIMs).',
  },
  {
    rota: '/resumins/unifal/farmacovigilancia/hospitalar',
    tag: 'Assunto 5 · 13 tópicos',
    titulo: 'Fazendo farmacovigilância no hospital',
    descricao:
      'Notificação espontânea, busca ativa e monitorização intensiva; por que as RAM não são notificadas; Rede Sentinela; causalidade e algoritmos; o que notificar; e o bloco regulatório da indústria.',
  },
  {
    rota: '/resumins/unifal/farmacovigilancia/busca-ativa',
    tag: 'Assunto 5.1 · 10 tópicos',
    titulo: 'Da busca ativa à causalidade clínica',
    descricao:
      'A armadilha da farmacovigilância passiva, os gatilhos de busca ativa no prontuário, a matriz busca ativa × monitorização intensiva, os quatro pilares da causalidade e o algoritmo de Naranjo.',
  },
  {
    rota: '/resumins/unifal/farmacovigilancia/escalas',
    tag: 'Assunto 5.2 · 11 tópicos',
    titulo: 'Instrumentos de precisão: as escalas de RAM',
    descricao:
      'Os quatro pilares da avaliação clínica, Rawlins & Thompson (tipo A × B), WHO-UMC, Naranjo, Kramer, Hartwig & Siegel, CTCAE e o funil de evitabilidade de Schumock & Thornton.',
  },
  {
    rota: '/resumins/unifal/farmacovigilancia/causalidade',
    tag: 'Assunto 5.3 · 14 tópicos',
    titulo: 'Causalidade: o sistema OMS-UMC em perspectiva crítica',
    descricao:
      'Evento × reação, as seis categorias do OMS-UMC, vantagens e limites da introspecção global, comparação com Naranjo, Kramer e métodos bayesianos, e como escolher o método na prática.',
  },
  {
    rota: '/resumins/unifal/farmacovigilancia/industria-rdc',
    tag: 'Assunto 6.1 · 13 tópicos',
    titulo: 'Indústria: RDC 406/2020 e IN 63/2020',
    descricao:
      'Ensaios clínicos × mundo real, DRM e RFV, arquitetura do sistema de farmacovigilância, escopo obrigatório de notificação, prazos no VigiMed, sinal, PGR, RPBR e minimização de risco.',
  },
  {
    rota: '/resumins/unifal/farmacovigilancia/industria-pratica',
    tag: 'Indústria · 17 tópicos',
    titulo: 'Indústria na prática: proatividade e PMR',
    descricao:
      'Da recepção passiva à inteligência clínica, o ciclo do Plano de Minimização de Risco, indicadores de efetividade, o que a inspeção sanitária cobra e o estudo de caso de um PMR completo.',
  },
]
</script>
