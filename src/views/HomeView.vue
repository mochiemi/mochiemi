<template>
  <div class="home-view">
    <div class="home-container">

      <BaseAlert variant="warning" title="Aviso de conteúdo">
        Este site pode conter conteúdos inadequados para menores de 16 anos e
        abordar assuntos sensíveis a alguns públicos. A leitura é de
        responsabilidade do visitante.
      </BaseAlert>

      <BaseCard class="home-card home-card--welcome">
        <div class="welcome-content">
          <h1 class="welcome-title">Bem-vindo! 🌸</h1>
          <p class="welcome-date">
            Hoje é <strong>{{ weekday }}</strong>, {{ day }} de {{ month }} de {{ year }}.
          </p>

          <!-- Frase do dia: troca uma vez por dia, sempre no mesmo formato -->
          <blockquote class="quote">
            <p class="quote__label">Frase do dia</p>
            <p class="quote__text">“{{ quote.text }}”</p>
            <cite class="quote__author">{{ quote.author }}</cite>
          </blockquote>
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
              Esta aqui ao lado é a Mochiemi, uma das personas e a idealizadora deste espaço.
            </p>
          </div>
        </div>
      </BaseCard>

      <!-- Dois cards curtos: próxima aula e último post -->
      <div class="home-highlights">
        <BaseCard class="home-card home-card--highlight home-card--next">
          <div class="next">
            <p class="highlight__label">
              <OhVueIcon name="hi-clock" aria-hidden="true" />
              Próxima aula
            </p>

            <template v-if="proximaAula">
              <h2 class="next__disciplina">{{ proximaAula.disciplina }}</h2>
              <p class="next__quando">
                <strong>{{ proximaAula.dia }}</strong>
                · {{ proximaAula.faixa }}
              </p>
              <p v-if="proximaAula.local" class="highlight__chip">
                {{ proximaAula.local }}
              </p>
            </template>

            <p v-else class="highlight__vazio">
              Nenhuma aula pela frente.
            </p>
          </div>
        </BaseCard>

        <BaseCard class="home-card home-card--highlight home-card--post">
          <div class="next">
            <p class="highlight__label">
              <OhVueIcon name="fa-blogger" aria-hidden="true" />
              Último post
            </p>

            <template v-if="ultimoPost">
              <div class="post">
                <img
                  v-if="capaPost"
                  :src="capaPost"
                  alt=""
                  class="post__cover"
                  loading="lazy"
                />

                <div class="post__text">
                  <!-- link esticado: o card inteiro abre o post -->
                  <router-link
                    :to="`/post/${ultimoPost.id}`"
                    class="post__title"
                  >
                    {{ ultimoPost.title }}
                  </router-link>

                  <p class="post__meta">
                    <BaseAuthor v-if="tagPost" :tag="tagPost" />
                    <time :datetime="ultimoPost.published">{{ dataPost }}</time>
                  </p>
                </div>
              </div>
            </template>

            <p v-else class="highlight__vazio">
              {{ carregandoPost ? 'Carregando…' : 'Nenhum post encontrado.' }}
            </p>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { BaseAlert, BaseAuthor, BaseCard } from '@/components/ui'
import { DIAS, GRADE } from '@/constants/horarios'
import { extractFirstImage, fetchPosts } from '@/services/bloggerApi'

const now = new Date()

/**
 * Frases exibidas no card de boas-vindas (somente autoras mulheres).
 * Ficam num array único para adicionar/remover sem tocar no template.
 */
