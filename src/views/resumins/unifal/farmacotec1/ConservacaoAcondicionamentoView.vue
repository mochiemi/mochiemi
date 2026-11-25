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
        <span>Operações e conservação</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE I</p>
        <h1 class="intro__title">Operações, conservação e acondicionamento</h1>
        <p class="intro__lead">
          Das operações de caráter geral (pesar, medir, acondicionar) às de caráter específico
          (dividir, separar, esterilizar), passando pelos fatores que degradam o medicamento, pelos
          tipos de embalagem e pelo controle de qualidade que libera ou rejeita cada lote.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>8 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#operacoes">Operações</a>
        <a href="#conservacao">Conservação</a>
        <a href="#embalagem">Embalagem</a>
        <a href="#materiais">Materiais</a>
        <a href="#forms">Forma × envase</a>
        <a href="#controle">Controle de qualidade</a>
        <a href="#tipos">Tipos de controle</a>
      </nav>

      <div class="lesson">
        <article id="operacoes" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O ponto de partida</p>
              <h2>Classificação das operações farmacêuticas</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>De caráter geral</h3>
              <ul class="key-points">
                <li>
                  <strong>Pesagem</strong> — balanças de precisão e balanças ordinárias.
                </li>
                <li>
                  <strong>Medida de volume</strong> — cálice graduado, béquer, pipeta graduada,
                  proveta.
                </li>
                <li>
                  <strong>Acondicionamento</strong> — exige indiferença química, proteção, baixo preço,
                  peso e volume mínimos.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>De caráter específico</h3>
              <p>
                Dividem-se em operações de <strong>produção</strong>, de <strong>controle</strong> e de
                <strong>conservação</strong>.
              </p>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Operações específicas de produção</caption>
              <thead>
                <tr>
                  <th scope="col">Grupo</th>
                  <th scope="col">Operações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Divisão</th>
                  <td>
                    <strong>Mecânica</strong> (pulverização) · <strong>física</strong> (emulsificação,
                    dispersão) · <strong>química</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Separação — sólidos</th>
                  <td>Tamisação, triagem ou monda, levigação</td>
                </tr>
                <tr>
                  <th scope="row">Separação — líquido + sólido</th>
                  <td>
                    Expressão, decantação, centrifugação, filtração, precipitação, destilação,
                    dessecação
                  </td>
                </tr>
                <tr>
                  <th scope="row">Separação — dois líquidos</th>
                  <td>Volatilização</td>
                </tr>
                <tr>
                  <th scope="row">Inibição biológica</th>
                  <td>Esterilização, congelação, liofilização</td>
                </tr>
                <tr>
                  <th scope="row">Controle</th>
                  <td>Morfológico, físico-químico, biológico, bacteriológico, clínico</td>
                </tr>
                <tr>
                  <th scope="row">Conservação</th>
                  <td>Alterações (fatores biológicos, físico-químicos e extrínsecos) e estabilizantes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="conservacao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Por que o medicamento se altera</p>
              <h2>Fatores que afetam a conservação</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--rose">
              <h3>Extrínsecos</h3>
              <ul class="key-points">
                <li>Calor</li>
                <li>Luz</li>
                <li>Agentes microbianos</li>
                <li>Umidade</li>
                <li>Oxigênio do ar</li>
                <li>CO<sub>2</sub> do ar</li>
                <li>Recipientes</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Intrínsecos</h3>
              <ul class="key-points">
                <li>Instabilidade molecular</li>
                <li>Reações intermoleculares</li>
                <li>pH do meio</li>
                <li>Volatilização</li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            Cada fator extrínseco tem uma contramedida prática: vidro âmbar contra a luz, dessecante
            contra a umidade, antioxidante e gás inerte contra o oxigênio, conservante contra a
            contaminação microbiana e refrigeração contra o calor.
          </p>
        </article>

        <article id="embalagem" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Hierarquia do envase</p>
              <h2>Níveis e funções da embalagem</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Níveis de embalagem</caption>
              <thead>
                <tr>
                  <th scope="col">Nível</th>
                  <th scope="col">Definição</th>
                  <th scope="col">Exemplos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Primária</th>
                  <td>Recipiente que permanece mais próximo do produto.</td>
                  <td>Âmbolas de vidro, frascos de xarope, pote de creme</td>
                </tr>
                <tr>
                  <th scope="row">Secundária</th>
                  <td>Acessório que se soma à embalagem primária.</td>
                  <td>Cartuchos de papelão, bulas</td>
                </tr>
                <tr>
                  <th scope="row">Terciária</th>
                  <td>Utilizada para proteção durante o transporte e armazenamento.</td>
                  <td>Caixas de papelão, paletes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="factor-grid">
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">P</span>
              <h3>Proteção</h3>
              <p>
                Assegurar a conservação do produto em todos os estágios: ao fim da fabricação, no
                transporte e durante todo o prazo de validade.
              </p>
            </section>

            <section class="factor">
              <span class="factor__icon" aria-hidden="true">Pre</span>
              <h3>Prevenção</h3>
              <p>
                Evitar deterioração por quebra, esmagamento ou choque, alterações por fatores
                externos, absorção de odores e sabores estranhos, perda de conteúdo por mau
                fechamento e adulterações.
              </p>
            </section>

            <section class="factor">
              <span class="factor__icon" aria-hidden="true">F</span>
              <h3>Funcionalidade</h3>
              <p>
                Permitir o acondicionamento em quantidades apropriadas e a identificação — marcação de
                lote, validade, dados de conservação.
              </p>
            </section>

            <section class="factor">
              <span class="factor__icon" aria-hidden="true">M</span>
              <h3>Motivação</h3>
              <p>
                Levar o consumidor a comprar e a usar corretamente o produto. É a dimensão comercial
                da embalagem.
              </p>
            </section>
          </div>
        </article>

        <article id="materiais" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Escolha do recipiente</p>
              <h2>Materiais de acondicionamento</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Tipos de vidro e indicação</caption>
              <thead>
                <tr>
                  <th scope="col">Tipo</th>
                  <th scope="col">Composição</th>
                  <th scope="col">Indicação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">I</th>
                  <td>Borosilicado</td>
                  <td>
                    Caro e quimicamente resistente; ideal para parenterais em pó ou solução.
                  </td>
                </tr>
                <tr>
                  <th scope="row">II</th>
                  <td>Sódico cálcico tratado</td>
                  <td>
                    Alcalino, tratado internamente por desalcalinização; soluções parenterais oleosas
                    e alguns antibióticos.
                  </td>
                </tr>
                <tr>
                  <th scope="row">III</th>
                  <td>Sódico cálcico de alcalinidade limitada</td>
                  <td>
                    Vidro não tratado, de boa resistência química; antibióticos em pó ou liofilizados.
                  </td>
                </tr>
                <tr>
                  <th scope="row">NP</th>
                  <td>Não parenteral</td>
                  <td>Uso oral ou tópico.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Plásticos, borracha, papel e alumínio</h3>
              <ul class="key-points">
                <li><strong>Termoplásticos</strong> — frascos flexíveis.</li>
                <li><strong>Duroplásticos</strong> — tampas, derivados da baquelite.</li>
                <li><strong>Borracha</strong> — fabricação de tampas.</li>
                <li>
                  <strong>Papel</strong> — cintas termolábeis associadas ao plástico ou ao alumínio,
                  para aumentar a impermeabilidade.
                </li>
                <li>
                  <strong>Alumínio</strong> — bisnagas de pomadas e cremes dentais, blisters de
                  comprimidos e cápsulas.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Problemas das embalagens plásticas</h3>
              <ul class="key-points">
                <li>
                  <strong>Plasticidade</strong> — transmissão de gases, vapores ou líquidos através da
                  embalagem flexível, levando à oxidação e à hidrólise.
                </li>
                <li>
                  <strong>Lixiviação</strong> — um ingrediente da embalagem migra para o produto
                  envasado.
                </li>
                <li>
                  <strong>Sorção</strong> — perda de fármaco por adsorção à embalagem.
                </li>
              </ul>
            </section>
          </div>
        </article>

        <article id="forms" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Forma e envase</p>
              <h2>Embalagem sugerida por forma farmacêutica</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Forma farmacêutica</th>
                  <th scope="col">Embalagem sugerida</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Líquidos</th>
                  <td>Recipientes ovais, viscosos, de boca larga</td>
                </tr>
                <tr>
                  <th scope="row">Comprimidos e cápsulas</th>
                  <td>
                    Frascos pequenos de boca larga, de vidro ou plástico, com rosca ou pressão;
                    blistadeiras
                  </td>
                </tr>
                <tr>
                  <th scope="row">Pós a granel</th>
                  <td>Frascos de boca larga, geralmente de plástico</td>
                </tr>
                <tr>
                  <th scope="row">Pó dividido</th>
                  <td>Papéis, sachês individuais, saquinhos de plástico</td>
                </tr>
                <tr>
                  <th scope="row">Preparações oftálmicas líquidas</th>
                  <td>Frasco gotejador de plástico, seringas</td>
                </tr>
                <tr>
                  <th scope="row">Pomada ou gel oftálmico</th>
                  <td>Tubos de metal, seringas</td>
                </tr>
                <tr>
                  <th scope="row">Preparações otológicas</th>
                  <td>Frasco gotejador, frasco spray</td>
                </tr>
                <tr>
                  <th scope="row">Pomadas e cremes</th>
                  <td>Pote, tubo, seringa</td>
                </tr>
                <tr>
                  <th scope="row">Supositórios</th>
                  <td>Cartelas plásticas, sachês de plástico ou alumínio</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="controle" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Garantia da qualidade</p>
              <h2>Controle de qualidade: termos e funções</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Termos empregados</h3>
              <ul class="key-points">
                <li>Fabricação · matéria-prima</li>
                <li>Lote · número de lote</li>
                <li><strong>Quarentena</strong> — situação do lote que aguarda liberação</li>
                <li>Inspeção de qualidade</li>
                <li>Produto semi-acabado ou semi-elaborado</li>
                <li>Produto acabado ou liberado</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Funções</h3>
              <ul class="key-points">
                <li>Preparar instruções escritas e detalhadas de cada teste e análise.</li>
                <li>Liberar ou rejeitar cada lote de matéria-prima, material de embalagem e rotulagem.</li>
                <li>Liberar ou rejeitar produtos semi-elaborados.</li>
                <li>Liberar ou rejeitar cada lote de medicamento acabado.</li>
                <li>Avaliar as condições de armazenamento de insumos e produtos.</li>
                <li>Avaliar qualidade e estabilidade dos medicamentos acabados.</li>
                <li>Estabelecer e revisar processos e especificações de controle.</li>
                <li>Analisar medicamentos devolvidos: liberar, reprocessar ou destruir.</li>
                <li>Guardar amostras de referência futura de cada lote.</li>
              </ul>
            </section>
          </div>

          <section class="worked-example">
            <h3>Principais etapas de intervenção</h3>
            <ol class="steps">
              <li>
                <strong>Matérias-primas</strong> — princípios ativos e excipientes.
              </li>
              <li>
                <strong>Em processo</strong> — princípios ativos e etapas intermediárias.
              </li>
              <li>
                <strong>Produto final</strong> — componentes, características organolépticas, físicas,
                biológicas e microbiológicas.
              </li>
              <li>
                <strong>Estabilidade</strong> — acelerada, arquivo de referência, amostras de campo.
              </li>
              <li>
                <strong>Atividade</strong> — níveis sanguíneos e absortividade.
              </li>
              <li><strong>Embalagens</strong> — verificação do material de envase.</li>
            </ol>
          </section>
        </article>

        <article id="tipos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">O que se verifica</p>
              <h2>Tipos de controle</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Tipo</th>
                  <th scope="col">O que avalia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Morfológico</th>
                  <td>Cor, consistência, odor e limpeza da solução</td>
                </tr>
                <tr>
                  <th scope="row">Físico-químico</th>
                  <td>
                    Matéria-prima: identificação, impurezas, doseamento. Produto acabado: pH,
                    isotonia, peso, estabilidade de suspensões, dispersidade, volume aparente
                  </td>
                </tr>
                <tr>
                  <th scope="row">Biológico</th>
                  <td>
                    Determinação biológica de sulfas, DL<sub>50</sub> em camundongos, ensaio de
                    pirogênios
                  </td>
                </tr>
                <tr>
                  <th scope="row">Bacteriológico</th>
                  <td>
                    Pureza (índice de germes, germes específicos), atividade bacteriostática e
                    bactericida
                  </td>
                </tr>
                <tr>
                  <th scope="row">Clínico</th>
                  <td>Resposta do paciente ao medicamento liberado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            O controle morfológico é o mais barato e o primeiro a ser feito — mas nunca substitui o
            físico-químico e o microbiológico, porque alterações invisíveis (hidrólise, oxidação)
            passam despercebidas a olho nu.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Operações gerais: pesar, medir volume, acondicionar.</li>
            <li>Vidro tipo I = borosilicado = parenterais; NP = não parenteral.</li>
            <li>Embalagem primária toca o produto; terciária serve ao transporte.</li>
            <li>Plasticidade transmite gases; lixiviação contamina; sorção adsorve o fármaco.</li>
            <li>Fatores extrínsecos: calor, luz, umidade, O₂, CO₂, microrganismos, recipiente.</li>
            <li>Fatores intrínsecos: instabilidade molecular, reações intermoleculares, pH, volatilização.</li>
            <li>Quarentena = lote aguardando liberação.</li>
            <li>Controle em 6 frentes: matérias-primas, em processo, produto final, estabilidade, atividade, embalagens.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Operações farmacêuticas, conservação e acondicionamento”
            (Prof. Antonio Luengo Garcia, UNIFAL-MG, 2026).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/classificacao">
            <span>Anterior</span>
            ← Classificação
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/adjuvantes">
            <span>Próximo</span>
            Adjuvantes →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
