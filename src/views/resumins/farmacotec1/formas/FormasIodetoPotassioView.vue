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
        <span>Iodeto de potássio</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">MÓDULO 1 · SOLUÇÃO ORAL</p>
        <h1 class="intro__title">Solução aquosa de iodeto de potássio 10% m/v</h1>
        <p class="intro__lead">
          Uma solução simples em aparência, mas com três problemas clássicos embutidos: um sal que
          oxida, um antioxidante que precisa chegar antes dele e um metal traço que catalisa tudo. O
          objetivo é 100 mL de solução límpida, incolor e estável.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Antioxidantes</span>
          <span class="intro__chip">Quelação</span>
          <span class="intro__chip">Foto-oxidação</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#formula">Fórmula</a>
        <a href="#preparo">Preparo</a>
        <a href="#analise">Análise crítica</a>
        <a href="#controle">Controle</a>
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
                Solução oral aquosa concentrada de iodeto de potássio 10% m/v
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
                  <th scope="row">Iodeto de potássio</th>
                  <td>10,0% m/v</td>
                  <td>10,00 g</td>
                  <td>Fármaco ativo (expectorante / fonte de iodo)</td>
                </tr>
                <tr>
                  <th scope="row">Tiossulfato de sódio</th>
                  <td>0,05% m/v</td>
                  <td>0,05 g</td>
                  <td>Antioxidante químico — reduz o iodo livre</td>
                </tr>
                <tr>
                  <th scope="row">Edetato dissódico (EDTA)</th>
                  <td>0,01% m/v</td>
                  <td>0,01 g</td>
                  <td>Sequestrante de metais / antioxidante sinérgico</td>
                </tr>
                <tr>
                  <th scope="row">Água purificada</th>
                  <td>q.s.p. 100 mL</td>
                  <td>100 mL</td>
                  <td>Veículo polar, solvente primário</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>O que a forma entrega</h3>
              <p>
                Solução verdadeira, límpida e incolor, doseável em copo graduado. A concentração
                alta (10%) permite diluição pelo paciente em água ou suco.
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Por que é "concentrada"</h3>
              <p>
                O sal é hipertônico e amargo. A versão 10% m/v é a solução-mãe; a dose usual é
                tomada diluída, o que reparte o sabor e evita irritação gástrica.
              </p>
            </section>
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
            <li>
              Higienizar a bancada com álcool 70% p/v e paramentar-se (jaleco, luvas, máscara,
              óculos).
            </li>
            <li>
              Pesar 10,00 g de iodeto de potássio, 0,05 g de tiossulfato de sódio e 0,01 g de EDTA
              em vidros de relógio limpos e secos (balança 0,001 g).
            </li>
            <li>Medir cerca de 60 mL de água purificada recente em béquer de 150 mL.</li>
            <li>
              <strong>Dissolver primeiro o EDTA e o tiossulfato</strong> na água, sob agitação, até
              completa solubilização.
            </li>
            <li>
              Adicionar o iodeto de potássio aos poucos, sob agitação, até dissolução total dos
              cristais.
            </li>
            <li>
              Transferir quantitativamente para balão volumétrico de 100 mL com funil, lavando o
              béquer com porções de 5 mL de água e vertendo as lavagens no balão.
            </li>
            <li>Homogeneizar por inversão e completar o volume até o menisco.</li>
            <li>
              Filtrar por gravidade em papel analítico pregueado, recolhendo o filtrado em béquer
              limpo.
            </li>
            <li>Envasar no frasco âmbar de 100 mL, fechar hermeticamente, higienizar e rotular.</li>
          </ol>

          <p class="card-note">
            A ordem não é detalhe: se o iodeto entrar primeiro, ele fica desprotegido no meio aquoso
            oxigenado enquanto os antioxidantes ainda estão sendo pesados e dissolvidos.
          </p>
        </article>

        <article id="analise" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Análise crítica</p>
              <h2>Por que cada insumo está aí</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Justificativa técnico-farmacêutica
              </caption>
              <thead>
                <tr>
                  <th scope="col">Componente</th>
                  <th scope="col">Papel</th>
                  <th scope="col">Raciocínio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Iodeto de potássio</th>
                  <td>Ativo</td>
                  <td>
                    Sal inorgânico muito solúvel (1 g em ~0,7 mL de água a 25 °C). O íon I⁻ estimula
                    as glândulas da mucosa respiratória — efeito expectorante.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Tiossulfato de sódio</th>
                  <td>Antioxidante químico</td>
                  <td>
                    Agente redutor que devolve o iodo livre a iodeto incolor. Sem ele, a solução
                    amarela e fica irritante.
                  </td>
                </tr>
                <tr>
                  <th scope="row">EDTA dissódico</th>
                  <td>Sequestrante</td>
                  <td>
                    Complexa Fe³⁺ e Cu²⁺ traço, que catalisam a auto-oxidação do iodeto. É o
                    antioxidante sinérgico: não reduz, mas remove o catalisador.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Água purificada</th>
                  <td>Veículo</td>
                  <td>
                    Constante dielétrica alta (ε ≈ 80) permite dissociação iônica completa. Precisa
                    ser isenta de cloro livre e de metais pesados.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="equation">I₂ + 2 S₂O₃²⁻ → 2 I⁻ + S₄O₆²⁻</p>
          <p>
            É a mesma reação da iodometria, usada aqui ao contrário: em vez de titular iodo, o
            tiossulfato o consome como impureza indesejada.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Foto-oxidação</h3>
              <p>
                A luz ultravioleta acelera a oxidação do iodeto. Daí o frasco âmbar — barreira
                óptica, não estética.
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Oxigênio dissolvido</h3>
              <p>
                O O₂ atmosférico que entra pelo gargalo também oxida. Fechamento hermético e envase
                completo do frasco reduzem a área de contato com o ar.
              </p>
            </section>
          </div>
        </article>

        <article id="controle" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Qualidade</p>
              <h2>Pontos críticos de controle</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Ensaios e limites do produto terminado
              </caption>
              <thead>
                <tr>
                  <th scope="col">Ensaio</th>
                  <th scope="col">Esperado</th>
                  <th scope="col">O que a falha indica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Aspecto</th>
                  <td>Límpida, incolor</td>
                  <td>Amarelado = iodo livre formado; turvação = particulado ou contaminação</td>
                </tr>
                <tr>
                  <th scope="row">Densidade</th>
                  <td>&gt; 1,07 g/mL</td>
                  <td>Alta carga salina; valor baixo sugere erro de pesagem</td>
                </tr>
                <tr>
                  <th scope="row">pH</th>
                  <td>7,0 – 9,0</td>
                  <td>Meio ácido favorece oxidação do iodeto</td>
                </tr>
                <tr>
                  <th scope="row">Doseamento</th>
                  <td>Iodometria / argentimetria</td>
                  <td>Confirma teor de iodeto e integridade do ativo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A filtração clarificante não é esterilização: ela remove poeiras e partículas do sal
            mineral. O requisito de limpidez em solução oral é visual e absoluto.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Iodeto oxida a iodo livre: coloração amarelo-acastanhada e toxicidade.</li>
            <li>Tiossulfato é o redutor; EDTA é o sinergista que bloqueia a catálise metálica.</li>
            <li>Ordem correta: antioxidantes → ativo → completar volume → filtrar → envasar.</li>
            <li>Vidro âmbar + tampa hermética = barreira para UV e O₂.</li>
            <li>Água purificada isenta de cloro: cloro livre também oxida o iodeto.</li>
          </ul>
          <p class="study-note__source">
            Base: Relatório Técnico 1 — solução oral aquosa concentrada de iodeto de potássio (DF
            125, UNIFAL-MG).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/formas">
            <span>Voltar</span>
            ← Formas farmacêuticas
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/formas/xarope">
            <span>Próximo</span>
            Xarope de clorfeniramina →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
