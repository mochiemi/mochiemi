<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>UNIFAL-MG</span>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Operações Unitárias</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · OPERAÇÕES UNITÁRIAS</p>
        <h1 class="intro__title">Operações Unitárias</h1>
        <p class="intro__lead">
          Resumo geral da disciplina: o que distingue operação unitária de processo unitário, como
          as operações se classificam, quais propriedades de fluidos e de sólidos participam do
          projeto de equipamentos e como funcionam as grandes famílias de operações — fragmentação,
          mistura, separações mecânicas, transferência de massa, destilação, extração e filtração.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Guia de estudo</span>
          <span class="intro__chip">12 tópicos essenciais</span>
          <span class="intro__chip">Profa. Dra. Joelise Angelotti</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#conceito">Conceito</a>
        <a href="#classificacao">Classificação</a>
        <a href="#modelagem">Modelagem</a>
        <a href="#fluidos">Fluidos</a>
        <a href="#solidos">Sólidos</a>
        <a href="#moagem">Cominuição</a>
        <a href="#mistura">Mistura</a>
        <a href="#sedimentacao">Sedimentação</a>
        <a href="#transferencia">Transf. de massa</a>
        <a href="#destilacao">Destilação</a>
        <a href="#extracao">Extração</a>
        <a href="#filtracao">Filtração</a>
      </nav>

      <div class="lesson">
        <article id="conceito" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">A ideia central</p>
              <h2>O que é uma operação unitária</h2>
            </div>
          </header>
          <p>
            Um processo industrial é um conjunto de etapas que modificam a composição química ou
            certas propriedades físicas do material que está sendo preparado, processado, separado
            ou purificado. Quando a etapa promove apenas <strong>transformação física</strong>, ela
            é uma <strong>operação unitária</strong>; quando promove
            <strong>reação química</strong>, é um <strong>processo unitário</strong> (ou conversão
            química).
          </p>

          <div
            class="formula"
            aria-label="Definição de operações unitárias de D. Little, 1915: uma sequência amplamente variável de etapas pode ser reduzida a operações unitárias, independentes do material processado"
          >
            <span>
              «Uma sequência amplamente variável de etapas pode ser reduzida a operações unitárias.
              Estas são independentes do material que está sendo processado, ficando a diferença por
              conta da diversidade de condições — temperatura, pressão — e das limitações dos
              materiais de construção e do projeto de equipamentos.»
            </span>
          </div>
          <p class="card-note">
            Definição de <strong>D. Little (1915)</strong>. É exatamente essa independência do
            material que permite estudar a destilação de álcool, o refino de petróleo e a extração
            de um princípio ativo com o <em>mesmo</em> equacionamento: mudam apenas detalhes
            construtivos e as propriedades particulares das substâncias presentes.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Operação unitária</h3>
              <ul class="comparison-list">
                <li>Transformação de ordem <strong>física</strong>.</li>
                <li>Não altera a natureza química do material.</li>
                <li>
                  Exemplos: destilação, secagem, cominuição, filtração, extração líquido-líquido,
                  sedimentação, absorção, fluidização, mistura, peneiramento.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Processo unitário</h3>
              <ul class="comparison-list">
                <li>Conversão <strong>química</strong>.</li>
                <li>Altera a natureza química do material.</li>
                <li>
                  Exemplos: fermentação, oxidação, hidrogenação, hidrólise, calcinação,
                  neutralização, esterificação, polimerização.
                </li>
              </ul>
            </section>
          </div>

          <p>
            Por isso o fluxograma de qualquer planta — a produção de ácido salicílico, o tratamento
            de água, a produção de etanol e açúcar, a fabricação de cremes e pomadas ou de
            comprimidos — se lê como uma alternância entre operações unitárias e conversões
            químicas. Na farmácia, essa leitura é o que sustenta a escolha de equipamento, a escala
            e o controle do processo.
          </p>
          <p class="card-note">
            <strong>Separar é o verbo.</strong> A maior parte das operações unitárias existe para
            separar componentes: destilação, extração, peneiramento, filtração, sedimentação,
            centrifugação e adsorção são todas operações de separação.
          </p>
        </article>

        <article id="classificacao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Mapa da disciplina</p>
              <h2>Como as operações unitárias se classificam</h2>
            </div>
          </header>
          <p>
            A classificação <strong>não é fixa</strong>: varia de autor para autor, porque pode se
            basear no modelo físico simples que reproduz a ação, na expressão matemática que a
            descreve ou no equipamento utilizado. A divisão mais usada em sala é pelo
            <strong>modelo físico envolvido</strong>:
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Classificação pelo modelo físico — com exemplos do material da disciplina.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Grupo</th>
                  <th scope="col">O que caracteriza</th>
                  <th scope="col">Exemplos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mecânicas — sem umidade</th>
                  <td>Sólidos, praticamente a seco.</td>
                  <td>
                    Cominuição (britagem e moagem), peneiramento (tamisação), transporte de sólidos,
                    mistura de sólidos, armazenamento.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Mecânicas — com umidade</th>
                  <td>Sólidos em suspensão e fluidos.</td>
                  <td>
                    Bombeamento, mistura e agitação de fluidos, fluidização, ciclonagem,
                    sedimentação, filtração, centrifugação.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Transferência de calor</th>
                  <td>Troca térmica: condução, convecção, radiação.</td>
                  <td>Aquecimento, resfriamento, trocadores de calor, evaporadores.</td>
                </tr>
                <tr>
                  <th scope="row">Transferência de massa</th>
                  <td>Separação de fluidos miscíveis por diferença de propriedades.</td>
                  <td>Destilação, absorção, adsorção, extração.</td>
                </tr>
                <tr>
                  <th scope="row">Calor e massa simultâneos</th>
                  <td>Mudança de fase acoplada à difusão.</td>
                  <td>Secagem, umidificação, evaporação, cristalização.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Transporte e armazenamento de fluidos</h3>
          <p>
            Dentro das operações mecânicas com umidade está o conjunto que literalmente move o
            processo: <strong>bombas</strong> (centrífugas, de rotor; de deslocamento positivo, de
            pistão), <strong>válvulas</strong> de controle e bloqueio, <strong>tubulações</strong>,
            <strong>medidores de vazão</strong> e <strong>vasos pressurizados</strong>.
          </p>
          <p class="card-note">
            Um mesmo processo pode ser lido por mais de uma classificação: a secagem é, ao mesmo
            tempo, operação de transferência de massa e de calor — é justamente por isso que ela
            aparece no grupo das operações simultâneas.
          </p>
        </article>

        <article id="modelagem" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">A ferramenta de trabalho</p>
              <h2>Como se estuda uma operação unitária</h2>
            </div>
          </header>
          <p>
            Todo processo tem em comum etapas de tratamento fundamentadas em princípios científicos
            comuns a outros processos. Para estudá-las são necessários: <strong>física</strong>,
            <strong>físico-química</strong>, <strong>fenômenos de transporte</strong>, formulação
            matemática (modelagem), métodos numéricos e computacionais e informática.
          </p>

          <h3>O modelo matemático em três etapas</h3>
          <ol class="steps">
            <li><strong>Projeção</strong> do problema em termos matemáticos.</li>
            <li><strong>Solução</strong> do problema matemático.</li>
            <li><strong>Tradução</strong> do resultado em termos de significância física.</li>
          </ol>

          <div class="worked-example">
            <h3>Exemplo de modelagem: coar café em um filtro de papel</h3>
            <p>
              Quais variáveis influenciam o processo? A porosidade inicial do papel, a porosidade da
              borra, a altura inicial da suspensão, a velocidade de crescimento da espessura da
              torta, a velocidade de diminuição do nível da suspensão e as propriedades dos
              materiais envolvidos (densidade, viscosidade…).
            </p>
            <p>
              Organizadas em um modelo, essas variáveis produzem uma equação de escoamento através
              de meio poroso — a mesma forma que descreve a queda de pressão em uma torta de
              filtração:
            </p>
            <p class="equation">
              dP/dL = k₃ · μ · U · (1 − ε)² · S<sub>p</sub>² / (ε³ · V<sub>p</sub>²)
            </p>
            <p class="factor__example">
              P = pressão; L = espessura da torta; k₃ = parâmetro empírico; μ = viscosidade do
              filtrado; U = velocidade linear do filtrado; ε = porosidade da torta; S<sub>p</sub> =
              superfície de uma partícula; V<sub>p</sub> = volume de uma partícula
              (S<sub>p</sub>/V<sub>p</sub>
              é a superfície específica).
            </p>
          </div>
          <p class="card-note">
            Repare no que a equação diz: a perda de carga cresce com a viscosidade e com a
            velocidade, cresce com o quadrado da superfície específica (partículas finas resistem
            muito mais) e cai com o cubo da porosidade — pequenas mudanças na porosidade mudam tudo.
          </p>
        </article>

        <article id="fluidos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Operações mecânicas com fluidos</p>
              <h2>Fluidos: pressão e viscosidade</h2>
            </div>
          </header>
          <p>
            <strong>Fluido</strong> é a substância que, submetida a uma tensão de cisalhamento, em
            vez de se deformar como um sólido, <strong>escoa</strong>: líquidos, gases e partículas
            fluidizadas. Para o transporte e a separação de fluidos, as duas características que
            mais pesam no dimensionamento de equipamentos são <strong>viscosidade</strong> e
            <strong>pressão</strong>.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Pressão hidrostática</h3>
              <p class="equation">P = P<sub>atm</sub> + ρgh</p>
              <p class="equation">P<sub>man</sub> = P<sub>int</sub> − P<sub>atm</sub></p>
              <p>
                Sendo ρ a densidade absoluta e g a aceleração da gravidade local. Referências: 1 atm
                = 760 mmHg = 1,013 × 10⁵ Pa.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Densidade e calor específico</h3>
              <p class="equation">ρ = m / V</p>
              <p>
                A densidade relativa compara o fluido com a água (ρ<sub>água</sub> = 1,0 × 10³
                kg/m³). Para a água, c<sub>p</sub> = 1 cal/(g·K) = 4,18 J/(g·°C).
              </p>
            </section>
          </div>

          <h3>Lei de Newton da viscosidade</h3>
          <p>
            A viscosidade é a relação entre a tensão de cisalhamento aplicada e a taxa de deformação
            do fluido:
          </p>
          <p class="equation">τ = μ · (dv/dy)</p>
          <ul class="key-points">
            <li>
              τ em N/m² (SI) ou dina/cm² (CGS); μ em N·s/m² (SI) ou dina·s/cm² =
              <strong>poise</strong> (CGS), com 1 centipoise = 0,01 poise.
            </li>
            <li>
              Quanto maior o coeficiente de viscosidade, mais “grosso” o fluido: mais difícil de
              escoar e de bombear.
            </li>
            <li>
              Nos gases a viscosidade <strong>aumenta</strong> com a temperatura; nos líquidos ela
              <strong>diminui</strong> com o aquecimento.
            </li>
          </ul>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Newtonianos</h3>
              <p>
                Escoam obedecendo à Lei de Newton, com viscosidade
                <strong>constante</strong> a uma dada temperatura: água, leite, soluções de
                sacarose, óleos vegetais.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Não newtonianos</h3>
              <p>
                A viscosidade aparente varia com a taxa de deformação ou com o tempo:
                pseudoplásticos (μ<sub>ap</sub> diminui quando a taxa de deformação aumenta),
                dilatantes, plásticos e <strong>tixotrópicos</strong> — nestes a viscosidade aumenta
                com o tempo de aplicação da tensão e depois retorna à inicial.
              </p>
            </section>
          </div>
          <p class="card-note">
            Consequência prática: uma suspensão, emulsão ou pomada que não é newtoniana não pode ser
            dimensionada com um único valor de μ — o valor muda com a condição de escoamento no
            equipamento.
          </p>
        </article>

        <article id="solidos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Base das operações com sólidos</p>
              <h2>Sólidos particulados e granulometria</h2>
            </div>
          </header>
          <p>
            Sólido particulado é o material composto de uma mistura de sólidos de tamanho reduzido.
            O tamanho pequeno pode ser natural ou resultado de fragmentação prévia. Conhecer essas
            propriedades é pré-requisito para redução de tamanho, fluidização, transporte
            pneumático, centrifugação, decantação, sedimentação e filtração.
          </p>

          <h3>Cinco tipos de sólidos particulados</h3>
          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Distinção pelo tamanho das partículas.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Tipo</th>
                  <th scope="col" class="num">Faixa de tamanho</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Pós</th>
                  <td class="num">1 μm a 0,5 mm</td>
                </tr>
                <tr>
                  <th scope="row">Sólidos granulares</th>
                  <td class="num">0,5 a 10 mm</td>
                </tr>
                <tr>
                  <th scope="row">Blocos pequenos</th>
                  <td class="num">1 a 5 cm</td>
                </tr>
                <tr>
                  <th scope="row">Blocos médios</th>
                  <td class="num">5 a 15 cm</td>
                </tr>
                <tr>
                  <th scope="row">Blocos grandes</th>
                  <td class="num">&gt; 15 cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Propriedades que importam</h3>
          <ul class="key-points">
            <li>
              <strong>Dependentes da partícula</strong>: tamanho, forma, dureza, densidade, calor
              específico e condutividade.
            </li>
            <li>
              <strong>Dependentes do sistema (leito poroso)</strong>: densidade aparente, área
              específica e porosidade — a propriedade passa a ser do conjunto de partículas, não
              mais do sólido isolado.
            </li>
          </ul>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Forma, esfericidade e d<sub>eq</sub></h3>
              <p>
                A esfericidade (φ) mede o afastamento da forma esférica: φ = superfície da esfera de
                volume igual / superfície externa real da partícula.
              </p>
              <p>
                φ = 1 para a esfera e φ &lt; 1 para qualquer outra forma. Para partículas
                irregulares usa-se o <strong>diâmetro equivalente</strong> — o diâmetro da esfera de
                mesmo volume da partícula.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Densidades e porosidade</h3>
              <p>
                ρ<sub>s</sub> (real) = massa / volume sem os vazios; ρ<sub>esf</sub> (aparente) =
                massa / volume total (sólido + vazios); a densidade do leito é a massa total do
                leito dividida pelo volume total do leito poroso.
              </p>
              <p>
                Porosidade (ε) = volume de vazios / volume total (partícula + poros). Outras
                propriedades: dureza (escala de Mohr, 1 a 10), fragilidade e aspereza.
              </p>
            </section>
          </div>

          <h3>Determinar o tamanho de partícula</h3>
          <p>
            Para sistemas homogêneos: <strong>microscópio</strong>, <strong>peneiramento</strong>,
            <strong>decantação</strong>, <strong>elutriação</strong> (suspensão em escoamento
            ascendente) e <strong>centrifugação</strong> — esta última para partículas muito
            pequenas, que decantam lentamente. Para materiais heterogêneos, o meio mais prático é a
            <strong>tamisação</strong>.
          </p>

          <h3>Tamisção e análise granulométrica</h3>
          <ul class="key-points">
            <li>
              Tamisação separa uma mistura de sólidos granulados em duas ou mais porções mais
              uniformes, por meio de uma superfície perfurada.
            </li>
            <li>
              As aberturas são quadradas e identificadas em <strong>mesh</strong>
              = número de aberturas por polegada linear; nº do tamis = nº de mesh.
            </li>
            <li>
              Série <strong>Tyler</strong> (a mais usada no Brasil): base de 200 mesh, fio de 0,053
              mm, abertura livre de 0,074 mm; depois 150, 100, 65, 48, 35, 28, 20, 14, 10, 8, 6, 4 e
              3 mesh. Ao passar para a peneira imediatamente superior, a área da abertura
              <strong>dobra</strong>.
            </li>
            <li>
              Aplicável a partículas entre 7 cm e 40 μm. A seco quando o material tem no máximo 5%
              de umidade; a úmido acima de 5%.
            </li>
            <li>
              Fração retida: x<sub>i</sub> = m<sub>i</sub>/M. A fração também pode ser nomeada pelo
              par de peneiras (−14+20) ou pelo diâmetro médio aritmético entre as aberturas das
              peneiras i e i−1.
            </li>
            <li>Resultados apresentados como histograma e curvas de frequência e cumulativa.</li>
          </ul>
          <p class="card-note">
            Equipamentos de peneiramento: <strong>grelhas</strong> (barras paralelas),
            <strong>crivos</strong> (chapas perfuradas) e <strong>telas</strong> (fios trançados).
            Quanto ao movimento, podem ser fixas (só gravidade, superfície inclinada — eficiência
            baixa, cerca de 60%) ou móveis.
          </p>
        </article>

        <article id="moagem" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Redução de tamanho</p>
              <h2>Fragmentação de sólidos (cominuição e moagem)</h2>
            </div>
          </header>
          <p>
            Fragmentação, redução de tamanho, moagem ou cominuição é a
            <strong
              >quebra mecânica de sólidos em partículas menores sem mudar o seu estado de
              agregação</strong
            >. Na farmácia, isso não é detalhe: a maioria dos produtos precisa ser moída em algum
            estágio da produção.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Por que fragmentar</h3>
              <ul class="comparison-list">
                <li>Facilitar a extração de um constituinte desejado.</li>
                <li>Atender à especificação de tamanho do produto.</li>
                <li>Aumentar a área superficial do sólido.</li>
                <li>Obter misturas mais homogêneas.</li>
                <li>Reduzir o tempo de secagem e o tempo de extração.</li>
                <li>
                  Aumentar a eficiência terapêutica: partículas menores têm mais área de contato e
                  maior absorção; em aerossóis de inalação, o tamanho define posição e retenção no
                  sistema broncopulmonar.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Mecanismos de quebra</h3>
              <ul class="comparison-list">
                <li><strong>Compressão</strong> — ruptura grosseira de duros.</li>
                <li><strong>Impacto</strong> — martelos e barras em alta velocidade.</li>
                <li>
                  <strong>Cisalhamento/atrito</strong> — materiais macios, não abrasivos e fibrosos.
                </li>
                <li><strong>Corte</strong> — lâminas, materiais fibrosos.</li>
                <li>
                  Tração, flexão e torção também ocorrem, além da tensão em meio circundante (bem
                  menos comum).
                </li>
              </ul>
            </section>
          </div>
          <p class="card-note">
            Industrialmente, três esforços dominam: <strong>compressão</strong>,
            <strong>cisalhamento</strong> e <strong>impacto</strong>. A quebra depende do tamanho e
            formato da partícula, das propriedades do material (elasticidade, dureza), da
            temperatura e do tipo de tensão aplicada.
          </p>

          <h3>Equipamentos</h3>
          <p>
            O critério mais importante de classificação é o tamanho das partículas na alimentação e
            no produto: <strong>britadores</strong> para fragmentação grosseira,
            <strong>moinhos</strong> para granulometria mais fina — sem delimitação precisa entre
            eles.
          </p>
          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Principais moinhos e sua ação predominante.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Equipamento</th>
                  <th scope="col">Ação</th>
                  <th scope="col">Observações de aula</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Martelos</th>
                  <td>Impacto (com corte e atrito)</td>
                  <td>
                    Rotor com martelos periféricos, 500 a 1800 rpm; frágeis, não abrasivos e
                    fibrosos; granulometria controlada pela velocidade, pelo tamanho dos martelos e
                    pelas aberturas de saída.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Rolos</th>
                  <td>Compressão (com atrito)</td>
                  <td>
                    Dois rolos de aço girando em sentidos opostos; lisos ou estriados; pequena razão
                    de redução por passe, o que exige vários pares.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Discos</th>
                  <td>Compressão e atrito</td>
                  <td>
                    Discos horizontais girando em sentidos opostos; a ação centrífuga garante
                    “moagem livre”.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Facas (Wiley)</th>
                  <td>Corte (com impacto)</td>
                  <td>
                    4 navalhas no rotor contra 6 na parede; tamis de 0,5, 1,0 ou 2,0 mm na saída;
                    raízes, folhas, grãos, cascas, fibras.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Bolas</th>
                  <td>Impacto e atrito</td>
                  <td>
                    Tambor rotativo com carga de bolas de 30 a 50% do volume, esferas de 1 a 10 cm
                    (10 a 20 vezes o diâmetro da alimentação); produto homogêneo, mas a operação
                    pode durar horas ou dias.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Energia fluida</th>
                  <td>Impacto entre partículas</td>
                  <td>
                    Micronização com jatos de ar comprimido (até 500 m/s; 7 kgf/cm²; 250 a 400 °C; 2
                    a 2500 kg/h); pós de poucos μm, fluxo contínuo com coleta em ciclone.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Coloidal</th>
                  <td>Cisalhamento</td>
                  <td>
                    Rotor cônico e estator com folga de ordem de mm ou menos, 3000 a 15000 rpm;
                    partículas coloidais (&lt; 1 μm); emulsões e suspensões.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Seleção do equipamento</h3>
          <ul class="key-points">
            <li>
              <strong>Material</strong>: dureza, elasticidade, fibrosidade, tamanho, umidade, ponto
              de fusão, inflamabilidade, termossensibilidade e processamento subsequente.
            </li>
            <li>
              <strong>Operação</strong>: especificação do produto, sanitização e esterilização,
              ajustes em operação, contaminação, capacidade, versatilidade, batelada ou contínuo, a
              seco ou a úmido, velocidade de alimentação, espaço e custo.
            </li>
            <li>
              <strong>Segurança</strong>: toxicidade, risco de explosão, irritabilidade e
              incorporação de dispositivos de segurança.
            </li>
            <li>
              <strong>Auxiliares</strong>: coletor de poeira, controle de temperatura (ar
              refrigerado, N₂ líquido, gelo seco) e atmosfera inerte (N₂, CO₂).
            </li>
            <li>
              <strong>Abrasão e umidade</strong> alteram custo e desempenho: um material muito
              abrasivo pode tornar antieconômico um tipo de moinho.
            </li>
          </ul>
        </article>

        <article id="mistura" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Homogeneizar</p>
              <h2>Agitação e mistura</h2>
            </div>
          </header>
          <p>
            <strong>Agitação</strong> é o movimento induzido de um material, geralmente
            circulatório, dentro de um recipiente — pode ser de <em>uma única fase</em>.
            <strong>Mistura</strong> é o movimento aleatório de
            <em>duas ou mais fases</em> inicialmente separadas: ela reduz a não uniformidade,
            eliminando gradientes de concentração, temperatura e outras propriedades.
          </p>
          <ul class="key-points">
            <li><strong>Homogênea</strong>: gás-gás, líquido-líquido miscível.</li>
            <li><strong>Heterogênea</strong>: sólido-líquido (areia + brita + cimento + água).</li>
            <li>
              Usos: misturar líquidos miscíveis, dispersar líquidos imiscíveis (emulsões), misturar
              pós secos, preparar pastas e suspensões, aerar (dispersar gás em líquido), auxiliar
              transferência de calor e de massa, reduzir aglomerados e acelerar reações.
            </li>
          </ul>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Positiva, negativa e neutra</h3>
              <ul class="comparison-list">
                <li>
                  <strong>Positiva</strong>: componentes miscíveis, misturam espontânea e
                  irreversivelmente; energia só encurta o tempo.
                </li>
                <li>
                  <strong>Negativa</strong>: tendem a segregar rapidamente; exigem energia contínua
                  para manter a dispersão.
                </li>
                <li>
                  <strong>Neutra</strong>: estáticas; não se misturam nem segregam sozinhas —
                  pomadas, pastas e unguentos.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Índice de mistura (M)</h3>
              <p>
                Compara o desvio padrão de amostras da mistura em análise (S<sub>ACT</sub>) com o de
                uma mistura aleatória (S<sub>R</sub>). No início S<sub>ACT</sub> está elevado; a
                mistura prossegue até igualá-lo a S<sub>R</sub>, quando então M = 1.
              </p>
              <p class="equation">M = S<sub>R</sub> / S<sub>ACT</sub></p>
              <p>Amostras devem ser retiradas de diferentes profundidades do tanque.</p>
            </section>
          </div>

          <h3>O que dificulta a mistura</h3>
          <ul class="key-points">
            <li>
              <strong>Fluidos</strong>: viscosidade, massa específica, relação entre as massas
              específicas e miscibilidade.
            </li>
            <li>
              <strong>Sólidos</strong>: granulometria, massa específica, relação entre massas
              específicas, forma, aderência, molhabilidade, coesão, teor de umidade e
              características de escoamento.
            </li>
            <li>
              Mistura de pós secos <strong>nunca</strong> é completamente uniforme, e diferenças de
              propriedade podem causar <strong>segregação</strong> durante a operação; materiais
              semelhantes formam misturas mais uniformes.
            </li>
          </ul>
          <p class="card-note">
            Seleção do misturador: depende do tipo e da qualidade do produto e da velocidade
            necessária para atingir o grau de mistura desejado com o menor consumo de energia. Pós
            secos usam elevação e queda das partículas (eixos helicoidais ou rotação da vasilha);
            pastas usam dois eixos em sentidos opostos, com tensões elevadas e paredes espessas;
            líquidos de baixa viscosidade (μ &lt; 50 cP) admitem agitadores de alto cisalhamento.
          </p>
        </article>

        <article id="sedimentacao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Separações mecânicas</p>
              <h2>Sedimentação, decantação e centrifugação</h2>
            </div>
          </header>
          <p>A primeira pergunta é sempre: <strong>quem se move?</strong></p>
          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>O sólido se move</h3>
              <ul class="comparison-list">
                <li>
                  <strong>Sedimentação</strong> — partículas separadas do fluido pela ação da
                  gravidade, em ambiente sem agitação.
                </li>
                <li><strong>Flotação</strong> — o sólido sobe.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>O líquido se move</h3>
              <ul class="comparison-list">
                <li>
                  <strong>Filtração</strong> — o meio poroso bloqueia as partículas e permite o
                  fluxo do fluido.
                </li>
                <li>
                  <strong>Centrífuga filtrante</strong> — a mesma lógica, com força centrífuga no
                  lugar da gravidade.
                </li>
              </ul>
            </section>
          </div>

          <h3>Decantação livre, influenciada e sedimentação</h3>
          <ul class="key-points">
            <li>
              <strong>Decantação livre</strong>: a queda da partícula não é afetada pela parede nem
              por outras partículas — concentração volumétrica abaixo de 0,2%.
            </li>
            <li><strong>Decantação influenciada</strong>: de 0,2% a 40%.</li>
            <li>
              <strong>Sedimentação</strong>: acima de 40% de sólidos; separa lodo diluído gerando
              fluido claro e lodo concentrado.
            </li>
          </ul>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Tipos de sedimentação</h3>
              <ul class="comparison-list">
                <li>
                  <strong>Discreta</strong> — partículas mantêm dimensão e velocidade constantes
                  (caixa de areia).
                </li>
                <li>
                  <strong>Floculenta</strong> — aglomeram, aumentando tamanho e velocidade
                  (decantadores primários, flocos químicos).
                </li>
                <li>
                  <strong>Zonal / em massa</strong> — formam um manto único, com interface nítida
                  entre líquido e sólido (decantadores secundários).
                </li>
                <li>
                  <strong>Por compressão</strong> — o lodo se compacta e a água é expulsa (fundo de
                  decantadores e adensadores).
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Zonas e ponto crítico</h3>
              <p>
                Ao longo do tempo aparecem a zona clarificada, a zona de concentração uniforme, a
                zona de transição e a de sólidos sedimentados. Quando as duas zonas intermediárias
                desaparecem, ocorre a primeira compressão: é o <strong>ponto crítico</strong>, a
                partir do qual o líquido é expulso para cima e a camada de lodo se reduz.
              </p>
            </section>
          </div>

          <h3>Equipamentos e aplicações</h3>
          <ul class="key-points">
            <li>
              <strong>Espessador</strong> quando o produto é a lama;
              <strong>clarificador</strong> quando o produto é o líquido límpido.
            </li>
            <li>
              Decantadores contínuos com classificação de sólidos grosseiros: decantador de rastelos
              e decantador helicoidal.
            </li>
            <li>
              Tratamento de água: coagulação, floculação, sedimentação, filtração, desinfecção,
              fluoretação e correção de pH.
            </li>
            <li>
              <strong>Centrifugação</strong>: a força gravitacional é substituída pela centrífuga,
              cujo valor pode ser muito maior (F<sub>c</sub> ≫ F<sub>p</sub>); essencial para
              partículas muito pequenas e para separar emulsões.
            </li>
          </ul>
          <p class="card-note">
            A sedimentação é indicada para grandes volumes de líquido e sólido de baixo custo, que
            não justificam filtros ou centrífugas — o exemplo clássico é o tratamento de efluentes.
          </p>
        </article>

        <article id="transferencia" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">09</span>
            <div>
              <p class="card-heading__eyebrow">Operações de separação por difusão</p>
              <h2>Transferência de massa e o conceito de estágio</h2>
            </div>
          </header>
          <p>
            Quando duas fases parcialmente miscíveis, de composições diferentes, entram em contato,
            componentes passam de uma fase para a outra e vice-versa. A transferência cessa no
            <strong>equilíbrio</strong> — e no equilíbrio ainda existem duas fases, fisicamente
            separáveis, com composições diferentes entre si e diferentes das iniciais.
          </p>
          <p>
            A <strong>força motriz</strong> dessas operações é uma diferença de composição entre as
            fases (ou de taxa de transferência de massa dos constituintes). As principais operações:
            <strong>destilação</strong>, <strong>extração líquido-líquido</strong>,
            <strong>extração sólido-líquido (lixiviação)</strong>, <strong>adsorção</strong> e
            <strong>absorção/dessorção de gás</strong>.
          </p>

          <h3>Estágio, estágio ideal e eficiência</h3>
          <ul class="key-points">
            <li>
              <strong>Estágio</strong>: unidade de equipamento onde duas fases diferentes entram em
              contato e depois são separadas mecanicamente.
            </li>
            <li>
              Se o tempo de contato permite o equilíbrio termodinâmico, tem-se um
              <strong>estágio de equilíbrio</strong> (ideal ou teórico).
            </li>
            <li>
              No equipamento real, o <strong>estágio real</strong> não atinge o equilíbrio; a
              <strong>eficiência</strong> é a razão entre a modificação de composição no estágio
              real e a de equilíbrio.
            </li>
            <li>
              Equipamentos <strong>multiestágios</strong> repetem contato e separação e chegam a
              separações quase completas: torres de destilação e colunas de extração.
            </li>
          </ul>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Contato gás-líquido</h3>
              <p>
                A grande diferença de densidade torna a separação das fases relativamente fácil. O
                gás borbulha ascendente no líquido; em coluna vertical o líquido desce por gravidade
                e o gás sobe. Os estágios reais são os <strong>pratos</strong> ou
                <strong>bandejas</strong> (perfurados, valvulados, com opérculos).
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Contato líquido-líquido</h3>
              <p>
                A diferença de densidade entre os dois líquidos é pequena, então a gravidade
                dispersa mal as fases: usam-se
                <strong>bandejas perfuradas</strong> (não valvuladas) e
                <strong>misturador-decantador</strong>. Quando as densidades são iguais, a
                decantação é muito lenta e pode ser necessária uma centrífuga — que também separa
                emulsões.
              </p>
            </section>
          </div>
          <p class="card-note">
            Contato sólido-líquido em multiestágio contínuo é complicado pelo transporte de sólidos
            entre estágios (cestos, contracorrente parcial); por isso o princípio dos sólidos
            fluidizados é tão usado no projeto de contactores sólido-líquido.
          </p>

          <h3>Escolher o processo separativo</h3>
          <p>
            Para separar componentes de uma mistura homogênea usam-se diferenças de propriedades —
            solubilidade, volatilidade. Quanto maior a diferença, mais fácil e mais econômica a
            separação. A decisão considera exigências de energia, custo e disponibilidade dos
            materiais de processo e de construção, impacto ambiental e integração da etapa no
            processo industrial global.
          </p>
        </article>

        <article id="destilacao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">10</span>
            <div>
              <p class="card-heading__eyebrow">Separação por volatilidade</p>
              <h2>Destilação</h2>
            </div>
          </header>
          <p>
            Princípio: <strong>diferença de volatilidade</strong>. As etapas são vaporização,
            condensação dos vapores e resfriamento do líquido remanescente. A operação nasce de uma
            característica geral do equilíbrio líquido-vapor (ELV): para dois componentes há, em
            geral, diferença de composição entre as fases — exceção são os
            <strong>azeótropos</strong>. O vapor é mais rico no componente
            <strong>mais volátil</strong>; o líquido, no menos volátil. Note que na destilação o
            vapor contém no mínimo dois componentes.
          </p>

          <h3>Esquema simplificado de uma coluna</h3>
          <ul class="key-points">
            <li><strong>F</strong> — alimentação.</li>
            <li><strong>D</strong> — produto superior ou destilado.</li>
            <li>
              <strong>L<sub>B</sub></strong> — produto de base (possivelmente refugo).
            </li>
            <li>
              <strong>V<sub>T</sub></strong> — vapor superior.
            </li>
            <li>
              <strong>L<sub>R</sub></strong> — refluxo.
            </li>
            <li>
              <strong>Q<sub>C</sub></strong> — calor removido no condensador.
            </li>
            <li>
              <strong>Q<sub>R</sub></strong> — calor fornecido no calefator.
            </li>
          </ul>
          <p>
            Acima do ponto de alimentação está a seção
            <strong>enriquecedora (retificadora)</strong>; abaixo, a seção de
            <strong>exaustão (esgotamento)</strong>. Na parte superior o vapor ascendente supera a
            vazão de líquido descendente; na parte inferior ocorre o contrário. Com pressão
            aproximadamente constante, a temperatura é menor no topo — o componente mais volátil tem
            menor ponto de ebulição.
          </p>

          <h3>Balanço de materiais</h3>
          <p class="equation">F = D + L<sub>B</sub></p>
          <p class="equation">F · z = D · x<sub>D</sub> + L<sub>B</sub> · x<sub>B</sub></p>
          <p class="factor__example">
            F, D e L<sub>B</sub> em fluxos molares ou mássicos (kmol/s ou kg/s); z, x<sub>D</sub> e
            x<sub>B</sub> em frações molares ou mássicas. Convenção: x para líquido, y para vapor, z
            para ambos.
          </p>

          <h3>Estágio ideal e refluxo</h3>
          <ul class="key-points">
            <li>
              As condições para a análise matemática são: balanço de materiais, dados de equilíbrio
              líquido-vapor e conceito de estágio ideal.
            </li>
            <li>
              <strong>Prato teórico</strong>: o número de pratos reais é o número de pratos teóricos
              dividido pela eficiência provável dos pratos.
            </li>
            <li>
              A <strong>razão de refluxo</strong> determina o número de pratos teóricos: no refluxo
              mínimo o número de pratos tende a infinito; com refluxo infinito o número de pratos é
              mínimo — daí a busca pela razão de refluxo ótima (construção de McCabe-Thiele).
            </li>
            <li>
              Os pratos tornam-se menos eficientes conforme a coluna cresce em diâmetro/altura, e o
              calor de condensação de um vapor em um prato fornece o calor de vaporização no prato
              vizinho.
            </li>
          </ul>
          <p class="card-note">
            <strong>Aplicações farmacêuticas:</strong> destilação do fármaco bruto, eliminação ou
            recuperação de solventes de extração, obtenção de hidrolatos, alcoolatos e essências e
            produção de água destilada.
          </p>
        </article>

        <article id="extracao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">11</span>
            <div>
              <p class="card-heading__eyebrow">Separação por solubilidade</p>
              <h2>Extração líquido-líquido</h2>
            </div>
          </header>
          <p>
            Operação de transferência de massa de uma fase para outra, feita pela adição de um
            <strong>solvente imiscível</strong> (ou parcialmente miscível) à solução do soluto, no
            qual o soluto é <strong>mais solúvel</strong> do que na fase original. Princípio:
            diferença de solubilidade em líquidos imiscíveis. Objetivo: isolar ou concentrar um
            constituinte de interesse, ou separá-lo de espécies que interferem na purificação.
          </p>
          <ol class="steps">
            <li>Contato entre as fases.</li>
            <li>Separação das fases.</li>
            <li>Recuperação do solvente.</li>
          </ol>

          <div class="formula">
            <span class="formula__label">K = C<sub>s</sub> / C<sub>i</sub></span>
          </div>
          <p class="factor__example">
            Coeficiente de partição (K). A substância se distribui pelos dois solventes de modo que
            a relação entre as concentrações é constante e independente da quantidade de sólido em
            contato com os líquidos. C<sub>s</sub> = concentração na fase solvente; C<sub>i</sub> =
            concentração na fase inicial. Com K estima-se quanto material será extraído e quantas
            etapas serão necessárias.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Quando a extração é a escolha</h3>
              <ul class="comparison-list">
                <li>Componentes não voláteis.</li>
                <li>Componentes com baixa volatilidade relativa.</li>
                <li>Componentes degradáveis a altas temperaturas.</li>
                <li>Soluto desejado em pequena proporção.</li>
                <li>Cristalização fracionada inviável por economia.</li>
                <li>Componentes que formam azeótropos.</li>
                <li>Pontos de ebulição próximos.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>O solvente ideal</h3>
              <ul class="comparison-list">
                <li>Alta seletividade e estabilidade.</li>
                <li>Boa capacidade de recuperação.</li>
                <li>Baixa viscosidade e baixo custo.</li>
                <li>Densidade diferente da mistura inicial.</li>
              </ul>
            </section>
          </div>

          <h3>Variáveis e equipamentos</h3>
          <ul class="key-points">
            <li>
              Além do solvente: vazão de solvente, temperatura, pressão e superfície de contato
              entre as fases.
            </li>
            <li>
              <strong>Vazões baixas</strong> de solvente concentram o extrato e aumentam o número de
              estágios para uma mesma concentração de refinado;
              <strong>vazões altas</strong> aumentam o custo de operação e afetam a pureza do
              extrato e do refinado.
            </li>
            <li>
              No equilíbrio, a fase rica em solvente é o <strong>extrato</strong> (V) e a pobre é o
              <strong>refinado</strong> (L); D é V sem o solvente e L é L′ sem o solvente. Regra da
              alavanca: no ponto M, FM/MS = S/F.
            </li>
            <li>
              Extração <strong>descontínua</strong> (funil de separação) ou
              <strong>contínua</strong> (colunas de múltiplos estágios e equipamentos de contato
              contínuo: HLI, LLI, LLO, HLO).
            </li>
            <li>
              O número de estágios de equilíbrio depende da pureza do extrato requerida, das
              condições de temperatura e pressão, das relações de equilíbrio, da recuperação
              desejada e da relação solvente/mistura inicial.
            </li>
          </ul>
          <p class="card-note">
            <strong>Exemplo de aula:</strong> extração da penicilina do caldo de fermentação usando
            n-butanol como solvente — o soluto é o único componente transferido; a mistura inicial
            vira refinado à medida que perde soluto, e a fase solvente vira extrato à medida que o
            recebe.
          </p>
        </article>

        <article id="filtracao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">12</span>
            <div>
              <p class="card-heading__eyebrow">Separação sólido-fluido</p>
              <h2>Filtração — e o exercício resolvido</h2>
            </div>
          </header>
          <p>
            Na filtração, o <strong>meio poroso</strong> (o filtro) bloqueia a passagem das
            partículas sólidas e permite o fluxo do fluido, separando as partículas da mistura
            original. Formam-se duas correntes: o <strong>filtrado</strong>, que atravessa o meio, e
            a <strong>torta</strong>, que se acumula sobre ele.
          </p>
          <ul class="key-points">
            <li>
              A resistência ao escoamento vem de <strong>duas parcelas</strong>: a torta que cresce
              e o meio filtrante.
            </li>
            <li>
              A vazão de filtrado depende da queda de pressão aplicada, da área de filtração, da
              viscosidade do filtrado, da
              <strong>resistência específica da torta (α)</strong> e da concentração de sólidos por
              volume de filtrado.
            </li>
            <li>
              Em filtros contínuos (tambor rotatório), só a fração submersa da superfície está
              filtrando: o tempo de filtração é a fração submersa multiplicada pelo tempo de ciclo.
            </li>
          </ul>

          <p>
            A dedução completa da equação de filtração a pressão constante — e a resolução passo a
            passo dos dois exercícios propostos da disciplina (filtro de tambor rotatório e
            determinação da influência da pressão na resistência da torta) — está na página
            dedicada:
          </p>
          <p class="topic-nav">
            <router-link class="topic-nav__link" to="/resumins/unifal/operacoes/filtracao">
              <span>Exercícios resolvidos</span>
              Filtração: duplas e resistência da torta →
            </router-link>
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              Operação unitária = transformação física, independente do material (Little, 1915);
              processo unitário = conversão química.
            </li>
            <li>
              Classificação pelo modelo físico: mecânicas (com e sem umidade), transferência de
              calor, transferência de massa e calor + massa simultâneos.
            </li>
            <li>
              Modelo matemático em três etapas: projeção, solução e tradução física do resultado.
            </li>
            <li>
              Fluido escoa sob cisalhamento; Lei de Newton: τ = μ dv/dy; poise = dina·s/cm²; 1 cP =
              0,01 poise.
            </li>
            <li>
              Esfericidade φ ≤ 1; diâmetro equivalente = esfera de mesmo volume; tamisação de 7 cm a
              40 μm; série Tyler com base em 200 mesh (0,074 mm).
            </li>
            <li>
              Cominuição não altera o estado de agregação; esforços industriais: compressão,
              cisalhamento e impacto.
            </li>
            <li>
              Agitação é uma fase; mistura é duas ou mais. Índice de mistura M = 1 quando S<sub
                >ACT</sub
              >
              = S<sub>R</sub>.
            </li>
            <li>
              Sedimentação/decantação usa gravidade; centrifugação usa força centrífuga. Decantação
              livre &lt; 0,2%; sedimentação &gt; 40%.
            </li>
            <li>
              Estágio = contato + separação mecânica; estágio ideal = equilíbrio; eficiência compara
              real com ideal.
            </li>
            <li>
              Destilação: F = D + L<sub>B</sub> e F·z = D·x<sub>D</sub> +
              L<sub>B</sub>·x<sub>B</sub>; refluxo mínimo → infinitos pratos.
            </li>
            <li>
              Extração: K = C<sub>s</sub>/C<sub>i</sub>; extrato rico em solvente, refinado pobre;
              três etapas: contato, separação e recuperação do solvente.
            </li>
            <li>
              Filtração: resistência da torta cresce com o volume filtrado; em tambor rotatório,
              t<sub>f</sub> = f · t<sub>ciclo</sub>.
            </li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir dos materiais de Operações Unitárias da UNIFAL-MG (Profa.
            Dra. Joelise Angelotti): aula introdutória, fluidos, sólidos particulados, fragmentação
            de sólidos, agitação e mistura, sedimentação, transferência de massa, destilação,
            extração líquido-líquido e o Exercício Proposto — Duplas (filtração).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins">
            <span>Voltar</span>
            ← Todos os resumos
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/operacoes/filtracao">
            <span>Próximo</span>
            Filtração resolvida →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
