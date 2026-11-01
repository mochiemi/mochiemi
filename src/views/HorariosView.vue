<template>
  <div class="schedule-view">
    <header class="schedule-header">
      <h1 class="schedule-title">Horários</h1>
      <p class="schedule-subtitle">
        Semestre {{ SEMESTRE }} · disciplina e local de cada aula
      </p>

      <!-- Resumo rápido: só o dia de hoje, quando a grade cobre a semana -->
      <ul v-if="GRADE.length && hojeIndex >= 0" class="schedule-stats">
        <li class="stat stat--today">
          <span class="stat__value">{{ DIAS[hojeIndex] }}</span>
          <span class="stat__label">hoje</span>
        </li>
      </ul>
    </header>

    <BaseEmptyState
      v-if="!GRADE.length"
      title="Sem horários cadastrados"
      description="A grade ainda não foi preenchida em src/constants/horarios.js."
      icon="oi-alert"
    />

    <template v-else>
      <div class="schedule-scroll">
        <table class="schedule">
          <caption class="visually-hidden">
            Grade de horários do semestre {{ SEMESTRE }}
          </caption>

          <thead>
            <tr>
              <th scope="col" class="schedule__corner">Horário</th>
              <th
                v-for="(dia, index) in DIAS"
                :key="dia"
                scope="col"
                class="schedule__day"
                :class="{ 'schedule__day--today': index === hojeIndex }"
              >
                {{ dia }}
                <span v-if="index === hojeIndex" class="schedule__today">
                  hoje
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="linha in tabela" :key="linha.faixa">
              <th scope="row" class="schedule__time">{{ linha.faixa }}</th>

              <template v-for="(celula, index) in linha.celulas" :key="index">
                <td
                  v-if="!celula.skip"
                  :rowspan="celula.span"
                  class="schedule__cell"
                  :class="{
                    'schedule__cell--empty': !celula.aula,
                    'schedule__cell--merged': celula.span > 1,
                    'schedule__cell--today': index === hojeIndex,
                  }"
                >
                  <div
                    v-if="celula.aula"
                    class="aula"
                    :style="{ '--aula-color': cor(celula.aula.disciplina) }"
                  >
                    <span class="aula__disciplina">
                      {{ celula.aula.disciplina }}
                    </span>
                    <span v-if="celula.aula.local" class="aula__local">
                      {{ celula.aula.local }}
                    </span>
                  </div>
                  <span v-else class="aula__free" aria-label="Sem aula">—</span>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile / telas estreitas: um card por dia, sem depender de rowspan -->
      <div class="schedule-mobile">
        <section
          v-for="(dia, index) in DIAS"
          :key="dia"
          class="day-card"
          :class="{ 'day-card--today': index === hojeIndex }"
        >
          <header class="day-card__header">
            <h2 class="day-card__title">{{ dia }}</h2>
            <span v-if="index === hojeIndex" class="day-card__today">
              hoje
            </span>
          </header>

          <ul v-if="aulasPorDia[index].length" class="day-card__list">
            <li
              v-for="bloco in aulasPorDia[index]"
              :key="bloco.inicio"
              class="slot"
              :style="{ '--aula-color': cor(bloco.aula.disciplina) }"
            >
              <span class="slot__time">{{ faixaDoBloco(bloco) }}</span>
              <span class="slot__info">
                <span class="slot__disciplina">
                  {{ bloco.aula.disciplina }}
                </span>
                <span v-if="bloco.aula.local" class="slot__local">
                  {{ bloco.aula.local }}
                </span>
              </span>
            </li>
          </ul>

          <p v-else class="day-card__vazio">Sem aula neste dia.</p>
        </section>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { BaseEmptyState } from '@/components/ui'
import { DIAS, GRADE, SEMESTRE } from '@/constants/horarios'

/**
 * Paleta usada para diferenciar as disciplinas (vem das cores do site,
 * então funciona nos dois temas).
 */
const PALETA = [
  'var(--mint)',
  'var(--rose)',
  'var(--sky-blue)',
  'var(--soft-purple)',
  'var(--champagne)',
  'var(--soft-coral)',
  'var(--light-blue)',
  'var(--soft-mint)',
  'var(--coral)',
  'var(--purple)',
]

/** Duas aulas são "a mesma" quando disciplina e local batem. */
const mesmaAula = (a, b) =>
  a.disciplina === b.disciplina && a.local === b.local

/** Lista única de disciplinas — define a cor de cada uma na tabela. */
const disciplinas = computed(() => {
  const nomes = new Set()
  GRADE.forEach((linha) =>
    linha.aulas.forEach((aula) => aula && nomes.add(aula.disciplina)),
  )
  return [...nomes].sort((a, b) => a.localeCompare(b, 'pt-BR'))
})

/** Cor estável por disciplina (mesma posição alfabética = mesma cor). */
const coresPorDisciplina = computed(() =>
  Object.fromEntries(
    disciplinas.value.map((nome, index) => [
      nome,
      PALETA[index % PALETA.length],
    ]),
  ),
)

