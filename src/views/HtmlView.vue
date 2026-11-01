<template>
  <div class="html-view">
    <header class="html-view__hero">
      <h1 class="html-view__title">Testando Tags HTML Nativas</h1>
      <p class="html-view__subtitle">
        Esta página demonstra o uso de elementos HTML que <strong>não possuem
        componente próprio</strong> na pasta <code>components/ui/</code>.
      </p>
    </header>

    <!-- ============================================================
         TEXTO E SEMÂNTICA
    ============================================================ -->
    <AppSection title="Texto e Semântica">
      <BaseCard variant="info">
        <h2>Títulos (h1–h6)</h2>
        <h3>Título nível 3</h3>
        <h4>Título nível 4</h4>
        <h5>Título nível 5</h5>
        <h6>Título nível 6</h6>

        <hr />

        <h2>Parágrafos e ênfases</h2>
        <p>
          Este é um parágrafo normal com <strong>texto em negrito</strong>,
          <em>texto em itálico</em>, <u>sublinhado</u>,
          <s>riscado</s>, <mark>destacado</mark>,
          <small>texto pequeno</small>, H<sub>2</sub>O (subscrito) e
          E = mc<sup>2</sup> (sobrescrito).
        </p>
        <p>
          Também temos <code>código inline</code>, <kbd>Ctrl</kbd> +
          <kbd>C</kbd> para teclas, <abbr title="HyperText Markup Language">HTML</abbr>
          como abreviação, e <q>uma citação curta</q>.
        </p>

        <h2>Citações</h2>
        <blockquote>
          "A simplicidade é o último grau de sofisticação."
          <cite>— Leonardo da Vinci</cite>
        </blockquote>

        <h2>Texto pré-formatado</h2>
        <pre>
