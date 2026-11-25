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
        <span>Elixir de paracetamol</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">MÓDULO 3 · ELIXIR</p>
        <h1 class="intro__title">Elixir hidroalcoólico edulcorado de paracetamol 40 mg/mL</h1>
        <p class="intro__lead">
          O paracetamol dissolve-se pouco em água (~14 mg/mL). Para chegar a 40 mg/mL é preciso
          baixar a constante dielétrica do meio com uma mistura ternária de água, etanol e polióis —
          e misturar as fases na ordem certa.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Co-solvência</span>
          <span class="intro__chip">Constante dielétrica</span>
          <span class="intro__chip">Adição cruzada</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#formula">Fórmula</a>
        <a href="#preparo">Preparo</a>
        <a href="#analise">Análise crítica</a>
        <a href="#restricoes">Restrições</a>
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
                Elixir de paracetamol 4,0% m/v (volume final 100 mL)
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
                  <th scope="row">Paracetamol</th>
                  <td>4,0% m/v</td>
                  <td>4,00 g (4000 mg)</td>
                  <td>Fármaco ativo (analgésico / antipirético)</td>
                </tr>
                <tr>
                  <th scope="row">Etanol 96º GL</th>
                  <td>22,0% v/v</td>
                  <td>22,00 mL</td>
                  <td>Co-solvente orgânico primário</td>
                </tr>
                <tr>
                  <th scope="row">Glicerina</th>
                  <td>15,0% v/v</td>
                  <td>15,00 mL</td>
                  <td>Co-solvente, poliol espessante</td>
                </tr>
                <tr>
                  <th scope="row">Propilenoglicol</th>
                  <td>10,0% v/v</td>
                  <td>10,00 mL</td>
                  <td>Co-solvente hidrotrópico, umectante</td>
                </tr>
                <tr>
                  <th scope="row">Xarope simples 65%</th>
                  <td>25,0% v/v</td>
                  <td>25,00 mL</td>
                  <td>Edulcorante e modificador de viscosidade</td>
                </tr>
                <tr>
                  <th scope="row">Sacarina sódica</th>
                  <td>0,15% m/v</td>
                  <td>0,15 g</td>
                  <td>Edulcorante de alta intensidade</td>
                </tr>
                <tr>
                  <th scope="row">Ácido cítrico anidro</th>
                  <td>0,10% m/v</td>
                  <td>0,10 g</td>
                  <td>Ajustador de pH (estabilizante químico)</td>
                </tr>
                <tr>
                  <th scope="row">Aroma de laranja</th>
                  <td>0,20% v/v</td>
                  <td>0,20 mL</td>
                  <td>Corretivo organoléptico</td>
                </tr>
                <tr>
                  <th scope="row">Talco farmacêutico</th>
                  <td>1,0% m/v</td>
                  <td>1,00 g</td>
                  <td>Auxiliar de filtração e clarificação (adsorvente)</td>
                </tr>
                <tr>
                  <th scope="row">Água purificada</th>
                  <td>q.s.p. 100 mL</td>
                  <td>100 mL</td>
                  <td>Veículo aquoso, ajuste de volume</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            O etanol representa 22% v/v — dentro da faixa farmacopeica de elixir (20% a 50% v/v de
            álcool, com no mínimo 20% m/v de açúcar).
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
            <li>Paramentar-se e higienizar a área.</li>
            <li>Pesar paracetamol, sacarina, ácido cítrico e talco.</li>
            <li>Medir etanol, glicerina, propilenoglicol e xarope simples em cálices graduados.</li>
            <li>
              <strong>Fase alcoólica:</strong> em béquer de 100 mL, misturar etanol e
              propilenoglicol e dissolver o paracetamol até solução transparente.
            </li>
            <li>
              <strong>Fase aquosa:</strong> em béquer de 250 mL, misturar ~25 mL de água, glicerina,
              xarope, sacarina e ácido cítrico até homogeneizar.
            </li>
            <li>
              <strong>Adição cruzada:</strong> verter a fase aquosa <em>sobre</em> a alcoólica,
              lenta e continuamente, sob agitação manual.
            </li>
            <li>Adicionar o aroma de laranja e homogeneizar.</li>
            <li>
              Se houver opalescência, adicionar o talco, agitar 5 minutos, repousar 10 minutos e
              filtrar por gravidade, descartando os 2 primeiros mL.
            </li>
            <li>Completar o volume a 100 mL em balão volumétrico com água purificada.</li>
            <li>Envasar em frasco âmbar, vedar, rotular e conferir.</li>
          </ol>

          <p class="card-note">
            Nunca jogar a fase alcoólica dentro de um grande volume de água: o paracetamol sai do
            complexo de solvatação e precipita antes de o meio se equilibrar.
          </p>
        </article>

        <article id="analise" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Análise crítica</p>
              <h2>A química da solubilização ternária</h2>
            </div>
          </header>

          <p>
            A água tem constante dielétrica ε ≈ 80 e o etanol ε ≈ 25. A mistura água–etanol–polióis
            leva o sistema a ε ≈ 45–50, reduzindo a polaridade do solvente o suficiente para
            dissolver molecularmente a carga de paracetamol sem cristalização retrógrada.
          </p>

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
                  <th scope="row">Etanol 22%</th>
                  <td>Co-solvente primário</td>
                  <td>Baixa a constante dielétrica e dissolve o paracetamol na fase alcoólica.</td>
                </tr>
                <tr>
                  <th scope="row">Glicerina + propilenoglicol</th>
                  <td>Co-solventes/hidrotrópicos</td>
                  <td>
                    Aumentam a viscosidade, reduzem a volatilidade do álcool e suavizam a sensação
                    de ardor etílico na mucosa.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Xarope simples</th>
                  <td>Edulcorante e espessante</td>
                  <td>Corrige o sabor e contribui para o corpo do elixir.</td>
                </tr>
                <tr>
                  <th scope="row">Talco</th>
                  <td>Clarificante</td>
                  <td>
                    Silicato de magnésio inerte (Mg₃Si₄O₁₀(OH)₂) que adsorve microgotículas de óleo
                    essencial e resíduos que turvam a solução.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Ordem das fases</h3>
              <p>
                A adição lenta da fase aquosa sobre a alcoólica faz a proporção de álcool cair
                gradualmente, dando tempo para o fármaco se reacomodar no complexo de solvatação.
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Descartar os 2 primeiros mL</h3>
              <p>
                O primeiro filtrado arrasta o talco fino e o óleo adsorvido. Descartá-lo evita
                devolver ao elixir justamente a turbidez que se quis remover.
              </p>
            </section>
          </div>
        </article>

        <article id="restricoes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Segurança</p>
              <h2>Restrições de uso do elixir</h2>
            </div>
          </header>

          <p>
            O teor alcoólico de ~21% v/v impede o uso em grupos com menor capacidade de metabolizar
            etanol ou maior vulnerabilidade hepática e neurológica.
          </p>

          <ul class="key-points">
            <li>Pacientes pediátricos.</li>
            <li>Gestantes.</li>
            <li>Alcoolistas em recuperação.</li>
            <li>Portadores de hepatopatias graves.</li>
            <li>Usuários de depressores do SNC ou de dissulfiram.</li>
          </ul>

          <p class="card-note">
            Em farmácia magistral, a alternativa é o xarope ou a solução aquosa edulcorada — trocar
            a forma é decisão farmacotécnica, não apenas de sabor.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Elixir: solução límpida, hidroalcoólica, edulcorada e aromatizada.</li>
            <li>Faixa oficial: 20–50% v/v de álcool e mínimo de 20% m/v de açúcar.</li>
            <li>Paracetamol: ~14 mg/mL em água; a fórmula pede 40 mg/mL → co-solvência.</li>
            <li>Água ε ≈ 80, etanol ε ≈ 25, mistura ternária ε ≈ 45–50.</li>
            <li>Fase aquosa sobre a alcoólica — nunca o contrário.</li>
            <li>Talco é clarificante, não conservante.</li>
          </ul>
          <p class="study-note__source">
            Base: Relatório Técnico 3 — elixir hidroalcoólico edulcorado de paracetamol (DF 125,
            UNIFAL-MG).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/formas/xarope">
            <span>Anterior</span>
            ← Xarope de clorfeniramina
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/formas/tintura">
            <span>Próximo</span>
            Tintura de beladona →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
