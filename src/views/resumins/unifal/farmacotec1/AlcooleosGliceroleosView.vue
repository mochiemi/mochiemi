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
        <span>Alcóoleos e óleos</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE II</p>
        <h1 class="intro__title">Alcóoleos, gliceróleos e óleos</h1>
        <p class="intro__lead">
          Quando a água não é o veículo: álcool, glicerina, éter e óleos. A página cobre soluções
          alcoólicas, tinturas e alcoolaturas, gliceróleos, eteróleos e oleóleos — com seus ensaios,
          alterações e formas de conservação.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>7 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#alcooleos">Alcóoleos</a>
        <a href="#tinturas">Tinturas</a>
        <a href="#alcoolaturas">Alcoolaturas</a>
        <a href="#gliceroleos">Gliceróleos</a>
        <a href="#eteroleos">Eteróleos</a>
        <a href="#oleoleos">Oleóleos</a>
        <a href="#conservacao">Conservação</a>
      </nav>

      <div class="lesson">
        <article id="alcooleos" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O ponto de partida</p>
              <h2>Alcóoleos: definição e classificação</h2>
            </div>
          </header>
          <p>
            Alcóoleos são preparações cujo veículo principal é o <strong>álcool etílico</strong> de
            diversas graduações, preparados por solução simples, maceração, percolação ou digestão.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Classificação dos alcóoleos</caption>
              <thead>
                <tr>
                  <th scope="col">Classe</th>
                  <th scope="col">Característica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Soluções simples</th>
                  <td>
                    Simples, ácidas e açucaradas (elixires). Também chamadas de
                    <strong>alcoolitos</strong>: obtidas por dissolução total das substâncias, com ou sem
                    aquecimento, ou por ação de adjuvantes. Ex.: solução alcoólica de iodo, de cânfora,
                    de mentol.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Soluções alcoólicas ácidas</th>
                  <td>
                    Obtidas pela mistura do álcool com um ou vários ácidos minerais. Prepara-se diluindo
                    o ácido na água, juntando o álcool e deixando em vidro aberto por 24 horas; depois
                    fechar e conservar em lugar fresco, ao abrigo da luz.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Soluções alcoólicas açucaradas</th>
                  <td>
                    Formas de uso oral com álcool e açúcar. Os elixires são claros, adocicados e
                    aromatizados.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Tinturas</th>
                  <td>Preparações alcoólicas/hidroalcoólicas de drogas vegetais, animais ou minerais.</td>
                </tr>
                <tr>
                  <th scope="row">Alcoolaturas</th>
                  <td>Ação dissolvente do álcool sobre vegetais frescos.</td>
                </tr>
                <tr>
                  <th scope="row">Pseudo-alcoolatos ou espíritos</th>
                  <td>Soluções alcoólicas ou hidroalcoólicas de substâncias voláteis.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>Pseudo-alcoolatos ou espíritos</h3>
            <ul class="key-points">
              <li>Uso interno: inalações ou corretivos de sabor.</li>
              <li>Métodos: soluções simples, maceração, percolação e digestão.</li>
              <li>
                São soluções de substâncias voláteis — o que exige recipiente bem fechado e envase sem
                perda de vapores.
              </li>
            </ul>
          </section>
        </article>

        <article id="tinturas" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Extração alcoólica</p>
              <h2>Tinturas</h2>
            </div>
          </header>
          <p>
            Tinturas são preparações alcoólicas ou hidroalcoólicas resultantes da extração de drogas
            vegetais ou animais, ou da diluição dos respectivos extratos.
          </p>

          <div class="formula" aria-label="Dez mililitros de tintura equivalem a um grama de droga seca">
            <span class="formula__label">10 mL de tintura = 1 g de droga seca</span>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Vantagens</h3>
              <ul class="key-points">
                <li>Riqueza em princípio ativo.</li>
                <li>Boa conservação.</li>
                <li>Facilidade de medição posológica.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Preparação — premissas</h3>
              <ul class="key-points">
                <li>Observar a droga, escolher o álcool de graduação adequada e o método de extração.</li>
                <li>Drogas vegetais, animais e minerais.</li>
                <li>
                  Relação álcool/droga: 10% para drogas heróicas (de ação intensa) e 20% para drogas não
                  heróicas.
                </li>
                <li>Métodos: maceração, percolação, solução ou digestão.</li>
                <li>Solvente: álcool de 30 a 90 °GL.</li>
              </ul>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Escolha do método e do solvente</caption>
              <thead>
                <tr>
                  <th scope="col">Situação</th>
                  <th scope="col">Conduta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Droga não heróica</th>
                  <td>Maceração, relação 20%.</td>
                </tr>
                <tr>
                  <th scope="row">Droga heróica</th>
                  <td>Percolação, relação 10%.</td>
                </tr>
                <tr>
                  <th scope="row">Extrato disponível</th>
                  <td>Dissolução do extrato correspondente.</td>
                </tr>
                <tr>
                  <th scope="row">Substância hidrossolúvel</th>
                  <td>Álcool de baixa graduação.</td>
                </tr>
                <tr>
                  <th scope="row">Substância lipossolúvel</th>
                  <td>Álcool mais concentrado.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Alterações</h3>
              <ul class="key-points">
                <li>Conservar em frasco de vidro, ao abrigo da luz.</li>
                <li>Precipitações, oxidações e hidrólises.</li>
                <li>
                  Aconselha-se renovação dentro do prazo condizente com sua instabilidade, ou seja,
                  <strong>6 meses</strong>.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Ensaios</h3>
              <ul class="key-points">
                <li>Caracteres organolépticos (cor, cheiro, sabor).</li>
                <li>Densidade: 0,87 – 0,98.</li>
                <li>Resíduo seco: 1 – 6%.</li>
                <li>Índices: permanganato, acidez, formol.</li>
                <li>Cinzas.</li>
                <li>Identificação: capilaridade, cromatografia.</li>
                <li>Determinação do grau alcoólico.</li>
              </ul>
            </section>
          </div>
        </article>

        <article id="alcoolaturas" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Vegetal fresco</p>
              <h2>Alcoolaturas</h2>
            </div>
          </header>
          <p>
            São preparações resultantes da ação dissolvente do álcool sobre <strong>vegetais
            frescos</strong>, na proporção de <strong>500 g de droga para 1 L de solvente</strong>.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Ordinárias</h3>
              <p>Obtidas por maceração durante <strong>10 dias</strong>.</p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Estabilizadas</h3>
              <p>Obtidas por ebulição durante <strong>40 a 60 minutos</strong>, o que inativa enzimas.</p>
            </section>
          </div>

          <p class="card-note">
            Como a droga é fresca, há muita água no material — o álcool precisa ser mais concentrado
            para compensar. A fervura das estabilizadas tem a função de inativar enzimas que
            degradariam o ativo.
          </p>
        </article>

        <article id="gliceroleos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Veículo viscoso</p>
              <h2>Gliceróleos</h2>
            </div>
          </header>
          <p>
            São preparações farmacêuticas líquidas cujo veículo principal é a <strong>glicerina</strong>,
            podendo conter outros dissolventes como água e álcool.
          </p>

          <section class="worked-example">
            <h3>Obtenção da glicerina</h3>
            <ul class="key-points">
              <li>Por hidrólise de gorduras e óleos na obtenção de sabões.</li>
              <li>Por hidrólise de gorduras e óleos mediante vapor de água sob pressão.</li>
              <li>Por fermentação de açúcar em presença de grandes quantidades de sulfito de sódio.</li>
              <li>A partir do propilenoglicol.</li>
            </ul>
          </section>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Classificação</caption>
              <thead>
                <tr>
                  <th scope="col">Classe</th>
                  <th scope="col">Veículo</th>
                  <th scope="col">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Glicéreos, glicerolados ou gliceritos</th>
                  <td>Glicerina ou água-glicerina</td>
                  <td>
                    Fármacos para ação local na mucosa da boca (colutórios e gargarejos), preparados por
                    dissolução simples.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Glicero-alcóoleos</th>
                  <td>Glicerina-álcool-água</td>
                  <td>
                    Principal característica: densidade = 1. Mistura ajustada para igualar a densidade
                    da água.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            <strong>Cuidado:</strong> o aquecimento da glicerina gera <strong>acroleína</strong>, aldeído
            irritante de odor desagradável. Aqueça só o necessário e em banho-maria.
          </p>
        </article>

        <article id="eteroleos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Veículo volátil</p>
              <h2>Eteróleos</h2>
            </div>
          </header>
          <p>
            São preparações cujo veículo principal é o <strong>éter</strong> ou uma mistura de éter e
            álcool.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Dissolução simples</h3>
              <p>Exemplo clássico: colódio elástico.</p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Dissolução extrativa</h3>
              <p>Exemplo: tinturas etéreas de valeriana e de cantáridas.</p>
            </section>
          </div>

          <p class="card-note">
            O éter é extremamente volátil e inflamável: recipiente hermético, longe de chama e de
            fontes de calor, e envase rápido.
          </p>
        </article>

        <article id="oleoleos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Veículo oleoso</p>
              <h2>Oleóleos</h2>
            </div>
          </header>
          <p>
            São formas farmacêuticas obtidas por dissolução simples ou extrativa de um princípio ativo
            num óleo (amêndoas, azeite, bacalhau etc.).
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Preparação</h3>
              <ul class="key-points">
                <li>Digestão a 60 – 70 °C.</li>
                <li>Uso interno: óleo de oliva purificado e neutro ou óleo de amêndoas.</li>
                <li>Oleóleos de plantas medicinais: 10%.</li>
                <li>Exemplos comerciais: óleo de fígado de bacalhau, Laxol®, Nujol®.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Ensaios</h3>
              <ul class="key-points">
                <li>Densidade</li>
                <li>Viscosidade</li>
                <li>Índice de acidez</li>
                <li>Índice de iodo</li>
                <li>Índice de saponificação</li>
                <li>Índice de peróxidos</li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            Acondicionamento: frascos bem fechados, em lugar fresco e ao abrigo da luz. Os índices não
            são decoração: acidez e peróxidos medem, respectivamente, hidrólise e oxidação — as duas
            vias de degradação dos óleos.
          </p>
        </article>

        <article id="conservacao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Degradação de lipídios</p>
              <h2>Conservação dos oleóleos</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Hidrólise</h3>
              <p>
                Presença de ácidos livres devido à atividade das lipases em presença de água. Eleva o
                índice de acidez.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Oxidação</h3>
              <p>Ocorre por duas vias, descritas ao lado.</p>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Tipo de ranço</th>
                  <th scope="col">Mecanismo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Ranço cetônico</th>
                  <td>
                    Ácidos graxos com menos de 14 átomos de carbono são atacados por microrganismos e
                    formam <strong>metilcetonas</strong>.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Ranço por auto-oxidação</th>
                  <td>
                    Decomposição dos óleos pela ação do ar, da luz e do calor — reação em cadeia de
                    radicais livres.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Prevenção: refrigeração, proteção da luz, envase com pouco espaço livre (headspace) e uso de
            antioxidantes lipossolúveis — BHA, BHT, alfa-tocoferol ou galatos.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Alcóoleos: simples (alcoolitos), ácidos, açucarados, tinturas, alcoolaturas e espíritos.</li>
            <li>Tintura: 10 mL = 1 g de droga seca; validade de 6 meses.</li>
            <li>Tintura de droga heróica: percolação, 10%. Não heróica: maceração, 20%.</li>
            <li>Alcoolatura: 500 g de droga fresca por litro; ordinária 10 dias, estabilizada 40–60 min de ebulição.</li>
            <li>Gliceróleos: glicéreos (boca) e glicero-alcóoleos (densidade = 1).</li>
            <li>Aquecer glicerina gera acroleína — irritante.</li>
            <li>Oleóleos: digestão a 60–70 °C; 10% para plantas medicinais.</li>
            <li>Ranço cetônico (metilcetonas) ≠ ranço por auto-oxidação (ar, luz, calor).</li>
            <li>Ensaios de óleos: densidade, viscosidade, acidez, iodo, saponificação, peróxidos.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Alcóoleos, gliceróleos, eteróleos e oleóleos” (Prof. Antonio
            Luengo Garcia, UNIFAL-MG, 2026).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/xaropes">
            <span>Anterior</span>
            ← Xaropes e elixires
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/colirios">
            <span>Próximo</span>
            Colírios →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