function hello() {
  console.log("Olá, mundo!");
}</pre
        >

        <h2>Endereço</h2>
        <address>
          Mochi Lab<br />
          Rua dos Gatos, 42<br />
          São Paulo — SP
        </address>
      </BaseCard>
    </AppSection>

    <!-- ============================================================
         LISTAS
    ============================================================ -->
    <AppSection title="Listas">
      <BaseCard>
        <h2>Lista não ordenada (&lt;ul&gt;)</h2>
        <ul>
          <li>Maçã</li>
          <li>Banana</li>
          <li> Cereja
            <ul>
              <li>Doce</li>
              <li>Ácida</li>
            </ul>
          </li>
        </ul>

        <h2>Lista ordenada (&lt;ol&gt;)</h2>
        <ol>
          <li>Primeiro passo</li>
          <li>Segundo passo</li>
          <li>Terceiro passo</li>
        </ol>

        <h2>Lista de definições (&lt;dl&gt;)</h2>
        <dl>
          <dt>HTML</dt>
          <dd>Linguagem de marcação para a web.</dd>
          <dt>Vue</dt>
          <dd>Framework progressivo para interfaces.</dd>
        </dl>
      </BaseCard>
    </AppSection>

    <!-- ============================================================
         LINKS E MÍDIA
    ============================================================ -->
    <AppSection title="Links, Imagens e Mídia">
      <BaseCard>
        <h2>Links</h2>
        <p>
          Link externo:
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
            Vue.js
          </a>
          <br />
          Link de e-mail:
          <a href="mailto:tiemi.suyama@gmail.com">tiemi.suyama@gmail.com</a>
          <br />
          Link de telefone:
          <a href="tel:+5511999999999">+55 11 99999-9999</a>
        </p>

        <h2>Imagem</h2>
        <figure>
          <img
            src="@/assets/images/4-leaf.png"
            alt="Trevo de quatro folhas"
            width="80"
            height="80"
          />
          <figcaption>Trevo de quatro folhas — <em>sorte!</em></figcaption>
        </figure>

        <h2>Áudio e Vídeo</h2>
        <p><small>(Sem arquivos reais — apenas demonstração de markup)</small></p>
        <audio controls>
          <source src="" type="audio/mpeg" />
          Seu navegador não suporta áudio.
        </audio>

        <video controls width="320" height="180">
          <source src="" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>

        <h2>Iframe</h2>
        <iframe
          title="Exemplo de iframe"
          src="about:blank"
          width="320"
          height="120"
          style="border: 1px dashed var(--border); border-radius: 6px;"
        ></iframe>
      </BaseCard>
    </AppSection>

    <!-- ============================================================
         TABELAS
    ============================================================ -->
    <AppSection title="Tabelas">
      <BaseCard>
        <table class="html-view__table">
          <caption>Tabela de exemplo com &lt;caption&gt;, &lt;thead&gt;, &lt;tbody&gt; e &lt;tfoot&gt;</caption>
          <colgroup>
            <col style="width: 40%" />
            <col style="width: 30%" />
            <col style="width: 30%" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maçã</td>
              <td>3</td>
              <td>R$ 6,00</td>
            </tr>
            <tr>
              <td>Banana</td>
              <td>6</td>
              <td>R$ 4,50</td>
            </tr>
            <tr>
              <td>Cereja</td>
              <td>20</td>
              <td>R$ 12,00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td colspan="2">R$ 22,50</td>
            </tr>
          </tfoot>
        </table>
      </BaseCard>
    </AppSection>

    <!-- ============================================================
         FORMULÁRIOS (elementos nativos sem componente)
    ============================================================ -->
    <AppSection title="Formulários (elementos nativos)">
      <BaseCard>
        <form @submit.prevent="onSubmit" class="html-view__form">
          <fieldset>
            <legend>Dados pessoais</legend>

            <p>
              <label for="html-name">Nome:</label>
              <input id="html-name" v-model="form.name" type="text" />
            </p>

            <p>
              <label for="html-email">E-mail:</label>
              <input id="html-email" v-model="form.email" type="email" />
            </p>

            <p>
              <label for="html-age">Idade:</label>
              <input id="html-age" v-model.number="form.age" type="number" min="0" max="120" />
            </p>

            <p>
              <label for="html-birth">Data de nascimento:</label>
              <input id="html-birth" v-model="form.birth" type="date" />
            </p>

            <p>
              <label for="html-color">Cor favorita:</label>
              <input id="html-color" v-model="form.color" type="color" />
            </p>

            <p>
              <label for="html-range">Volume:</label>
              <input id="html-range" v-model.number="form.volume" type="range" min="0" max="100" />
              <output>{{ form.volume }}</output>
            </p>

            <p>
              <label for="html-file">Arquivo:</label>
              <input id="html-file" type="file" />
            </p>
          </fieldset>

          <fieldset>
            <legend>Preferências</legend>

            <p>Gênero musical:</p>
            <label>
              <input v-model="form.genre" type="radio" value="rock" /> Rock
            </label>
            <label>
              <input v-model="form.genre" type="radio" value="jazz" /> Jazz
            </label>
            <label>
              <input v-model="form.genre" type="radio" value="pop" /> Pop
            </label>

            <p>Interesses:</p>
            <label>
              <input v-model="form.interests" type="checkbox" value="vue" /> Vue
            </label>
            <label>
              <input v-model="form.interests" type="checkbox" value="ts" /> TypeScript
            </label>
            <label>
              <input v-model="form.interests" type="checkbox" value="css" /> CSS
            </label>

            <p>
              <label for="html-search">Busca (type="search"):</label>
              <input id="html-search" v-model="form.search" type="search" />
            </p>

            <p>
              <label for="html-url">URL (type="url"):</label>
              <input id="html-url" v-model="form.url" type="url" />
            </p>
          </fieldset>

          <p>
            <button type="submit">Enviar</button>
            <button type="reset">Limpar</button>
          </p>
        </form>
      </BaseCard>
    </AppSection>

    <!-- ============================================================
         ELEMENTOS INTERATIVOS NATIVOS
    ============================================================ -->
    <AppSection title="Elementos Interativos Nativos">
      <BaseCard>
        <h2>&lt;details&gt; + &lt;summary&gt;</h2>
        <details>
          <summary>Clique para ver mais</summary>
          <p>
            Este conteúdo está dentro de um <code>&lt;details&gt;</code> e só
            aparece quando o <code>&lt;summary&gt;</code> é clicado.
          </p>
        </details>

        <h2>&lt;dialog&gt; (nativo)</h2>
        <button @click="openDialog">Abrir dialog nativo</button>
        <dialog ref="nativeDialog">
          <p>Este é um <code>&lt;dialog&gt;</code> nativo do HTML.</p>
          <form method="dialog">
            <button>Fechar</button>
          </form>
        </dialog>

        <h2>&lt;progress&gt; e &lt;meter&gt;</h2>
        <p>
          <label for="native-progress">Progresso:</label>
          <progress id="native-progress" :value="progress" max="100"></progress>
          {{ progress }}%
        </p>
        <p>
          <label for="native-meter">Medidor:</label>
          <meter id="native-meter" :value="progress / 100" min="0" max="1" low="0.3" high="0.8" optimum="0.5"></meter>
        </p>

        <h2>&lt;canvas&gt;</h2>
        <canvas
          ref="canvasRef"
          width="200"
          height="80"
          class="html-view__canvas"
        ></canvas>
      </BaseCard>
    </AppSection>

    <!-- ============================================================
         ELEMENTOS SEMÂNTICOS
    ============================================================ -->
    <AppSection title="Elementos Semânticos de Layout">
      <BaseCard>
        <header class="html-view__semantic header">
          <strong>&lt;header&gt;</strong> — cabeçalho de seção
        </header>
        <nav class="html-view__semantic nav">
          <strong>&lt;nav&gt;</strong> —
          <a href="#top">Início</a> |
          <a href="#meio">Meio</a> |
          <a href="#fim">Fim</a>
        </nav>
        <main class="html-view__semantic main">
          <strong>&lt;main&gt;</strong> — conteúdo principal
          <article class="html-view__semantic article">
            <strong>&lt;article&gt;</strong> — artigo independente
          </article>
          <section class="html-view__semantic section">
            <strong>&lt;section&gt;</strong> — seção temática
          </section>
        </main>
        <aside class="html-view__semantic aside">
          <strong>&lt;aside&gt;</strong> — conteúdo lateral
        </aside>
        <footer class="html-view__semantic footer">
          <strong>&lt;footer&gt;</strong> — rodapé de seção
        </footer>
      </BaseCard>
    </AppSection>

    <!-- ============================================================
         DADOS E TEXTO TÉCNICO
    ============================================================ -->
    <AppSection title="Dados, Tempo e Texto Técnico">
      <BaseCard>
        <h2>&lt;time&gt;</h2>
        <p>
          Publicado em
          <time datetime="2025-01-15">15 de janeiro de 2025</time>.
        </p>

        <h2>&lt;data&gt;</h2>
        <p>
          Produto <data value="42">Código 42</data>.
        </p>

        <h2>&lt;ruby&gt; (anotação fonética)</h2>
        <p>
          <ruby>漢 <rp>(</rp><rt>kan</rt><rp>)</rp></ruby>
          <ruby>字 <rp>(</rp><rt>ji</rt><rp>)</rp></ruby>
        </p>

        <h2>&lt;bdi&gt; (isolamento bidirecional)</h2>
        <p>
          Usuário: <bdi>إيان</bdi> — 3 pontos.
        </p>

        <h2>&lt;wbr&gt; (quebra de palavra)</h2>
        <p>
          https://exemplo.com/<wbr />caminho/<wbr />muito/<wbr />longo/<wbr />recurso
        </p>

        <h2>&lt;ins&gt; e &lt;del&gt;</h2>
        <p>
          Preço antigo: <del>R$ 100,00</del> — Novo preço:
          <ins>R$ 80,00</ins>.
        </p>

        <h2>&lt;var&gt;, &lt;samp&gt; e &lt;kbd&gt;</h2>
        <p>
          A variável <var>x</var> vale 10. Saída do programa:
          <samp>Hello, world!</samp> Pressione <kbd>Esc</kbd> para sair.
        </p>
      </BaseCard>
    </AppSection>

    <!-- ============================================================
         ALERTA FINAL
    ============================================================ -->
    <BaseAlert variant="success" title="Tudo certo!">
      Todos os elementos nativos acima foram renderizados sem componentes
      dedicados — usando apenas as tags HTML originais estilizadas pelas
      variáveis CSS globais do projeto.
    </BaseAlert>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { AppSection, BaseAlert, BaseCard } from '@/components/ui'