const cor = (disciplina) => coresPorDisciplina.value[disciplina] || PALETA[0]

/** Índice de hoje em DIAS (-1 = fim de semana / fora da grade). */
const hojeIndex = computed(() => {
  const jsDay = new Date().getDay() // 0 = domingo, 6 = sábado
  return jsDay >= 1 && jsDay <= 5 ? jsDay - 1 : -1
})

/**
 * Agrupa, por dia, as aulas consecutivas iguais — assim "Farmacotec I
 * 07:00–09:00" aparece uma única vez (rowspan na tabela, um item no mobile).
 */
const blocosPorDia = computed(() =>
  DIAS.map((_, dia) => {
    const blocos = []

    GRADE.forEach((linha, rowIndex) => {
      const aula = linha.aulas[dia]
      const ultimo = blocos[blocos.length - 1]

      const continua =
        aula &&
        ultimo?.aula &&
        ultimo.fim === rowIndex &&
        mesmaAula(ultimo.aula, aula)

      if (continua) {
        ultimo.span += 1
        ultimo.fim = rowIndex + 1
      } else {
        blocos.push({ aula, span: 1, inicio: rowIndex, fim: rowIndex + 1 })
      }
    })

    return blocos
  }),
)

/** Só as aulas de cada dia (sem os buracos) — usado no layout mobile. */
const aulasPorDia = computed(() =>
  blocosPorDia.value.map((blocos) => blocos.filter((b) => b.aula)),
)

/** Faixa de horário de um bloco que pode ocupar mais de uma linha. */
function faixaDoBloco(bloco) {
  const inicio = GRADE[bloco.inicio].faixa.split(/[–-]/)[0].trim()
  const fim = GRADE[bloco.fim - 1].faixa.split(/[–-]/)[1].trim()
  return `${inicio} – ${fim}`
}

/** Monta as linhas da tabela a partir dos blocos de cada dia. */
const tabela = computed(() =>
  GRADE.map((linha, rowIndex) => ({
    faixa: linha.faixa,
    celulas: DIAS.map((_, dia) => {
      const bloco = blocosPorDia.value[dia].find(
        (b) => rowIndex >= b.inicio && rowIndex < b.fim,
      )

      if (!bloco) return { aula: null, span: 1, skip: false }

      return {
        aula: bloco.aula,
        span: bloco.span,
        // só a primeira linha do bloco desenha o <td>; as demais são puladas
        skip: rowIndex !== bloco.inicio,
      }
    }),
  })),
)
</script>

<style scoped>
.schedule-view {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2em 1em 3em;
}

/* ---------- Cabeçalho ---------- */
.schedule-header {
  text-align: center;
  margin-bottom: 1.75em;
}

.schedule-title {
  margin-bottom: 0.15em;
}

.schedule-subtitle {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.98em;
}

.schedule-stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75em;
  margin: 1.25em 0 0;
  padding: 0;
  list-style: none;
}

.stat {
  display: flex;
  align-items: baseline;
  gap: 0.4em;
  margin: 0;
  padding: 0.4em 0.9em;
  background-color: var(--surface-primary);
  border: var(--border-width) dashed var(--border);
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-sm);
}

.stat__value {
  font-family: 'Bellota', cursive;
  font-weight: 700;
  font-size: 1.05em;
  color: var(--title-secondary);
}

.stat__label {
  font-size: 0.8em;
  color: var(--text-secondary);
}

.stat--today .stat__value {
  color: var(--strong-rose);
}

/* ---------- Tabela ---------- */
/* Em telas estreitas a tabela rola na horizontal em vez de espremer */
.schedule-scroll {
  overflow-x: auto;
  padding-bottom: 0.25em;
  border-radius: var(--radius-md);
}

/* O layout em cards só aparece em telas estreitas (ver media query) */
.schedule-mobile {
  display: none;
}

.schedule {
  width: 100%;
  min-width: 780px;
  border-collapse: separate;
  border-spacing: 0;
  /* fundo mais escuro que as células: elas parecem mini-cards */
  background-color: var(--surface-secondary);
  border: var(--border-width) dashed var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  font-size: 0.92em;
}

.schedule th,
.schedule td {
  padding: 0.65em 0.7em;
  text-align: left;
  vertical-align: top;
  /* tracejado interno: mesma linguagem dos cards e dos títulos */
  border-top: 2px dashed var(--border);
  border-left: 2px dashed var(--border);
}

.schedule thead th {
  border-top: 0;
  border-left: 0;
  background-color: var(--navbar-surface);
  color: var(--text-primary);
  font-family: 'Bellota', cursive;
  font-size: 1.05em;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: center;
  padding-block: 0.7em;
}

.schedule thead th:first-child {
  border-top-left-radius: var(--radius-md);
}

.schedule thead th:last-child {
  border-top-right-radius: var(--radius-md);
}

.schedule__day--today {
  background-color: var(--surface-secondary);
  box-shadow: inset 0 -3px 0 var(--strong-rose);
}

