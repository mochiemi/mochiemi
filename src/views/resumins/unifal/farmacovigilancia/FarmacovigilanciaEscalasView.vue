<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>UNIFAL-MG</span>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/unifal/farmacovigilancia">Farmacovigilância</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Escalas de classificação</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · FARMACOVIGILÂNCIA · ASSUNTO 5.2</p>
        <h1 class="intro__title">Instrumentos de precisão</h1>
        <p class="intro__lead">
          Como transformar «acho que foi o remédio» em dado acionável: as quatro lentes de avaliação
          clínica da RAM (previsibilidade, causalidade, gravidade e evitabilidade) e as ferramentas
          de cada uma — Rawlins &amp; Thompson, WHO-UMC, Naranjo, Kramer, Hartwig &amp; Siegel,
          CTCAE e Schumock &amp; Thornton, com um caso clínico integrado no final.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Guia de estudo</span>
          <span class="intro__chip">11 tópicos essenciais</span>
          <span class="intro__chip">Análise clínica e aplicação prática</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#pilares">4 pilares</a>
        <a href="#rawlins">Tipo A × B</a>
        <a href="#cronologia">Cronologia</a>
        <a href="#oms">WHO-UMC</a>
        <a href="#naranjo">Naranjo</a>
        <a href="#kramer">Kramer</a>
        <a href="#matriz">Qual escala</a>
        <a href="#gravidade">Gravidade</a>
        <a href="#evitabilidade">Evitabilidade</a>
        <a href="#dashboard">Caso integrado</a>
        <a href="#mandato">Mandato regulatório</a>
      </nav>

      <div class="lesson">
        <article id="pilares" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O mapa das ferramentas</p>
              <h2>Os quatro pilares da avaliação clínica</h2>
            </div>
          </header>
          <p>
            Para converter uma suspeita de RAM em dado acionável, a farmacovigilância olha o mesmo
            caso por <strong>quatro lentes</strong> — cada uma com sua pergunta central e sua
            ferramenta de referência.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>As quatro dimensões analíticas de uma RAM.</caption>
              <thead>
                <tr>
                  <th scope="col">Pilar</th>
                  <th scope="col">Lente</th>
                  <th scope="col">Pergunta central</th>
                  <th scope="col">Ferramenta ouro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 · Previsibilidade</th>
                  <td>Farmacológica</td>
                  <td>A reação era esperada pelo mecanismo de ação do fármaco?</td>
                  <td>Rawlins &amp; Thompson (tipos A e B)</td>
                </tr>
                <tr>
                  <th scope="row">2 · Causalidade</th>
                  <td>Etiológica</td>
                  <td>Qual a probabilidade real de o medicamento ter causado o evento?</td>
                  <td>WHO-UMC, Naranjo, Kramer</td>
                </tr>
                <tr>
                  <th scope="row">3 · Gravidade</th>
                  <td>Impacto clínico</td>
                  <td>Qual foi a intensidade do dano ao paciente?</td>
                  <td>Hartwig &amp; Siegel, CTCAE</td>
                </tr>
                <tr>
                  <th scope="row">4 · Evitabilidade</th>
                  <td>Preventiva</td>
                  <td>O evento poderia ter sido evitado com práticas adequadas?</td>
                  <td>Schumock &amp; Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            As quatro lentes são <strong>independentes</strong>: uma reação pode ser imprevisível
            (tipo B), provável na causalidade, grave na intensidade e ainda assim definitivamente
            evitável — e esse último resultado é o que transforma um caso clínico em indicador de
            qualidade do serviço.
          </p>
        </article>

        <article id="rawlins" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Previsibilidade</p>
              <h2>A dicotomia de Rawlins &amp; Thompson (1977)</h2>
            </div>
          </header>
          <p>
            A previsibilidade divide as RAMs entre respostas <strong>inerentes à farmacologia</strong>
            e respostas <strong>idiossincráticas do hospedeiro</strong>.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Tipo A (previsível) × tipo B (imprevisível).</caption>
              <thead>
                <tr>
                  <th scope="col">Aspecto</th>
                  <th scope="col">Tipo A — previsível</th>
                  <th scope="col">Tipo B — imprevisível</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mecanismo</th>
                  <td>Efeitos tóxicos ou secundários explicados pela ação farmacológica.</td>
                  <td>
                    Respostas anormais, alergias ou idiossincrasias não relacionadas ao alvo da
                    terapia.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Incidência</th>
                  <td>Alta (comum).</td>
                  <td>Rara (incomum).</td>
                </tr>
                <tr>
                  <th scope="row">Relação com a dose</th>
                  <td>Dose-dependente.</td>
                  <td>Independente da dose.</td>
                </tr>
                <tr>
                  <th scope="row">Letalidade</th>
                  <td>Baixa.</td>
                  <td>Grave — pode causar morbidade séria ou óbito.</td>
                </tr>
                <tr>
                  <th scope="row">Manejo clínico</th>
                  <td>Ajuste de dose ou suspensão.</td>
                  <td>Suspensão imediata e contraindicação absoluta.</td>
                </tr>
                <tr>
                  <th scope="row">Exemplo</th>
                  <td>Secura na boca por anticolinérgicos (atropina).</td>
                  <td>Choque anafilático por penicilina.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Consequência prática: as RAMs tipo A são <strong>monitoráveis</strong> (dá para prever
            quando e em quem vão aparecer). As tipo B são <strong>imprevisíveis</strong> — e é por
            isso que dependem de notificação para serem descobertas.
          </p>
        </article>

        <article id="cronologia" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Onde os algoritmos procuram evidência</p>
              <h2>A cronologia da causalidade</h2>
            </div>
          </header>
          <p>
            Independentemente da escala utilizada, a avaliação de causalidade rastreia a conexão
            temporal e clínica em quatro marcos fundamentais:
          </p>
          <ol class="steps">
            <li>
              <strong>Exposição (<em>drug intake</em>)</strong> — plausibilidade farmacológica e
              dose. O medicamento estava no organismo?
            </li>
            <li>
              <strong>Início do evento (<em>onset</em>)</strong> — sequência temporal adequada. O
              tempo decorrido faz sentido em termos de farmacocinética e farmacodinâmica?
            </li>
            <li>
              <strong>Retirada (<em>de-challenge</em>)</strong> — a reação diminui ou desaparece
              quando o suspeito é suspenso?
            </li>
            <li>
              <strong>Reexposição (<em>re-challenge</em>)</strong> — o evento retorna ao reintroduzir
              o fármaco? Raramente realizado na prática, por razões éticas.
            </li>
          </ol>
          <p class="card-note">
            A <strong>reexposição é o teste mais forte de causalidade</strong> e, ao mesmo tempo, o
            menos disponível — não se expõe um paciente a um risco conhecido só para fechar
            diagnóstico. Toda a engenharia dos algoritmos existe para contornar essa ausência.
          </p>
        </article>

        <article id="oms" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Escada da certeza</p>
              <h2>Sistema WHO-UMC</h2>
            </div>
          </header>
          <p>
            Baseado em introspecção global e julgamento de especialistas, o método da OMS categoriza
            a força da relação causal:
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Categorias do WHO-UMC.</caption>
              <thead>
                <tr>
                  <th scope="col">Categoria</th>
                  <th scope="col">Critério</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Certa</th>
                  <td>
                    Relação temporal plausível; não pode ser explicada pela doença; resposta à
                    retirada é farmacologicamente definitiva; reexposição satisfatória (se
                    necessária).
                  </td>
                </tr>
                <tr>
                  <th scope="row">Provável (<em>likely</em>)</th>
                  <td>
                    Relação temporal razoável; improvável atribuir à doença; resposta à retirada
                    clinicamente razoável — reexposição não exigida.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Possível</th>
                  <td>
                    Relação temporal razoável; pode ser explicada pela doença ou por outros
                    medicamentos; dados sobre a retirada pouco claros.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Improvável</th>
                  <td>
                    Relação temporal improvável; doença de base ou outros fármacos oferecem
                    explicações plausíveis.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Condicional</th>
                  <td>Requer mais dados para ser classificada.</td>
                </tr>
                <tr>
                  <th scope="row">Inclassificável</th>
                  <td>Dados insuficientes ou contraditórios.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            O WHO-UMC é o sistema adotado no Brasil para notificação no VigiMed. O aprofundamento
            crítico das seis categorias está na
            <router-link to="/resumins/unifal/farmacovigilancia/causalidade">página do assunto 5.3</router-link>.
          </p>
        </article>

        <article id="naranjo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">A matemática da probabilidade</p>
              <h2>Algoritmo de Naranjo</h2>
            </div>
          </header>
          <p>
            Ferramenta algorítmica com 10 questões (sim / não / desconhecido) que gera um escore
            objetivo, amplamente usada em hospitais.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Impulsionadores críticos (+2)</h3>
              <ul class="comparison-list">
                <li>A reação apareceu após a administração?</li>
                <li>A reação reapareceu na reexposição?</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Penalidades críticas (−1)</h3>
              <ul class="comparison-list">
                <li>Existem causas alternativas lógicas?</li>
                <li>A reação reaparece com placebo?</li>
              </ul>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Interpretação do escore.</caption>
              <thead>
                <tr>
                  <th scope="col">Pontuação</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Leitura</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">9</td>
                  <th scope="row">Definida</th>
                  <td>Reexposição positiva ou níveis plasmáticos tóxicos.</td>
                </tr>
                <tr>
                  <td class="num">5 a 8</td>
                  <th scope="row">Provável</th>
                  <td>Padrão reconhecido, com resposta à retirada confirmada.</td>
                </tr>
                <tr>
                  <td class="num">1 a 4</td>
                  <th scope="row">Possível</th>
                  <td>Sequência temporal exata, mas explicável pela doença.</td>
                </tr>
                <tr>
                  <td class="num">0</td>
                  <th scope="row">Duvidosa</th>
                  <td>Causas alternativas confirmadas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="kramer" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Avaliação operacional complexa</p>
              <h2>Algoritmo de Kramer</h2>
            </div>
          </header>
          <p>
            Um fluxograma rigoroso, projetado para reduzir a discordância clínica por meio de
            múltiplos eixos de decisão. Ele avalia três eixos:
          </p>
          <ul class="key-points">
            <li><strong>Experiência prévia</strong> com o medicamento.</li>
            <li><strong>Alternativa etiológica</strong> — haveria outra explicação?</li>
            <li>
              <strong>Monitoramento temporal</strong> — o evento surgiu em janela compatível e
              respondeu à retirada?
            </li>
          </ul>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Somatório dos escores no algoritmo de Kramer.</caption>
              <thead>
                <tr>
                  <th scope="col">Somatório</th>
                  <th scope="col">Classe de causalidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">+6 ou +7</td>
                  <td>Definida</td>
                </tr>
                <tr>
                  <td class="num">+4 ou +5</td>
                  <td>Provável</td>
                </tr>
                <tr>
                  <td class="num">+1, +2 ou +3</td>
                  <td>Possível</td>
                </tr>
                <tr>
                  <td class="num">0 a −7</td>
                  <td>Improvável</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            <strong>Insight clínico:</strong> em estudo com pacientes geriátricos, o algoritmo de
            Kramer ajustado apresentou maior concordância com o consenso de especialistas na
            avaliação de internações relacionadas a medicamentos do que o método de Naranjo.
          </p>
        </article>

        <article id="matriz" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Não existe ferramenta universal</p>
              <h2>Qual escala de causalidade usar</h2>
            </div>
          </header>
          <div class="table-scroll">
            <table class="data-table">
              <caption>Matriz de decisão entre WHO-UMC, Naranjo e Kramer.</caption>
              <thead>
                <tr>
                  <th scope="col">Método</th>
                  <th scope="col">Natureza</th>
                  <th scope="col">Complexidade</th>
                  <th scope="col">Considera interações?</th>
                  <th scope="col">Melhor uso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">WHO-UMC</th>
                  <td>Julgamento global (introspecção).</td>
                  <td>Baixa / intuitiva.</td>
                  <td>Sim, ativamente.</td>
                  <td>Triagem rápida em centros de monitoramento.</td>
                </tr>
                <tr>
                  <th scope="row">Naranjo</th>
                  <td>Algorítmico simples (questionário).</td>
                  <td>Média / matemática.</td>
                  <td>Não — avalia um fármaco por vez.</td>
                  <td>Ferramenta clínica diária em hospitais gerais.</td>
                </tr>
                <tr>
                  <th scope="row">Kramer</th>
                  <td>Algorítmico complexo (fluxograma).</td>
                  <td>Alta / estruturada.</td>
                  <td>Sim, analisa múltiplas variáveis.</td>
                  <td>Pesquisa clínica e casos de alta complexidade.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="gravidade" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Impacto clínico</p>
              <h2>Gravidade: medindo o dano</h2>
            </div>
          </header>
          <p>
            A avaliação de gravidade define a urgência da intervenção médica e o caminho do reporte
            regulatório.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Gradação de gravidade (Hartwig &amp; Siegel).</caption>
              <thead>
                <tr>
                  <th scope="col">Nível</th>
                  <th scope="col">Extensão</th>
                  <th scope="col">O que caracteriza</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Leve</th>
                  <td class="num">1 – 2</td>
                  <td>
                    Nenhuma intervenção necessária ou mudança de dose sem antídoto; sem
                    prolongamento da internação.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Moderada</th>
                  <td class="num">3 – 4</td>
                  <td>
                    Requer antídoto ou tratamento específico, ou suspensão; prolonga a internação em
                    pelo menos 1 dia.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Grave / letal</th>
                  <td class="num">5 – 7</td>
                  <td>
                    Requer cuidados intensivos (UTI), causa dano permanente ou leva ao óbito.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            <strong>Padrão ouro oncológico: CTCAE</strong> (<em>Common Terminology Criteria for
            Adverse Events</em>), desenvolvido pelo National Cancer Institute (NCI/NIH). É o padrão
            para relatar eventos adversos em oncologia, com detalhamento específico por sistema de
            órgãos.
          </p>
        </article>

        <article id="evitabilidade" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">09</span>
            <div>
              <p class="card-heading__eyebrow">Prevenção</p>
              <h2>Evitabilidade: o funil de Schumock &amp; Thornton</h2>
            </div>
          </header>
          <p>
            Este algoritmo rastreia falhas estruturais ou humanas na cadeia de medicação para
            classificar a RAM como evitável ou não. Funciona como um funil de três seções:
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--rose">
              <h3>Seção A — definitivamente evitável</h3>
              <p class="factor__example">Se SIM para qualquer pergunta:</p>
              <ul class="comparison-list">
                <li>Havia histórico documentado de alergia ao fármaco?</li>
                <li>O medicamento era inadequado para a condição clínica?</li>
                <li>Dose, via ou frequência inadequadas para peso/idade?</li>
                <li>A concentração sérica do fármaco estava tóxica?</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Seção B — provavelmente evitável</h3>
              <p class="factor__example">Se NÃO em A e SIM para qualquer pergunta:</p>
              <ul class="comparison-list">
                <li>O monitoramento terapêutico necessário não foi realizado?</li>
                <li>A RAM foi resultado de interação medicamentosa?</li>
                <li>Houve baixa adesão do paciente?</li>
              </ul>
            </section>
          </div>

          <p>
            <strong>Seção C — não evitável:</strong> o evento ocorreu apesar de prescrição,
            administração e monitoramento estarem impecáveis.
          </p>
          <p class="card-note">
            Repare na direção do funil: primeiro se busca a falha óbvia (A), depois a falha de
            processo (B) e só então se conclui que não havia o que fazer (C). Classificar como «não
            evitável» sem passar pelas seções A e B é o erro clássico de quem usa o instrumento.
          </p>
        </article>

        <article id="dashboard" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">10</span>
            <div>
              <p class="card-heading__eyebrow">O framework em ação</p>
              <h2>Caso integrado: anafilaxia por cefazolina</h2>
            </div>
          </header>

          <div class="worked-example">
            <h3>Cenário clínico</h3>
            <p>
              Paciente desenvolve <strong>choque anafilático grave</strong> após a primeira dose de
              cefazolina profilática. Havia <strong>histórico prévio de alergia a penicilina</strong>
              documentado no prontuário.
            </p>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>As quatro lentes aplicadas ao mesmo caso.</caption>
              <thead>
                <tr>
                  <th scope="col">Lente</th>
                  <th scope="col">Resultado</th>
                  <th scope="col">Por quê</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 · Rawlins &amp; Thompson</th>
                  <td>Tipo B</td>
                  <td>Reação imprevisível, imunomediada.</td>
                </tr>
                <tr>
                  <th scope="row">2 · Naranjo</th>
                  <td>Provável (escore 6)</td>
                  <td>Tempo correto, interrupção trouxe melhora, causa alternativa improvável.</td>
                </tr>
                <tr>
                  <th scope="row">3 · Hartwig &amp; Siegel</th>
                  <td>Nível 5</td>
                  <td>Grave: exigiu transferência para UTI.</td>
                </tr>
                <tr>
                  <th scope="row">4 · Schumock &amp; Thornton</th>
                  <td>Definitivamente evitável</td>
                  <td>Seção A: alergia prévia cruzada documentada e não observada.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            <strong>Resultado analítico final:</strong> RAM imprevisível (tipo B), provável, grave e
            definitivamente evitável — ou seja, com um erro de medicação primário no centro do caso.
            É esse tipo de leitura que gera ação: aqui, não basta registrar a reação; é preciso
            corrigir o processo de checagem de alergia.
          </p>
        </article>

        <article id="mandato" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">11</span>
            <div>
              <p class="card-heading__eyebrow">Por que classificamos</p>
              <h2>O mandato regulatório (RDC 406/2020)</h2>
            </div>
          </header>
          <p>
            A classificação exata não é exercício acadêmico: ela dita a
            <strong>velocidade da resposta regulatória</strong> e as ações da indústria e dos
            hospitais sentinelas.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Prioridade de resposta conforme a classificação.</caption>
              <thead>
                <tr>
                  <th scope="col">Prioridade</th>
                  <th scope="col">Prazo</th>
                  <th scope="col">Gatilho clínico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Máxima</th>
                  <td class="num">0 a 7 dias corridos</td>
                  <td>RAM grave com óbito ou risco iminente de morte.</td>
                </tr>
                <tr>
                  <th scope="row">Alta</th>
                  <td class="num">Até 15 dias corridos</td>
                  <td>Demais eventos adversos classificados como graves.</td>
                </tr>
                <tr>
                  <th scope="row">Periódica</th>
                  <td>Relatório periódico (RPF)</td>
                  <td>
                    RAMs não graves ou possíveis/prováveis coletadas por busca ativa ou notificação
                    espontânea — relatórios semestrais para medicamentos com menos de 5 anos.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            <strong>A regra de ouro:</strong> na dúvida sobre a causalidade ou a gravidade de um
            sinal clínico desconhecido — <strong>notifique</strong>. A classificação vem depois; a
            notificação não pode esperar por ela.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              Quatro lentes: previsibilidade (Rawlins &amp; Thompson), causalidade (WHO-UMC,
              Naranjo, Kramer), gravidade (Hartwig &amp; Siegel, CTCAE) e evitabilidade (Schumock
              &amp; Thornton).
            </li>
            <li>
              Tipo A: comum, dose-dependente, baixa letalidade, manejável com ajuste. Tipo B: rara,
              independente da dose, grave, exige suspensão e contraindicação.
            </li>
            <li>
              Marcos: exposição → onset → de-challenge → re-challenge (raramente realizado por
              razões éticas).
            </li>
            <li>
              WHO-UMC: certa, provável, possível, improvável (+ condicional e inclassificável).
            </li>
            <li>
              Naranjo: +2 para apareceu após administração e reapareceu na reexposição; −1 para
              causas alternativas e reaparecimento com placebo.
            </li>
            <li>
              Kramer: fluxograma de múltiplos eixos; +6/+7 definida, +4/+5 provável, +1 a +3
              possível, 0 a −7 improvável.
            </li>
            <li>Gravidade: leve 1–2, moderada 3–4, grave/letal 5–7; CTCAE é o padrão em oncologia.</li>
            <li>
              Schumock &amp; Thornton: seção A (definitivamente evitável), B (provavelmente
              evitável) e C (não evitável).
            </li>
            <li>
              Prazos: até 7 dias para óbito/risco de morte, até 15 dias para os demais graves, RPF
              para o restante.
            </li>
            <li>Na dúvida sobre causalidade ou gravidade: notifique.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir do material de Farmacovigilância da UNIFAL-MG — «Instrumentos
            de precisão em farmacovigilância: análise clínica e aplicação prática das escalas de
            classificação de RAMs», assunto 5.2.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/busca-ativa">
            <span>Anterior</span>
            ← Da busca ativa à causalidade
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/causalidade">
            <span>Próximo</span>
            Causalidade: OMS-UMC em perspectiva →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