const QUOTES = [
  {
    text: 'A imaginação das mulheres é muito rápida: salta de admiração a amor, de amor a casamento, num instante.',
    author: 'Jane Austen',
  },
  {
    text: 'Não há necessidade de pressa, não há necessidade de brilhar, não há necessidade de ser ninguém além de si mesma.',
    author: 'Virginia Woolf',
  },
  {
    text: 'Que nada nos limite, que nada nos defina, que nada nos sujeite. Que a liberdade seja a nossa própria substância, já que viver é ser livre.',
    author: 'Simone de Beauvoir',
  },
  {
    text: 'Liberdade é pouco. O que eu desejo ainda não tem nome.',
    author: 'Clarice Lispector',
  },
  { text: 'O que a memória ama fica eterno.', author: 'Adélia Prado' },
  {
    text: 'O que vale na vida não é o ponto de partida e sim a caminhada. Caminhando e semeando, no fim terás o que colher.',
    author: 'Cora Coralina',
  },
  {
    text: 'Pés, para que os quero, se tenho asas para voar?',
    author: 'Frida Kahlo',
  },
  {
    text: 'Nada na vida deve ser temido, somente compreendido. Agora é hora de compreender mais para temer menos.',
    author: 'Marie Curie',
  },
  {
    text: 'Ninguém pode te fazer sentir inferior sem o seu consentimento.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'As pessoas esquecerão o que você disse e o que você fez, mas nunca esquecerão como você as fez sentir.',
    author: 'Maya Angelou',
  },
  {
    text: 'Se há um livro que você quer ler e ele ainda não foi escrito, então você precisa escrevê-lo.',
    author: 'Toni Morrison',
  },
  {
    text: 'Apesar de tudo, eu continuo acreditando que as pessoas são realmente boas.',
    author: 'Anne Frank',
  },
  {
    text: 'Histórias importam. Muitas histórias importam.',
    author: 'Chimamanda Ngozi Adichie',
  },
  {
    text: 'Uma criança, um professor, um livro e uma caneta podem mudar o mundo.',
    author: 'Malala Yousafzai',
  },
  {
    text: 'Nunca duvide que um pequeno grupo de pessoas conscientes e comprometidas possa mudar o mundo. De fato, é a única coisa que já conseguiu.',
    author: 'Margaret Mead',
  },
]

/**
 * Semente baseada no dia (AAAAMMDD): a frase muda à meia-noite e não a cada
 * recarregamento da página, então o card fica estável durante o dia inteiro.
 */
const dailyIndex =
  (now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate()) %
  QUOTES.length

const quote = QUOTES[dailyIndex]

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

/* ================= Próxima aula ================= */

/** "07:00 – 08:00" -> 420 (minutos desde a meia-noite). */
function paraMinutos(faixa) {
  const [hora, minuto] = faixa.split(/[–-]/)[0].trim().split(':')
  return Number(hora) * 60 + Number(minuto)
}

/**
 * Primeira aula a partir de agora: procura no resto do dia e, se não houver,
 * vai descendo os próximos dias da grade.
 */
const proximaAula = computed(() => {
  const jsDay = now.getDay() // 0 = domingo, 6 = sábado
  const diaHoje = jsDay >= 1 && jsDay <= 5 ? jsDay - 1 : -1
  const agora = now.getHours() * 60 + now.getMinutes()

  for (let offset = 0; offset < DIAS.length; offset++) {
    // Fim de semana: começa direto na segunda-feira
    const diaIndex = diaHoje === -1 ? offset : (diaHoje + offset) % DIAS.length
    const mesmoDia = diaHoje !== -1 && offset === 0

    for (const linha of GRADE) {
      const aula = linha.aulas[diaIndex]
      if (!aula) continue
      if (mesmoDia && paraMinutos(linha.faixa) <= agora) continue

      return {
        dia: DIAS[diaIndex],
        faixa: linha.faixa,
        disciplina: aula.disciplina,
        local: aula.local,
      }
    }
  }

  return null
})

/* ================= Último post do blog ================= */

const ultimoPost = ref(null)
const carregandoPost = ref(true)

const capaPost = computed(() =>
  extractFirstImage(ultimoPost.value?.content || ''),
)

/** A tag (persona) também assina o post aqui, igual ao blog. */
const tagPost = computed(() => ultimoPost.value?.labels?.[0] || '')

const dataPost = computed(() => {
  if (!ultimoPost.value?.published) return ''
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(
    new Date(ultimoPost.value.published),
  )
})

onMounted(async () => {
  try {
    // orderBy=published: o primeiro item da resposta é o mais recente
    const data = await fetchPosts()
    ultimoPost.value = data.items?.[0] ?? null
  } catch {
    ultimoPost.value = null
  } finally {
    carregandoPost.value = false
  }
})
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

