<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/unifal/farmacovigilancia">Farmacovigilância</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Causalidade</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · FARMACOVIGILÂNCIA · ASSUNTO 5.3</p>
        <h1 class="intro__title">Avaliação de causalidade</h1>
        <p class="intro__lead">
          O sistema <strong>OMS-UMC em perspectiva crítica e comparada</strong>: por que avaliar
          causalidade é separar ruído de sinal, quais são as seis categorias do OMS-UMC, o que elas
          ganham e perdem em relação a Naranjo, Kramer, introspecção de especialistas e métodos
          bayesianos — e como escolher o método certo para cada cenário clínico.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Guia de estudo</span>
          <span class="intro__chip">14 tópicos essenciais</span>
          <span class="intro__chip">Análise crítica e comparada</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#incerteza">Evento × reação</a>
        <a href="#pilares">3 pilares</a>
        <a href="#dna">DNA do UMC</a>
        <a href="#conclusivas">Certas e prováveis</a>
        <a href="#duvidosas">Possíveis e improváveis</a>
        <a href="#incompletos">Condicionais</a>
        <a href="#balanca">Balança de evidências</a>
        <a href="#naranjo">Naranjo</a>
        <a href="#kramer">Kramer</a>
        <a href="#extremos">Introspecção × Bayes</a>
        <a href="#matriz">Matriz crítica</a>
        <a href="#arvore">Árvore de decisão</a>
        <a href="#mito">O mito</a>
        <a href="#conclusoes">Conclusões</a>
      </nav>

      <div class="lesson">
        <article id="incerteza" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O problema central</p>
              <h2>A anatomia da incerteza clínica</h2>
            </div>
          </header>
          <p>
            Todo caso suspeito chega com muito <strong>ruído</strong> e pouca
            <strong>informação</strong>. A avaliação de causalidade é justamente o filtro clínico e
            matemático que transforma o ruído (evento) no foco (reação).
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--rose">
              <h3>O ruído — evento adverso</h3>
              <p>
                <strong>RDC 406/2020, art. 20, IX:</strong> qualquer ocorrência médica indesejável,
                <em>sem que necessariamente exista relação causal</em> com o tratamento.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>O foco — reação adversa</h3>
              <p>
                <strong>RDC 406/2020, art. 20, XXIII:</strong> caracteriza-se pela
                <em>suspeita de relação causal</em> entre o medicamento e a resposta prejudicial.
              </p>
            </section>
          </div>

          <p class="card-note">
            Os concorrentes que sempre precisam ser considerados: <strong>doença de base</strong>,
            <strong>comorbidades</strong>, <strong>outros fármacos</strong> e o
            <strong>acaso</strong>. Enquanto eles não forem descartados, o caso é evento — não
            reação.
          </p>
        </article>

        <article id="pilares" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">As três famílias de método</p>
              <h2>Os três pilares da avaliação de causalidade</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Das três famílias, apenas duas cabem na rotina hospitalar.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Família</th>
                  <th scope="col">Como funciona</th>
                  <th scope="col">Força</th>
                  <th scope="col">Fraqueza</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Introspecção global</th>
                  <td>
                    Julgamento clínico do especialista, por exclusão clínica.
                  </td>
                  <td>Flexibilidade para sinais inéditos.</td>
                  <td>Altíssima subjetividade.</td>
                </tr>
                <tr>
                  <th scope="row">Algoritmos de decisão</th>
                  <td>
                    Naranjo e Kramer: questionários estruturados com questões dicotômicas que geram
                    escores padronizados.
                  </td>
                  <td>Reprodutibilidade e padronização.</td>
                  <td>Rigidez; um fármaco por vez no Naranjo.</td>
                </tr>
                <tr>
                  <th scope="row">Métodos probabilísticos</th>
                  <td>
                    Abordagens bayesianas: combinam dados epidemiológicos prévios com evidências
                    atuais do paciente.
                  </td>
                  <td>Rigor máximo com múltiplas variáveis.</td>
                  <td>Depende de bases de dados e computação.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="dna" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Como o OMS-UMC pensa</p>
              <h2>O DNA do sistema OMS-UMC</h2>
            </div>
          </header>
          <p>
            O OMS-UMC é <strong>introspecção global sistematizada</strong>: uma avaliação de
            especialista, mas guiada por quatro dimensões objetivas:
          </p>
          <div class="factor-grid">
            <section class="concept-panel concept-panel--mint">
              <h3>1 · Tempo</h3>
              <p>
                O intervalo entre exposição e evento é plausível considerando farmacocinética e
                farmacodinâmica?
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>2 · Causas concorrentes</h3>
              <p>
                Há plausibilidade de a doença de base, comorbidades ou outros fármacos explicarem
                perfeitamente o sintoma?
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>3 · Retirada (<em>de-challenge</em>)</h3>
              <p>Há melhora clínica documentada ou reversão do quadro após a suspensão?</p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>4 · Reexposição (<em>re-challenge</em>)</h3>
              <p>O evento se repete se o paciente for exposto novamente ao mesmo fármaco?</p>
            </section>
          </div>
        </article>

        <article id="conclusivas" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">O espectro OMS-UMC · parte I</p>
              <h2>Causas conclusivas: certa e provável</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Categoria 1 · CERTA (definida)</h3>
              <ul class="comparison-list">
                <li>Evento ou teste anormal definitivo, reconhecido fenomenologicamente.</li>
                <li>Tempo biológico e farmacológico altamente plausível.</li>
                <li>Não pode ser explicado por doença de base ou outros fármacos.</li>
                <li>Retirada clinicamente plausível.</li>
              </ul>
              <p class="factor__example">
                <strong>Chave diagnóstica:</strong> reexposição satisfatória é obrigatoriamente
                exigida, se necessário.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Categoria 2 · PROVÁVEL (<em>likely</em>)</h3>
              <ul class="comparison-list">
                <li>Relação de tempo razoável.</li>
                <li>Improvável atribuição à doença de base.</li>
                <li>Resposta à retirada clinicamente razoável.</li>
              </ul>
              <p class="factor__example">
                <strong>Chave diagnóstica:</strong> a reexposição <em>não</em> é exigida para esta
                classificação.
              </p>
            </section>
          </div>

          <p class="card-note">
            A diferença entre «certa» e «provável» é basicamente <strong>uma</strong>: a prova da
            reexposição. Como ela quase nunca existe na prática, a maioria dos casos bem
            documentados para em «provável» — e isso não é um defeito do avaliador, é uma limitação
            do método.
          </p>
        </article>

        <article id="duvidosas" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">O espectro OMS-UMC · parte II</p>
              <h2>Causas duvidosas: possível e improvável</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--rose">
              <h3>Categoria 3 · POSSÍVEL</h3>
              <ul class="comparison-list">
                <li>Relação temporal razoável entre uso e evento.</li>
                <li>Faltam dados claros sobre a retirada, ou são incertos.</li>
              </ul>
              <p class="factor__example">
                <strong>Chave clínica:</strong> o evento <em>pode</em> ser perfeitamente explicado
                por doença subjacente ou por outro medicamento simultâneo.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Categoria 4 · IMPROVÁVEL</h3>
              <ul class="comparison-list">
                <li>
                  O tempo de ingestão em relação ao evento torna a relação causal improvável (embora
                  não impossível).
                </li>
              </ul>
              <p class="factor__example">
                <strong>Chave clínica:</strong> doença de base ou outros fármacos fornecem
                explicações muito mais plausíveis e evidentes.
              </p>
            </section>
          </div>

          <p>
            Note que «improvável» <strong>não</strong> significa «descartado». O sistema é
            conservador: ele reduz a força da atribuição, mas mantém o registro — porque a
            raridade de hoje pode ser o sinal de amanhã.
          </p>
        </article>

        <article id="incompletos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">O espectro OMS-UMC · parte III</p>
              <h2>Dados incompletos: condicional e não avaliável</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel">
              <h3>Categoria 5 · CONDICIONAL</h3>
              <ul class="comparison-list">
                <li>O evento foi reportado, mas faltam dados essenciais para avaliar.</li>
                <li>Dados adicionais estão sob exame ou requisição neste momento.</li>
              </ul>
            </section>

            <section class="concept-panel">
              <h3>Categoria 6 · NÃO AVALIÁVEL</h3>
              <ul class="comparison-list">
                <li>O relatório sugere reação, mas a informação é insuficiente ou contraditória.</li>
                <li>Não há forma de suplementar ou verificar os dados clinicamente.</li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            <strong>Nota regulatória (RDC 406/2020):</strong> a ocorrência de relatórios na
            categoria 5 exige obrigatoriamente a <strong>busca ativa</strong> dos dados faltantes por
            parte do detentor de registro do medicamento. Ou seja: «condicional» é uma
            responsabilidade, não um arquivo morto.
          </p>
        </article>

        <article id="balanca" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Vantagens e limitações</p>
              <h2>A balança de evidências do OMS-UMC</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Pesos a favor</h3>
              <ul class="comparison-list">
                <li>Alta praticidade e padronização global.</li>
                <li>É a base oficial adotada pelo VigiMed (Anvisa).</li>
                <li>
                  Permite avaliação clínica holística — considera o paciente inteiro, não apenas
                  variáveis binárias.
                </li>
                <li>Excelente agilidade para a rotina hospitalar.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Pesos contra</h3>
              <ul class="comparison-list">
                <li>
                  <strong>Variabilidade interavaliadores</strong>: dois clínicos podem classificar o
                  mesmo caso de formas diferentes.
                </li>
                <li>Depende fortemente da experiência do analista.</li>
                <li>
                  Baixa precisão em reações tardias, crônicas ou em interações medicamentosas
                  complexas.
                </li>
              </ul>
            </section>
          </div>
        </article>

        <article id="naranjo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">A busca pela objetividade</p>
              <h2>Algoritmo de Naranjo (1981)</h2>
            </div>
          </header>
          <p>
            Uma bateria rígida de <strong>10 perguntas binárias</strong> focadas em evidência
            objetiva. As respostas geram pontuação matemática direta:
            <strong>sim: +1 a +2</strong> · <strong>não: −1</strong> ·
            <strong>desconhecido: 0</strong>.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Escala final de causalidade do Naranjo.</caption>
              <thead>
                <tr>
                  <th scope="col">Pontuação</th>
                  <th scope="col">Categoria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">≥ 9</td>
                  <td>Definida</td>
                </tr>
                <tr>
                  <td class="num">5 a 8</td>
                  <td>Provável</td>
                </tr>
                <tr>
                  <td class="num">1 a 4</td>
                  <td>Possível</td>
                </tr>
                <tr>
                  <td class="num">0</td>
                  <td>Duvidosa</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Crédito</h3>
              <p>
                Extrema reprodutibilidade: reduz a variabilidade humana e permite comparar casos e
                serviços.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Crítica acadêmica</h3>
              <p>
                Avalia <strong>apenas um único fármaco por vez</strong> e falha criticamente em
                cenários de polifarmácia e interações complexas.
              </p>
            </section>
          </div>
        </article>

        <article id="kramer" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">09</span>
            <div>
              <p class="card-heading__eyebrow">O rigor hipercomplexo</p>
              <h2>Método de Kramer (1979)</h2>
            </div>
          </header>
          <p>
            Análise clínica exaustiva, com cerca de <strong>56 variáveis</strong> e questões
            detalhadas. As respostas navegam por eixos de decisão e geram um escore complexo de
            <strong>−7 a +7</strong>.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>O paradoxo clínico</h3>
              <p>
                Segundo estudos recentes, o Kramer (em versões ajustadas) apresenta superioridade
                técnica real para detectar admissões hospitalares relacionadas a fármacos,
                especialmente em <strong>idosos polimedicados</strong>.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>A barreira de adoção</h3>
              <p>
                A exigência maciça de dados clínicos e o longo tempo de preenchimento tornam o método
                quase impraticável na notificação rápida de linha de frente.
              </p>
            </section>
          </div>
        </article>

        <article id="extremos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">10</span>
            <div>
              <p class="card-heading__eyebrow">Os extremos metodológicos</p>
              <h2>Introspecção pura × teorema de Bayes</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>O mais flexível e o mais rigoroso dos métodos.</caption>
              <thead>
                <tr>
                  <th scope="col">Aspecto</th>
                  <th scope="col">Julgamento de especialistas</th>
                  <th scope="col">Abordagens bayesianas (ex.: BARDI)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Natureza</th>
                  <td>Experiência empírica e exclusão clínica holística.</td>
                  <td>
                    Probabilidade prévia (dados epidemiológicos) + probabilidade atual (sintomas) =
                    probabilidade posterior.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Vantagem</th>
                  <td>
                    Método mais flexível; essencial para reações raras ou nunca descritas na
                    literatura.
                  </td>
                  <td>
                    Matematicamente exaustivo; lida bem com variáveis múltiplas e interações.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Calcanhar de Aquiles</th>
                  <td>
                    Níveis alarmantemente baixos de concordância entre especialistas sobre o mesmo
                    caso.
                  </td>
                  <td>
                    Exige capacidade computacional e bases epidemiológicas que não estão acessíveis à
                    beira do leito.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="matriz" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">11</span>
            <div>
              <p class="card-heading__eyebrow">Diagnostic blueprint</p>
              <h2>Matriz crítica de desempenho</h2>
            </div>
          </header>
          <p>
            Nenhum método vence em todas as dimensões — e é isso que justifica a existência de
            vários. Compare:
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Praticidade, objetividade e velocidade dos cinco métodos discutidos.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Método</th>
                  <th scope="col">Praticidade clínica</th>
                  <th scope="col">Objetividade / rigor</th>
                  <th scope="col">Velocidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">OMS-UMC</th>
                  <td>Alta</td>
                  <td>Média</td>
                  <td>Rápida</td>
                </tr>
                <tr>
                  <th scope="row">Naranjo</th>
                  <td>Média</td>
                  <td>Alta</td>
                  <td>Média</td>
                </tr>
                <tr>
                  <th scope="row">Kramer</th>
                  <td>Baixa</td>
                  <td>Alta</td>
                  <td>Lenta</td>
                </tr>
                <tr>
                  <th scope="row">Bayesiano (BARDI)</th>
                  <td>Baixa</td>
                  <td>Máxima</td>
                  <td>Lenta</td>
                </tr>
                <tr>
                  <th scope="row">Introspecção do especialista</th>
                  <td>Alta</td>
                  <td>Baixa</td>
                  <td>Rápida</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="arvore" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">12</span>
            <div>
              <p class="card-heading__eyebrow">Decisão prática</p>
              <h2>Qual método escolher</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Árvore de decisão por cenário clínico.</caption>
              <thead>
                <tr>
                  <th scope="col">Cenário</th>
                  <th scope="col">Método</th>
                  <th scope="col">Por quê</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Rotina hospitalar / padrão VigiMed</th>
                  <td>OMS-UMC ou Naranjo</td>
                  <td>
                    Garante velocidade para notificar em até 15 dias e atende à padronização
                    internacional.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Admissão hospitalar complexa (idosos polimedicados)</th>
                  <td>Kramer ajustado</td>
                  <td>
                    Resolve com precisão a sobreposição de doenças crônicas e cascatas de prescrição.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Ensaios clínicos e estudos epidemiológicos</th>
                  <td>Modelos bayesianos</td>
                  <td>Rigor científico e probabilístico no cruzamento estatístico de variáveis.</td>
                </tr>
                <tr>
                  <th scope="row">RAM raríssima ou desconhecida</th>
                  <td>Painel de especialistas + OMS-UMC</td>
                  <td>
                    A intuição médica é insubstituível para sinais que algoritmos rejeitariam por
                    falta de literatura.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="mito" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">13</span>
            <div>
              <p class="card-heading__eyebrow">Síntese acadêmica</p>
              <h2>O mito do padrão ouro</h2>
            </div>
          </header>
          <p>
            Nenhum método de avaliação de causalidade obteve aceitação universal como o padrão ouro
            isolado em farmacovigilância. Ferramentas numéricas e escalas algorítmicas
            <strong>não substituem</strong> o instinto clínico e o conhecimento fisiopatológico.
          </p>
          <div class="formula">
            <span>percepção clínica refinada + sistematização global (OMS-UMC)</span>
          </div>
          <p>
            A melhor avaliação na prática hospitalar moderna nasce, portanto, de uma
            <strong>abordagem híbrida</strong>. O método serve para organizar e registrar o
            raciocínio — não para substituí-lo.
          </p>
        </article>

        <article id="conclusoes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">14</span>
            <div>
              <p class="card-heading__eyebrow">Fechamento</p>
              <h2>Conclusões e diretrizes de prática clínica</h2>
            </div>
          </header>
          <ul class="key-points">
            <li>
              <strong>A natureza probabilística da clínica</strong> — a avaliação de causalidade é
              um jogo de probabilidade, não de certeza absoluta. Não espere dados perfeitos para
              iniciar uma investigação de segurança.
            </li>
            <li>
              <strong>A padronização nacional</strong> — o OMS-UMC é o ecossistema adotado
              globalmente e recomendado no Brasil (VigiMed). Dominar a imputação correta de suas
              seis categorias é mandatório.
            </li>
            <li>
              <strong>O verdadeiro inimigo da vigilância</strong> — a escolha do algoritmo perfeito
              perde importância se o caso nunca for reportado. A apatia clínica causa subnotificação
              severa.
            </li>
          </ul>
          <p class="card-note">
            Na dúvida terapêutica, <strong>notifique</strong> o evento. A classificação pode ser
            revista depois; o caso não notificado nunca será revisto.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              Evento adverso (art. 20, IX) não exige nexo causal; reação adversa (art. 20, XXIII)
              exige <em>suspeita</em> de relação causal.
            </li>
            <li>
              Três famílias: introspecção global, algoritmos de decisão e métodos probabilísticos
              (bayesianos).
            </li>
            <li>Quatro dimensões do OMS-UMC: tempo, causas concorrentes, retirada e reexposição.</li>
            <li>
              Seis categorias: certa, provável, possível, improvável, condicional e não avaliável.
            </li>
            <li>
              Reexposição satisfatória é exigida apenas na categoria «certa»; condicional exige busca
              ativa dos dados faltantes (RDC 406/2020).
            </li>
            <li>
              OMS-UMC: prático, holístico e padrão no VigiMed; porém subjetivo e com variabilidade
              entre avaliadores.
            </li>
            <li>
              Naranjo: 10 itens, escores ≥ 9 definida, 5–8 provável, 1–4 possível, 0 duvidosa; limita
              a polifarmácia.
            </li>
            <li>Kramer: cerca de 56 variáveis, escore −7 a +7, melhor em idosos polimedicados.</li>
            <li>
              Bayesiano (BARDI): probabilidade prévia + atual = posterior; máximo rigor, baixa
              praticidade.
            </li>
            <li>
              Não existe padrão ouro: a prática recomendada é a abordagem híbrida (clínica + OMS-UMC).
            </li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir do material de Farmacovigilância da UNIFAL-MG — «Estudo
            aprofundado sobre avaliação de causalidade em farmacovigilância: o sistema OMS-UMC em
            perspectiva crítica e comparada», assunto 5.3.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/escalas">
            <span>Anterior</span>
            ← Instrumentos de precisão
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/industria-rdc">
            <span>Próximo</span>
            Indústria: RDC 406 e IN 63 →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
