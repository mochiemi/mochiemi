<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/farmacotec1">Farmacotécnica I</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Soluções extrativas</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE II</p>
        <h1 class="intro__title">Soluções extrativas e extratos</h1>
        <p class="intro__lead">
          Extrair é separar o que é ativo do que não é. Esta página percorre os oito métodos de extração
          de sólidos, a extração de líquidos, a classificação dos extratos e a padronização do extrato
          fluido.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>10 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#intro">Introdução</a>
        <a href="#fatores">Fatores</a>
        <a href="#maceração">Maceração</a>
        <a href="#infusao">Infusão e decocção</a>
        <a href="#percolação">Percolação</a>
        <a href="#outros">Outros métodos</a>
        <a href="#extratos">Extratos</a>
        <a href="#fluido">Extrato fluido</a>
      </nav>

      <div class="lesson">
        <article id="intro" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O ponto de partida</p>
              <h2>O que é uma solução extrativa</h2>
            </div>
          </header>
          <p>
            As soluções extrativas são obtidas principalmente a partir de <strong>drogas vegetais
            secas</strong> ou que contenham reduzida quantidade de suco celular. O objetivo é separar os
            princípios ativos do que não é ativo.
          </p>
          <p>
            A <strong>seletividade</strong> é a característica exigida de qualquer processo de extração:
            é por causa dela que se dissolvem apenas os princípios ativos e se deixam no resíduo as
            substâncias inertes.
          </p>

          <section class="worked-example">
            <h3>Requisitos de uma boa extração</h3>
            <ul class="key-points">
              <li>Apresentar as substâncias ativas sem alteração.</li>
              <li>Comprovação de elevado nível de rendimento.</li>
              <li>Garantia de prolongado tempo de conservação.</li>
              <li>Escolha da tecnologia mais adequada.</li>
              <li>Escolha da forma farmacêutica mais adequada.</li>
              <li>Produção de forma farmacêutica padrão.</li>
            </ul>
          </section>
        </article>

        <article id="fatores" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Variáveis do processo</p>
              <h2>Fatores que influenciam a extração</h2>
            </div>
          </header>

          <div class="factor-grid">
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">1</span>
              <h3>Estado de divisão da droga</h3>
              <p>Maior superfície de contato acelera a difusão, mas divisão excessiva pode compactar o leito.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">2</span>
              <h3>Agitação</h3>
              <p>Renova a camada de solvente junto à partícula e reduz a espessura da camada difusional.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">3</span>
              <h3>Temperatura</h3>
              <p>Aumenta a solubilidade e diminui a viscosidade — mas pode degradar termolábeis.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">4</span>
              <h3>Componentes da própria planta</h3>
              <p>Mucilagens, resinas e gorduras podem reter o ativo ou formar complexos.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">5</span>
              <h3>Tensão superficial</h3>
              <p>A molhabilidade do pó determina a penetração do solvente nos poros da droga.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">6</span>
              <h3>Natureza do solvente</h3>
              <p>Álcool extrai melhor lipossolúveis; água extrai hidrossolúveis — a polaridade define a seletividade.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">7</span>
              <h3>pH</h3>
              <p>Alcaloides extraem-se melhor em meio ácido; ácidos orgânicos, em meio alcalino.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">8</span>
              <h3>Tempo de extração</h3>
              <p>Há um ótimo: tempo insuficiente deixa ativo na droga; excessivo extrai inertes.</p>
            </section>
          </div>
        </article>

        <article id="maceração" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Extração de sólidos — 1 e 2</p>
              <h2>Maceração e digestão</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Maceração</h3>
              <ul class="key-points">
                <li>Droga em contato com o solvente por certo tempo, à temperatura ambiente.</li>
                <li>
                  Indicada para drogas de estrutura pouco compacta, facilmente permeáveis aos líquidos,
                  alteráveis pelo calor ou solúveis a frio.
                </li>
                <li>Líquido extrator: água ou mistura hidroalcóolica.</li>
                <li>Tempo: de 30 minutos até dias.</li>
                <li>
                  Para melhorar o rendimento, repetir várias vezes com doses fracionadas do solvente
                  (maceração fracionada).
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Digestão</h3>
              <ul class="key-points">
                <li>Maceração a temperatura mais elevada — entre <strong>35 e 40 °C</strong>.</li>
                <li>
                  Com a elevação da temperatura aumentam a solubilidade dos princípios e a difusão, por
                  diminuição da viscosidade do solvente.
                </li>
                <li>Quando o solvente é volátil, usa-se refrigerador de refluxo.</li>
              </ul>
            </section>
          </div>
        </article>

        <article id="infusao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Extração de sólidos — 3 e 4</p>
              <h2>Infusão e decocção</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Infusão</h3>
              <ul class="key-points">
                <li>Coloca-se água fervente sobre a droga.</li>
                <li>Tempo de contato: 30 minutos a 1 hora.</li>
                <li>Aplicada a substâncias de estrutura branda (tecidos moles).</li>
                <li>Desvantagem: dissolve material inerte (mucilagem).</li>
                <li>Pode provocar coagulação de matérias albuminosas.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Decocção</h3>
              <ul class="key-points">
                <li>O sólido permanece em contato com o solvente aquecido à ebulição.</li>
                <li>
                  Usada para drogas compactas e de natureza lenhosa, cujos princípios sejam solúveis a
                  quente e estáveis pelo calor.
                </li>
                <li>
                  Recomenda-se filtrar o decocto quando esfriar a cerca de <strong>40 °C</strong>, para
                  eliminar substâncias inertes.
                </li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            Regra de bolso: tecido mole → infusão; tecido duro e lenhoso → decocção. Se o ativo é
            termolábil, nenhum dos dois — vá de maceração a frio.
          </p>
        </article>

        <article id="percolação" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Extração de sólidos — 5</p>
              <h2>Percolação ou lixiviação</h2>
            </div>
          </header>
          <p>
            É a extração contínua de uma droga com <strong>renovação constante do solvente</strong>. O
            que a caracteriza é a movimentação regular do solvente ao longo da droga.
          </p>
          <p>
            A pressão hidrostática correspondente ao peso da coluna de líquido obriga o solvente a
            descer ao longo da droga, enquanto outra força — a <strong>capilaridade</strong> — se opõe ao
            movimento descendente. O solvente só se desloca para baixo quando a pressão hidrostática
            supera a força de capilaridade.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Condições operacionais</h3>
              <ul class="key-points">
                <li>A altura do líquido no percolador deve ser mantida a nível constante.</li>
                <li>Líquidos de elevada viscosidade não são recomendados.</li>
                <li>Drogas que incham por ação do solvente também não devem ser usadas.</li>
                <li>O processo termina quando o líquido sai incolor, sem cheiro e sabor.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Outros equipamentos</h3>
              <ul class="key-points">
                <li>
                  <strong>Diacolação</strong> — a droga é submetida ao solvente sob pressão
                  (diacolador de Breddim).
                </li>
                <li>
                  <strong>Evaculação</strong> — o líquido é deslocado através da droga pelo vácuo feito
                  no frasco que recebe o extrato (evaculador de Kessler).
                </li>
                <li>
                  <strong>Extração em Soxhlet</strong> — para extrair sólidos com solventes voláteis,
                  com recirculação contínua do solvente condensado.
                </li>
              </ul>
            </section>
          </div>
        </article>

        <article id="outros" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Fechando os métodos</p>
              <h2>Extração de líquidos e quadro-resumo</h2>
            </div>
          </header>

          <p>
            Para líquidos, a extração é feita com solvente menos denso ou mais denso que a água,
            conforme a polaridade e a densidade da fase a extrair — é o princípio da partição em funil
            de separação.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Métodos de extração de sólidos</caption>
              <thead>
                <tr>
                  <th scope="col">Método</th>
                  <th scope="col">Temperatura</th>
                  <th scope="col">Indicação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Maceração</th>
                  <td>ambiente</td>
                  <td>Drogas pouco compactas, termolábeis ou solúveis a frio</td>
                </tr>
                <tr>
                  <th scope="row">Digestão</th>
                  <td>35 – 40 °C</td>
                  <td>Maceração aquecida; solventes voláteis exigem refluxo</td>
                </tr>
                <tr>
                  <th scope="row">Infusão</th>
                  <td>água fervente</td>
                  <td>Tecidos moles, 30 min a 1 h</td>
                </tr>
                <tr>
                  <th scope="row">Decocção</th>
                  <td>ebulição</td>
                  <td>Drogas compactas e lenhosas, estáveis ao calor</td>
                </tr>
                <tr>
                  <th scope="row">Percolação / lixiviação</th>
                  <td>ambiente</td>
                  <td>Extração exaustiva com renovação contínua do solvente</td>
                </tr>
                <tr>
                  <th scope="row">Diacolação</th>
                  <td>ambiente</td>
                  <td>Extração sob pressão</td>
                </tr>
                <tr>
                  <th scope="row">Evaculação</th>
                  <td>ambiente</td>
                  <td>Extração sob vácuo</td>
                </tr>
                <tr>
                  <th scope="row">Soxhlet</th>
                  <td>ebulição do solvente</td>
                  <td>Solventes voláteis, com recirculação</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="extratos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Do líquido ao sólido</p>
              <h2>Extratos: definição e classificação</h2>
            </div>
          </header>
          <p>
            Segundo a Farmacopeia Brasileira, são “preparações concentradas, obtidas de drogas vegetais
            ou animais, frescas ou secas, por meio de um dissolvente apropriado, seguido de sua
            evaporação total ou parcial e ajustagem da concentração a padrões previamente
            estabelecidos”.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>A) De acordo com a consistência</caption>
              <thead>
                <tr>
                  <th scope="col">Extrato</th>
                  <th scope="col">Característica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Líquido (fluido)</th>
                  <td>1 g ou 1 mL corresponde a 1 g de droga seca.</td>
                </tr>
                <tr>
                  <th scope="row">Mole</th>
                  <td>20 – 25% de água.</td>
                </tr>
                <tr>
                  <th scope="row">Pilular</th>
                  <td>10% de água; massa pilular moldável.</td>
                </tr>
                <tr>
                  <th scope="row">Seco</th>
                  <td>2,5% de água.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Vantagens do extrato seco</h3>
              <ul class="key-points">
                <li>Facilmente pulverizável.</li>
                <li>Baixo teor de umidade → conserva-se melhor.</li>
                <li>Mais fácil de manejar.</li>
                <li>Usado na preparação de pós, comprimidos e cápsulas.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Cuidados com o extrato seco</h3>
              <p>
                É <strong>higroscópico</strong>: deve ser armazenado em frascos bem fechados e com
                agente dessecante.
              </p>
              <p><small>B) De acordo com o líquido extrativo: aquosos, alcoólicos, etéreos e acetônicos.</small></p>
            </section>
          </div>

          <section class="worked-example">
            <h3>Preparação</h3>
            <ol class="steps">
              <li>
                <strong>Obtenção da solução extrativa</strong> — droga animal ou vegetal; extratos
                opoterápicos vêm de órgãos frescos, congelados rapidamente após o abate. Veículos:
                água, álcool, éter e acetona. Processos: maceração, percolação, infusão, decocção e
                digestão.
              </li>
              <li>
                <strong>Auxílios</strong> — maceração fracionada; adjuvantes de extração (ácidos) que
                aumentam o coeficiente de solubilidade; eliminação de substâncias indesejáveis
                (gorduras, resinas, clorofila, mucilagens, pectina); filtração em papel, gaze ou filtro
                de membrana porosa.
              </li>
              <li>
                <strong>Concentração</strong> — trabalhar o mais rápido possível e abaixo de
                <strong>50 °C</strong>; sob pressão negativa o ponto de ebulição dos solventes diminui.
              </li>
              <li>
                <strong>Depuração</strong> — remoção de gorduras, albuminas, mucilagens, clorofila e
                resinas.
              </li>
              <li>
                <strong>Ensaios</strong> — cor, densidade, solubilidade, cinzas, umidade, identificação,
                dosagem e resíduo seco (ou perda por dessecação).
              </li>
            </ol>
          </section>
        </article>

        <article id="fluido" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Padronização</p>
              <h2>Extrato fluido</h2>
            </div>
          </header>
          <p>
            Extratos fluidos são obtidos por percolação e ajustados de modo que <strong>1 g ou 1 mL de
            extrato corresponda a 1 g de droga seca</strong>. O álcool está presente como dissolvente,
            como depurador ou como conservante.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Vantagens</h3>
              <ul class="key-points">
                <li>Estabilidade.</li>
                <li>Concentração.</li>
                <li>Proporção uniforme.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Incompatibilidades</h3>
              <ul class="key-points">
                <li>Diluição em água causa precipitação.</li>
                <li>O uso de ácidos pode produzir reações ácidas.</li>
              </ul>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Processos de obtenção (A–E)</caption>
              <thead>
                <tr>
                  <th scope="col">Processo</th>
                  <th scope="col">Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">A</th>
                  <td>Percolação com solvente alcoólico</td>
                </tr>
                <tr>
                  <th scope="row">B</th>
                  <td>Percolação com dois solventes</td>
                </tr>
                <tr>
                  <th scope="row">C</th>
                  <td>Percolação fracionada</td>
                </tr>
                <tr>
                  <th scope="row">D</th>
                  <td>Percolação com água</td>
                </tr>
                <tr>
                  <th scope="row">E</th>
                  <td>Percolação sob pressão</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>Detalhes de execução</h3>
            <ul class="key-points">
              <li>Percolação com álcool a 30, 45, 60, 70 ou 80 °GL, conforme a polaridade do ativo.</li>
              <li>Adjuvantes de dissolução: ácidos e agentes quelantes.</li>
              <li>
                Drogas facilmente molháveis e que incham devem ser acondicionadas em percoladores
                cônicos.
              </li>
              <li>Período de maceração prévia: 24 a 48 horas.</li>
              <li>Depuração: mucilagens, gorduras, resinas e albuminas.</li>
              <li>
                Conservação: frascos hermeticamente fechados, protegidos da luz e do calor excessivo.
              </li>
              <li>Ensaios: densidade, identificação, dosagem, teor alcoólico e resíduo seco.</li>
            </ul>
          </section>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Seletividade é o requisito central de qualquer extração.</li>
            <li>Digestão = maceração a 35–40 °C, com refluxo se o solvente for volátil.</li>
            <li>Infusão usa água fervente sobre tecido mole; decocção ferve tecido lenhoso.</li>
            <li>Na percolação, o solvente desce quando a pressão hidrostática vence a capilaridade.</li>
            <li>Diacolação = pressão; evaculação = vácuo; Soxhlet = solvente volátil com recirculação.</li>
            <li>Extrato fluido: 1 mL = 1 g de droga seca.</li>
            <li>Teores de água: mole 20–25%, pilular 10%, seco 2,5%.</li>
            <li>Concentração sempre abaixo de 50 °C; pressão negativa baixa o ponto de ebulição.</li>
            <li>Extrato fluido precipita ao ser diluído em água.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Soluções extrativas e extratos” (Prof. Antonio Luengo
            Garcia, UNIFAL-MG, 2026).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/solucoes">
            <span>Anterior</span>
            ← Soluções simples
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/xaropes">
            <span>Próximo</span>
            Xaropes e elixires →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