const form = reactive({
  name: '',
  email: '',
  age: null,
  birth: '',
  color: '#ff69b4',
  volume: 50,
  genre: '',
  interests: [],
  search: '',
  url: '',
})

const progress = ref(65)
const nativeDialog = ref(null)
const canvasRef = ref(null)

const onSubmit = () => {
  alert(`Formulário enviado!\n\n${JSON.stringify(form, null, 2)}`)
}

const openDialog = () => {
  nativeDialog.value?.showModal()
}

onMounted(() => {
  // Desenha algo simples no <canvas> para provar que funciona
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.fillStyle = '#ffe4ec'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#c96b8a'
  ctx.font = 'bold 18px "Kumbh Sans", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('<canvas>', canvas.width / 2, canvas.height / 2)
})
</script>

<style scoped>
.html-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5em;
}

.html-view__hero {
  text-align: center;
  margin-bottom: 2em;
  padding-bottom: 1em;
  border-bottom: 2px dashed var(--border);
}

.html-view__title {
  font-family: 'Bellota', cursive;
  font-size: 2.2em;
  color: var(--title-secondary);
  margin: 0 0 0.4em;
}

.html-view__subtitle {
  color: var(--text-secondary);
  font-size: 1em;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ---------- Tabela ---------- */
.html-view__table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
  font-size: 0.95em;
}

