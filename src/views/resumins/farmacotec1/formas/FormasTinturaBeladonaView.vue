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
        <span>Tintura de beladona</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">MÓDULO 4 · SOLUÇÃO EXTRATIVA</p>
        <h1 class="intro__title">Tintura de beladona 10% m/v por percolação</h1>
        <p class="intro__lead">
          Extrair alcaloides de uma folha é criar e manter um gradiente de concentração. A
          percolação faz isso renovando o solvente continuamente sobre uma coluna de pó — desde que
          o pó esteja bem umectado, bem empacotado e o gotejamento seja lento.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Extração sólido-líquido</span>
          <span class="intro__chip">Difusão dialítica</span>
          <span class="intro__chip">Regente de Mayer</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#formula">Fórmula</a>
        <a href="#preparo">Preparo</a>
        <a href="#analise">Análise crítica</a>
        <a href="#controle">Pontos críticos</a>
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
                Tintura de beladona 10% m/v (volume final 100 mL)
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
                  <th scope="row">Folhas secas de beladona</th>
                  <td>10,0% m/v</td>
                  <td>10,00 g (pó moderadamente fino)</td>
                  <td>Matéria-prima vegetal — fonte de alcaloides tropânicos</td>
                </tr>
                <tr>
                  <th scope="row">Etanol 70% v/v</th>
                  <td>q.s.p. 100 mL</td>
                  <td>≈ 150 mL de uso total</td>
                  <td>Menstruo — solvente extrator seletivo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Tintura</h3>
              <p>
                Solução extrativa alcoólica ou hidroalcoólica obtida de droga vegetal, com teor de
                princípio ativo padronizado. A concentração 10% significa 10 g de droga por 100 mL.
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Menstruo</h3>
              <p>
                É o líquido extrator — aqui, etanol 70% v/v. A graduação alcoólica é escolhida para
                solubilizar os ativos e, ao mesmo tempo, excluir o que não interessa.
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
              <strong>Cominuir e tamisar:</strong> moer as folhas em almofariz e passar pelo tamiz
              nº 44 (355 µm) até pó moderadamente fino e homogêneo. Pesar 10,00 g.
            </li>
            <li>
              <strong>Imbibição:</strong> umedecer o pó com 5–8 mL de etanol 70%, cobrir com vidro
              de relógio e deixar 2 a 4 horas para intumescer os tecidos e expulsar o ar
              intercelular.
            </li>
            <li>
              <strong>Montar o percolador:</strong> chumaço de algodão na base cônica, acima da
              torneira, coberto por camada fina de areia de quartzo.
            </li>
            <li>
              <strong>Empacotar:</strong> transferir a droga úmida em porções sucessivas,
              comprimindo levemente cada camada de forma uniforme.
            </li>
            <li>
              Disco de papel de filtro sobre o pó, camada de areia, abrir a torneira, adicionar
              menstruo até começar a gotejar e fechar.
            </li>
            <li>Adicionar menstruo até cobrir a droga com 2–3 cm de líquido.</li>
            <li>
              <strong>Maceração estática:</strong> percolador fechado em repouso por 24 horas.
            </li>
            <li>
              <strong>Percolação ativa:</strong> regular o gotejamento em 10–15 gotas/minuto (~1
              mL/min) e repor menstruo no topo, mantendo o nível constante.
            </li>
            <li>Recolher os primeiros 85 mL do extrato em recipiente graduado âmbar.</li>
            <li>
              Continuar até esgotamento, testando gotas do percolado com reagente de Mayer; lavar a
              massa com menstruo e completar para 100 mL.
            </li>
            <li>
              Repousar 48 horas sob refrigeração para sedimentar ceras e clorofilas e filtrar em
              papel analítico.
            </li>
            <li>Envasar em vidro âmbar.</li>
          </ol>
        </article>

        <article id="analise" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Análise crítica</p>
              <h2>Como a percolação extrai</h2>
            </div>
          </header>

          <p>
            A percolação é um processo extrativo <strong>dinâmico, contínuo e exaustivo</strong>: o
            solvente renovado atravessa a coluna de pó e desloca, por gravidade, o líquido
            impregnado de ativos. A extração ocorre por <strong>difusão dialítica</strong> através
            das membranas celulares intumescidas.
          </p>

          <p class="equation">ΔC = C<sub>célula</sub> − C<sub>solvente</sub> ≈ máximo</p>

          <p>
            Como o menstruo é sempre novo, o gradiente de concentração fica no máximo e a extração
            se aproxima do quantitativo, com menos solvente que a maceração simples.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Justificativa de cada escolha
              </caption>
              <thead>
                <tr>
                  <th scope="col">Escolha</th>
                  <th scope="col">Por quê</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Etanol 70% v/v</th>
                  <td>
                    Solubiliza alcaloides tropânicos (atropina, hiosciamina, escopolamina), coagula
                    e inativa enzimas vegetais e insolubiliza gomas, mucilagens e amido que
                    turvariam a tintura.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Pó no tamiz 44</th>
                  <td>
                    Fino demais comprime a coluna e bloqueia o fluxo; grosso demais impede a difusão
                    no interior do parênquima.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Imbibição prévia</th>
                  <td>
                    A droga seca incha ao contato com o solvente dentro da coluna, trinca o leito e
                    cria canais preferenciais por onde o líquido passa sem extrair.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Repouso de 48 h a frio</th>
                  <td>
                    Sedimenta ceras e clorofilas insolubilizadas; a filtração posterior entrega
                    tintura límpida.
                  </td>
                </tr>
              </tbody>
            </table>
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
                Variáveis que decidem o rendimento da extração
              </caption>
              <thead>
                <tr>
                  <th scope="col">Variável</th>
                  <th scope="col">Alvo</th>
                  <th scope="col">Consequência do desvio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Compressão da coluna</th>
                  <td>Uniforme</td>
                  <td>Frouxa → canais; compacta → entupimento</td>
                </tr>
                <tr>
                  <th scope="row">Velocidade de gotejamento</th>
                  <td>10–15 gotas/min</td>
                  <td>Rápida → não há tempo de equilíbrio osmótico</td>
                </tr>
                <tr>
                  <th scope="row">Nível de líquido</th>
                  <td>2–3 cm acima do pó</td>
                  <td>Secar a coluna → rachaduras e perda de rendimento</td>
                </tr>
                <tr>
                  <th scope="row">Esgotamento</th>
                  <td>Sem precipitado com Mayer</td>
                  <td>Com precipitado → ativos ainda retidos na droga</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            O reagente de Mayer é iodomercuriato de potássio: alcaloides formam precipitado turvo. A
            ausência de turvação no gotejamento é a prova prática de esgotamento.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Percolação = extração dinâmica, contínua e exaustiva, por gravidade.</li>
            <li>
              Etapas: cominuição → tamização → imbibição → empacotamento → maceração 24 h →
              percolação.
            </li>
            <li>Vazão de 10–15 gotas/min; nunca deixar a coluna secar.</li>
            <li>Etanol 70% extrai alcaloides e exclui gomas, mucilagens e amido.</li>
            <li>Esgotamento comprovado com reagente de Mayer.</li>
            <li>Repouso a frio 48 h + filtração = limpidez.</li>
          </ul>
          <p class="study-note__source">
            Base: Relatório Técnico 4 — solução extrativa vegetal de beladona por percolação (DF
            125, UNIFAL-MG).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/formas/elixir">
            <span>Anterior</span>
            ← Elixir de paracetamol
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/formas/colirio">
            <span>Próximo</span>
            Colírio de sulfato de zinco →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
