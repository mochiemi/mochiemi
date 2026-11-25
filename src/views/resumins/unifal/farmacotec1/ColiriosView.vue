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
        <span>Colírios</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE II</p>
        <h1 class="intro__title">Colírios</h1>
        <p class="intro__lead">
          A preparação oftálmica é a forma farmacêutica com maior exigência técnica: estéril, límpida,
          isotônica, com pH compatível com o líquido lacrimal e sem irritação. Aqui estão os requisitos,
          a fórmula de isotonia e a sequência de preparo.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>6 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#intro">Definição</a>
        <a href="#requisitos">Requisitos</a>
        <a href="#isotonia">Isotonia</a>
        <a href="#veiculos">Solventes e tampões</a>
        <a href="#adjuvantes">Adjuvantes</a>
        <a href="#preparo">Preparo</a>
      </nav>

      <div class="lesson">
        <article id="intro" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O ponto de partida</p>
              <h2>Definição e ações</h2>
            </div>
          </header>
          <p>
            Colírios são medicamentos líquidos destinados a tratar as várias afecções do
            <strong>globo ocular</strong> — pálpebras, conjuntiva e córnea.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Forma farmacêutica</h3>
              <ul class="key-points">
                <li>Soluções.</li>
                <li>Suspensões.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Ações</h3>
              <ul class="key-points">
                <li>Anestésica.</li>
                <li>Anti-infecciosa.</li>
                <li>Midríatica (dilata a pupila).</li>
                <li>Miótica (contrai a pupila).</li>
              </ul>
            </section>
          </div>
        </article>

        <article id="requisitos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Oito exigências</p>
              <h2>Requisitos das preparações oftálmicas</h2>
            </div>
          </header>

          <ol class="steps">
            <li><strong>Precisão de composição.</strong></li>
            <li>Apresentarem-se <strong>límpidos e transparentes</strong>.</li>
            <li>Serem <strong>isotônicos</strong>.</li>
            <li>Possuírem <strong>pH compatível</strong> com o líquido lacrimal.</li>
            <li>Serem <strong>estéreis</strong>.</li>
            <li>Serem <strong>quimicamente estáveis</strong>.</li>
            <li>Não serem <strong>irritantes</strong>.</li>
            <li>Terem <strong>ótima atividade terapêutica</strong>.</li>
          </ol>

          <p class="card-note">
            Cada requisito falha por um motivo diferente: partícula em suspensão causa abrasão da córnea;
            solução hipertônica ou hipotônica causa ardor e lacrimejamento reflexo que lava o fármaco; pH
            fora da faixa desnatura proteínas lacrimais; contaminação leva a infecção ocular grave.
          </p>
        </article>

        <article id="isotonia" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Cálculo obrigatório</p>
              <h2>Isotonia e a fórmula de Lumière-Chavrotier</h2>
            </div>
          </header>

          <ul class="key-points">
            <li>
              O globo ocular tolera uma pequena quantidade de solução que não seja isotônica:
              <strong>0,6 a 1,5%</strong> de NaCl equivalente.
            </li>
            <li>
              Todo medicamento aplicado repetidamente deve ser tornado isotônico.
            </li>
          </ul>

          <div class="formula" aria-label="X igual a zero vírgula cinquenta e dois menos delta um, dividido por delta dois">
            <span class="formula__label">X</span>
            <span>=</span>
            <span class="formula__fraction">
              <span>0,52 − Δ₁</span>
              <span>Δ₂</span>
            </span>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>O que significa</h3>
              <ul class="key-points">
                <li><strong>0,52</strong> — abaixamento crioscópico do soro/lágrima, em °C.</li>
                <li><strong>Δ₁</strong> — abaixamento produzido pelos fármacos já presentes na fórmula.</li>
                <li><strong>Δ₂</strong> — abaixamento produzido por 1% do agente isotonizante.</li>
                <li><strong>X</strong> — concentração (%) do agente isotonizante a acrescentar.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Valores usuais de Δ₂</h3>
              <ul class="key-points">
                <li>Cloreto de sódio — 0,578</li>
                <li>Glicose anidra — 0,100</li>
                <li>Manitol — 0,090</li>
                <li>Propilenoglicol — 0,320</li>
              </ul>
              <p><small>Sempre confira na tabela oficial do seu formulário.</small></p>
            </section>
          </div>

          <section class="worked-example">
            <h3>Exemplo resolvido — isotonizar com NaCl</h3>
            <p>
              Fórmula: fármaco a 1%, cujo abaixamento crioscópico (Δ₁) é 0,14 °C na concentração de uso.
            </p>
            <ol class="steps">
              <li>Δ₂ do NaCl = 0,578 por 1%.</li>
              <li>X = (0,52 − 0,14) ÷ 0,578</li>
              <li>X = 0,38 ÷ 0,578 = <strong>0,66%</strong></li>
              <li>
                Para 100 mL: pesar <strong>0,66 g de NaCl</strong> além do fármaco e dos demais
                adjuvantes.
              </li>
            </ol>
            <p class="card-note">
              Se a soma dos adjuvantes já contribui para o abaixamento, seus Δ também entram em Δ₁. O
              cálculo é aditivo: some as contribuições de todos os solutos.
            </p>
          </section>
        </article>

        <article id="veiculos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Base da formulação</p>
              <h2>Solventes e tampões</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Solvente</h3>
              <p><strong>Água destilada esterilizada.</strong></p>
              <p>Adjuvantes de solubilização (poliálcoois): glicerina e propilenoglicol.</p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Tampões</h3>
              <ul class="key-points">
                <li>Tampão fosfato.</li>
                <li>Tampão borato de sódio + ácido bórico.</li>
                <li>Tampão acetato de sódio + ácido bórico.</li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            O tampão não serve só para conforto: muitos fármacos oftálmicos (alcaloides, por exemplo) só
            permanecem em solução e estáveis dentro de uma faixa estreita de pH — e o pH não pode sair
            muito da faixa lacrimal (≈ 7,4) sem causar ardor.
          </p>
        </article>

        <article id="adjuvantes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Três funções</p>
              <h2>Adjuvantes dos colírios</h2>
            </div>
          </header>

          <section class="worked-example">
            <h3>a) Aumentam a atividade terapêutica (tensoativos)</h3>
            <p>Efeitos:</p>
            <ul class="key-points">
              <li>Aumento da solubilidade de certas substâncias.</li>
              <li>Aumento da penetração na córnea e em outros tecidos do globo ocular.</li>
              <li>Maior permanência da substância no saco lacrimal.</li>
              <li>Estabilização das suspensões.</li>
            </ul>
            <p><small>Exemplo: cloreto de benzalcônio.</small></p>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>b) Prolongam a ação terapêutica</h3>
            <p>
              Prolonga-se a ação aumentando a viscosidade ou promovendo a formação de complexos entre os
              fármacos e certos adjuvantes.
            </p>
            <ul class="key-points">
              <li>Metilcelulose</li>
              <li>Propilenoglicol</li>
              <li>PVP (polivinilpirrolidona)</li>
              <li>CMC (carboximetilcelulose)</li>
              <li>Álcool polivinílico</li>
            </ul>
          </section>

          <section class="worked-example">
            <h3>c) Favorecem a conservação</h3>
            <div class="two-columns">
              <div>
                <h3>Antioxidantes</h3>
                <ul class="key-points">
                  <li>Sulfito de sódio anidro 0,1%</li>
                  <li>Bissulfitos e sulfitos</li>
                  <li>Metabissulfitos</li>
                  <li>Ácido ascórbico</li>
                </ul>
              </div>
              <div>
                <h3>Conservantes</h3>
                <ul class="key-points">
                  <li>Fenóis (clorocresol)</li>
                  <li>Ésteres do ácido para-hidroxibenzoico (parabenos)</li>
                  <li>Clorobutanol</li>
                  <li>Cloreto de benzalcônio</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>Requisitos de um conservante oftálmico</h3>
            <ul class="key-points">
              <li>Largo espectro de ação.</li>
              <li>Continuidade de ação.</li>
              <li>Ação rápida.</li>
              <li>Ação não alérgica nem sensibilizante.</li>
              <li>Atóxico.</li>
              <li>Compatível com os demais componentes.</li>
              <li>Estável.</li>
              <li>Solúvel na concentração de uso.</li>
            </ul>
          </section>
        </article>

        <article id="preparo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Execução e controle</p>
              <h2>Preparação e ensaios</h2>
            </div>
          </header>

          <ol class="steps">
            <li><strong>Dissolução</strong> dos princípios ativos e adjuvantes.</li>
            <li><strong>Filtração</strong> — garante a limpidez exigida.</li>
            <li><strong>Acondicionamento</strong> em recipientes apropriados.</li>
            <li><strong>Esterilização</strong>.</li>
            <li><strong>Controle</strong> da preparação.</li>
          </ol>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Ensaios</h3>
              <ul class="key-points">
                <li>Dosagem e identificação do princípio ativo.</li>
                <li>pH.</li>
                <li>Isotonia.</li>
                <li>Esterilidade.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Pontos de atenção</h3>
              <ul class="key-points">
                <li>A filtração deve ser feita antes da esterilização, em membrana adequada.</li>
                <li>O envase é em frasco gotejador estéril, de plástico.</li>
                <li>Colírios multidose exigem conservante; unidose, não.</li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            A sequência não é arbitrária: esterilizar depois de filtrar evita recontaminação por
            partículas; e o controle fecha o ciclo comprovando que o produto cumpre os oito requisitos.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Colírio: solução ou suspensão para afecções de pálpebras, conjuntiva e córnea.</li>
            <li>Ações: anestésica, anti-infecciosa, midríatica e miótica.</li>
            <li>Oito requisitos — precisão, limpidez, isotonia, pH, esterilidade, estabilidade, não irritação e atividade.</li>
            <li>Tolerância a soluções não isotônicas: 0,6 a 1,5%.</li>
            <li>Lumière-Chavrotier: X = (0,52 − Δ₁) ÷ Δ₂.</li>
            <li>Δ₂ do NaCl = 0,578 por 1%.</li>
            <li>Tampões: fosfato; borato + ácido bórico; acetato + ácido bórico.</li>
            <li>Tensoativo clássico: cloreto de benzalcônio. Viscosantes: metilcelulose, PVP, CMC, PVA.</li>
            <li>Fases: dissolução → filtração → acondicionamento → esterilização → controle.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Colírios” (Prof. Antonio Luengo Garcia, UNIFAL-MG, 2026).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/alcooleos">
            <span>Anterior</span>
            ← Alcóoleos e óleos
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/otologicos">
            <span>Próximo</span>
            Otofármacos e errinos →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