/* Cada card tem sua cor de destaque (borda tracejada + fundo tingido) */
.home-card--welcome {
  --card-accent: var(--rose);
}

.home-card--next {
  --card-accent: var(--deep-mint);
}

.home-card--post {
  --card-accent: var(--purple);
  /* referência para o link esticado do card */
  position: relative;
}

.home-card--about {
  --card-accent: var(--teal);
}

.home-card :deep(.base-card__body) {
  flex: 1;
  display: flex;
  padding: 1.5em;
}

/* Cards de destaque: padding enxuto e corpo com fonte maior que o padrão
   do BaseCard (0.95em), para o conteúdo render mais.
   O BaseCard aplica 1em de padding próprio; como estes cards não têm header,
   o espaço fica só com o body (evita padding duplicado). */
.home-card--highlight {
  padding: 0;
}

.home-card--highlight :deep(.base-card__body) {
  align-items: center;
  justify-content: flex-start;
  padding: 1em 1.15em;
  font-size: 1.05em;
}

/* Já os cards de boas-vindas e sobre centralizam */
.home-card--welcome :deep(.base-card__body),
.home-card--about :deep(.base-card__body) {
  align-items: center;
  justify-content: center;
}

.home-highlights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5em;
}

/* ---------- Cards de destaque ---------- */
.next {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  width: 100%;
}

.highlight__label {
  display: flex;
  align-items: center;
  gap: 0.4em;
  margin: 0 0 0.15em;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 0.72em;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.highlight__label :deep(svg) {
  font-size: 1.15em;
  /* o ícone acompanha a cor do card */
  color: var(--card-accent, var(--title-secondary));
}

.next__disciplina {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  text-align: left;
  font-family: 'Bellota', cursive;
  font-size: 1.55em;
  line-height: 1.2;
  color: var(--title-secondary);
}

.next__quando {
  margin: 0;
  font-size: 1em;
  color: var(--text-primary);
}

.next__quando strong {
  color: var(--strong-rose);
}

.highlight__chip {
  align-self: flex-start;
  margin: 0.1em 0 0;
  padding: 0.18em 0.6em;
  border-radius: var(--radius-pill);
  border: 1px dashed var(--border);
  background-color: var(--surface-primary);
  font-size: 0.88em;
  font-weight: 600;
  color: var(--text-secondary);
}

.highlight__vazio {
  margin: 0;
  font-size: 0.9em;
  color: var(--text-secondary);
}

.post {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 0.85em;
  width: 100%;
}

.post__cover {
  flex: 0 0 auto;
  width: 76px;
  height: 76px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  border: var(--border-width) solid var(--border);
}

.post__text {
  display: flex;
  flex-direction: column;
  gap: 0.35em;
  min-width: 0;
}

.post__title {
  font-family: 'Bellota', cursive;
  font-size: 1.35em;
  line-height: 1.25;
  color: var(--title-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

/* O ::after estica o link por todo o card, então tudo vira área de clique */
.post__title::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-md);
}

.home-card--post:hover .post__title {
  color: var(--strong-rose);
}

.post__meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.55em;
  margin: 0;
  font-size: 0.9em;
  color: var(--text-secondary);
}

.welcome-content {
  max-width: 760px;
  margin: 0 auto;
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

/* A moldura do blockquote vem do estilo global; aqui só ajustamos o texto */
.quote {
  max-width: 520px;
  margin: 1.5em auto 0;
  text-align: left;
}

.quote__label {
  margin: 0 0 0.6em;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 0.7em;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.quote__text {
  margin: 0 0 0.45em;
  line-height: 1.45;
  color: var(--title-secondary);
}

.quote__author {
  display: block;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 0.85em;
  font-style: normal;
  font-weight: 600;
  color: var(--text-secondary);
}

.quote__author::before {
  content: '— ';
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
  display: flex;
  align-items: center;
  gap: 0.4em;
}

.logo-img {
  width: 2em;
  height: 2em;
  object-fit: contain;
  flex-shrink: 0;
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

  .home-highlights {
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
