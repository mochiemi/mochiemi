<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Química</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">QUÍMICA · CINÉTICA</p>
        <h1 class="intro__title">Cinética química</h1>
        <p class="intro__lead">
          A cinética estuda com que rapidez uma reação acontece — e o que é
          capaz de acelerá-la ou retardá-la. Aqui entram colisões, energia de
          ativação, catalisadores e a lei da velocidade.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>5 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#velocidade">Velocidade</a>
        <a href="#energia">Energia de ativação</a>
        <a href="#fatores">Fatores</a>
        <a href="#lei">Lei da velocidade</a>
        <a href="#constante">Constante k</a>
      </nav>

      <div class="lesson">
        <article id="velocidade" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O ponto de partida</p>
              <h2>Velocidade das reações</h2>
            </div>
          </header>
          <p>
            A cinética química estuda a velocidade das reações e os fatores que
            a influenciam. A termoquímica responde <em>se</em> a reação ocorre
            e com qual variação de energia; a cinética responde
            <em>com que rapidez</em> ela ocorre.
          </p>

          <div
            class="formula"
            aria-label="Velocidade média é a variação da concentração de reagente dividida pela variação de tempo, ou a variação da concentração de produto dividida pela variação de tempo"
          >
            <span class="formula__label">vm</span>
            <span class="formula__fraction">
              <span>Δ[reagente]</span>
              <span>Δt</span>
            </span>
            <span>ou</span>
            <span class="formula__fraction">
              <span>Δ[produto]</span>
              <span>Δt</span>
            </span>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Colisões eficazes</h3>
              <p>
                Para reagir, as partículas precisam colidir com energia
                suficiente e orientação adequada. Nem toda colisão gera
                produto — só as eficazes contam para a velocidade.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Atenção ao sinal</h3>
              <p>
                A concentração de reagente diminui com o tempo, então
                Δ[reagente] é negativo. Como velocidade é uma grandeza
                positiva, usa-se o módulo da variação.
              </p>
            </section>
          </div>

          <p class="card-note">
            A velocidade média é medida em <strong>mol·L⁻¹·s⁻¹</strong> (ou
            mol·L⁻¹·min⁻¹): concentração por unidade de tempo.
          </p>
        </article>

        <article id="energia" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Barreira de energia</p>
              <h2>Energia de ativação e variação de entalpia</h2>
            </div>
          </header>
          <p>
            A <strong>energia de ativação (Ea)</strong> é a energia mínima que
            os reagentes precisam ter para que a colisão resulte em reação.
            Ea alta deixa a reação lenta; Ea baixa deixa a reação rápida.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--rose">
              <h3>ΔH &lt; 0 — exotérmica</h3>
              <p>
                Os produtos ficam com menos energia que os reagentes, então o
                processo libera calor para o ambiente.
              </p>
            </section>
            <section class="concept-panel concept-panel--mint">
              <h3>ΔH &gt; 0 — endotérmica</h3>
              <p>
                Os produtos ficam com mais energia que os reagentes, então o
                processo absorve calor do ambiente.
              </p>
            </section>
          </div>

          <p>
            A variação de entalpia é
            <span class="equation">ΔH = H<sub>produtos</sub> − H<sub>reagentes</sub></span>.
            Ela informa <em>sentido</em> de energia, não rapidez.
          </p>

          <div class="graph-grid">
            <figure class="graph">
              <figcaption>Exotérmica (ΔH &lt; 0)</figcaption>
              <svg
                class="energy-chart"
                viewBox="0 0 240 130"
                role="img"
                aria-label="Gráfico de energia com reagentes em nível alto, pico de ativação e produtos em nível mais baixo"
              >
                <path class="energy-chart__axis" d="M10 118 H230" />
                <path class="energy-chart__guide" d="M100 70 V28" />
                <path
                  class="energy-chart__curve"
                  d="M14 70 H58 C78 70 80 28 100 28 C120 28 122 95 142 95 H226"
                />
                <text class="energy-chart__label" x="14" y="62">reagentes</text>
                <text class="energy-chart__label" x="104" y="22" text-anchor="middle">Ea</text>
                <text class="energy-chart__label" x="226" y="87" text-anchor="end">produtos</text>
              </svg>
            </figure>

            <figure class="graph">
              <figcaption>Endotérmica (ΔH &gt; 0)</figcaption>
              <svg
                class="energy-chart"
                viewBox="0 0 240 130"
                role="img"
                aria-label="Gráfico de energia com reagentes em nível baixo, pico de ativação e produtos em nível mais alto"
              >
                <path class="energy-chart__axis" d="M10 118 H230" />
                <path class="energy-chart__guide" d="M100 95 V28" />
                <path
                  class="energy-chart__curve"
                  d="M14 95 H58 C78 95 80 28 100 28 C120 28 122 70 142 70 H226"
                />
                <text class="energy-chart__label" x="14" y="87">reagentes</text>
                <text class="energy-chart__label" x="104" y="22" text-anchor="middle">Ea</text>
                <text class="energy-chart__label" x="226" y="62" text-anchor="end">produtos</text>
              </svg>
            </figure>
          </div>

          <p class="card-note">
            <strong>ΔH não determina velocidade.</strong> Uma reação pode ser
            muito exotérmica e ainda assim lenta: quem controla a rapidez é a
            energia de ativação.
          </p>

          <section class="worked-example">
            <h3>Catalisadores</h3>
            <p>
              Aumentam a velocidade da reação sem serem consumidos ao final.
              Oferecem um caminho alternativo com menor Ea, por isso mais
              colisões passam a ser eficazes.
            </p>
            <ul class="key-points">
              <li>Não alteram o ΔH da reação.</li>
              <li>Não alteram a posição do equilíbrio.</li>
              <li>Apenas fazem o sistema chegar mais rápido ao equilíbrio.</li>
            </ul>
          </section>
        </article>

        <article id="fatores" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">O que muda a rapidez</p>
              <h2>Fatores que influenciam a velocidade</h2>
            </div>
          </header>
          <p>
            Todos os fatores abaixo mudam a frequência ou a eficácia das
            colisões — exceto o catalisador, que muda a barreira de energia.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Efeito de cada fator sobre a velocidade da reação
              </caption>
              <thead>
                <tr>
                  <th scope="col">Fator</th>
                  <th scope="col">Efeito</th>
                  <th scope="col">Explicação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Temperatura</th>
                  <td>↑ T → ↑ velocidade</td>
                  <td>
                    Mais energia cinética → mais colisões eficazes (regra
                    prática: cerca de dobro a cada 10 °C)
                  </td>
                </tr>
                <tr>
                  <th scope="row">Concentração</th>
                  <td>↑ concentração → ↑ velocidade</td>
                  <td>Mais partículas por volume → mais colisões</td>
                </tr>
                <tr>
                  <th scope="row">Pressão (gases)</th>
                  <td>↑ pressão → ↑ velocidade</td>
                  <td>Comprime o gás → maior concentração</td>
                </tr>
                <tr>
                  <th scope="row">Superfície de contato</th>
                  <td>↑ área → ↑ velocidade</td>
                  <td>Mais pontos de contato (pó reage antes que bloco)</td>
                </tr>
                <tr>
                  <th scope="row">Catalisador</th>
                  <td>↑ velocidade</td>
                  <td>Diminui a Ea</td>
                </tr>
                <tr>
                  <th scope="row">Natureza dos reagentes</th>
                  <td>varia</td>
                  <td>Ligações mais fortes → reação mais lenta</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Aumentar a temperatura não “empurra” o equilíbrio para um lado
            nesta lista: aqui o assunto é apenas a rapidez com que ele é
            alcançado.
          </p>
        </article>

        <article id="lei" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Matemática da velocidade</p>
              <h2>Lei da velocidade e ordem de reação</h2>
            </div>
          </header>
          <p>
            Para a reação genérica
            <span class="equation">aA + bB → produtos</span>, a lei da
            velocidade é escrita como:
          </p>

          <div
            class="formula"
            aria-label="v é igual a k vezes concentração de A elevada a m, vezes concentração de B elevada a n"
          >
            <span class="formula__label">v</span>
            <span>=</span>
            <span>k · [A]<sup>m</sup> · [B]<sup>n</sup></span>
          </div>

          <ul class="key-points">
            <li><strong>v</strong> — velocidade da reação.</li>
            <li>
              <strong>k</strong> — constante de velocidade: depende da
              temperatura e do catalisador.
            </li>
            <li>
              <strong>[A] e [B]</strong> — concentrações dos reagentes, em
              mol/L.
            </li>
            <li>
              <strong>m e n</strong> — ordens parciais; a ordem total é
              m + n.
            </li>
          </ul>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Exemplos de leis de velocidade e ordens</caption>
              <thead>
                <tr>
                  <th scope="col">Lei da velocidade</th>
                  <th scope="col">Ordem em A</th>
                  <th scope="col">Ordem em B</th>
                  <th scope="col">Ordem total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="equation">v = k[A]</td>
                  <td class="num">1</td>
                  <td class="num">0</td>
                  <td class="num">1ª ordem</td>
                </tr>
                <tr>
                  <td class="equation">v = k[A]²</td>
                  <td class="num">2</td>
                  <td class="num">0</td>
                  <td class="num">2ª ordem</td>
                </tr>
                <tr>
                  <td class="equation">v = k[A][B]</td>
                  <td class="num">1</td>
                  <td class="num">1</td>
                  <td class="num">2ª ordem</td>
                </tr>
                <tr>
                  <td class="equation">v = k[A]²[B]</td>
                  <td class="num">2</td>
                  <td class="num">1</td>
                  <td class="num">3ª ordem</td>
                </tr>
                <tr>
                  <td class="equation">v = k</td>
                  <td class="num">0</td>
                  <td class="num">0</td>
                  <td class="num">ordem zero</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A lei da velocidade é determinada
            <strong>experimentalmente</strong>: os expoentes não são, em geral,
            os coeficientes da equação balanceada. Na ordem zero a velocidade é
            constante e não depende da concentração.
          </p>
        </article>

        <article id="constante" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Na prática</p>
              <h2>Constante k e determinação experimental</h2>
            </div>
          </header>
          <p>
            A constante <strong>k</strong> é o fator de proporcionalidade da
            lei da velocidade. Ela depende da temperatura (aumenta com ela) e
            do catalisador, mas <strong>não</strong> depende da concentração
            dos reagentes. Sua unidade varia com a ordem total.
          </p>

          <section class="worked-example">
            <h3>Exemplo: determinando as ordens</h3>
            <p>
              Para a reação A + B → C, foram obtidos os dados abaixo, todos na
              mesma temperatura:
            </p>

            <div class="table-scroll">
              <table class="data-table">
                <caption>
                  Experimento · concentrações iniciais e velocidade
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Exp.</th>
                    <th scope="col">[A] (mol/L)</th>
                    <th scope="col">[B] (mol/L)</th>
                    <th scope="col">v (mol·L⁻¹·s⁻¹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td class="num">0,10</td>
                    <td class="num">0,10</td>
                    <td class="num">2,0 × 10⁻³</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td class="num">0,20</td>
                    <td class="num">0,10</td>
                    <td class="num">4,0 × 10⁻³</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td class="num">0,10</td>
                    <td class="num">0,20</td>
                    <td class="num">2,0 × 10⁻³</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ol class="steps">
              <li>
                <strong>Ordem em A</strong> — compare 1 e 2, com [B] constante:
                [A] dobra e v dobra, então m = 1.
              </li>
              <li>
                <strong>Ordem em B</strong> — compare 1 e 3, com [A] constante:
                [B] dobra e v não muda, então n = 0.
              </li>
              <li>
                <strong>Lei da velocidade</strong> — v = k[A]¹[B]⁰ = k[A];
                ordem total = 1.
              </li>
              <li>
                <strong>Valor de k</strong> — usando o experimento 1:
                k = v / [A] = 2,0 × 10⁻³ / 0,10 = 2,0 × 10⁻² s⁻¹.
              </li>
            </ol>
          </section>

          <p class="card-note">
            Dois experimentos que só variam um reagente já permitem descobrir a
            ordem daquele reagente: compare a razão entre as concentrações com
            a razão entre as velocidades.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Cinética estuda velocidade; entalpia estuda energia.</li>
            <li>A energia de ativação é a barreira; o catalisador reduz a Ea.</li>
            <li>ΔH indica se a reação é exotérmica ou endotérmica, não a rapidez.</li>
            <li>
              Temperatura, concentração, pressão, superfície de contato e
              catalisador alteram a velocidade.
            </li>
            <li>
              Catalisador não é consumido e não altera ΔH nem o equilíbrio
              final.
            </li>
            <li>
              A lei da velocidade é determinada experimentalmente, não pela
              estequiometria.
            </li>
            <li>Ordem total = soma dos expoentes (m + n).</li>
            <li>
              k não muda com concentração, mas muda com temperatura e
              catalisador.
            </li>
            <li>
              Ordem zero → velocidade constante, independente da concentração.
            </li>
            <li>A etapa lenta do mecanismo determina a lei da velocidade.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir do material “Cinética Química, energia
            de ativação e outros”, enviado para este resumo.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins">
            <span>Voltar</span>
            ← Todos os resumos
          </router-link>
          <router-link
            class="topic-nav__link"
            to="/resumins/quimica/equilibrio"
          >
            <span>Anterior</span>
            Equilíbrio químico →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
