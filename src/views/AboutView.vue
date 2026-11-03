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

    <!-- 2) Quem escreve -->
    <BaseCard title="Quem escreve" class="about-card about-card--author">
      <div class="author" :style="{ '--persona-color': getTagColor('Mochiemi') }">
        <span class="author__monogram" aria-hidden="true">J</span>

        <div class="author__content">
          <p class="author__intro">
            Oi! Sou a <strong>Juliana Tiemi</strong> — graduanda em farmácia e
            ex-aluna de medicina. Curiosa assumida, estou sempre tentando o meu
            melhor, mesmo quando o melhor do dia é só continuar tentando.
          </p>
          <p class="author__text">
            Também fiz alguns cursos livres de programação e, com todo o
            direito, já ando com delírios de grandeza: me acho experiente na
            área. Este site é a prova viva disso — feito entre uma aula e outra,
            com muita vontade de aprender e um pouco de teimosia.
          </p>
          <p class="author__text">
            Quer trocar ideia sobre farmácia, código, personas ou qualquer coisa
            no meio do caminho? Me encontra por aqui:
          </p>

          <ul class="author__socials">
            <li v-for="social in socials" :key="social.name">
              <a
                class="author__social"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :title="social.title"
              >
                <OhVueIcon :name="social.icon" aria-hidden="true" />
                {{ social.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </BaseCard>

    <!-- 3) O quarteto -->
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

    <!-- 4) A host -->
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

const socials = [
  {
    name: 'Instagram',
    label: 'Instagram',
    title: '@motiemii no Instagram',
    href: 'https://instagram.com/motiemii',
    icon: 'fa-instagram',
  },
  {
    name: 'GitHub',
    label: 'GitHub',
    title: 'mochiemi no GitHub',
    href: 'https://github.com/mochiemi',
    icon: 'fa-github',
  },
  {
    name: 'LinkedIn',
    label: 'LinkedIn',
    title: 'Juliana Tiemi no LinkedIn',
    href: 'https://www.linkedin.com/in/tiemi-suyama/',
    icon: 'fa-linkedin',
  },
  {
    name: 'Superprof',
    label: 'Superprof',
    title: 'Aulas e reforço no Superprof',
    href: 'https://www.superprof.com.br/ola-sou-juliana-aluna-medicina-pela-unesp-granduanda-farmacia-pela-unifal-estou-aqui-para-ajudar-pessoas.html',
    icon: 'oi-mortar-board',
  },
]

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

.about-card--author {
  --card-accent: var(--deep-mint);
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

/* ---------- 2) Quem escreve ---------- */
.author {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1em 1.15em;
  align-items: start;
}

.author__monogram {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: color-mix(in srgb, var(--persona-color) 14%, var(--surface-primary));
  border: var(--border-width) dashed var(--persona-color);
  color: var(--persona-color);
  font-family: 'Bellota', cursive;
  font-size: 1.9em;
  font-weight: 700;
  line-height: 1;
  box-shadow: var(--shadow-sm);
}

.author__content {
  min-width: 0;
}

.author__intro {
  margin: 0 0 0.4em;
  font-size: 1.05em;
  line-height: 1.5;
  color: var(--text-primary);
}

.author__text {
  margin: 0 0 0.8em;
  line-height: 1.55;
  color: var(--text-secondary);
}

.author__text:last-of-type {
  margin-bottom: 0;
}

.author__socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45em;
  margin: 0.85em 0 0;
  padding: 0.8em 0 0;
  border-top: 1px dashed var(--border);
  list-style: none;
}

/* zera o estilo global de `li` (borda tracejada, margens de primeiro/último) */
.author__socials li {
  display: flex;
  margin: 0;
  border: 0;
}

.author__social {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.35em 0.8em;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  background-color: var(--surface-secondary);
  color: var(--text-primary);
  font-size: 0.85em;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.author__social:hover {
  background-color: color-mix(in srgb, var(--card-accent) 14%, var(--surface-primary));
  border-color: var(--card-accent);
  color: var(--text-primary);
  text-decoration: none;
  transform: translateY(-1px);
}

/* ---------- 3) Quarteto ---------- */
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

/* ---------- 4) Mochiemi (host) ---------- */
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
