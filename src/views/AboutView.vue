<template>
  <div class="about-view">
    <header class="about-header">
      <h1 class="about-title">Sobre nós</h1>
      <p class="about-subtitle">Um sistema, várias personas, um corpo só.</p>
    </header>

    <!-- 1) A base: o que somos -->
    <BaseCard class="about-card about-card--manifesto">
      <p class="manifesto">
        “Somos um sistema de personas que compartilham a mesma mente e o mesmo
        corpo.”
      </p>
    </BaseCard>

    <!-- 2) O quarteto -->
    <BaseCard title="O quarteto" class="about-card about-card--quarteto">
      <figure class="about-figure">
        <img
          src="../assets/images/quarteto.jpg"
          alt="Ilustração das quatro personas: Ruka, Purple, Pamonha e Mochi"
          class="about-figure__img"
          loading="lazy"
        />
      </figure>

      <ul class="persona-list">
        <li
          v-for="persona in quarteto"
          :key="persona.name"
          class="persona"
          :style="{ '--persona-color': getTagColor(persona.name) }"
        >
          <span class="persona__avatar" aria-hidden="true">
            {{ persona.name.charAt(0) }}
          </span>
          <div class="persona__content">
            <h3 class="persona__name">{{ persona.name }}</h3>
            <p class="persona__text">{{ persona.text }}</p>
          </div>
        </li>
      </ul>
    </BaseCard>

    <!-- 3) A host -->
    <BaseCard title="Quem é a Mochiemi?" class="about-card about-card--host">
      <div class="host">
        <figure class="host__figure">
          <img
            src="../assets/images/mochialone.jpg"
            alt="Ilustração da Mochiemi"
            class="host__img"
            loading="lazy"
          />
        </figure>

        <div
          class="host__content"
          :style="{ '--persona-color': getTagColor('Mochiemi') }"
        >
          <h3 class="host__name">
            <span class="host__avatar" aria-hidden="true">M</span>
            Mochiemi
          </h3>
          <p class="host__text">
            É a host, aquela que geralmente está tentando manter as outras
            personas coesas e no controle. É a parte racional junto com a Ruka e
            também a principal responsável pelos estudos. Junto com a Mochi, mantém os afazeres do dia a dia em ordem, mas às vezes se sente sobrecarregada. Junto com a Pamonha, gosta de relaxar e se divertir, mas às vezes se sente culpada por isso. E junto com a Purple, gosta de se arrumar e se cuidar, mas às vezes se sente insegura.
          </p>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import { BaseCard } from '@/components/ui'
import { getTagColor } from '@/constants/tagColors'

const quarteto = [
  {
    name: 'Ruka',
    text: 'Quieta, tem pouca tolerância a barulhos altos. Gosta muito de jogar, principalmente jogos de construção de bases e de gerenciamento.',
  },
  {
    name: 'Purple',
    text: 'Vaidosa, gosta de estar sempre arrumada e maquiada. Passa um ar mais maduro do que realmente é e liga muito para a opinião dos outros.',
  },
  {
    name: 'Pamonha',
    text: 'Viciada em cannabis e cigarro. Um pouco desleixada, mas bem companheira — não nega um filme ou um lazer em conjunto. Incrivelmente, gosta de desenhar.',
  },
  {
    name: 'Mochi',
    text: 'Gosta de mascarar parecendo extrovertida. Também gosta de desenhar e criar, mas às vezes deixa isso de lado. Tem dificuldade em dizer “não” para as pessoas.',
  },
]
</script>

<style scoped>
.about-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  gap: 1.25em;
}

.about-header {
  text-align: center;
}

.about-title {
  margin-bottom: 0.15em;
}

.about-subtitle {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.98em;
}

/* Cards herdam o visual padrão do BaseCard; só ajustamos ritmo e cor */
.about-card {
  margin: 0;
}

/* ---------- 1) Manifesto ---------- */
.about-card--manifesto {
  --card-accent: var(--rose);
}

.about-card--quarteto {
  --card-accent: var(--sky-blue);
}

.about-card--host {
  --card-accent: var(--purple);
}

.manifesto {
  margin: 0;
  font-family: 'Bellota', cursive;
  font-size: 1.35em;
  line-height: 1.5;
  text-align: center;
  color: var(--title-secondary);
}

/* ---------- 2) Quarteto ---------- */
/* zera o estilo global de `figure` (padding/moldura inline-block) */
.about-figure,
.host__figure {
  display: block;
  margin: 0;
  padding: 0;
  background: none;
  border-radius: 0;
  box-shadow: none;
}

.about-figure {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}

.about-figure__img {
  display: block;
  /* a arte é quadrada: limita a largura para não virar um bloco gigante */
  width: min(100%, 360px);
  height: auto;
  border-radius: var(--radius-md);
  border: var(--border-width) dashed var(--sky-blue);
}

.persona-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9em;
  margin: 0;
  padding: 0;
  list-style: none;
}

.persona {
  display: flex;
  gap: 0.75em;
  margin: 0;
  padding: 0.9em 1em;
  /* mini-card na cor da persona: borda tracejada + fundo tingido */
  background-color: color-mix(
    in srgb,
    var(--persona-color) 10%,
    var(--surface-primary)
  );
  border: var(--border-width) dashed var(--persona-color);
  border-left: 4px solid var(--persona-color);
  border-radius: var(--radius-sm);
}

.persona__avatar,
.host__avatar {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--persona-color);
  color: var(--white);
  font-weight: 700;
  font-size: 0.85rem;
  line-height: 1;
  box-shadow: var(--shadow-sm);
}

.persona__content {
  min-width: 0;
}

.persona__name,
.host__name {
  margin: 0 0 0.2em;
  padding: 0;
  border: 0;
  font-size: 1.05em;
  color: var(--title-secondary);
}

.persona__text,
.host__text {
  margin: 0;
  font-size: 1em;
  line-height: 1.55;
  color: var(--text-secondary);
}

/* ---------- 3) Mochiemi (host) ---------- */
.host {
  display: grid;
  grid-template-columns: minmax(0, 220px) minmax(0, 1fr);
  gap: 1.25em;
  align-items: start;
}

.host__figure {
  margin: 0;
}

.host__img {
  display: block;
  width: 100%;
  border-radius: var(--radius-md);
  border: var(--border-width) solid var(--border);
}

.host__name {
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-family: 'Bellota', cursive;
  font-size: 1.25em;
}

@media (max-width: 640px) {
  .persona-list {
    grid-template-columns: 1fr;
  }

  .host {
    grid-template-columns: 1fr;
  }

  .host__figure {
    max-width: 240px;
  }
}
</style>
