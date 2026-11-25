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
        <router-link to="/resumins/unifal/farmacotec1/formas">Formas farmacêuticas</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Colírio de sulfato de zinco</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">MÓDULO 5 · PREPARAÇÃO OFTÁLMICA</p>
        <h1 class="intro__title">Colírio isotônico de sulfato de zinco 0,25% com tampão borato</h1>
        <p class="intro__lead">
          No olho não existe margem: esterilidade absoluta, isotonia calculada e um pH que mantenha
          o zinco em solução. Cada decisão desta fórmula responde a um requisito farmacopeico dos
          colírios.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Esterilidade</span>
          <span class="intro__chip">Lumière-Chavrotier</span>
          <span class="intro__chip">Tampão borato</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#formula">Fórmula</a>
        <a href="#preparo">Preparo</a>
        <a href="#analise">Análise crítica</a>
        <a href="#isotonia">Isotonia</a>
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
                Solução oftálmica estéril isotônica (volume final 100 mL)
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
                  <th scope="row">Sulfato de zinco heptaidratado</th>
                  <td>0,25% m/v</td>
                  <td>0,25 g</td>
                  <td>Ativo — adstringente / anti-inflamatório oftálmico</td>
                </tr>
                <tr>
                  <th scope="row">Ácido bórico</th>
                  <td>1,20% m/v</td>
                  <td>1,20 g</td>
                  <td>Componente tampão e isotonizante secundário</td>
                </tr>
                <tr>
                  <th scope="row">Borato de sódio decaidratado</th>
                  <td>0,05% m/v</td>
                  <td>0,05 g</td>
                  <td>Componente alcalinizante do tampão borato</td>
                </tr>
                <tr>
                  <th scope="row">Cloreto de benzalcônio</th>
                  <td>0,01% m/v</td>
                  <td>0,01 g (usar solução 1:1000)</td>
                  <td>Conservante antimicrobiano (tensoativo catiônico)</td>
                </tr>
                <tr>
                  <th scope="row">Cloreto de sódio</th>
                  <td>0,42% m/v (cálculo MVI)</td>
                  <td>0,42 g</td>
                  <td>Isotonizante primário</td>
                </tr>
                <tr>
                  <th scope="row">Água para injetáveis</th>
                  <td>q.s.p. 100 mL</td>
                  <td>100 mL</td>
                  <td>Veículo estéril e apirogênico</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A água não é "purificada" e sim <strong>para injetáveis</strong>: estéril, apirogênica e
            adequada ao envase asséptico.
          </p>
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
            <li>
              Ligar o fluxo laminar 30 minutos antes e sanitizar as superfícies com álcool 70%
              estéril filtrado em 0,22 µm.
            </li>
            <li>
              Paramentar-se com roupa estéril, propés, touca, máscara e luvas estéreis sem talco.
            </li>
            <li>
              Pesar sulfato de zinco, ácido bórico, borato de sódio e cloreto de sódio (balança
              0,0001 g).
            </li>
            <li>Calcular a isotonia (Lumière-Chavrotier) e confirmar os 0,42 g de NaCl.</li>
            <li>
              Dissolver ácido bórico e borato em 70 mL de API aquecida a 50 °C até solução límpida.
            </li>
            <li>
              Resfriar e adicionar sulfato de zinco, cloreto de sódio e cloreto de benzalcônio.
            </li>
            <li>Transferir para balão volumétrico estéril e completar o volume.</li>
            <li>
              Filtrar em membrana estéril de 0,22 µm diretamente para o frasco conta-gotas estéril.
            </li>
            <li>Vedar sob fluxo laminar, lacrar e rotular.</li>
          </ol>
        </article>

        <article id="analise" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Análise crítica</p>
              <h2>Os requisitos que a fórmula atende</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Requisito → solução farmacotécnica adotada
              </caption>
              <thead>
                <tr>
                  <th scope="col">Requisito</th>
                  <th scope="col">Como a fórmula resolve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Esterilidade</th>
                  <td>
                    Filtração em membrana de 0,22 µm sob fluxo laminar. A córnea não tem flora
                    normal:
                    <em>Pseudomonas aeruginosa</em> pode causar ulceração e cegueira em 24–48 h.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Isotonia</th>
                  <td>
                    NaCl calculado para ~290 mOsm/kg. Solução hipotônica causa edema corneano por
                    lise; hipertônica causa dor e lacrimejamento reflexo que lava o ativo.
                  </td>
                </tr>
                <tr>
                  <th scope="row">pH</th>
                  <td>
                    Tampão borato em 6,5–6,8. Em pH &gt; 7 o zinco precipita como hidróxido; a
                    córnea tolera bem a faixa 6,5–8,0.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Conservação</th>
                  <td>
                    Cloreto de benzalcônio desorganiza a membrana bacteriana — indispensável em
                    frasco multidose.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Viscosidade</th>
                  <td>
                    Limite de 50 cPo. Acima disso oclui ponto e canal lacrimal, turva a visão e
                    irrita.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Por que filtrar e não autoclavar</h3>
              <p>
                A filtração remove bactérias e fungos por exclusão dimensional sem submeter fármacos
                termolábeis ao calor da autoclave.
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Por que ácido bórico + borato</h3>
              <p>
                O par ácido/base conjugada estabiliza o pH em torno de 6,8 e, de quebra, o ácido
                bórico ajuda a fechar a osmolaridade sem sal em excesso.
              </p>
            </section>
          </div>
        </article>

        <article id="isotonia" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Cálculo</p>
              <h2>Isotonia pela fórmula de Lumière-Chavrotier</h2>
            </div>
          </header>

          <p class="equation">X = (0,52 − Δt₁) ÷ Δt₂</p>

          <p>
            <strong>Δt₁</strong> é o abaixamento crioscópico somado de todos os componentes da
            fórmula; <strong>Δt₂</strong> é o abaixamento por 1% do isotonizante escolhido (0,578
            para o NaCl); <strong>0,52 °C</strong> é o abaixamento do fluido lacrimal/sangue. O
            resultado X é a massa de NaCl, em g/100 mL, necessária para completar a isotonia.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Ensaios do produto terminado
              </caption>
              <thead>
                <tr>
                  <th scope="col">Ensaio</th>
                  <th scope="col">Especificação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Aspecto</th>
                  <td>Límpido, incolor, isento de partículas</td>
                </tr>
                <tr>
                  <th scope="row">pH</th>
                  <td>6,5 – 6,8</td>
                </tr>
                <tr>
                  <th scope="row">Osmolaridade</th>
                  <td>≈ 290 mOsm/kg (isotonia 0,9% eq. NaCl)</td>
                </tr>
                <tr>
                  <th scope="row">Esterilidade</th>
                  <td>Teste de esterilidade farmacopeico</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            O saco lacrimal tolera variações temporárias de 0,6% a 1,5% eq. NaCl — mas tolerância
            não é licença: administrações repetidas de solução fora da faixa agridem o epitélio.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              Colírio: estéril, isotônico, límpido, com pH compatível e conservante em multidose.
            </li>
            <li>Filtração 0,22 µm substitui a autoclave para fármacos termolábeis.</li>
            <li>Zinco precipita em pH alcalino → tampão borato mantém 6,5–6,8.</li>
            <li>Lumière-Chavrotier: X = (0,52 − Δt₁) ÷ Δt₂.</li>
            <li>Viscosidade máxima de 50 cPo.</li>
          </ul>
          <p class="study-note__source">
            Base: Relatório Técnico 5 — solução oftálmica estéril isotônica de sulfato de zinco (DF
            125, UNIFAL-MG).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/formas/tintura">
            <span>Anterior</span>
            ← Tintura de beladona
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/formas/otologico">
            <span>Próximo</span>
            Cerumenolítico otológico →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
