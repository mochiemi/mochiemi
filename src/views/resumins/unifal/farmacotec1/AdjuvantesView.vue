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
        <span>Adjuvantes</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE I</p>
        <h1 class="intro__title">Adjuvantes farmacotécnicos</h1>
        <p class="intro__lead">
          Conservantes, antioxidantes, corretores de pH, anti-hidrolíticos e solubilizantes: os
          componentes sem atividade terapêutica que decidem se a preparação chega intacta ao fim do
          prazo de validade — ou se oxida, hidrolisa, precipita ou é invadida por microrganismos.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>7 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#conservantes">Conservantes</a>
        <a href="#externo">Uso externo</a>
        <a href="#antioxidantes">Antioxidantes</a>
        <a href="#aquosos">Aquosos</a>
        <a href="#oleosos">Oleosos</a>
        <a href="#ph">pH</a>
        <a href="#solubilizantes">Solubilizantes</a>
      </nav>

      <div class="lesson">
        <article id="conservantes" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O ponto de partida</p>
              <h2>Agentes conservantes</h2>
            </div>
          </header>
          <p>
            Conservantes são substâncias dotadas de ação <strong>germicida ou germistática</strong>,
            destinadas a evitar as alterações que possam ocorrer numa preparação medicamentosa
            provenientes da proliferação de microrganismos.
          </p>

          <section class="worked-example">
            <h3>Exigências de um bom conservante</h3>
            <ul class="key-points">
              <li>Ser compatível com a substância ativa e com os aditivos empregados.</li>
              <li>Possuir estabilidade físico-química e capacidade de ação.</li>
              <li>Ter eficiência em amplo intervalo de pH e não alterar o pH da preparação.</li>
              <li>Não interferir na atividade farmacológica ou fisiológica.</li>
              <li>Não possuir sabor ou odor.</li>
              <li>Ser facilmente veiculado na formulação.</li>
              <li>Ter fraca tendência a ser absorvido pela substância ativa, aditivo ou material de envase.</li>
              <li>Ser atóxico e não produzir irritação ou sensibilização.</li>
            </ul>
          </section>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Conservantes para uso interno e concentrações usuais</caption>
              <thead>
                <tr>
                  <th scope="col">Conservante</th>
                  <th scope="col" class="num">Concentração usual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Álcool etílico</th>
                  <td class="num">5 – 20%</td>
                </tr>
                <tr>
                  <th scope="row">Benzoato de sódio</th>
                  <td class="num">0,05 – 0,1%</td>
                </tr>
                <tr>
                  <th scope="row">Glicerina</th>
                  <td class="num">20 – 40%</td>
                </tr>
                <tr>
                  <th scope="row">Propilenoglicol</th>
                  <td class="num">5 – 20%</td>
                </tr>
                <tr>
                  <th scope="row">Ácido sórbico</th>
                  <td class="num">0,05 – 0,2%</td>
                </tr>
                <tr>
                  <th scope="row">Nipagin (metilparabeno)</th>
                  <td class="num">0,05 – 0,25%</td>
                </tr>
                <tr>
                  <th scope="row">Nipazol (propilparabeno)</th>
                  <td class="num">0,02 – 0,05%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Parabeno é mais ativo contra fungos e leveduras do que contra bactérias — por isso
            normalmente se associam metil e propilparabeno, cobrindo espectro e solubilidades
            diferentes.
          </p>
        </article>

        <article id="externo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Cosméticos e tópicos</p>
              <h2>Conservantes para uso externo</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Espectro, faixa de pH, incompatibilidades e concentração</caption>
              <thead>
                <tr>
                  <th scope="col">Substância</th>
                  <th scope="col">Comercial</th>
                  <th scope="col">Espectro</th>
                  <th scope="col" class="num">pH</th>
                  <th scope="col">Incompatibilidade</th>
                  <th scope="col" class="num">Conc.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Ácido sórbico</th>
                  <td>Ácido sórbico</td>
                  <td>Fungos, leveduras, pouca atividade microbiana</td>
                  <td class="num">2,5 – 6,0</td>
                  <td>Tween 80</td>
                  <td class="num">0,05 – 0,2%</td>
                </tr>
                <tr>
                  <th scope="row">2-bromo-2-nitropropano-1,2-diol</th>
                  <td>Bronopol</td>
                  <td>G+ e G− (ativo); fungos (inativo)</td>
                  <td class="num">5,0 – 7,0</td>
                  <td>Cisteína, tioglicolato, tiosulfato, metabissulfito</td>
                  <td class="num">0,01 – 0,1%</td>
                </tr>
                <tr>
                  <th scope="row">Bisguanida catiônica</th>
                  <td>Clorhexidina</td>
                  <td>G+, G−; Pseudomonas e fungos (inativos)</td>
                  <td class="num">5,0 – 8,0</td>
                  <td>Tensoativos aniônicos, alginato de sódio, lecitina, Tween 80 (inativação parcial)</td>
                  <td class="num">0,03 – 0,5%</td>
                </tr>
                <tr>
                  <th scope="row">Imidazolil ureia</th>
                  <td>Germall 115</td>
                  <td>G+, G−</td>
                  <td class="num">3,0 – 9,0</td>
                  <td>Avobenzona</td>
                  <td class="num">0,03 – 0,5%</td>
                </tr>
                <tr>
                  <th scope="row">Metilparabeno</th>
                  <td>Nipagin</td>
                  <td>Fungos, leveduras</td>
                  <td class="num">3,0 – 9,5</td>
                  <td>Gelatina, metilcelulose, proteínas, Tween 80</td>
                  <td class="num">0,02 – 0,3%</td>
                </tr>
                <tr>
                  <th scope="row">Propilparabeno</th>
                  <td>Nipazol</td>
                  <td>Fungos, leveduras</td>
                  <td class="num">3,0 – 9,5</td>
                  <td>Gelatina, metilcelulose, proteínas, Tween 80</td>
                  <td class="num">0,01 – 0,6%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>Phenonip — mistura de parabenos em fenoxietanol</h3>
            <div class="two-columns">
              <div>
                <h3>Composição</h3>
                <ul class="key-points">
                  <li>Metilparabeno — 16,0%</li>
                  <li>Etilparabeno — 4,5%</li>
                  <li>Propilparabeno — 2,5%</li>
                  <li>Isobutilparabeno — 2,5%</li>
                  <li>Butilparabeno — 4,5%</li>
                  <li>Fenoxietanol — 70%</li>
                </ul>
              </div>
              <div>
                <h3>Propriedades</h3>
                <ul class="key-points">
                  <li>Amplo espectro: G+, G−, leveduras e fungos.</li>
                  <li>Estável em pH 3–8, ótimo em pH 5; estável à temperatura.</li>
                  <li>Baixa toxicidade — não irrita pele, olhos ou mucosas.</li>
                  <li>Não altera cor nem odor.</li>
                  <li>Em soluções aquosas incorpora-se a 70 °C sob agitação enérgica.</li>
                </ul>
              </div>
            </div>
            <p class="card-note">
              Dosagem: soluções aquosas 0,1–0,3%; emulsões 0,4–0,7%; xampus para adultos 0,35–0,65%.
              Emulsões: incorporar na fase oleosa.
            </p>
          </section>
        </article>

        <article id="antioxidantes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Contra o oxigênio</p>
              <h2>Agentes antioxidantes</h2>
            </div>
          </header>
          <p>
            Antioxidante é toda substância capaz de inibir a oxidação e que pode ser adicionada com
            essa finalidade a produtos farmacêuticos expostos a processos oxidativos. As alterações
            ocorrem por <strong>reações em cadeia</strong> e dependem de temperatura, luz, concentração
            de oxigênio, presença de catalisadores e pH.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Requisitos do antioxidante ideal</h3>
              <ul class="key-points">
                <li>Estável e ativo em amplo intervalo de pH.</li>
                <li>Solúvel na forma oxidada; incolor.</li>
                <li>Nem tóxico, nem irritante.</li>
                <li>Solúvel na concentração de emprego.</li>
                <li>Estável durante a fabricação e a esterilização pelo calor.</li>
                <li>Compatível com o recipiente e com a fórmula.</li>
                <li>Ativo em baixa concentração, quimicamente inerte e não volátil.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Três mecanismos de ação</h3>
              <ul class="key-points">
                <li>
                  <strong>Interrompem a cadeia de radicais livres</strong> — BHA, BHT, vitamina E,
                  propilgalato.
                </li>
                <li>
                  <strong>Sofrem eles próprios a oxidação</strong> — metabissulfito de sódio,
                  bissulfito de sódio, vitamina C, palmitato de ascorbila.
                </li>
                <li>
                  <strong>Mecanismo preventivo</strong> — ácido cítrico, EDTA, cisteína, glutationa,
                  metionina.
                </li>
              </ul>
            </section>
          </div>
        </article>

        <article id="aquosos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Sistemas aquosos</p>
              <h2>Antioxidantes hidrossolúveis</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Antioxidante</th>
                  <th scope="col">Características</th>
                  <th scope="col" class="num">Conc. efetiva</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Ácido ascórbico</th>
                  <td>
                    Pó cristalino, inodoro, escurece à luz. Razoavelmente estável no estado seco, mas
                    oxida em solução. Solubilidade: 1 g/3 mL de água; 1 g/30 mL de álcool.
                  </td>
                  <td class="num">0,05 – 3,0%</td>
                </tr>
                <tr>
                  <th scope="row">Bissulfito de sódio</th>
                  <td>
                    Pó ou cristais brancos com odor de SO₂, sabor desagradável. Instável no ar, perde
                    SO₂ e oxida a sulfato. 1 g/4 mL de água; 1 g/70 mL de álcool.
                  </td>
                  <td class="num">0,1%</td>
                </tr>
                <tr>
                  <th scope="row">Metabissulfito de sódio</th>
                  <td>
                    Pó branco ou cristais incolores com odor sulfuroso, sabor ácido e salino. Oxida
                    lentamente a sulfato ao ar e à umidade. Atenção: sulfitos causam alergia e o ânion
                    HSO₃⁻ tem reatividade.
                  </td>
                  <td class="num">0,02 – 1,0%</td>
                </tr>
                <tr>
                  <th scope="row">Tiossulfato de sódio</th>
                  <td>
                    Cristais incolores, eflorescentes no ar seco acima de 33 °C. Soluções aquosas
                    neutras ou levemente alcalinas. 1 g/0,5 mL de água; insolúvel em álcool.
                  </td>
                  <td class="num">0,05%</td>
                </tr>
                <tr>
                  <th scope="row">Ésteres do ácido gálico</th>
                  <td>
                    Galato de metila, etila e propila (Progallins). Solúveis em água, mas perdem ação
                    acentuada em contato com tensoativos.
                  </td>
                  <td class="num">0,005 – 0,1%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="oleosos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Sistemas oleosos</p>
              <h2>Antioxidantes lipossolúveis e preventivos</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Antioxidante</th>
                  <th scope="col">Características</th>
                  <th scope="col" class="num">Conc. efetiva</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Palmitato de ascorbila</th>
                  <td>
                    Pó branco ou branco-amarelado, odor característico. Muito levemente solúvel em água
                    e em óleos vegetais; solúvel em álcool.
                  </td>
                  <td class="num">0,01 – 0,2%</td>
                </tr>
                <tr>
                  <th scope="row">BHA (butil-hidroxianisol)</th>
                  <td>
                    Cera sólida branco-amarelada, fraco odor. Insolúvel em água; facilmente solúvel em
                    álcool e propilenoglicol.
                  </td>
                  <td class="num">0,005 – 0,01%</td>
                </tr>
                <tr>
                  <th scope="row">BHT (butil-hidroxitolueno)</th>
                  <td>
                    Sólido cristalino branco, fraco odor. Insolúvel em água e propilenoglicol; solúvel
                    em álcool.
                  </td>
                  <td class="num">0,03 – 0,1%</td>
                </tr>
                <tr>
                  <th scope="row">Alfa-tocoferol (vitamina E)</th>
                  <td>
                    Óleo viscoso amarelo ou amarelo-esverdeado, praticamente inodoro; instável à luz e
                    ao ar. Insolúvel em água, solúvel em álcool, miscível com acetona e óleos vegetais.
                  </td>
                  <td class="num">0,05 – 2%</td>
                </tr>
                <tr>
                  <th scope="row">NDGA (ácido nor-diidroguaiarético)</th>
                  <td>
                    Tetrafenol de origem natural. Bom protetor de óleos e gorduras, resiste ao calor e à
                    luz; bom protetor da vitamina A.
                  </td>
                  <td class="num">0,01%</td>
                </tr>
                <tr>
                  <th scope="row">Galato de octila e de laurila</th>
                  <td>
                    Ésteres do ácido gálico (Progallins) para sistemas gordurosos, designados por letras
                    que indicam a constituição.
                  </td>
                  <td class="num">0,005 – 0,1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example worked-example--soft">
            <h3>Antioxidantes por mecanismo preventivo</h3>
            <ul class="key-points">
              <li>
                <strong>Ácido cítrico</strong> — sinérgico de vários inativadores de radicais livres.
              </li>
              <li>
                <strong>EDTA</strong> — agente quelante (usado em titulação complexométrica de metais);
                desativa metais catalisadores.
              </li>
              <li>
                <strong>Ácido fosfórico e derivados</strong> — poder desativante frente aos principais
                catalisadores da auto-oxidação.
              </li>
              <li>
                <strong>Aminoácidos</strong> — cisteína e metionina formam complexos com certos metais,
                inibindo sua ação catalítica.
              </li>
            </ul>
          </section>
        </article>

        <article id="ph" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Ponto crítico</p>
              <h2>Corretivos de pH e anti-hidrolíticos</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Por que o pH importa</caption>
              <thead>
                <tr>
                  <th scope="col">Razão</th>
                  <th scope="col">Exemplos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Solubilidade de fármacos</th>
                  <td>
                    Alcaloides solubilizam em pH ácido; sulfamidas e antibióticos em pH alcalino
                    (favorece sais solúveis); carbocisteína/ambroxol é insolúvel em pH neutro e em
                    água — alcalinizar com carbonato de sódio.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Estabilidade química</th>
                  <td>
                    Vitamina B1: em pH 4 estável de 6 meses a 1 ano. Vitamina B2: estável em solução
                    nitidamente ácida; em pH 5 perde 1,2% ao mês. Vitamina B12: estável em pH 4,5–5,0;
                    a 121 °C perde 3% em 1 h em pH 4,5 e 12% em pH 7,0. Ácido ascórbico: estável em pH
                    5–6, rapidamente destruído em pH 7.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Prevenção de irritação</th>
                  <td>
                    Ácido glicólico em pH 2 irrita. Na via auricular o pH alcalino favorece
                    microrganismos — deve ser ácido. A via intramuscular tolera mais que a intraraquídea
                    e a endovenosa.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Efeito terapêutico</th>
                  <td>
                    Ácido glicólico: pH 4 é renovador celular; pH 7 é hidratante.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>Agentes anti-hidrolíticos</h3>
            <p>
              Muito usados em soluções aquosas: são <strong>poliálcoois</strong> que, misturados à água,
              diminuem o poder de reação da água.
            </p>
            <ul class="key-points">
              <li>Glicerina</li>
              <li>Propilenoglicol</li>
              <li>Sorbitol (solução 10 a 60%)</li>
              <li>Alguns tensoativos aniônicos ou catiônicos</li>
            </ul>
          </section>
        </article>

        <article id="solubilizantes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Quando o fármaco não dissolve</p>
              <h2>Cinco estratégias de solubilização</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Estratégia</th>
                  <th scope="col">Como funciona</th>
                  <th scope="col">Exemplos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">A. Complexos moleculares hidrossolúveis</th>
                  <td>Formação de complexo entre o fármaco e um parceiro solúvel.</td>
                  <td>
                    Cafeína + benzoato ou salicilato de sódio; ácido bórico + glicerina, manitol ou
                    sorbitol; iodo + iodeto de sódio; teobromina + acetato de sódio; teofilina +
                    etilenodiamina
                  </td>
                </tr>
                <tr>
                  <th scope="row">B. Tensoativos</th>
                  <td>O tensoativo atua sobre a tensão interfacial, reduzindo a insolubilidade.</td>
                  <td>
                    Laurilsulfato de sódio, oleato de sódio, miristato de potássio, polissorbatos
                    (Tween 20 e 80)
                  </td>
                </tr>
                <tr>
                  <th scope="row">C. Misturas de água com outros líquidos</th>
                  <td>Ajuste da constante dielétrica do meio.</td>
                  <td>
                    Fenobarbital e esteróis; digitálicos são insolúveis em água (constante dielétrica
                    80), mas solúveis em mistura de álcool, glicerina e água (constante ≈ 40)
                  </td>
                </tr>
                <tr>
                  <th scope="row">D. Ajuste de pH</th>
                  <td>Ionização do fármaco por correção de pH.</td>
                  <td>Alcaloides em meio ácido; sulfamidas em meio alcalino</td>
                </tr>
                <tr>
                  <th scope="row">E. Radicais hidrofílicos</th>
                  <td>Modificação estrutural da molécula.</td>
                  <td>Estratégia de química farmacêutica (síntese de derivados)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Ordem prática de tentativa: primeiro ajuste de pH e co-solvência; depois complexação ou
            tensoativo; por último a modificação química, que já não é decisão farmacotécnica.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Conservante ideal: amplo espectro, amplo pH, sem sabor/odor, atóxico, compatível e não absorvido pelo envase.</li>
            <li>Metilparabeno e propilparabeno são fungistáticos — associar para ampliar espectro.</li>
            <li>Clorhexidina é inativada por tensoativos aniônicos, alginato e lecitina.</li>
            <li>Antioxidante de cadeia: BHA, BHT, vitamina E. Sofrem oxidação: sulfitos e vitamina C. Preventivos: EDTA, ácido cítrico, aminoácidos.</li>
            <li>Sulfitos causam alergia e o HSO₃⁻ é reativo.</li>
            <li>Anti-hidrolíticos = poliálcoois (glicerina, propilenoglicol, sorbitol).</li>
            <li>Solubilização: complexo, tensoativo, co-solvente, pH ou radical hidrofílico.</li>
            <li>Toda correção de pH deve considerar solubilidade, estabilidade, irritação e efeito terapêutico.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Adjuvantes farmacotécnicos” (Prof. Antonio Luengo Garcia,
            UNIFAL-MG, 2026).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/conservacao">
            <span>Anterior</span>
            ← Operações e conservação
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/corretivos">
            <span>Próximo</span>
            Corretivos →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