.schedule__today {
  display: block;
  margin-top: 0.1em;
  font-size: 0.72em;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  color: var(--strong-rose);
}

.schedule tbody tr > *:first-child {
  border-left: 0;
}

/* Coluna de horários fixa ao rolar na horizontal */
.schedule__corner,
.schedule__time {
  width: 132px;
  white-space: nowrap;
  font-weight: 700;
  color: var(--title-secondary);
}

.schedule__corner {
  position: sticky;
  left: 0;
  z-index: 2;
}

.schedule__time {
  position: sticky;
  left: 0;
  z-index: 1;
  background-color: var(--rose-surface);
  border: 2px dashed var(--border-strong);
  font-variant-numeric: tabular-nums;
  font-size: 0.95em;
}

.schedule__cell {
  background-color: var(--surface-primary);
  transition: background-color 0.2s ease;
}

/* Slots livres: trama discreta em vez de um traço solto */
.schedule__cell--empty {
  background-color: transparent;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 7px,
    color-mix(in srgb, var(--border) 30%, transparent) 7px 8px
  );
  text-align: center;
  color: var(--text-disabled);
}

.schedule__cell--today {
  background-color: color-mix(
    in srgb,
    var(--strong-rose) 10%,
    var(--surface-primary)
  );
}

/* Hover por célula (e não por linha) */
.schedule__cell:hover:not(.schedule__cell--empty) {
  background-color: var(--sky-blue-surface);
}

/* Células que ocupam várias linhas ficam com o texto centralizado
   (precisa do seletor composto para vencer `.schedule td`) */
.schedule td.schedule__cell--merged {
  vertical-align: middle;
}

/* ---------- Conteúdo da célula: disciplina + local ---------- */
.aula {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  padding-left: 0.65em;
  /* faixa na cor da disciplina: mesma ideia dos cards de persona no Sobre */
  border-left: 3px solid var(--aula-color);
}

.aula__disciplina {
  font-weight: 600;
  line-height: 1.35;
  color: var(--text-primary);
}

.aula__local {
  align-self: flex-start;
  padding: 0.15em 0.55em;
  border-radius: var(--radius-pill);
  border: 1px dashed var(--border-secondary);
  background-color: var(--surface-primary);
  font-size: 0.82em;
  font-weight: 600;
  color: var(--text-secondary);
  white-space: nowrap;
}

.aula__free {
  font-weight: 700;
  opacity: 0.35;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Tablets: a tabela aperta um pouco para não precisar de rolagem */
@media (max-width: 1024px) and (min-width: 769px) {
  .schedule {
    min-width: 0;
    font-size: 0.86em;
  }

  .schedule th,
  .schedule td {
    padding: 0.55em 0.6em;
  }

  .schedule__corner,
  .schedule__time {
    width: 106px;
  }
}

@media (max-width: 768px) {
  .schedule-view {
    padding: 1.5em 0.75em 2.5em;
  }

  .schedule-stats {
    gap: 0.5em;
  }

  /* Troca a tabela (que exige largura) pelos cards por dia */
  .schedule-scroll {
    display: none;
  }

  .schedule-mobile {
    display: grid;
    gap: 0.9em;
  }

  .day-card {
    /* zera o `section { margin: 1.25em 0 }` global — o espaçamento vem do grid */
    margin: 0;
    background-color: var(--surface-primary);
    border: var(--border-width) dashed var(--border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }

  .day-card--today {
    border-color: var(--strong-rose);
  }

  .day-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5em;
    padding: 0.55em 0.9em;
    background-color: var(--navbar-surface);
    border-bottom: 2px dashed var(--border);
  }

  .day-card--today .day-card__header {
    background-color: var(--surface-secondary);
    box-shadow: inset 0 -3px 0 var(--strong-rose);
  }

  .day-card__title {
    /* zera o estilo global de h2 (fundo/bordas) */
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    text-align: left;
    font-family: 'Bellota', cursive;
    font-size: 1.1em;
    color: var(--text-primary);
  }

  .day-card__today {
    font-size: 0.72em;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--strong-rose);
  }

  .day-card__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .slot {
    display: flex;
    align-items: flex-start;
    gap: 0.7em;
    margin: 0;
    padding: 0.65em 0.9em;
    border: 0;
    border-top: 1px dashed var(--border);
  }

  .slot:first-child {
    border-top: 0;
  }

  .slot__time {
    flex: 0 0 auto;
    width: 7.6em;
    font-size: 0.8em;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    color: var(--title-secondary);
  }

  .slot__info {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    padding-left: 0.6em;
    border-left: 3px solid var(--aula-color);
  }

  .slot__disciplina {
    font-weight: 600;
    font-size: 0.95em;
    line-height: 1.35;
  }

  .slot__local {
    align-self: flex-start;
    padding: 0.15em 0.55em;
    border-radius: var(--radius-pill);
    border: 1px dashed var(--border-secondary);
    font-size: 0.78em;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .day-card__vazio {
    margin: 0;
    padding: 0.8em 0.9em;
    font-size: 0.9em;
    color: var(--text-secondary);
  }
}
</style>
