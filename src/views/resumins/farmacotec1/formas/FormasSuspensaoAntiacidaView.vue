<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/farmacotec1">Farmacotécnica I</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/farmacotec1/formas">Formas farmacêuticas</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Suspensão antiácida</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">MÓDULO 8 · SISTEMA DISPERSO</p>
        <h1 class="intro__title">Suspensão oral floculada de hidróxido de alumínio e magnésio</h1>
        <p class="intro__lead">
          Aqui o ativo não dissolve — e é isso que se quer. O problema é a sedimentação: partículas
          pequenas, meio viscoso e flocos controlados para que o frasco volte a ficar homogêneo com
          poucas inversões.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Lei de Stokes</span>
          <span class="intro__chip">Teoria DLVO</span>
          <span class="intro__chip">Reologia tixotrópica</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#formula">Fórmula</a>
        <a href="#preparo">Preparo</a>
        <a href="#analise">Análise crítica</a>
        <a href="#estabilidade">Estabilidade</a>
      </nav>

      <div class="lesson">
        <article id="formula" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">Fórmula quali-quantitativa</p>
              <h2>O que entra em 100 mL</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Suspensão antiácida de hidróxido de alumínio e magnésio (100 mL)
              </caption>
              <thead>
                <tr>
                  <th scope="col">Componente</th>
                  <th scope="col">Concentração</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Função</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Hidróxido de alumínio (gel seco)</th>
                  <td>6,0% m/v</td>
                  <td>6,00 g</td>
                  <td>Ativo insolúvel — antiácido neutralizante</td>
                </tr>
                <tr>
                  <th scope="row">Hidróxido de magnésio</th>
                  <td>4,0% m/v</td>
                  <td>4,00 g</td>
                  <td>Ativo insolúvel — antiácido neutralizante</td>
                </tr>
                <tr>
                  <th scope="row">Glicerina</th>
                  <td>5,0% v/v</td>
                  <td>5,00 mL</td>
                  <td>Umectante / molhador das partículas</td>
                </tr>
                <tr>
                  <th scope="row">CMC sódica (CMC-Na)</th>
                  <td>0,5% m/v</td>
                  <td>0,50 g</td>
                  <td>Suspensor — polímero viscosificante hidrocoloide</td>
                </tr>
                <tr>
                  <th scope="row">Cloreto de sódio</th>
                  <td>0,10% m/v</td>
                  <td>0,10 g</td>
                  <td>Eletrólito floculante (ajusta o potencial zeta)</td>
                </tr>
                <tr>
                  <th scope="row">Sorbitol 70%</th>
                  <td>10,0% v/v</td>
                  <td>10,00 mL</td>
                  <td>Edulcorante, modificador de viscosidade e de densidade</td>
                </tr>
                <tr>
                  <th scope="row">Metilparabeno</th>
                  <td>0,15% m/v</td>
                  <td>0,15 g</td>
                  <td>Conservante da fase contínua</td>
                </tr>
                <tr>
                  <th scope="row">Propilparabeno</th>
                  <td>0,03% m/v</td>
                  <td>0,03 g</td>
                  <td>Conservante da fase dispersa</td>
                </tr>
                <tr>
                  <th scope="row">Óleo essencial de hortelã-pimenta</th>
                  <td>0,05% v/v</td>
                  <td>0,05 mL</td>
                  <td>Aromatizante refrescante</td>
                </tr>
                <tr>
                  <th scope="row">Água purificada</th>
                  <td>q.s.p. 100 mL</td>
                  <td>100 mL</td>
                  <td>Fase externa contínua</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="preparo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Procedimento</p>
              <h2>Passo a passo comentado</h2>
            </div>
          </header>

          <ol class="steps">
            <li>Paramentar-se com EPIs completos.</li>
            <li>Pesar hidróxidos, CMC-Na, NaCl e parabenos.</li>
            <li>
              <strong>Mucilagem (fase contínua):</strong> aquecer 50 mL de água a 70 °C, dissolver
              os parabenos, polvilhar a CMC-Na lentamente sob agitação até hidratação total e
              resfriar.
            </li>
            <li>Adicionar sorbitol 70% e NaCl à mucilagem, agitando.</li>
            <li>
              <strong>Umectação (fase dispersa):</strong> em almofariz, misturar os dois hidróxidos
              e acrescentar a glicerina aos poucos, triturando até pasta lisa, sem grumos nem ar.
            </li>
            <li>
              Incorporar a mucilagem em pequenas porções sobre a pasta, formando a suspensão
              primária.
            </li>
            <li>Transferir para béquer de 400 mL, lavando o almofariz com água.</li>
            <li>
              Adicionar a essência de menta e agitar em dispersor de alto cisalhamento por 5
              minutos.
            </li>
            <li>Completar o volume a 100 mL em cálice graduado.</li>
            <li>
              Envasar em frasco âmbar de 100 mL, lacrar e rotular com a advertência obrigatória.
            </li>
          </ol>

          <p class="card-note">
            A ordem é uma escada de molhabilidade: primeiro o pó é molhado pela glicerina, depois
            disperso na mucilagem e só então cisalhado. Inverter isso deixa grumos secos no produto.
          </p>
        </article>

        <article id="analise" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Análise crítica</p>
              <h2>Física da sedimentação</h2>
            </div>
          </header>

          <p class="equation">v = 2 r² (ρ<sub>p</sub> − ρ<sub>f</sub>) g / (9 η)</p>

          <p>
            Pela lei de Stokes, a velocidade de sedimentação cresce com o quadrado do raio e com a
            diferença de densidade, e cai com a viscosidade do meio. Daí as três alavancas:
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Cada decisão da fórmula atua em uma variável da equação
              </caption>
              <thead>
                <tr>
                  <th scope="col">Variável</th>
                  <th scope="col">Como a fórmula intervém</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">r (raio)</th>
                  <td>
                    Cominuição e cisalhamento reduzem o tamanho das partículas e dos aglomerados
                  </td>
                </tr>
                <tr>
                  <th scope="row">η (viscosidade)</th>
                  <td>CMC-Na forma mucilagem que aumenta a viscosidade do meio</td>
                </tr>
                <tr>
                  <th scope="row">ρ<sub>p</sub> − ρ<sub>f</sub></th>
                  <td>
                    Sorbitol e glicerina elevam a densidade da fase contínua e aproximam as
                    densidades
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Umectação</h3>
              <p>
                Partículas secas de hidróxidos retêm ar na superfície e flutuam. A glicerina reduz a
                tensão interfacial sólido-líquido e leva o ângulo de contato a ≈ 0°, permitindo que
                a água envolva cada partícula.
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Floculação controlada</h3>
              <p>
                O NaCl a 0,10% reduz parcialmente o potencial zeta e leva o sistema ao segundo
                mínimo de atração da curva DLVO: formam-se flocos frouxos, em rede.
              </p>
            </section>
          </div>
        </article>

        <article id="estabilidade" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Estabilidade</p>
              <h2>Defloculado × floculado</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Comparação dos dois estados de dispersão
              </caption>
              <thead>
                <tr>
                  <th scope="col">Aspecto</th>
                  <th scope="col">Defloculado</th>
                  <th scope="col">Floculado (ideal)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Potencial zeta</th>
                  <td>Alto, com forte repulsão</td>
                  <td>Reduzido pelo eletrólito</td>
                </tr>
                <tr>
                  <th scope="row">Sedimentação</th>
                  <td>Lenta e individual</td>
                  <td>Rápida, em flocos</td>
                </tr>
                <tr>
                  <th scope="row">Sedimento</th>
                  <td>Compacto, irreversível (<em>caking</em>)</td>
                  <td>Volumoso, poroso e redispersível</td>
                </tr>
                <tr>
                  <th scope="row">Dose</th>
                  <td>Risco de dose errada</td>
                  <td>Homogênea após agitação</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Controle de qualidade da suspensão
              </caption>
              <thead>
                <tr>
                  <th scope="col">Ensaio</th>
                  <th scope="col">Especificação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Volume sedimentar (F = V<sub>u</sub> / V<sub>0</sub>)</th>
                  <td>F → 1,0 em suspensão floculada ideal</td>
                </tr>
                <tr>
                  <th scope="row">Redispersão</th>
                  <td>Menos de 10 inversões manuais</td>
                </tr>
                <tr>
                  <th scope="row">Reologia</th>
                  <td>Pseudoplástica e tixotrópica (viscosa em repouso, fluida sob agitação)</td>
                </tr>
                <tr>
                  <th scope="row">pH</th>
                  <td>Compatível com os hidróxidos e com a estabilidade dos parabenos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A tixotropia é o que permite ao paciente verter a dose com facilidade e, ao mesmo tempo,
            manter a suspensão estável no frasco em repouso.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              Suspensão = dispersão grosseira bifásica com sólido insolúvel no veículo líquido.
            </li>
            <li>Stokes: v = 2r²(ρ<sub>p</sub> − ρ<sub>f</sub>)g / 9η.</li>
            <li>Três alavancas: reduzir r, aumentar η, reduzir Δρ.</li>
            <li>
              Glicerina = umectante; CMC-Na = suspensor; NaCl = floculante; sorbitol = densidade e
              sabor.
            </li>
            <li>
              Floculado sedimenta rápido, mas redispersa; defloculado compacta (<em>caking</em>).
            </li>
            <li>F = V<sub>u</sub>/V<sub>0</sub> deve tender a 1,0.</li>
          </ul>
          <p class="study-note__source">
            Base: Relatório Técnico 8 — suspensão oral floculada antiácida (DF 125, UNIFAL-MG).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/formas/errino">
            <span>Anterior</span>
            ← Errino de nafazolina
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/formas">
            <span>Voltar ao início</span>
            Formas farmacêuticas →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