.html-view__table caption {
  caption-side: top;
  text-align: left;
  font-weight: 700;
  padding-bottom: 0.5em;
  color: var(--title-secondary);
}

.html-view__table th,
.html-view__table td {
  border: 1px solid var(--border);
  padding: 0.6em 0.8em;
  text-align: left;
}

.html-view__table thead th {
  background-color: var(--surface-secondary);
  color: var(--title-secondary);
}

.html-view__table tbody tr:nth-child(even) {
  background-color: var(--surface-secondary);
}

.html-view__table tfoot th,
.html-view__table tfoot td {
  background-color: var(--rose-surface);
  font-weight: 700;
}

/* ---------- Formulário ---------- */
.html-view__form fieldset {
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 1em;
  margin-bottom: 1em;
  background-color: var(--surface-secondary);
}

.html-view__form legend {
  padding: 0 0.5em;
  font-weight: 700;
  color: var(--title-secondary);
}

.html-view__form p {
  margin: 0.5em 0;
}

.html-view__form label {
  font-weight: 600;
  color: var(--text-primary);
  margin-right: 0.4em;
}

.html-view__form input[type="text"],
.html-view__form input[type="email"],
.html-view__form input[type="number"],
.html-view__form input[type="date"],
.html-view__form input[type="search"],
.html-view__form input[type="url"] {
  font-family: 'Kumbh Sans', sans-serif;
  padding: 0.4em 0.6em;
  border: 2px solid var(--border);
  border-radius: 6px;
  background-color: var(--surface-primary);
  color: var(--text-primary);
  min-width: 220px;
}

.html-view__form input:focus {
  outline: none;
  border-color: var(--border-secondary);
  box-shadow: 0 0 0 3px var(--sky-blue-surface);
}

