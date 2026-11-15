<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/farmacotec1">Farmacotécnica I</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Corretivos</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE I</p>
        <h1 class="intro__title">Corretivos de cor, aroma e paladar</h1>
        <p class="intro__lead">
          A aceitação de um medicamento passa pelos sentidos. Corrigir cor, odor e sabor é decisão
          farmacotécnica: exige conhecer corantes permitidos, concentrações limite, poder adoçante e
          as cinco metodologias de correção de sabor.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>9 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#cor">Corantes</a>
        <a href="#tabela">Tabela FB</a>
        <a href="#propriedades">Propriedades</a>
        <a href="#aspectos">Aspectos críticos</a>
        <a href="#limites">Limites e estoques</a>
        <a href="#arom">Aroma e paladar</a>
        <a href="#edulcorantes">Edulcorantes</a>
        <a href="#metodos">Métodos</a>
      </nav>

      <div class="lesson">
        <article id="cor" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">Parte I — cor</p>
              <h2>Corantes: definição e classificação</h2>
            </div>
          </header>
          <p>
            Substância corante é qualquer composto orgânico ou inorgânico, natural ou sintético que,
            independentemente de possuir ou não atividade farmacológica, é adicionado às formas
            farmacêuticas com a finalidade única de corá-las ou de alterar sua cor original.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Dois tipos</h3>
              <ul class="key-points">
                <li><strong>Pigmentos</strong> — insolúveis, cobrem a superfície.</li>
                <li><strong>Corantes</strong> — solúveis, tingem o meio.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Sete grupos químicos</h3>
              <ul class="key-points">
                <li>Indigoide</li>
                <li>Xantina</li>
                <li>Azo</li>
                <li>Nitro</li>
                <li>Trifenilmetano</li>
                <li>Quinolona</li>
                <li>Antraquinona</li>
              </ul>
              <p><small>Podem ainda ser subdivididos em azóicos e não azóicos.</small></p>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Classificação do FDA</caption>
              <thead>
                <tr>
                  <th scope="col">Designação</th>
                  <th scope="col">Campo de aplicação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">FD&amp;C</th>
                  <td>Alimentos, medicamentos e cosméticos</td>
                </tr>
                <tr>
                  <th scope="row">D&amp;C</th>
                  <td>Medicamentos e cosméticos</td>
                </tr>
                <tr>
                  <th scope="row">D&amp;C de uso externo</th>
                  <td>Medicamentos e cosméticos de uso externo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Muitas vezes a boa aceitação de um medicamento está relacionada à sua cor, e soluções
            incolores são frequentemente mal aceitas. A escolha, porém, é submetida a critérios muito
            severos: numerosos corantes sintéticos são perigosos ao organismo humano.
          </p>
        </article>

        <article id="tabela" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Farmacopeia Brasileira</p>
              <h2>Corantes mais utilizados</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Color index e campo de aplicação</caption>
              <thead>
                <tr>
                  <th scope="col">Cor</th>
                  <th scope="col" class="num">Color index</th>
                  <th scope="col">Campo de aplicação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Amarelo crepúsculo</th>
                  <td class="num">15985</td>
                  <td>Alimentos / cosméticos / medicamentos</td>
                </tr>
                <tr>
                  <th scope="row">Amarelo tartrazina</th>
                  <td class="num">19140</td>
                  <td>Alimentos / cosméticos / medicamentos</td>
                </tr>
                <tr>
                  <th scope="row">Azul brilhante</th>
                  <td class="num">42090</td>
                  <td>Alimentos / cosméticos / medicamentos</td>
                </tr>
                <tr>
                  <th scope="row">Azul índigo</th>
                  <td class="num">73015</td>
                  <td>Alimentos / cosméticos / medicamentos</td>
                </tr>
                <tr>
                  <th scope="row">Branco</th>
                  <td class="num">77891</td>
                  <td>Medicamento</td>
                </tr>
                <tr>
                  <th scope="row">Laranja</th>
                  <td class="num">40800</td>
                  <td>Medicamento</td>
                </tr>
                <tr>
                  <th scope="row">Marrom</th>
                  <td class="num">—</td>
                  <td>Medicamento interno e externo</td>
                </tr>
                <tr>
                  <th scope="row">Preto</th>
                  <td class="num">77499</td>
                  <td>Medicamento interno e externo</td>
                </tr>
                <tr>
                  <th scope="row">Verde clorofila</th>
                  <td class="num">75810</td>
                  <td>Medicamento</td>
                </tr>
                <tr>
                  <th scope="row">Verde brilhante</th>
                  <td class="num">61570</td>
                  <td>Cosmético / medicamento de uso externo</td>
                </tr>
                <tr>
                  <th scope="row">Verde solúvel</th>
                  <td class="num">61565</td>
                  <td>Cosmético / medicamento de uso externo</td>
                </tr>
                <tr>
                  <th scope="row">Vermelho ponceau SX</th>
                  <td class="num">14700</td>
                  <td>Alimentos / cosméticos / medicamento de uso externo</td>
                </tr>
                <tr>
                  <th scope="row">Vermelho eritrosina</th>
                  <td class="num">45430</td>
                  <td>Alimentos / cosméticos</td>
                </tr>
                <tr>
                  <th scope="row">Vermelho eosina</th>
                  <td class="num">45380</td>
                  <td>Cosmético / medicamento</td>
                </tr>
                <tr>
                  <th scope="row">Vermelho ponceau 4R</th>
                  <td class="num">16255</td>
                  <td>Uso geral</td>
                </tr>
                <tr>
                  <th scope="row">Violeta</th>
                  <td class="num">60725</td>
                  <td>Medicamento de uso externo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>Corantes para uso interno</h3>
            <ul class="key-points">
              <li><strong>Amarelo</strong> — cúrcuma, vitamina B2, tartrazina (CI 19140).</li>
              <li><strong>Vermelho</strong> — carmim (CI 75470), eritrosina (CI 45430).</li>
              <li><strong>Verde</strong> — clorofila (verde natural n. 3), verde brilhante.</li>
              <li><strong>Alaranjado</strong> — betacaroteno (alaranjado alimentar n. 5).</li>
              <li><strong>Azul</strong> — indigotina (azul alimentar n. 1, CI 73015).</li>
            </ul>
          </section>
        </article>

        <article id="propriedades" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Requisitos técnicos</p>
              <h2>Propriedades e justificativas de uso</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Propriedades desejadas</h3>
              <ul class="key-points">
                <li>Inocuidade, sem qualquer atividade fisiológica.</li>
                <li>Composição química definida.</li>
                <li>Hidrossolubilidade.</li>
                <li>Grande capacidade de coloração em concentrações mínimas.</li>
                <li>Sem odor e sem gosto desagradável.</li>
                <li>Estáveis ao calor, à luz, a variações de pH, a oxidantes e redutores.</li>
                <li>Compatíveis com todos os componentes do produto.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Justificativas</h3>
              <ul class="key-points">
                <li>Razão estética.</li>
                <li>Facilidade de administração.</li>
                <li>Identificação e diferenciação.</li>
                <li>Advertência e padronização.</li>
                <li>Indicadores de dissolução.</li>
                <li>Estudos de propriedades de interface.</li>
                <li>Determinação do tipo de emulsão.</li>
              </ul>
            </section>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Vantagens</h3>
              <ul class="key-points">
                <li>Melhoram o aspecto e a aceitação.</li>
                <li>Indicam formas farmacêuticas com substâncias tóxicas.</li>
                <li>Diferenciam medicamentos fisicamente semelhantes.</li>
                <li>Padronizam formas nos processos de fabricação e acondicionamento.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Desvantagens</h3>
              <ul class="key-points">
                <li>
                  Podem introduzir no consumo medicamentos perigosos, sobretudo para crianças, se a cor
                  e os demais caracteres organolépticos forem atraentes.
                </li>
                <li>Podem prejudicar a identificação e o doseamento dos princípios ativos.</li>
                <li>A cor pode mascarar alterações detectadas pela mudança do aspecto externo.</li>
              </ul>
            </section>
          </div>
        </article>

        <article id="aspectos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Problemas práticos</p>
              <h2>Aspectos no uso de corantes</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Bicronismo — vermelho sólido</caption>
              <thead>
                <tr>
                  <th scope="col" class="num">Concentração (mg/L)</th>
                  <th scope="col">Cor produzida</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">50</td>
                  <td>Vermelho magenta</td>
                </tr>
                <tr>
                  <td class="num">125</td>
                  <td>Vermelho escarlate</td>
                </tr>
                <tr>
                  <td class="num">300</td>
                  <td>Alaranjado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>Descoramento — fatores e exemplos</h3>
            <p>Fatores: luz, calor, pH, oxidantes e redutores, compostos tensoativos e amônios quaternários.</p>
            <ul class="key-points">
              <li><strong>Indigotina</strong> — sofre ação de dextrose, lactose e sacarose.</li>
              <li><strong>Amarelo tartrazina</strong> — sofre ação de redutores e de alguns tensoativos não iônicos.</li>
              <li><strong>Eritrosina</strong> — sofre influência de pH ácido.</li>
              <li><strong>Azul brilhante</strong> — descora com substâncias redutoras.</li>
            </ul>
          </section>

          <p class="card-note">
            A <strong>seleção legal</strong> é o primeiro filtro: só se usa o que a legislação do país e a
            Farmacopeia Brasileira permitem. Depois vêm compatibilidade, estabilidade e concentração
            limite.
          </p>
        </article>

        <article id="limites" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Dose de cor</p>
              <h2>Soluções estoque, concentrações limite e lacas</h2>
            </div>
          </header>

          <p>
            <strong>Soluções estoque</strong> (soluções padrão ou soluções-mãe) são soluções aquosas,
            geralmente a 1% p/V, que aumentam a facilidade de manuseio do corante.
          </p>

          <section class="worked-example">
            <h3>Solução base para diluição de corantes</h3>
            <div class="table-scroll">
              <table class="data-table">
                <thead>
                  <tr>
                    <th scope="col">Componente</th>
                    <th scope="col" class="num">Proporção</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Corante</th>
                    <td class="num">0,1 – 1%</td>
                  </tr>
                  <tr>
                    <th scope="row">Propilenoglicol</th>
                    <td class="num">3%</td>
                  </tr>
                  <tr>
                    <th scope="row">Nipagin</th>
                    <td class="num">0,15%</td>
                  </tr>
                  <tr>
                    <th scope="row">Nipazol</th>
                    <td class="num">0,05%</td>
                  </tr>
                  <tr>
                    <th scope="row">Álcool</th>
                    <td class="num">10%</td>
                  </tr>
                  <tr>
                    <th scope="row">Água desmineralizada</th>
                    <td class="num">qsp 100 mL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Concentrações limite segundo Casadio e Prista</caption>
              <thead>
                <tr>
                  <th scope="col">Forma farmacêutica</th>
                  <th scope="col" class="num">Casadio (%)</th>
                  <th scope="col" class="num">Prista (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Emulsões pastosas</th>
                  <td class="num">0,005</td>
                  <td class="num">0,0005 – 0,001</td>
                </tr>
                <tr>
                  <th scope="row">Emulsões líquidas</th>
                  <td class="num">0,001 – 0,005</td>
                  <td class="num">0,001 – 0,005</td>
                </tr>
                <tr>
                  <th scope="row">Líquidos transparentes / soluções</th>
                  <td class="num">0,005 – 0,001</td>
                  <td class="num">0,005</td>
                </tr>
                <tr>
                  <th scope="row">Xaropes para drágeas</th>
                  <td class="num">0,05 – 0,1</td>
                  <td class="num">—</td>
                </tr>
                <tr>
                  <th scope="row">Pós brancos</th>
                  <td class="num">0,1</td>
                  <td class="num">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Concentrações coloridas:</strong> usam-se corantes básicos vermelho, amarelo e azul,
            combinados para obter cores que não existem no comércio. <strong>Lacas</strong> são, na
            realidade, pigmentos usados em drágeas — por exemplo, o vermelho laca alumínio combina
            corante + alumínio.
          </p>
        </article>

        <article id="arom" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Parte II — aroma e paladar</p>
              <h2>Aromatizantes, saporificantes e flavorizantes</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Termo</th>
                  <th scope="col">Definição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Aromatizantes</th>
                  <td>Substâncias usadas para suprir a sensação olfativa.</td>
                </tr>
                <tr>
                  <th scope="row">Saporificantes</th>
                  <td>Substâncias empregadas para dar sabor agradável ou corrigir algo desagradável.</td>
                </tr>
                <tr>
                  <th scope="row">Flavorizantes</th>
                  <td>Substâncias que originam uma percepção conjunta de odor e sabor.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul class="key-points">
            <li>O gosto agradável sempre influi no cumprimento da prescrição.</li>
            <li>
              As preparações devem ser apresentadas da forma mais agradável possível, sem exigir
              mistura com outros produtos.
            </li>
            <li>
              Alguns estudiosos defendem que <strong>nunca</strong> se corrija totalmente o gosto de
              medicamentos muito tóxicos.
            </li>
            <li>
              Nunca se deve usar, na aromatização, um aroma que lembre uma substância alimentar.
            </li>
          </ul>
        </article>

        <article id="edulcorantes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Poder adoçante</p>
              <h2>Edulcorantes naturais, semi-sintéticos e sintéticos</h2>
            </div>
          </header>
          <p>
            O poder adoçante é determinado por análise sensorial: toma-se uma solução de sacarose a 10%
            como padrão de valor relativo <strong>1</strong> e comparam-se os demais adoçantes a ela.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Poder adoçante relativo à sacarose = 1,0</caption>
              <thead>
                <tr>
                  <th scope="col">Adoçante</th>
                  <th scope="col" class="num">Poder adoçante</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Glicose</th>
                  <td class="num">0,7</td>
                </tr>
                <tr>
                  <th scope="row">Sacarose</th>
                  <td class="num">1,0</td>
                </tr>
                <tr>
                  <th scope="row">Xilitol</th>
                  <td class="num">1,2</td>
                </tr>
                <tr>
                  <th scope="row">Frutose</th>
                  <td class="num">1,7</td>
                </tr>
                <tr>
                  <th scope="row">Glicirrizinato de amônio</th>
                  <td class="num">120</td>
                </tr>
                <tr>
                  <th scope="row">Esteviosídeo</th>
                  <td class="num">300</td>
                </tr>
                <tr>
                  <th scope="row">Naringina DHC</th>
                  <td class="num">400</td>
                </tr>
                <tr>
                  <th scope="row">Neoesperidina DHC</th>
                  <td class="num">1.800</td>
                </tr>
                <tr>
                  <th scope="row">Perilartina</th>
                  <td class="num">2.000</td>
                </tr>
                <tr>
                  <th scope="row">Osladina</th>
                  <td class="num">3.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Naturais</h3>
              <ul class="key-points">
                <li>
                  <strong>Sacarose</strong> — de cana e beterraba; fácil produção, baixo custo, alta
                  pureza; em solução ácida diluída ou altas temperaturas origina glicose e frutose.
                </li>
                <li>
                  <strong>Frutose</strong> — usada por diabéticos por metabolização diferente da glicose.
                </li>
                <li>
                  <strong>Esteviosídeo</strong> — glicosídeo das folhas de <em>Stevia rebaudiana</em>
                  (yerba dulce do Paraguai), cerca de 300× mais doce que a sacarose.
                </li>
                <li>
                  <strong>Glicirrizina</strong> — das raízes e rizomas de <em>Glycyrrhiza glabra</em>
                  (alcaçuz); mascara o amargo de sulfas e antibióticos orais.
                </li>
                <li>
                  <strong>Periandrinas</strong> — glicosídeos triterpenoides de <em>Periandra dulcis</em>
                  (alcaçuz do Brasil).
                </li>
                <li>
                  <strong>Osladina</strong> — rizomas de <em>Polypodium vulgare</em> (polipódio), 3.000×
                  a sacarose.
                </li>
                <li>
                  <strong>Poliálcoois</strong> — manitol, sorbitol, glicerina e xilitol; o xilitol vem do
                  sabugo de milho, bagaço de cana e cascas de arroz (extração pouco econômica).
                </li>
                <li>
                  <strong>Xaropes</strong> — os edulcorantes mais usados: xarope de ácido cítrico, de
                  cacau, de cerejas, de framboesa.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Semi-sintéticos e sintéticos</h3>
              <ul class="key-points">
                <li>
                  <strong>Perilartina</strong> — oxima do aldeído presente no óleo essencial de
                  <em>Perilla frutescens</em>.
                </li>
                <li>
                  <strong>Di-hidrochalconas</strong> — derivados de flavonoides; os precursores eram
                  amargos, daí a modificação estrutural. Destaques: naringina DHC e neoesperidina DHC.
                </li>
                <li>
                  <strong>Sintéticos</strong> — sacarina, ciclamato de sódio, sucralose, aspartame e
                  acessulfame K.
                </li>
              </ul>
            </section>
          </div>

          <section class="worked-example">
            <h3>Aromatizantes e criadores de sabor</h3>
            <ul class="key-points">
              <li>Sucos de frutas e seus concentrados</li>
              <li>Águas destiladas aromáticas ou hidrolatos</li>
              <li>Alcoolatos</li>
              <li>Tinturas e alcoolaturas</li>
              <li>Extratos</li>
              <li>Elixires</li>
              <li>Produtos químicos de composição definida</li>
              <li>Essências</li>
            </ul>
          </section>
        </article>

        <article id="metodos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Como corrigir</p>
              <h2>Metodologia para correção de sabor</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Método</th>
                  <th scope="col">Como se aplica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mistura</th>
                  <td>
                    Sabores de fruta harmonizam o sabor ácido. Sabores amargos podem mesclar com
                    salgados, doces e ácidos; o sal reduz a acidez e aumenta a doçura.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Mascaramento</th>
                  <td>
                    Adição de um sabor de maior intensidade e duração que o sabor a ser corrigido.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Químico</th>
                  <td>Resinas iônicas — modificação da estrutura química do fármaco.</td>
                </tr>
                <tr>
                  <th scope="row">Físico</th>
                  <td>
                    Formação de compostos insolúveis; emulsificação de azeites (óleo de fígado de
                    bacalhau); efervescência (diminui o gosto desagradável); líquidos muito viscosos
                    para limitar o contato com a língua; revestimento de formas sólidas.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Fisiológico</th>
                  <td>Anestesiar as papilas com sabores de mentol ou menta.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example worked-example--soft">
            <h3>Outros métodos</h3>
            <ul class="key-points">
              <li>
                <strong>Modificar o modo de administração</strong> — diluir em água ou suco de frutas, em
                água gasosa, recorrer ao frio e ao calor.
              </li>
              <li>
                <strong>Modificar a fórmula</strong> — usar aureomicina base em vez dos sais; palmitato
                de cloranfenicol em vez de cloranfenicol.
              </li>
            </ul>
          </section>

          <p class="card-note">
            Corretivo indicado depende do desvio: para amargo → edulcorante de alta potência + aroma;
            para ácido → sabor de fruta; para salgado → doce ou ácido; para açucarado em excesso →
            acidulante. Medicamentos inodoros e insípidos geralmente não precisam de correção.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Corante: finalidade única de corar, com ou sem atividade farmacológica.</li>
            <li>Pigmento é insolúvel; corante é solúvel. Lacas são pigmentos de drágeas.</li>
            <li>Classes FDA: FD&amp;C, D&amp;C e D&amp;C de uso externo.</li>
            <li>Bicronismo: a mesma substância muda de cor com a concentração.</li>
            <li>Eritrosina descora em pH ácido; indigotina sofre ação de açúcares.</li>
            <li>Soluções-mãe de corante: 1% p/V em base com propilenoglicol e parabenos.</li>
            <li>Sacarose = 1,0; esteviosídeo = 300; osladina = 3.000.</li>
            <li>Cinco métodos: mistura, mascaramento, químico, físico e fisiológico.</li>
            <li>Nunca aromatizar com aroma que lembre alimento.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Corretivos de cor, aroma e paladar” (Prof. Antonio Luengo
            Garcia, UNIFAL-MG, 2026).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/adjuvantes">
            <span>Anterior</span>
            ← Adjuvantes
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/calculos">
            <span>Próximo</span>
            Cálculos farmacêuticos →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
