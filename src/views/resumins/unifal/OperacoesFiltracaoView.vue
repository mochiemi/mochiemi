<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/unifal/operacoes">Operações Unitárias</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Filtração</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · OPERAÇÕES UNITÁRIAS</p>
        <h1 class="intro__title">Filtração resolvida</h1>
        <p class="intro__lead">
          A equação de filtração a pressão constante, sua forma de projeto para filtros contínuos de
          tambor rotatório e a resolução completa dos dois exercícios propostos na disciplina: as
          duplas de filtração (área do filtro para 5,5 ft³ por ciclo) e a influência da pressão
          sobre a resistência da torta a partir de dados experimentais.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Exercícios resolvidos</span>
          <span class="intro__chip">Passo a passo com unidades</span>
          <span class="intro__chip">Profa. Dra. Joelise Angelotti</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#equacao">Equação</a>
        <a href="#tambor">Tambor rotatório</a>
        <a href="#exercicio-1">Exercício 1</a>
        <a href="#resolucao-1">Resolução 1</a>
        <a href="#exercicio-2">Exercício 2</a>
        <a href="#resolucao-2">Resolução 2</a>
        <a href="#formulario">Formulário</a>
      </nav>

      <div class="lesson">
        <article id="equacao" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">A base de tudo</p>
              <h2>A equação da filtração a pressão constante</h2>
            </div>
          </header>
          <p>
            O filtrado atravessa dois obstáculos em série: a
            <strong>torta</strong> que vai crescendo sobre o meio e o próprio
            <strong>meio filtrante</strong>. A lei de Darcy escrita para esse conjunto, com
            velocidade superficial V̇/A e espessura de torta proporcional ao volume já filtrado
            (c·V/A, com c = massa de sólidos por volume de filtrado), é:
          </p>
          <div class="formula">
            <span> dV/dθ = A · ΔP / [ μ · ( α · c · V/A + R<sub>m</sub> ) ] </span>
          </div>
          <p class="factor__example">
            V = volume de filtrado; θ = tempo de filtração; A = área de filtração; ΔP = queda de
            pressão; μ = viscosidade do filtrado; α = resistência específica da torta (resistência
            por unidade de massa de torta depositada); c = sólidos por volume de filtrado; R<sub
              >m</sub
            >
            = resistência do meio filtrante.
          </p>

          <p>
            A <strong>resistência da torta cresce com V</strong>: cada litro filtrado deposita mais
            sólido e a vazão cai. Separando as variáveis e integrando de 0 a V, com ΔP constante:
          </p>
          <div class="formula">
            <span> V² = 2 · A² · ΔP · θ / ( μ · α · c ) </span>
          </div>
          <p class="factor__example">
            Forma válida quando a resistência do meio (R<sub>m</sub>) é desprezível. Dividindo os
            dois lados por V, obtém-se a forma
            <strong>linear</strong> usada para tratar dados experimentais:
          </p>
          <div class="formula">
            <span> θ/V = [ μ · α · c / (2 · A² · ΔP) ] · V + μ · R<sub>m</sub> / (A · ΔP) </span>
          </div>
          <p>
            Nessa forma, <strong>θ/V contra V é uma reta</strong>: o coeficiente angular carrega α
            (a resistência da torta) e o coeficiente linear carrega R<sub>m</sub> (a resistência do
            meio). É por isso que dados de laboratório a pressão constante são sempre plotados como
            θ/V × V.
          </p>

          <p class="card-note">
            <strong>Cuidado com as unidades.</strong> No <strong>SI</strong>, ΔP em Pa (N/m²), μ em
            kg/(m·s), α em m/kg, c em kg/m³ e A em m² — a equação fecha sem fatores extras. No
            <strong>sistema inglês</strong>, com ΔP em lbf/ft², μ em lb/(ft·s), α em ft/lb e c em
            lb/ft³, é preciso incluir o fator de proporcionalidade
            <strong>g<sub>c</sub> = 32,174 lb·ft/(lbf·s²)</strong>: a equação passa a ser V² =
            2·A²·ΔP·g<sub>c</sub>·θ/(μ·α·c).
          </p>
        </article>

        <article id="tambor" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Equipamento contínuo</p>
              <h2>Filtro de tambor rotatório</h2>
            </div>
          </header>
          <p>
            No tambor rotatório o meio filtrante é a superfície de um cilindro que gira
            continuamente. O tambor passa por dentro da suspensão, onde filtra, e sai dela, onde a
            torta é lavada, seca e raspada. Só a
            <strong>fração submersa</strong> da superfície está realmente filtrando.
          </p>
          <ul class="key-points">
            <li><strong>f</strong> = fração submersa da superfície (ex.: 35% → f = 0,35).</li>
            <li>
              <strong>θ<sub>ciclo</sub></strong> = tempo de uma volta completa.
            </li>
            <li>
              <strong>θ<sub>f</sub> = f · θ<sub>ciclo</sub></strong> = tempo efetivo de filtração em
              cada volta.
            </li>
            <li><strong>V</strong> = volume de filtrado produzido por volta (por ciclo).</li>
          </ul>
          <p>
            Substituindo θ por θ<sub>f</sub> na equação integrada, o volume por ciclo por unidade de
            área é uma propriedade do sistema:
          </p>
          <div class="formula">
            <span> V/A = √[ 2 · ΔP · g<sub>c</sub> · f · θ<sub>ciclo</sub> / ( μ · α · c ) ] </span>
          </div>
          <p>e a área necessária para entregar o volume pedido por ciclo é:</p>
          <div class="formula">
            <span class="formula__label">A = V / ( V/A )</span>
          </div>
          <p class="card-note">
            Leitura prática: aumentar a fração submersa (f) aumenta o tempo de filtração por volta
            e, portanto, <strong>reduz a área necessária</strong>. Já aumentar a rotação (θ<sub
              >ciclo</sub
            >
            menor) encurta o tempo de filtração por volta: para o mesmo volume por ciclo a área
            necessária <strong>aumenta</strong>, mas a torta sai mais fina — o que é desejável
            quando ela é difícil de descarregar. O ponto de operação é sempre um compromisso
            econômico.
          </p>
        </article>

        <article id="exercicio-1" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Exercício proposto — duplas</p>
              <h2>O enunciado e os dados</h2>
            </div>
          </header>
          <div class="worked-example">
            <h3>Enunciado</h3>
            <p>
              Um filtro de tambor rotatório, com <strong>35% de superfície submersa</strong>, é
              utilizado para filtrar um azeite que contém
              <strong>0,5 lb sólido/ft³ filtrado</strong>. A pressão de filtração é
              <strong>1400 N/m²</strong>. Qual a <strong>área necessária</strong> para filtrar um
              volume de <strong>5,5 ft³</strong> se o tempo do ciclo é de
              <strong>5 minutos</strong>? Utilize o sistema inglês.
            </p>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Dados do enunciado, já com o símbolo correspondente na equação.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Dado</th>
                  <th scope="col">Símbolo</th>
                  <th scope="col" class="num">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Fração submersa</th>
                  <td>f</td>
                  <td class="num">0,35</td>
                </tr>
                <tr>
                  <th scope="row">Sólidos por volume de filtrado</th>
                  <td>c</td>
                  <td class="num">0,5 lb/ft³</td>
                </tr>
                <tr>
                  <th scope="row">Pressão de filtração</th>
                  <td>ΔP</td>
                  <td class="num">1400 N/m²</td>
                </tr>
                <tr>
                  <th scope="row">Volume de filtrado por ciclo</th>
                  <td>V</td>
                  <td class="num">5,5 ft³</td>
                </tr>
                <tr>
                  <th scope="row">Tempo de ciclo</th>
                  <td>θ<sub>ciclo</sub></td>
                  <td class="num">5 min</td>
                </tr>
                <tr>
                  <th scope="row">Resistência específica da torta</th>
                  <td>α</td>
                  <td class="num">4,6 × 10⁶ ft/lb</td>
                </tr>
                <tr>
                  <th scope="row">Viscosidade do filtrado</th>
                  <td>μ</td>
                  <td class="num">6,72 × 10⁻⁴ lb/(ft·s)</td>
                </tr>
                <tr>
                  <th scope="row">Massa específica (referência)</th>
                  <td>ρ</td>
                  <td class="num">62,3 lb/ft³</td>
                </tr>
                <tr>
                  <th scope="row">Conversões dadas</th>
                  <td>—</td>
                  <td class="num">1 ft = 30,48 cm ; 1 lbf = 4,44822 N</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="card-note">
            A massa específica ρ = 62,3 lb/ft³ é o valor da água em unidades inglesas. Ela não entra
            na equação de projeto: serve apenas para interpretar a pressão como carga hidrostática
            (ΔP = ρ·h → h ≈ 0,47 ft ≈ 14,3 cm).
          </p>
        </article>

        <article id="resolucao-1" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Exercício 1 resolvido</p>
              <h2>Área do filtro de tambor: 0,486 ft²</h2>
            </div>
          </header>

          <div class="worked-example">
            <h3>Passo 1 — Colocar tudo no sistema inglês</h3>
            <p>
              O tempo de ciclo sai direto: θ<sub>ciclo</sub> = 5 min × 60 = 300 s; como só 35% da
              superfície está submersa, o tempo efetivo de filtração é
            </p>
            <p class="equation">θ<sub>f</sub> = f · θ<sub>ciclo</sub> = 0,35 × 300 = 105 s</p>
            <p>
              A pressão é o único dado em SI e precisa virar lbf/ft². Partindo das conversões dadas
              (1 ft = 30,48 cm → 1 ft² = 0,0929 m²):
            </p>
            <p class="equation">1 lbf/ft² = 4,44822 N / 0,0929 m² = 47,88 N/m²</p>
            <p class="equation">ΔP = 1400 / 47,88 = 29,24 lbf/ft²</p>
          </div>

          <div class="worked-example">
            <h3>Passo 2 — Escolher a equação</h3>
            <p>
              A resistência do meio filtrante não é fornecida, então R<sub>m</sub>
              é desprezível e vale a forma integrada. Como só a fração submersa filtra, θ =
              θ<sub>f</sub>:
            </p>
            <p class="equation">V² = 2 · A² · ΔP · g<sub>c</sub> · θ<sub>f</sub> / ( μ · α · c )</p>
            <p class="factor__example">
              Com ΔP em lbf/ft² é obrigatório usar g<sub>c</sub> = 32,174 lb·ft/(lbf·s²).
            </p>
          </div>

          <div class="worked-example">
            <h3>Passo 3 — Calcular o grupo (V/A)²</h3>
            <p>Isolando o volume por unidade de área:</p>
            <p class="equation">(V/A)² = 2 · ΔP · g<sub>c</sub> · θ<sub>f</sub> / ( μ · α · c )</p>
            <p>Numerador e denominador, um de cada vez:</p>
            <p class="equation">2 · ΔP · g<sub>c</sub> = 2 × 29,24 × 32,174 = 1881,7 lb/(ft·s²)</p>
            <p class="equation">μ · α · c = 6,72 × 10⁻⁴ × 4,6 × 10⁶ × 0,5 = 1545,6</p>
            <p class="equation">2·ΔP·g<sub>c</sub> / (μ·α·c) = 1881,7 / 1545,6 = 1,217 ft²/s²</p>
            <p class="equation">(V/A)² = 1,217 × 105 = 127,8 ft²</p>
          </div>

          <div class="worked-example">
            <h3>Passo 4 — Área</h3>
            <p class="equation">V/A = √127,8 = 11,31 ft</p>
            <p class="equation">A = 5,5 / 11,31 = 0,486 ft²</p>
            <p>
              Convertendo: A = 0,486 × 0,0929 =
              <strong>0,0452 m² = 452 cm²</strong>.
            </p>
          </div>

          <div class="worked-example worked-example--soft">
            <h3>Passo 5 — Verificar</h3>
            <p>Com A = 0,486 ft², o tempo para filtrar 5,5 ft³ volta pela mesma equação:</p>
            <p class="equation">
              θ<sub>f</sub> = V² / (1,217 · A²) = 5,5² / (1,217 × 0,486²) = 30,25 / 0,288 = 105 s
            </p>
            <p>Que é exatamente 0,35 × 300 s — a fração submersa do ciclo. Coerente.</p>
          </div>

          <p class="card-note">
            <strong>Resposta:</strong> a área de filtração necessária é
            <strong>A ≈ 0,49 ft²</strong> (≈ 0,045 m², ou 452 cm²). O valor é pequeno porque a
            resistência específica informada (4,6 × 10⁶ ft/lb ≈ 3,1 × 10⁶ m/kg) é baixa para uma
            torta — o azeite com 0,5 lb/ft³ de sólidos forma uma torta pouco resistente, o que
            permite um fluxo alto.
          </p>
        </article>

        <article id="exercicio-2" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Exercício extra-classe</p>
              <h2>Influência da pressão na resistência da torta</h2>
            </div>
          </header>
          <div class="worked-example">
            <h3>Enunciado</h3>
            <p>
              Dois experimentos de filtração foram realizados à pressão constante (diferentes) em
              laboratório. Determine a
              <strong>influência da pressão na resistência da torta (α)</strong>. Utilize o sistema
              SI.
            </p>
            <p class="factor__example">
              W = 25 kg sólido/m³ filtrado; A = 0,28 m²; T = 20 °C; μ = 1,2 × 10⁻³ kg/(m·s); 1 atm =
              1,01325 × 10⁵ N/m².
            </p>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Dados experimentais de filtração a pressão constante.
              </caption>
              <thead>
                <tr>
                  <th scope="col">V (L)</th>
                  <th scope="col" class="num">θ (s) — P = 1,916 atm</th>
                  <th scope="col" class="num">θ (s) — P = 3,337 atm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">1,0</td>
                  <td class="num">14,0</td>
                  <td class="num">9,5</td>
                </tr>
                <tr>
                  <td class="num">1,5</td>
                  <td class="num">24,2</td>
                  <td class="num">16,3</td>
                </tr>
                <tr>
                  <td class="num">2,0</td>
                  <td class="num">37,0</td>
                  <td class="num">24,6</td>
                </tr>
                <tr>
                  <td class="num">2,5</td>
                  <td class="num">51,7</td>
                  <td class="num">34,7</td>
                </tr>
                <tr>
                  <td class="num">3,0</td>
                  <td class="num">69,0</td>
                  <td class="num">46,1</td>
                </tr>
                <tr>
                  <td class="num">3,5</td>
                  <td class="num">88,8</td>
                  <td class="num">59,0</td>
                </tr>
                <tr>
                  <td class="num">4,0</td>
                  <td class="num">110,0</td>
                  <td class="num">73,6</td>
                </tr>
                <tr>
                  <td class="num">4,5</td>
                  <td class="num">134,0</td>
                  <td class="num">89,4</td>
                </tr>
                <tr>
                  <td class="num">5,0</td>
                  <td class="num">160,0</td>
                  <td class="num">107,3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="card-note">
            Estratégia: <strong>linearizar</strong> cada experimento (θ/V × V), tirar α do
            coeficiente angular e, com os dois valores de α e as duas pressões, obter o
            <strong>índice de compressibilidade</strong>
            pela relação α = α₀ · ΔP<sup>s</sup>.
          </p>
        </article>

        <article id="resolucao-2" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Exercício 2 resolvido</p>
              <h2>Torta compressível: α cresce com a pressão</h2>
            </div>
          </header>

          <div class="worked-example">
            <h3>Passo 1 — Converter as pressões para pascal</h3>
            <p class="equation">P₁ = 1,916 × 1,01325 × 10⁵ = 1,941 × 10⁵ Pa</p>
            <p class="equation">P₂ = 3,337 × 1,01325 × 10⁵ = 3,381 × 10⁵ Pa</p>
            <p class="equation">P₂ / P₁ = 1,742</p>
          </div>

          <div class="worked-example">
            <h3>Passo 2 — Montar a tabela linearizada θ/V</h3>
            <p>
              Dividindo cada tempo pelo volume filtrado correspondente (em litros, por comodidade de
              leitura):
            </p>
            <div class="table-scroll">
              <table class="data-table">
                <caption>
                  Linearização: θ/V em s/L contra V em L.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">V (L)</th>
                    <th scope="col" class="num">θ/V — 1,916 atm</th>
                    <th scope="col" class="num">θ/V — 3,337 atm</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="num">1,0</td>
                    <td class="num">14,00</td>
                    <td class="num">9,50</td>
                  </tr>
                  <tr>
                    <td class="num">1,5</td>
                    <td class="num">16,13</td>
                    <td class="num">10,87</td>
                  </tr>
                  <tr>
                    <td class="num">2,0</td>
                    <td class="num">18,50</td>
                    <td class="num">12,30</td>
                  </tr>
                  <tr>
                    <td class="num">2,5</td>
                    <td class="num">20,68</td>
                    <td class="num">13,88</td>
                  </tr>
                  <tr>
                    <td class="num">3,0</td>
                    <td class="num">23,00</td>
                    <td class="num">15,37</td>
                  </tr>
                  <tr>
                    <td class="num">3,5</td>
                    <td class="num">25,37</td>
                    <td class="num">16,86</td>
                  </tr>
                  <tr>
                    <td class="num">4,0</td>
                    <td class="num">27,50</td>
                    <td class="num">18,40</td>
                  </tr>
                  <tr>
                    <td class="num">4,5</td>
                    <td class="num">29,78</td>
                    <td class="num">19,87</td>
                  </tr>
                  <tr>
                    <td class="num">5,0</td>
                    <td class="num">32,00</td>
                    <td class="num">21,46</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Os dois conjuntos são retas praticamente perfeitas — o que já confirma que a filtração
              foi a pressão constante e que a torta não muda de estrutura durante o ensaio.
            </p>
          </div>

          <div class="graph-grid">
            <figure class="graph">
              <figcaption>θ/V × V — retas de cada pressão</figcaption>
              <svg
                class="energy-chart"
                viewBox="0 0 240 170"
                role="img"
                aria-label="Gráfico de teta sobre V contra V, com duas retas crescentes; a reta da maior pressão fica abaixo da reta da menor pressão"
              >
                <path class="energy-chart__axis" d="M34 130 H232" />
                <path class="energy-chart__axis" d="M34 130 V18" />
                <path class="energy-chart__curve" d="M34 104.8 L232 28.3" />
                <path class="energy-chart__guide" d="M34 124.1 L232 73.3" />
                <text class="energy-chart__label" x="30" y="18" text-anchor="end">θ/V</text>
                <text class="energy-chart__label" x="30" y="40" text-anchor="end">30</text>
                <text class="energy-chart__label" x="30" y="124" text-anchor="end">10</text>
                <text class="energy-chart__label" x="34" y="142" text-anchor="middle">1</text>
                <text class="energy-chart__label" x="232" y="142" text-anchor="middle">5</text>
                <text class="energy-chart__label" x="133" y="152" text-anchor="middle">V (L)</text>
                <path class="energy-chart__curve" d="M34 164 H58" />
                <text class="energy-chart__label" x="62" y="167">1,916 atm</text>
                <path class="energy-chart__guide" d="M128 164 H152" />
                <text class="energy-chart__label" x="156" y="167">3,337 atm</text>
              </svg>
            </figure>

            <section class="concept-panel concept-panel--mint">
              <h3>Leitura do gráfico</h3>
              <p>
                O coeficiente angular de cada reta vale μ·α·c/(2·A²·ΔP): quanto maior a pressão,
                menor a inclinação. Mas a inclinação caiu <em>menos</em> do que a pressão subiu — é
                assim que se percebe a compressibilidade da torta.
              </p>
              <p class="equation">P subiu 74,2%</p>
              <p class="equation">inclinação caiu 33,6%</p>
            </section>
          </div>

          <div class="worked-example">
            <h3>Passo 3 — Ajustar as retas</h3>
            <p>Por regressão linear de θ/V contra V (V em m³, para o SI):</p>
            <p class="equation">θ/V = a + b·V → b₁ = 4,52 × 10⁶ s/m⁶ ; a₁ = 9,43 × 10³ s/m³</p>
            <p class="equation">θ/V = a + b·V → b₂ = 3,00 × 10⁶ s/m⁶ ; a₂ = 6,39 × 10³ s/m³</p>
            <p class="factor__example">
              O coeficiente linear (a) corresponde a μ·R<sub>m</sub>/(A·ΔP) e permite estimar a
              resistência do meio; o coeficiente angular (b) é quem carrega α — e ele
              <strong>não depende</strong> de R<sub>m</sub>.
            </p>
          </div>

          <div class="worked-example">
            <h3>Passo 4 — Calcular α em cada pressão</h3>
            <p>Isolando α na forma linear:</p>
            <p class="equation">α = 2 · A² · ΔP · b / ( μ · c )</p>
            <p>
              O grupo fixo do sistema é 2·A² = 2 × 0,28² = 0,1568 m⁴ e μ·c = 1,2 × 10⁻³ × 25 = 0,030
              kg²/(m⁴·s).
            </p>
            <p class="equation">
              α₁ = 0,1568 × 1,941 × 10⁵ × 4,52 × 10⁶ / 0,030 = 4,59 × 10¹² m/kg
            </p>
            <p class="equation">
              α₂ = 0,1568 × 3,381 × 10⁵ × 3,00 × 10⁶ / 0,030 = 5,30 × 10¹² m/kg
            </p>
            <p class="equation">α₂ / α₁ = 1,16</p>
          </div>

          <div class="worked-example worked-example--soft">
            <h3>Passo 5 — Índice de compressibilidade</h3>
            <p>A resistência da torta segue uma lei de potência na pressão:</p>
            <p class="equation">α = α₀ · ΔP<sup>s</sup> → s = ln(α₂/α₁) / ln(P₂/P₁)</p>
            <p class="equation">s = ln(1,156) / ln(1,742) = 0,145 / 0,555 = 0,26</p>
            <p class="equation">α₀ = α₁ / P₁<sup>s</sup> = 4,59 × 10¹² / 24,1 = 1,9 × 10¹¹</p>
            <p>
              Logo, para esta torta:
              <strong>α ≈ 1,9 × 10¹¹ · ΔP<sup>0,26</sup></strong> (α em m/kg, ΔP em Pa).
            </p>
          </div>

          <p class="card-note">
            <strong>Interpretação.</strong> s = 0 significa torta incompressível (α constante); 0
            &lt; s &lt; 1, torta compressível. Aqui s ≈ 0,26: a resistência <em>aumenta</em> com a
            pressão, mas de forma moderada — quando a pressão subiu 74%, α cresceu apenas 16%.
            Consequência prática: dobrar a pressão de filtração <strong>não</strong> dobra a vazão
            (o ganho é amortecido pelo próprio aumento de α), o que justifica tratamento prévio da
            suspensão ou uso de auxiliar de filtração quando se quer mais produtividade.
          </p>
        </article>

        <article id="formulario" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Para levar para a prova</p>
              <h2>Formulário e checklist</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Equações usadas nos dois exercícios.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Situação</th>
                  <th scope="col">Equação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Forma diferencial (Darcy)</th>
                  <td>dV/dθ = A·ΔP / [μ·(α·c·V/A + R<sub>m</sub>)]</td>
                </tr>
                <tr>
                  <th scope="row">Integrada, R<sub>m</sub> ≈ 0 (SI)</th>
                  <td>V² = 2·A²·ΔP·θ / (μ·α·c)</td>
                </tr>
                <tr>
                  <th scope="row">Integrada, R<sub>m</sub> ≈ 0 (inglês)</th>
                  <td>V² = 2·A²·ΔP·g<sub>c</sub>·θ / (μ·α·c)</td>
                </tr>
                <tr>
                  <th scope="row">Forma linear (dados experimentais)</th>
                  <td>θ/V = [μ·α·c/(2·A²·ΔP)]·V + μ·R<sub>m</sub>/(A·ΔP)</td>
                </tr>
                <tr>
                  <th scope="row">α a partir do coeficiente angular</th>
                  <td>α = 2·A²·ΔP·b / (μ·c)</td>
                </tr>
                <tr>
                  <th scope="row">R<sub>m</sub> a partir do coeficiente linear</th>
                  <td>R<sub>m</sub> = a·A·ΔP / μ</td>
                </tr>
                <tr>
                  <th scope="row">Filtro de tambor rotatório</th>
                  <td>θ<sub>f</sub> = f·θ<sub>ciclo</sub> ; A = V / (V/A)</td>
                </tr>
                <tr>
                  <th scope="row">Compressibilidade da torta</th>
                  <td>α = α₀·ΔP<sup>s</sup></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Checklist de resolução</h3>
          <ol class="steps">
            <li>
              Confira o <strong>sistema de unidades</strong> pedido e converta pressão, tempo e
              volume antes de substituir.
            </li>
            <li>
              No sistema inglês, <strong>não esqueça g<sub>c</sub></strong
              >; no SI, use ΔP em pascal.
            </li>
            <li>
              Em equipamento contínuo, use o
              <strong>tempo efetivo (f · θ<sub>ciclo</sub>)</strong>, não o tempo de ciclo.
            </li>
            <li>
              Para dados de laboratório, sempre <strong>linearize</strong> (θ/V × V) — α vem do
              coeficiente angular e R<sub>m</sub> do linear.
            </li>
            <li>
              Verifique o resultado voltando à equação: o tempo recalculado tem de fechar com o
              dado.
            </li>
            <li>
              Interprete: s ≈ 0 → torta incompressível; s próximo de 1 → torta muito compressível e
              pouco ganho com mais pressão.
            </li>
          </ol>
        </article>

        <aside class="study-note">
          <h2>Respostas em uma linha</h2>
          <ul class="key-points">
            <li>
              <strong>Exercício 1:</strong> θ<sub>f</sub> = 105 s; ΔP = 29,24 lbf/ft²; V/A = 11,31
              ft; <strong>A ≈ 0,49 ft² ≈ 0,045 m² (452 cm²)</strong>.
            </li>
            <li>
              <strong>Exercício 2:</strong> b₁ = 4,52 × 10⁶ e b₂ = 3,00 × 10⁶ s/m⁶; α₁ = 4,59 × 10¹²
              e α₂ = 5,30 × 10¹² m/kg; <strong>s ≈ 0,26</strong> (torta compressível, com α₀ ≈ 1,9 ×
              10¹¹).
            </li>
          </ul>
          <p class="study-note__source">
            Resolução baseada no Exercício Proposto — Duplas (filtração) e no exercício extra-classe
            da disciplina de Operações Unitárias da UNIFAL-MG (Profa. Dra. Joelise Angelotti),
            usando a equação de filtração a pressão constante e o formalismo α = α₀·ΔP<sup>s</sup>.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/operacoes">
            <span>Voltar</span>
            ← Operações Unitárias — resumo geral
          </router-link>
          <router-link class="topic-nav__link" to="/resumins">
            <span>Todos</span>
            Resumins →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
