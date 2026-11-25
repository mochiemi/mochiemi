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
        <span>Soluções simples</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE II</p>
        <h1 class="intro__title">Soluções simples</h1>
        <p class="intro__lead">
          Dissolver é fazer duas ou mais substâncias formarem uma só fase. Desse gesto básico dependem
          solubilidade, escolha de solvente, qualidade da água e — no fim — a estabilidade e a segurança
          da preparação.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>8 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#conceito">Conceito</a>
        <a href="#solubilidade">Solubilidade</a>
        <a href="#concentracao">Concentração</a>
        <a href="#tipos">Tipos</a>
        <a href="#fatores">Fatores</a>
        <a href="#agua">Água</a>
        <a href="#custo">Custos</a>
        <a href="#nao-aquosos">Não aquosos</a>
        <a href="#preparo">Preparo</a>
      </nav>

      <div class="lesson">
        <article id="conceito" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O ponto de partida</p>
              <h2>Dissolução, solução e solubilidade</h2>
            </div>
          </header>
          <p>
            <strong>Dissolução</strong> é a operação física que consiste em misturar duas ou mais
            substâncias de modo a formarem uma só fase. <strong>Solução</strong> é formada por um
            solvente e um soluto.
          </p>
          <p>
            <strong>Coeficiente de solubilidade</strong> é a concentração, a determinada temperatura,
            da respectiva solução saturada. <strong>Soluções verdadeiras</strong> são aquelas cujas
            partículas apresentam dimensões inferiores a 0,001 µm — abaixo disso, o sistema é
            molecularmente disperso e não dispersa a luz.
          </p>

          <p class="card-note">
            Solução verdadeira ≠ dispersão coloidal ≠ emulsão ≠ suspensão. Só a primeira é
            termodinamicamente estável e opticamente límpida.
          </p>
        </article>

        <article id="solubilidade" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Escala oficial</p>
              <h2>Modos de expressar a solubilidade</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Classificação farmacopeica da solubilidade</caption>
              <thead>
                <tr>
                  <th scope="col">Termo descritivo</th>
                  <th scope="col">Quantidade de solvente</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Muito solúvel</th>
                  <td>menos de 1 parte</td>
                </tr>
                <tr>
                  <th scope="row">Facilmente solúvel</th>
                  <td>de 1 a 10 partes</td>
                </tr>
                <tr>
                  <th scope="row">Solúvel</th>
                  <td>de 10 a 30 partes</td>
                </tr>
                <tr>
                  <th scope="row">Ligeiramente solúvel</th>
                  <td>de 30 a 100 partes</td>
                </tr>
                <tr>
                  <th scope="row">Pouco solúvel</th>
                  <td>de 100 a 1.000 partes</td>
                </tr>
                <tr>
                  <th scope="row">Muito pouco solúvel</th>
                  <td>de 1.000 a 10.000 partes</td>
                </tr>
                <tr>
                  <th scope="row">Praticamente insolúvel</th>
                  <td>mais de 10.000 partes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A escala é de <strong>partes de solvente por parte de soluto</strong> — “solúvel em 30
            partes” significa 1 g em 30 mL. É uma referência qualitativa, não substitui a consulta à
            monografia.
          </p>
        </article>

        <article id="concentracao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Expressar quantidade</p>
              <h2>Modos de expressar a concentração</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Forma</th>
                  <th scope="col">Significado</th>
                  <th scope="col">Exemplo prático</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">% m/V</th>
                  <td>massa de substância dissolvida em 100 mL de solução.</td>
                  <td>15 g de furosemida em 100 mL = 15% m/V</td>
                </tr>
                <tr>
                  <th scope="row">% m/m</th>
                  <td>massa de substância dissolvida em 100 g de solução.</td>
                  <td>Soluções pesadas, como xaropes</td>
                </tr>
                <tr>
                  <th scope="row">% V/V</th>
                  <td>volume de substância dissolvida em 100 mL de solução.</td>
                  <td>Álcool 70º GL, essências</td>
                </tr>
                <tr>
                  <th scope="row">% V/m</th>
                  <td>volume de substância por massa de solução.</td>
                  <td>Menos comum, usado em algumas monografias</td>
                </tr>
                <tr>
                  <th scope="row">mEq</th>
                  <td>
                    miliequivalentes — expressam as concentrações dos íons em soluções de eletrólitos
                    administradas geralmente por via endovenosa.
                  </td>
                  <td>Soro fisiológico, Ringer, KCl 19,1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Em eletrólitos, mEq é mais informativo que a massa: o efeito osmótico e elétrico depende do
            número de cargas, não dos gramas.
          </p>
        </article>

        <article id="tipos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Três combinações</p>
              <h2>Tipos de soluções simples</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Gases em líquidos</h3>
              <p>
                A solubilidade do gás cai com o aumento da temperatura e com a presença de eletrólitos.
                O efeito <strong>salting out</strong> — adição de sal — reduz a solubilidade do gás e o
                expulsa da solução.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Líquidos em líquidos</h3>
              <ul class="key-points">
                <li>
                  <strong>Completamente miscíveis</strong> — formam uma única fase em qualquer
                  proporção (água e álcool).
                </li>
                <li>
                  <strong>Parcialmente miscíveis</strong> — a miscibilidade depende da proporção e da
                  temperatura (água e éter).
                </li>
              </ul>
            </section>
          </div>

          <p>
            <strong>Sólidos em líquidos</strong> — o caso mais frequente na farmácia — são influenciados
            por vários fatores, detalhados no cartão seguinte.
          </p>
        </article>

        <article id="fatores" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Sólidos em líquidos</p>
              <h2>Fatores que influenciam a dissolução</h2>
            </div>
          </header>

          <div class="factor-grid">
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">T</span>
              <h3>Temperatura</h3>
              <p>
                Em geral aumenta a solubilidade de sólidos iônicos, mas pode degradar o fármaco — daí o
                limite de aquecimento.
              </p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">Q</span>
              <h3>Estrutura química</h3>
              <p>
                Grupos polares favorecem a hidrossolubilidade; cadeias longas apolares, a
                lipossolubilidade.
              </p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">F</span>
              <h3>Estado físico e polimorfismo</h3>
              <p>
                Formas cristalinas diferentes têm energias de rede diferentes — e solubilidades
                diferentes.
              </p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">D</span>
              <h3>Estado de divisão e agitação</h3>
              <p>
                Quanto menor a partícula, maior a superfície de contato; a agitação renova a camada
                difusional.
              </p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">ε</span>
              <h3>Constante dielétrica</h3>
              <p>
                Quanto maior a constante dielétrica do solvente, maior a dissociação de eletrólitos.
                Água ≈ 80; misturas álcool-glicerina-água ≈ 40.
              </p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">pH</span>
              <h3>pH</h3>
              <p>
                Fármacos ácidos ou básicos só se dissolvem bem quando ionizados — o pH define a fração
                ionizada.
              </p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">γ</span>
              <h3>Tensão superficial</h3>
              <p>
                Tensoativos reduzem a tensão interfacial e melhoram a molhabilidade do pó, acelerando a
                dissolução.
              </p>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Solubilidade do sulfatiazol em água (25 °C) em função do pH</caption>
              <thead>
                <tr>
                  <th scope="col" class="num">pH</th>
                  <th scope="col" class="num">Solubilidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">6,00</td>
                  <td class="num">60 mg/100 mL</td>
                </tr>
                <tr>
                  <td class="num">7,50</td>
                  <td class="num">235 mg/100 mL</td>
                </tr>
                <tr>
                  <td class="num">9,35</td>
                  <td class="num">1.000 mg/100 mL</td>
                </tr>
                <tr>
                  <td class="num">10,2</td>
                  <td class="num">10.000 mg/100 mL</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            O salto é dramático: entre pH 6,0 e 10,2 a solubilidade cresce cerca de <strong>167
            vezes</strong>. É a demonstração mais direta de que, para fármacos ionizáveis, o pH é o
            principal parâmetro de formulação.
          </p>
        </article>

        <article id="agua" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Solvente por excelência</p>
              <h2>Solventes e os tipos de água</h2>
            </div>
          </header>

          <section class="worked-example">
            <h3>Características exigidas de um solvente</h3>
            <ul class="key-points">
              <li>Ser desprovido de toxicidade.</li>
              <li>Não originar irritação nas mucosas, quando aplicado.</li>
              <li>Ser inerte do ponto de vista fisiológico.</li>
              <li>Ser compatível com os fármacos a dissolver.</li>
            </ul>
          </section>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Vantagens da água</h3>
              <ul class="key-points">
                <li>Dissolve inúmeras substâncias.</li>
                <li>É constituinte normal dos tecidos.</li>
                <li>
                  Assegura dosagem rigorosa do medicamento e origina ação terapêutica mais pronta.
                </li>
              </ul>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Desvantagens da água</h3>
              <ul class="key-points">
                <li>É invadida por bactérias e fungos.</li>
                <li>
                  É instável quimicamente: pode ocorrer hidrólise e oxidação dos fármacos.
                </li>
              </ul>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Águas de uso farmacêutico</caption>
              <thead>
                <tr>
                  <th scope="col">Tipo</th>
                  <th scope="col">Como se obtém / cuidados</th>
                  <th scope="col">Características</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Potável</th>
                  <td>
                    Abastece a farmácia; caixa d'água protegida contra insetos e aves, lavada
                    periodicamente; análise físico-química e microbiológica periódica.
                  </td>
                  <td>Não serve para preparações; serve para limpeza e lavagem de material.</td>
                </tr>
                <tr>
                  <th scope="row">Purificada</th>
                  <td>
                    Destilação, deionização ou osmose reversa, sempre após pré-filtração. Deve conter
                    conservante quando deionizada. Validade: deionizada 24 h; destilada 48 h. Análises
                    periódicas com resultados arquivados.
                  </td>
                  <td>Base das preparações magistrais.</td>
                </tr>
                <tr>
                  <th scope="row">Destilada</th>
                  <td>Evaporação e condensação.</td>
                  <td>
                    Inativa microrganismos; condutividade 5–8 µS/cm; pode conter orgânicos voláteis;
                    alto consumo de energia e água; baixo custo de implantação e manutenção.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Bidestilada</th>
                  <td>Destilação repetida em vidro.</td>
                  <td>Mais pura; usada em preparações oftálmicas e parenterais.</td>
                </tr>
                <tr>
                  <th scope="row">Deionizada</th>
                  <td>Resinas de troca iônica.</td>
                  <td>
                    Ausência de íons; condutividade abaixo de 1,0 µS/cm; contamina-se mais facilmente
                    que a destilada; baixo consumo de energia e água; baixo custo de implantação e alto
                    custo de manutenção.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Osmose reversa</th>
                  <td>Membranas sob pressão.</td>
                  <td>
                    Processo rápido e econômico; água química e bacteriologicamente pura; baixo consumo
                    de água e energia; sistema anaeróbico; fácil de operar.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="custo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Decisão de investimento</p>
              <h2>Destilador × osmose reversa</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Comparação de custos de produção de água purificada</caption>
              <thead>
                <tr>
                  <th scope="col">Característica</th>
                  <th scope="col" class="num">Destilador</th>
                  <th scope="col" class="num">Osmose reversa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Preço do equipamento</th>
                  <td class="num">X</td>
                  <td class="num">2 X</td>
                </tr>
                <tr>
                  <th scope="row">Consumo de água</th>
                  <td class="num">95 L/h</td>
                  <td class="num">20 L/h</td>
                </tr>
                <tr>
                  <th scope="row">Consumo de energia</th>
                  <td class="num">3,5 kWh</td>
                  <td class="num">0,07 kWh</td>
                </tr>
                <tr>
                  <th scope="row">Tipo de água</th>
                  <td class="num">III ou IV</td>
                  <td class="num">III ou IV</td>
                </tr>
                <tr>
                  <th scope="row">Horas úteis/dia · dias úteis/mês</th>
                  <td class="num">10 · 22</td>
                  <td class="num">10 · 22</td>
                </tr>
                <tr>
                  <th scope="row">Energia + água por mês</th>
                  <td class="num">R$ 995,80</td>
                  <td class="num">R$ 32,34</td>
                </tr>
                <tr>
                  <th scope="row">Custo por litro produzido</th>
                  <td class="num">R$ 0,90/L</td>
                  <td class="num">R$ 0,03/L</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Para 1.100 L/mês, a osmose reversa custa cerca de <strong>30 vezes menos</strong> por litro.
            O investimento inicial maior se paga em poucos meses de operação — por isso é a tecnologia
            padrão em farmácias de manipulação.
          </p>
        </article>

        <article id="nao-aquosos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Quando a água não serve</p>
              <h2>Solventes não aquosos</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Lista de uso corrente</h3>
              <ul class="key-points">
                <li>Acetona</li>
                <li>
                  Álcoois: benzílico, etílico, isopropílico
                </li>
                <li>Propilenoglicol</li>
                <li>Glicerina</li>
                <li>Polietilenoglicóis (PEG)</li>
                <li>Éter sulfúrico e éter de petróleo</li>
                <li>Óleos</li>
                <li>Parafina líquida</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Quando escolher</h3>
              <ul class="key-points">
                <li>Fármaco lipossolúvel (vitaminas A, D, E, K; hormônios).</li>
                <li>Necessidade de reduzir a hidrólise.</li>
                <li>Preparações de uso externo que exigem secagem rápida (acetona).</li>
                <li>Veículo viscoso para uso em mucosas (glicerina, propilenoglicol).</li>
              </ul>
            </section>
          </div>
        </article>

        <article id="preparo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">09</span>
            <div>
              <p class="card-heading__eyebrow">Mão na massa</p>
              <h2>Preparação e acondicionamento</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Material</h3>
              <ul class="key-points">
                <li>Cálice graduado</li>
                <li>Bastão</li>
                <li>Papel manteiga</li>
                <li>Balança de precisão</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Sequência</h3>
              <ol class="steps">
                <li>Calcular a quantidade de soluto (ativo).</li>
                <li>Pesar e medir o(s) princípio(s) ativo(s).</li>
                <li>
                  Escolher o solvente ou sistema de solventes; consultar literatura especializada para a
                  solubilidade.
                </li>
                <li>Identificar interações fármaco-fármaco e fármaco-solvente.</li>
                <li>
                  Verificar necessidade de adjuvantes: antioxidantes, tampão, corretivo de sabor,
                  corante.
                </li>
                <li>Definir ordem de adição de cada solvente e ativo.</li>
                <li>
                  Determinar a técnica: aquecimento, temperatura, proporção de cada componente do
                  veículo e ordem de adição.
                </li>
                <li>Se possível, filtrar.</li>
                <li>Embalar em frasco adequado e rotular.</li>
              </ol>
            </section>
          </div>

          <p class="card-note">
            O acondicionamento entra na planilha de operações: vidro âmbar para fotossensíveis,
            recipiente de boca larga para líquidos viscosos, tampa com lacre e rótulo com lote e
            validade.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Solução verdadeira: partículas menores que 0,001 µm.</li>
            <li>Coeficiente de solubilidade = concentração da solução saturada na temperatura dada.</li>
            <li>Escala farmacopeica: muito solúvel (&lt;1 parte) até praticamente insolúvel (&gt;10.000 partes).</li>
            <li>mEq é usado para eletrólitos endovenosos.</li>
            <li>Salting out reduz a solubilidade de gases.</li>
            <li>pH é o fator mais decisivo para fármacos ionizáveis.</li>
            <li>Validade da água deionizada: 24 h; destilada: 48 h.</li>
            <li>Osmose reversa: menor consumo e menor custo por litro.</li>
            <li>Ordem de adição e técnica de aquecimento fazem parte do cálculo, não só da execução.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Soluções simples” (Prof. Antonio Luengo Garcia, UNIFAL-MG,
            2026) e de Prista/Ansel para as definições complementares.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/calculos">
            <span>Anterior</span>
            ← Cálculos farmacêuticos
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/extrativas">
            <span>Próximo</span>
            Soluções extrativas →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
