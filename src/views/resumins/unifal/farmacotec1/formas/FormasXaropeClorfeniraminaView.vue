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
        <span>Xarope de clorfeniramina</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">MÓDULO 2 · XAROPE MEDICAMENTOSO</p>
        <h1 class="intro__title">Xarope sacaróleo de maleato de clorfeniramina 2 mg/5 mL</h1>
        <p class="intro__lead">
          O açúcar aqui não é só sabor: a 65% m/v ele também conserva, espessa e protege o fármaco.
          O desafio é dissolver sem inverter a sacarose — cada grau acima de 60 °C aproxima o xarope
          do caramelo.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Atividade de água</span>
          <span class="intro__chip">Inversão da sacarose</span>
          <span class="intro__chip">Densidade 1,30–1,33</span>
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
                Xarope de maleato de clorfeniramina 2 mg/5 mL (volume final 100 mL)
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
                  <th scope="row">Maleato de clorfeniramina</th>
                  <td>0,04% m/v</td>
                  <td>0,04 g (40 mg)</td>
                  <td>Fármaco ativo — anti-histamínico H₁</td>
                </tr>
                <tr>
                  <th scope="row">Sacarose cristal</th>
                  <td>65,0% m/v</td>
                  <td>65,00 g</td>
                  <td>Edulcorante, conservante osmótico, viscosificante</td>
                </tr>
                <tr>
                  <th scope="row">Metilparabeno</th>
                  <td>0,10% m/v</td>
                  <td>0,10 g</td>
                  <td>Conservante antimicrobiano (bacteriostático)</td>
                </tr>
                <tr>
                  <th scope="row">Propilparabeno</th>
                  <td>0,02% m/v</td>
                  <td>0,02 g</td>
                  <td>Conservante antimicrobiano (fungistático)</td>
                </tr>
                <tr>
                  <th scope="row">Ácido cítrico anidro</th>
                  <td>0,10% m/v</td>
                  <td>0,10 g</td>
                  <td>Acidificante, tampão e antioxidante</td>
                </tr>
                <tr>
                  <th scope="row">Essência de framboesa</th>
                  <td>0,10% v/v</td>
                  <td>0,10 mL</td>
                  <td>Corretivo de odor e sabor</td>
                </tr>
                <tr>
                  <th scope="row">Corante amaranto</th>
                  <td>0,005% m/v</td>
                  <td>0,005 g</td>
                  <td>Corretivo de aspecto visual</td>
                </tr>
                <tr>
                  <th scope="row">Água purificada</th>
                  <td>q.s.p. 100 mL</td>
                  <td>100 mL</td>
                  <td>Veículo de dissolução</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            2 mg em 5 mL equivale a 40 mg em 100 mL, ou seja, 0,04% m/v. Converter a dose da
            posologia para concentração percentual é o primeiro cálculo de qualquer xarope
            medicamentoso.
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
            <li>Higienizar a área e paramentar-se com os EPIs.</li>
            <li>Pesar sacarose, clorfeniramina, parabenos e ácido cítrico.</li>
            <li>Aquecer ~45 mL de água a 70–80 °C em béquer de 250 mL.</li>
            <li>
              Dissolver os parabenos na água aquecida: a solubilidade em água cresce com a
              temperatura.
            </li>
            <li>
              Adicionar a sacarose aos poucos, sob agitação,
              <strong>sem deixar passar de 60–65 °C</strong>
              (controle por termômetro).
            </li>
            <li>Dissolver até xarope base límpido; cessar o aquecimento e resfriar a 35–40 °C.</li>
            <li>
              À parte, dissolver clorfeniramina e ácido cítrico em 5 mL de água à temperatura
              ambiente.
            </li>
            <li>Incorporar a solução do fármaco ao xarope base morno, sob agitação.</li>
            <li>
              Adicionar o corante previamente solubilizado em 1 mL de água e a essência,
              homogeneizando.
            </li>
            <li>
              Filtrar a morno (algodão ou papel de porosidade ampla) para reter impurezas do açúcar.
            </li>
            <li>Transferir para cálice, resfriar a 25 °C e completar o volume a 100 mL.</li>
            <li>Envasar em frasco âmbar, lacrar e rotular.</li>
          </ol>

          <p class="card-note">
            Por que não dissolver o fármaco junto com o açúcar? Porque ele ficaria exposto a 60–65
            °C por vários minutos e à acidez do meio — condições desnecessárias para um ativo
            termosensível.
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
                  <th scope="row">Sacarose 65%</th>
                  <td>Edulcorante e conservante</td>
                  <td>
                    Reduz a atividade de água (a<sub>w</sub>) e provoca desidratação osmótica dos
                    microrganismos, permitindo menor carga de parabenos.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Maleato de clorfeniramina</th>
                  <td>Ativo</td>
                  <td>
                    Sal de amina altamente solúvel em água; o maleato confere estabilidade ao núcleo
                    anti-histamínico.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Metil + propilparabeno</th>
                  <td>Conservantes</td>
                  <td>
                    Sistema sinérgico hidrofílico/lipofílico (proporção 5:1 a 10:1) que cobre
                    bolores e leveduras, inclusive na água condensada nas paredes do frasco.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Ácido cítrico</th>
                  <td>Acidificante / tampão</td>
                  <td>
                    Ajusta o pH a 4,0–5,0: faixa de máxima estabilidade da clorfeniramina e de
                    eficácia dos parabenos na forma não ionizada.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="equation">C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (glicose) + C₆H₁₂O₆ (frutose)</p>
          <p>
            Essa é a <strong>inversão da sacarose</strong>: hidrólise em meio aquoso ácido e quente.
            A frutose formada carameliza acima de ~60 °C, escurece o xarope, aumenta a higroscopia e
            altera o poder rotatório.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Por que açúcar cristal</h3>
              <p>
                Precisa ser isento de anidrido sulfuroso (descorante industrial que pode precipitar
                fármacos) e de ultramarina (branqueador insolúvel que gera ácido sulfúrico em meio
                ácido).
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Por que filtrar a morno</h3>
              <p>
                A viscosidade cai com a temperatura: filtrar quente é mais rápido e retém as
                impurezas insolúveis do açúcar antes de o xarope esfriar e engrossar.
              </p>
            </section>
          </div>
        </article>

        <article id="controle" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Qualidade</p>
              <h2>Parâmetros farmacopeicos</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Ensaios do xarope simples e do xarope medicamentoso
              </caption>
              <thead>
                <tr>
                  <th scope="col">Ensaio</th>
                  <th scope="col">Especificação</th>
                  <th scope="col">Leitura</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Densidade (20 °C)</th>
                  <td>1,30 – 1,33 g/mL</td>
                  <td>
                    Abaixo: subconcentração e risco microbiológico; acima: supersaturação e
                    cristalização
                  </td>
                </tr>
                <tr>
                  <th scope="row">Viscosidade (20 °C)</th>
                  <td>≈ 190 cPo</td>
                  <td>Sensação palatável e retenção na mucosa, mascarando o amargo</td>
                </tr>
                <tr>
                  <th scope="row">Rotação específica</th>
                  <td>+ 8,26° a + 8,50°</td>
                  <td>Confirma ausência de inversão significativa da sacarose</td>
                </tr>
                <tr>
                  <th scope="row">Aspecto</th>
                  <td>Límpido, cor homogênea</td>
                  <td>Castanho/amarelado indica caramelização</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Densidade e polarimetria são ensaios complementares: a primeira mede quanto açúcar há; a
            segunda, em que <em>forma</em> ele está.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Dose → concentração: 2 mg/5 mL = 40 mg/100 mL = 0,04% m/v.</li>
            <li>Sacarose 65% m/v: edulcora, conserva por pressão osmótica e espessa.</li>
            <li>Parabenos em sinergia 5:1 a 10:1 (metil:propil), dissolvidos a quente.</li>
            <li>Ácido cítrico → pH 4–5: estabilidade do ativo e dos conservantes.</li>
            <li>Não passar de 60 °C na dissolução do açúcar: risco de inversão e caramelização.</li>
            <li>Densidade 1,30–1,33 g/mL; rotação + 8,26° a + 8,50°.</li>
          </ul>
          <p class="study-note__source">
            Base: Relatório Técnico 2 — xarope medicamentoso hydro-sacaróleo de maleato de
            clorfeniramina (DF 125, UNIFAL-MG).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/formas/iodeto">
            <span>Anterior</span>
            ← Solução de iodeto de potássio
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/formas/elixir">
            <span>Próximo</span>
            Elixir de paracetamol →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
