<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/farmacotec1">Farmacotécnica I</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Xaropes e elixires</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE II</p>
        <h1 class="intro__title">Xaropes, melitos e elixires</h1>
        <p class="intro__lead">
          Soluções saturadas de sacarose que edulcoram e conservam ao mesmo tempo. Da receita oficial do
          xarope simples aos ensaios de densidade, polarimetria e viscosidade que provam se o xarope
          está dentro da especificação.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>8 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#conceito">Conceito</a>
        <a href="#preparo">Preparo</a>
        <a href="#receita">Receita oficial</a>
        <a href="#mistura">Líquido medicinal</a>
        <a href="#alteracoes">Alterações</a>
        <a href="#ensaios">Ensaios</a>
        <a href="#tipos">Tipos especiais</a>
        <a href="#elixires">Melitos, elixires e linctus</a>
      </nav>

      <div class="lesson">
        <article id="conceito" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O ponto de partida</p>
              <h2>Definição e classificação dos sacaróleos</h2>
            </div>
          </header>
          <p>
            Xaropes são <strong>preparações farmacêuticas líquidas aquosas e límpidas</strong> contendo
            elevada concentração de açúcares, os quais lhe conferem propriedades
            <strong>edulcorantes e conservantes</strong>.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Sacaróleos líquidos</h3>
              <ul class="key-points">
                <li><strong>Xaropes</strong> — soluções de sacarose em água.</li>
                <li><strong>Melitos</strong> — preparações com grande percentagem de mel.</li>
              </ul>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Quanto ao uso</h3>
              <ul class="key-points">
                <li><strong>Medicamentoso</strong> — veicula um princípio ativo.</li>
                <li><strong>Veículo</strong> — serve de base para incorporar ativos.</li>
              </ul>
            </section>
          </div>

          <section class="worked-example">
            <h3>Açúcar invertido</h3>
            <p>
              As soluções saturadas de sacarose são obtidas dissolvendo cerca de
              <strong>2/3 de açúcar em 1/3 de água</strong>. Sob hidrólise ácida ou calor, a sacarose se
              decompõe:
            </p>
            <div class="reaction">
              <span>C₁₂H₂₂O₁₁ (sacarose)</span>
              <span class="reaction__arrow" aria-hidden="true">+</span>
              <span>H₂O</span>
              <span class="reaction__arrow" aria-hidden="true">→</span>
              <span>C₆H₁₂O₆ (glicose)</span>
              <span class="reaction__arrow" aria-hidden="true">+</span>
              <span>C₆H₁₂O₆ (levulose)</span>
            </div>
            <p class="card-note">
              O açúcar invertido é mais doce e mais solúvel, mas a inversão descontrolada leva à
              precipitação de cristais — é uma das principais causas de instabilidade do xarope.
            </p>
          </section>
        </article>

        <article id="preparo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Matéria-prima e método</p>
              <h2>Preparação do xarope</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Matéria-prima</h3>
              <ul class="key-points">
                <li>Componente principal: <strong>sacarose</strong>.</li>
                <li>Condições de uso: isenta de anidrido sulfuroso.</li>
                <li>Isenta de ultramarina (azul de ultramar usado como branqueador).</li>
                <li>Veículo: água destilada ou deionizada.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Métodos</h3>
              <ol class="steps">
                <li>
                  <strong>Solução a frio</strong> — açúcar + água ou líquido medicinal, à temperatura
                  ambiente; filtrar.
                </li>
                <li>
                  <strong>Solução em banho-maria</strong> — açúcar + água ou líquido medicinal sob
                  aquecimento; filtrar.
                </li>
                <li>
                  <strong>Cocção e clarificação</strong> — para líquidos turvos.
                </li>
              </ol>
            </section>
          </div>

          <section class="worked-example">
            <h3>Clarificação</h3>
            <p>Sempre que o líquido medicinal se apresentar turvo, faz-se a clarificação por:</p>
            <ul class="key-points">
              <li>Filtração simples.</li>
              <li>
                Adsorventes: pasta de papel, carvão mineral, talco, carbonato de magnésio, albumina.
              </li>
            </ul>
            <p class="card-note">
              O carvão adsorve também cor e aroma — use-o só quando o objetivo for realmente
              descorar/desodorizar. Para turvação simples, talco ou pasta de papel são mais seguros.
            </p>
          </section>
        </article>

        <article id="receita" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Farmacopeia Brasileira</p>
              <h2>Xarope simples e xarope dietético</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Xarope simples (FB)</h3>
              <div class="table-scroll">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th scope="col">Componente</th>
                      <th scope="col" class="num">Quantidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Açúcar cristal</th>
                      <td class="num">850 g</td>
                    </tr>
                    <tr>
                      <th scope="row">Água destilada</th>
                      <td class="num">qsp 1.000 mL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><small>Corresponde a 85% p/V de sacarose — solução praticamente saturada.</small></p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Sugestão de xarope dietético</h3>
              <div class="table-scroll">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th scope="col">Componente</th>
                      <th scope="col" class="num">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">CMC</th>
                      <td class="num">2,00</td>
                    </tr>
                    <tr>
                      <th scope="row">Nipagin</th>
                      <td class="num">0,15</td>
                    </tr>
                    <tr>
                      <th scope="row">Sacarina</th>
                      <td class="num">0,10</td>
                    </tr>
                    <tr>
                      <th scope="row">Ciclamato</th>
                      <td class="num">0,05</td>
                    </tr>
                    <tr>
                      <th scope="row">Água destilada</th>
                      <td class="num">qsp 97,70</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <p class="card-note">
            Sem a sacarose, o xarope dietético perde a autopreservação: a CMC dá corpo e o nipagin
            garante a estabilidade microbiológica. É um sistema diferente, não um xarope “sem açúcar”
            equivalente.
          </p>
        </article>

        <article id="mistura" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Incorporando o ativo</p>
              <h2>Mistura do líquido medicinal ao xarope simples</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Sem concentração de volume</h3>
              <p>
                Quando o líquido medicinal não chega a provocar variações apreciáveis na densidade.
                Basta misturar e completar o volume.
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Com concentração de volume</h3>
              <p>
                Quando o líquido medicinal faz variar a densidade, mudando a concentração em sacarose.
                É preciso recalcular a quantidade de açúcar para manter a saturação.
              </p>
            </section>
          </div>

          <p class="card-note">
            Se o volume do líquido medicinal é significativo, adicioná-lo depois de pronto diluiria o
            xarope e abriria caminho para crescimento microbiano. Nesse caso, parte da água do xarope é
            substituída pelo líquido medicinal — e não somada a ele.
          </p>
        </article>

        <article id="alteracoes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Instabilidade</p>
              <h2>Alterações dos xaropes</h2>
            </div>
          </header>

          <div class="factor-grid">
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">O₂</span>
              <h3>Agentes atmosféricos</h3>
              <p>Oxigênio e anidrido carbônico; perda ou absorção de água.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">T</span>
              <h3>Aquecimento</h3>
              <p>Hidrólise da sacarose e destruição de fármacos termolábeis.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">UV</span>
              <h3>Exposição à luz</h3>
              <p>Os ultravioleta podem alterar os fármacos — daí o frasco âmbar.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">pH</span>
              <h3>Alterações internas</h3>
              <p>
                Hidrólise da sacarose por pH inadequado, com precipitação de açúcar invertido.
              </p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">↔</span>
              <h3>Interações</h3>
              <p>Entre fármacos, adjuvantes e sacarose.</p>
            </section>
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">μ</span>
              <h3>Proliferação microbiana</h3>
              <p>
                Ocorre quando a concentração de açúcar cai — xaropes diluídos ou contaminados.
              </p>
            </section>
          </div>
        </article>

        <article id="ensaios" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Controle da qualidade</p>
              <h2>Ensaios do xarope</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Grupo</th>
                  <th scope="col">Ensaio</th>
                  <th scope="col" class="num">Especificação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Organoléptico</th>
                  <td>Caracteres organolépticos</td>
                  <td class="num">—</td>
                </tr>
                <tr>
                  <th scope="row" rowspan="3">Físico</th>
                  <td>Viscosidade</td>
                  <td class="num">190 cP</td>
                </tr>
                <tr>
                  <td>Ensaio polarimétrico</td>
                  <td class="num">+8°26′ a +8°50′</td>
                </tr>
                <tr>
                  <td>Densidade</td>
                  <td class="num">1,30 – 1,33</td>
                </tr>
                <tr>
                  <th scope="row" rowspan="2">Químico</th>
                  <td>Avaliação do teor em sacarose e açúcar invertido</td>
                  <td class="num">—</td>
                </tr>
                <tr>
                  <td>Dosagem específica do princípio ativo</td>
                  <td class="num">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A densidade entre 1,30 e 1,33 g/mL é o teste rápido de saturação: abaixo disso, há risco
            microbiológico. O desvio do poder rotatório indica inversão da sacarose.
          </p>
        </article>

        <article id="tipos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Variações</p>
              <h2>Falsificação e tipos especiais</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Xarope para diabéticos</h3>
              <ul class="key-points">
                <li>Sacarina sódica ou ciclamatos como edulcorantes.</li>
                <li>Agentes espessantes: glicerina, gomas, metilcelulose.</li>
                <li>Xarope de frutose a 84,3%.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Outros tipos</h3>
              <ul class="key-points">
                <li><strong>Xarope de sucos</strong> — suco de fruta como base.</li>
                <li>
                  <strong>Xarope extemporâneo</strong> — reconstituído no momento da dispensação
                  (antibióticos em pó).
                </li>
                <li><strong>Produtos comerciais</strong> — especialidades farmacêuticas.</li>
              </ul>
            </section>
          </div>

          <section class="worked-example">
            <h3>Acondicionamento</h3>
            <p>
              Vidros lavados e esterilizados. O xarope deve ser colocado nesses frascos
              <strong>imediatamente após a produção</strong>. Os frascos devem ser tampados, lacrados
              quando possível, e rotulados. O vapor que se forma nos vidros deve ser misturado ao
              xarope.
            </p>
            <ul class="key-points">
              <li>Envase a quente reduz a carga microbiana inicial.</li>
              <li>Lacre e rótulo com lote, validade e condições de conservação.</li>
              <li>Frasco âmbar quando há fármacos fotossensíveis.</li>
            </ul>
          </section>
        </article>

        <article id="elixires" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Outras formas açucaradas</p>
              <h2>Melitos, elixires e linctus</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Forma</th>
                  <th scope="col">Definição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Melitos</th>
                  <td>
                    Preparações líquidas contendo grande percentagem de mel dissolvido em veículo
                    aquoso.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Elixires</th>
                  <td>
                    Formas farmacêuticas líquidas de uso oral que contêm <strong>álcool e
                    açúcar</strong>. A FB V define como preparação líquida, límpida, hidroalcóolica, de
                    sabor adocicado e agradável, com teor alcoólico de 20 a 50%.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Linctus</th>
                  <td>
                    Líquidos viscosos para administração oral de medicamentos no tratamento de tosses.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Elixir — vantagem</h3>
              <p>
                Permite a dissolução tanto de ativos hidrossolúveis quanto dos solúveis em álcool.
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Elixir — desvantagem</h3>
              <p>Não são indicados para crianças nem para adultos que devem evitar o uso de álcool.</p>
            </section>
          </div>

          <section class="worked-example">
            <h3>Preparação do elixir</h3>
            <ol class="steps">
              <li>Pesar separadamente os ativos solúveis em água e em álcool.</li>
              <li>Adicionar a fase aquosa sobre a alcoólica e misturar.</li>
              <li>Se a formulação ficar turva, adicionar talco farmacêutico (1 g/100 mL) e filtrar.</li>
              <li>Embalar em frasco de vidro âmbar e rotular.</li>
              <li>Armazenar em temperatura ambiente ou no refrigerador.</li>
            </ol>

            <div class="table-scroll">
              <table class="data-table">
                <caption>Exemplo — elixir de fenobarbital</caption>
                <thead>
                  <tr>
                    <th scope="col">Componente</th>
                    <th scope="col" class="num">Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Fenobarbital</th>
                    <td class="num">0,4 g</td>
                  </tr>
                  <tr>
                    <th scope="row">Óleo de laranja</th>
                    <td class="num">0,025 mL</td>
                  </tr>
                  <tr>
                    <th scope="row">Propilenoglicol</th>
                    <td class="num">10,0 mL</td>
                  </tr>
                  <tr>
                    <th scope="row">Álcool</th>
                    <td class="num">20,0 mL</td>
                  </tr>
                  <tr>
                    <th scope="row">Sorbitol 70%</th>
                    <td class="num">60,0 mL</td>
                  </tr>
                  <tr>
                    <th scope="row">Corante</th>
                    <td class="num">q.s.</td>
                  </tr>
                  <tr>
                    <th scope="row">Água destilada</th>
                    <td class="num">qsp 100,0 mL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="card-note">
              A ordem importa: o fenobarbital é pouco solúvel em água, mas solúvel em propilenoglicol e
              álcool — dissolve-se na fase alcoólica antes de receber a fase aquosa.
            </p>
          </section>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Xarope = solução aquosa límpida com alta concentração de açúcar (2/3 açúcar : 1/3 água).</li>
            <li>Xarope simples FB: açúcar cristal 850 g + água qsp 1.000 mL.</li>
            <li>Sacarose deve ser isenta de anidrido sulfuroso e de ultramarina.</li>
            <li>Clarificação: filtração, talco, pasta de papel, carvão, carbonato de magnésio, albumina.</li>
            <li>Densidade 1,30–1,33; viscosidade 190 cP; polarimetria +8°26′ a +8°50′.</li>
            <li>Açúcar invertido = glicose + levulose (hidrólise da sacarose).</li>
            <li>Xarope dietético: sacarina/ciclamato + espessante (CMC, goma, metilcelulose) + conservante.</li>
            <li>Elixir contém álcool e açúcar — 20 a 50% de álcool; não é para crianças.</li>
            <li>Linctus é líquido viscoso para tosse.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Xaropes, melitos e elixires” (Prof. Antonio Luengo Garcia,
            UNIFAL-MG, 2026).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/extrativas">
            <span>Anterior</span>
            ← Soluções extrativas
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/alcooleos">
            <span>Próximo</span>
            Alcóoleos e gliceróleos →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