.html-view__form button {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 600;
  padding: 0.5em 1.2em;
  border-radius: 8px;
  border: 2px solid var(--border);
  background-color: var(--dull-blue);
  color: var(--white);
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 0.5em;
}

.html-view__form button[type="reset"] {
  background-color: var(--surface-secondary);
  color: var(--text-primary);
}

.html-view__form button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--shadow-hover);
}

/* ---------- Blocos semânticos ---------- */
.html-view__semantic {
  margin: 0.5em 0;
  padding: 0.75em 1em;
  border-radius: 6px;
  border-left: 4px solid var(--secondary);
  background-color: var(--surface-secondary);
  font-size: 0.9em;
}

.html-view__semantic.header { border-left-color: var(--dull-blue); }
.html-view__semantic.nav    { border-left-color: var(--deep-teal); }
.html-view__semantic.main   { border-left-color: var(--strong-rose); }
.html-view__semantic.article{ border-left-color: var(--coral); }
.html-view__semantic.section{ border-left-color: var(--dull-rose); }
.html-view__semantic.aside  { border-left-color: var(--champagne); }
.html-view__semantic.footer { border-left-color: var(--gray); }

.html-view__semantic a {
  color: var(--link-footer);
  text-decoration: none;
}

.html-view__semantic a:hover {
  text-decoration: underline;
}

/* ---------- Canvas ---------- */
.html-view__canvas {
  display: block;
  margin-top: 0.5em;
  border: 2px dashed var(--border);
  border-radius: 6px;
  max-width: 100%;
}

/* ---------- Elementos nativos genéricos ---------- */
.html-view blockquote {
  border-left: 4px solid var(--secondary);
  padding: 0.5em 1em;
  margin: 0.75em 0;
  background-color: var(--surface-secondary);
  border-radius: 0 6px 6px 0;
  color: var(--text-secondary);
  font-style: italic;
}

.html-view blockquote cite {
  display: block;
  margin-top: 0.4em;
  font-size: 0.85em;
  color: var(--text-secondary);
  font-style: normal;
}

.html-view pre {
  background-color: var(--surface-secondary);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.75em 1em;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
}

.html-view code {
  background-color: var(--surface-secondary);
  padding: 0.1em 0.4em;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.html-view mark {
  background-color: var(--champagne);
  color: var(--text-primary);
  padding: 0.05em 0.25em;
  border-radius: 3px;
}

.html-view address {
  font-style: normal;
  line-height: 1.6;
  color: var(--text-secondary);
}

.html-view hr {
  border: none;
  border-top: 2px dashed var(--border);
  margin: 1.25em 0;
}

.html-view figure {
  margin: 1em 0;
  text-align: center;
}

.html-view figcaption {
  font-size: 0.85em;
  color: var(--text-secondary);
  margin-top: 0.4em;
}

.html-view details {
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.5em 0.75em;
  background-color: var(--surface-secondary);
  margin: 0.75em 0;
}

.html-view summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--title-secondary);
}

.html-view dialog {
  border: 2px solid var(--border);
  border-radius: 10px;
  padding: 1.25em;
  background-color: var(--surface-primary);
  color: var(--text-primary);
  box-shadow: 0 12px 40px var(--shadow);
}

.html-view audio,
.html-view video {
  display: block;
  margin: 0.5em 0;
  max-width: 100%;
}

.html-view iframe {
  display: block;
  margin: 0.5em 0;
}

@media (max-width: 768px) {
  .html-view {
    padding: 1em;
  }

  .html-view__title {
    font-size: 1.7em;
  }

  .html-view__form input[type="text"],
  .html-view__form input[type="email"],
  .html-view__form input[type="number"],
  .html-view__form input[type="date"],
  .html-view__form input[type="search"],
  .html-view__form input[type="url"] {
    min-width: 100%;
  }
}
</style>
