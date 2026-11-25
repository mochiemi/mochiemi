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
        <span>Indústria na prática</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · FARMACOVIGILÂNCIA · INDÚSTRIA</p>
        <h1 class="intro__title">Proatividade e minimização de risco</h1>
        <p class="intro__lead">
          A farmacovigilância como <strong>vantagem estratégica</strong> da indústria: da recepção
          passiva à inteligência clínica, o ciclo completo do Plano de Minimização de Risco (PMR),
          os indicadores que provam a efetividade das ações, o que a inspeção sanitária cobra — e um
          estudo de caso com um PMR de medicamento teratogênico montado pilar por pilar.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Guia de estudo</span>
          <span class="intro__chip">17 tópicos essenciais</span>
          <span class="intro__chip">Aplicação prática na indústria</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#postura">Mudança de postura</a>
        <a href="#arcabouco">Arcabouço</a>
        <a href="#nucleo">DRM e RFV</a>
        <a href="#funil">Funil de prazos</a>
        <a href="#captacao">Captação</a>
        <a href="#rpbr">RPBR</a>
        <a href="#pgr">PGR</a>
        <a href="#pmr-ciclo">Ciclo do PMR</a>
        <a href="#ferramentas">Ferramentas</a>
        <a href="#efetividade">Efetividade</a>
        <a href="#inspecao">Inspeção</a>
        <a href="#agravantes">Agravantes</a>
        <a href="#naranjo">Naranjo</a>
        <a href="#caso">Caso Teratridina</a>
        <a href="#pilares-defesa">Três pilares</a>
        <a href="#jornada">Jornada integrada</a>
        <a href="#proposito">Propósito final</a>
      </nav>

      <div class="lesson">
        <article id="postura" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O paradigma da proatividade</p>
              <h2>Da recepção passiva à inteligência clínica</h2>
            </div>
          </header>
          <p>
            A farmacovigilância moderna abandonou o papel de mero repositório de dados. O foco
            regulatório exige que o <strong>DRM</strong> atue como principal guardião do perfil de
            segurança do produto, com um objetivo final claro: garantir, em tempo real, que a
            <strong>relação benefício-risco permaneça positiva</strong> ao longo de todo o ciclo de
            vida.
          </p>

          <div class="formula">
            <span>reatividade (notificação) → proatividade (sinal, PMR, RPBR)</span>
          </div>

          <p class="card-note">
            A diferença entre as duas posturas não é de esforço, é de <strong>tempo verbal</strong>:
            a reativa descreve o que aconteceu; a proativa antecipa o que pode acontecer e se
            organiza para impedir.
          </p>
        </article>

        <article id="arcabouco" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">As duas normas de 2020</p>
              <h2>Arcabouço regulatório integrado</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>RDC 406/2020 — a estrutura e a defesa</h3>
              <ul class="comparison-list">
                <li>Sistema de farmacovigilância.</li>
                <li>Papel do RFV.</li>
                <li>Prazos de notificação individual (VigiMed).</li>
                <li>Inspeções.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>IN 63/2020 — a inteligência e o monitoramento</h3>
              <ul class="comparison-list">
                <li>Relatório Periódico de Avaliação Benefício-Risco (RPBR).</li>
                <li>Padrão ICH E2C.</li>
                <li>Revisão de dados acumulados.</li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            <strong>ICH</strong> — International Council for Harmonisation of Technical Requirements
            for Pharmaceuticals for Human Use. É o fórum que padroniza os requisitos técnicos aceitos
            pelas agências reguladoras.
          </p>
        </article>

        <article id="nucleo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">O núcleo operacional</p>
              <h2>O DRM e o Responsável pela Farmacovigilância</h2>
            </div>
          </header>
          <ul class="key-points">
            <li>
              O sistema de farmacovigilância deve estar <strong>localizado e operante em território
              nacional</strong>.
            </li>
            <li>É vedada a terceirização do cargo de RFV e de seu substituto (art. 10).</li>
            <li>
              O RFV precisa ter <strong>autoridade e autonomia</strong> para implementar alterações
              no sistema e responder prontamente à Anvisa.
            </li>
          </ul>

          <div class="factor-grid">
            <section class="concept-panel concept-panel--mint">
              <h3>Residência no Brasil</h3>
              <p>Requisito legal do ocupante do cargo.</p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Autonomia tática</h3>
              <p>Pode mudar procedimentos e interromper práticas de risco.</p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Acesso a dados</h3>
              <p>
                Precisa alcançar qualidade/fábrica, vendas e SAC — a informação de segurança está
                espalhada pela empresa.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Gestão do plano de contingência</h3>
              <p>Garante continuidade em caso de falha de TI ou de pessoal.</p>
            </section>
          </div>
        </article>

        <article id="funil" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">A criticidade dos prazos</p>
              <h2>O funil de notificações</h2>
            </div>
          </header>
          <p>
            O descumprimento dos prazos configura <strong>infração sanitária grave</strong> — mas não
            desobriga o envio posterior. Ou seja: atrasar não é uma forma de não notificar.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Três níveis de criticidade.</caption>
              <thead>
                <tr>
                  <th scope="col">Nível</th>
                  <th scope="col">Prazo</th>
                  <th scope="col">Situação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Crítico</th>
                  <td class="num">72 horas</td>
                  <td>
                    Urgências que afetem a segurança do paciente e o risco iminente à saúde pública
                    (art. 34).
                  </td>
                </tr>
                <tr>
                  <th scope="row">Alto</th>
                  <td class="num">15 dias</td>
                  <td>
                    Eventos adversos graves (esperados ou inesperados), inefetividade com risco à
                    vida, vacinas e contraceptivos (art. 30).
                  </td>
                </tr>
                <tr>
                  <th scope="row">Estratégico</th>
                  <td>Envios periódicos</td>
                  <td>Demais notificações e dados de literatura, consolidados no RPBR.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Guarde o encaixe: as notificações
            <strong>individuais</strong> têm prazo curto e vão para o VigiMed; o
            <strong>conjunto</strong> acumulado tem prazo longo e vai para o RPBR. São dois relógios
            diferentes rodando ao mesmo tempo.
          </p>
        </article>

        <article id="captacao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Matriz de comparação</p>
              <h2>Estratégias de captação de dados</h2>
            </div>
          </header>
          <p>
            Por que as reações não são notificadas? Ingenuidade, desconhecimento, receio de processo
            e apatia clínica. A busca ativa corrige essas lacunas — mas custa caro.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Notificação espontânea × busca ativa.</caption>
              <thead>
                <tr>
                  <th scope="col">Característica</th>
                  <th scope="col">Notificação espontânea (passiva)</th>
                  <th scope="col">Busca ativa e monitorização intensiva</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Natureza</th>
                  <td>Recepção não solicitada.</td>
                  <td>Prospecção estruturada e sistemática.</td>
                </tr>
                <tr>
                  <th scope="row">Vantagens</th>
                  <td>Baixo custo operacional.</td>
                  <td>Detecta eventos subnotificados e padrões off-label.</td>
                </tr>
                <tr>
                  <th scope="row">Limitações</th>
                  <td>Subnotificação crônica e viés.</td>
                  <td>Exige altos recursos e equipe dedicada.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="rpbr" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Dados esparsos em inteligência</p>
              <h2>RPBR (IN 63/2020)</h2>
            </div>
          </header>
          <p>
            O relatório consolida fontes heterogêneas em uma análise única, no padrão ICH E2C:
            ensaios clínicos, relatos espontâneos, literatura e erros de medicação.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Periodicidade de submissão.</caption>
              <thead>
                <tr>
                  <th scope="col">Perfil do produto</th>
                  <th scope="col">Frequência</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Medicamentos novos (menos de 5 anos)</th>
                  <td>
                    Semestral nos 2 primeiros anos; anual nos 3 anos subsequentes.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Medicamentos consolidados</th>
                  <td>A cada 5 anos, junto à renovação do registro.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A função do RPBR é <strong>validação contínua do perfil benefício-risco</strong>. Ele não
            é uma prestação de contas burocrática: é o documento em que a empresa demonstra que
            entende o comportamento do produto no mundo real.
          </p>
        </article>

        <article id="pgr" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Arquitetura da mitigação</p>
              <h2>O Plano de Gestão de Risco (PGR)</h2>
            </div>
          </header>
          <p>
            Exigido no registro de novas moléculas, biológicos, alterações estruturais ou na
            identificação de danos inesperados (art. 42). Ele separa dois mundos:
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Atividades de rotina de farmacovigilância</h3>
              <ul class="comparison-list">
                <li>Detecção de sinais.</li>
                <li>Relatórios periódicos.</li>
                <li>Acompanhamento de literatura.</li>
                <li>Atualizações de bula.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>O risco excepcional</h3>
              <p>
                Riscos identificados importantes, riscos potenciais e lacunas críticas de informação
                que forçam o DRM a abrir o <strong>Plano de Minimização de Risco (PMR)</strong>.
              </p>
            </section>
          </div>

          <p class="card-note">
            <strong>PGR × PMR:</strong> o PGR é o documento guarda-chuva, aplicável a todos os novos
            registros, focado em caracterização de segurança e medidas de rotina. O PMR (art. 46) é
            acionado apenas mediante <strong>riscos identificados críticos</strong> e exige
            intervenções proativas e comportamentais além da rotina.
          </p>
        </article>

        <article id="pmr-ciclo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Quando a rotina não basta</p>
              <h2>O ciclo operacional do PMR</h2>
            </div>
          </header>
          <ol class="steps">
            <li>
              <strong>Caracterização</strong> — definir a especificação do risco clínico (epidemiologia
              e severidade).
            </li>
            <li>
              <strong>Intervenção</strong> — selecionar as ferramentas de minimização adequadas ao
              público-alvo.
            </li>
            <li>
              <strong>Implementação</strong> — executar a comunicação e os controles, sem cunho
              promocional.
            </li>
            <li>
              <strong>Avaliação</strong> — medir a efetividade, reavaliar e ajustar, fechando o ciclo.
            </li>
          </ol>
          <p class="card-note">
            <strong>Sem cunho promocional</strong> não é detalhe: material de minimização de risco
            não pode ser usado como peça de marketing. Se a comunicação ensina a usar melhor, ela
            protege; se vende, ela falha.
          </p>
        </article>

        <article id="ferramentas" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">09</span>
            <div>
              <p class="card-heading__eyebrow">Intervenções além da bula</p>
              <h2>Ferramentas e táticas de minimização</h2>
            </div>
          </header>
          <p>
            São intervenções adicionais à bula, desenhadas para alterar o comportamento de quem
            prescreve, dispensa ou utiliza o medicamento:
          </p>

          <div class="factor-grid">
            <section class="concept-panel concept-panel--mint">
              <h3>Comunicação direta</h3>
              <p>
                Carta aos Profissionais de Saúde (<em>DHPC</em>) e alertas urgentes de segurança.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Educação</h3>
              <p>Guias de prescrição, checklists médicos e cartilhas para pacientes.</p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Controle de acesso</h3>
              <p>
                Programas de distribuição controlada ou acesso restrito a especialistas treinados.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Segurança prévia</h3>
              <p>
                Requisitos de testagem obrigatória (função hepática, gravidez) antes da administração.
              </p>
            </section>
          </div>
        </article>

        <article id="efetividade" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">10</span>
            <div>
              <p class="card-heading__eyebrow">O calcanhar de Aquiles</p>
              <h2>Medindo a efetividade do PMR</h2>
            </div>
          </header>
          <p>
            A RDC 406 exige explicitamente que o método avalie a <strong>eficácia das ações</strong>
            implementadas. Se a meta falha, medidas corretivas (<strong>CAPA</strong>) são exigidas.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Indicadores de processo</h3>
              <ul class="comparison-list">
                <li>Cartas entregues.</li>
                <li>Checklists impressos.</li>
                <li>Acessos ao portal.</li>
              </ul>
              <p class="factor__example">Medem o esforço de implementação corporativa.</p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Indicadores de resultado</h3>
              <ul class="comparison-list">
                <li>Implementação efetiva do PMR na prática.</li>
                <li>Redução real do risco clínico.</li>
              </ul>
              <p class="factor__example">Medem o efeito no mundo real.</p>
            </section>
          </div>

          <p class="card-note">
            <strong>Processos perfeitos não garantem resultados.</strong> Distribuir 100% das cartas
            não significa que alguém as leu — por isso os dois tipos de indicador precisam ser
            medidos juntos.
          </p>
        </article>

        <article id="inspecao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">11</span>
            <div>
              <p class="card-heading__eyebrow">O teste de estresse regulatório</p>
              <h2>Inspeção sanitária</h2>
            </div>
          </header>
          <p>
            As inspeções do SNVS testam a operacionalidade real da RDC 406/2020 — não o que está
            escrito no papel, mas o que acontece na rotina.
          </p>
          <ul class="key-points">
            <li>
              <strong>Autoinspeção contínua</strong> — preferencialmente anual, não excedendo 2 anos;
              registros retidos por 5 anos.
            </li>
            <li>
              <strong>Rastreabilidade histórica</strong> — banco de dados e registros individuais de
              farmacovigilância por, no mínimo, 20 anos.
            </li>
            <li>
              <strong>Cultura de ação (CAPA)</strong> — falhas identificadas internamente exigem ações
              corretivas e preventivas documentadas.
            </li>
            <li>
              <strong>Controle de terceiros</strong> — terceirização exige contratos rigorosos; a
              subcontratação (quarteirização) das atividades é expressamente vedada.
            </li>
          </ul>
        </article>

        <article id="agravantes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">12</span>
            <div>
              <p class="card-heading__eyebrow">O momento da verdade</p>
              <h2>Agravantes e atenuantes</h2>
            </div>
          </header>
          <p>
            A postura corporativa define o resultado da auditoria. A conformidade proativa mitiga
            riscos legais (Lei nº 6.437).
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>O que a autoridade sanitária enxerga em cada postura.</caption>
              <thead>
                <tr>
                  <th scope="col">Agravantes (alerta)</th>
                  <th scope="col">Atenuantes (conformidade proativa)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RFV figurativo, sem autonomia real.</td>
                  <td>Cultura interna de notificação robusta e intersetorial.</td>
                </tr>
                <tr>
                  <td>Ocultação ou atraso de eventos críticos de 72 h.</td>
                  <td>Autoinspeções rigorosas evidenciando melhoria contínua.</td>
                </tr>
                <tr>
                  <td>Subnotificação crônica institucionalizada.</td>
                  <td>Submissão pontual de RPBRs de alta qualidade.</td>
                </tr>
                <tr>
                  <td>Detecção de falhas de segurança sem abertura de plano CAPA.</td>
                  <td>PMRs atualizados voluntariamente antes da exigência da Anvisa.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="naranjo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">13</span>
            <div>
              <p class="card-heading__eyebrow">Rigor científico</p>
              <h2>Causalidade na visão da indústria</h2>
            </div>
          </header>
          <p>
            A farmacovigilância depende da avaliação rigorosa da probabilidade de o evento estar
            relacionado ao fármaco. Na leitura da indústria, as quatro categorias se resumem a:
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Categorias de causalidade e sua leitura prática.</caption>
              <thead>
                <tr>
                  <th scope="col">Categoria</th>
                  <th scope="col">Leitura</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Definida</th>
                  <td>
                    Ocorrência temporal plausível; reintrodução com resultado positivo; não
                    explicável por outras causas.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Provável</th>
                  <td>
                    Sequência razoável; improvável atribuir a outras doenças; sem reintrodução.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Possível</th>
                  <td>Tempo razoável, mas explicável por comorbidades ou outras drogas.</td>
                </tr>
                <tr>
                  <th scope="row">Improvável</th>
                  <td>
                    Sem relação temporal lógica; causas subjacentes oferecem explicações muito mais
                    plausíveis.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="caso" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">14</span>
            <div>
              <p class="card-heading__eyebrow">Estudo de caso didático</p>
              <h2>O paradoxo da «Teratridina»</h2>
            </div>
          </header>
          <p>
            Caso usado em sala (molécula <strong>fictícia</strong>) para mostrar como um PMR é
            desenhado na prática:
          </p>

          <div class="worked-example">
            <h3>Ficha de dossiê clínico</h3>
            <ul class="comparison-list">
              <li><strong>Classe:</strong> imunomodulador potente.</li>
              <li><strong>Benefício:</strong> alta eficácia no controle de exacerbações autoimunes graves.</li>
              <li><strong>Risco crítico:</strong> alta teratogenicidade — a exposição embrionária causa malformações congênitas severas.</li>
            </ul>
            <p>
              O desafio: <strong>como comercializar uma molécula transformadora garantindo risco
              zero de exposição gestacional?</strong>
            </p>
          </div>

          <p>
            A resposta regulatória é a arquitetura do PMR: medidas de rotina
            <strong>observam e relatam</strong> o dano; as medidas adicionais
            <strong>atuam para impedir</strong> que o evento aconteça.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Rotina × medidas adicionais no caso do imunomodulador.</caption>
              <thead>
                <tr>
                  <th scope="col">Medidas de rotina</th>
                  <th scope="col">Medidas adicionais</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Captação via VigiMed.</td>
                  <td>Guias educacionais.</td>
                </tr>
                <tr>
                  <td>Elaboração de RPBRs.</td>
                  <td>Termos de consentimento obrigatórios.</td>
                </tr>
                <tr>
                  <td>Busca contínua de sinais de segurança.</td>
                  <td>Programas de acesso controlado.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="pilares-defesa" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">15</span>
            <div>
              <p class="card-heading__eyebrow">Risco mitigado: exposição zero</p>
              <h2>Os três pilares de defesa do PMR</h2>
            </div>
          </header>
          <p>
            Cada pilar atua como um <strong>filtro sequencial</strong>: se a comunicação falha, o
            compromisso legal captura o erro; se o erro humano ocorre, a barreira de sistema impede
            a dispensação.
          </p>

          <div class="factor-grid">
            <section class="concept-panel concept-panel--mint">
              <h3>Pilar 1 · Conscientização</h3>
              <p>
                Guia educacional em linguagem não técnica, com instrução irrefutável sobre
                contracepção dupla (barreira + hormonal) durante todo o tratamento e diretrizes de
                suspensão em caso de suspeita de gravidez.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Pilar 2 · Comprometimento</h3>
              <p>
                Termo de Consentimento Livre e Esclarecido (TCLE): confirmação documentada de que a
                paciente entendeu o risco teratogênico, com assinatura conjunta de médico e paciente
                — e a existência física do termo é requisito para a liberação na farmácia.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Pilar 3 · Barreira logística</h3>
              <p>
                Sistema de acesso controlado: prescrição + TCLE assinado + upload de teste de
                gravidez negativo (beta-hCG) → código de autorização → dispensação exclusiva em
                farmácias credenciadas.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Jornada integrada</h3>
              <ol class="steps">
                <li>Consultório: diagnóstico, aconselhamento e assinatura do TCLE.</li>
                <li>Laboratório: realização do beta-hCG.</li>
                <li>Tecnologia/DRM: inserção dos dados no portal e liberação sistêmica.</li>
                <li>Acesso: retirada do medicamento com segurança garantida.</li>
              </ol>
            </section>
          </div>

          <p class="card-note">
            Elimina a dispensação acidental ou off-label: o medicamento só é liberado mediante
            <strong>prova biológica de segurança</strong>. O sistema não confia no esquecimento
            humano — ele o impede.
          </p>
        </article>

        <article id="jornada" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">16</span>
            <div>
              <p class="card-heading__eyebrow">Interação sistêmica</p>
              <h2>Indicadores, VigiMed e ciclo de melhoria</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Avaliação de efetividade do caso: processo × resultado.</caption>
              <thead>
                <tr>
                  <th scope="col">Indicadores de processo (execução)</th>
                  <th scope="col">Indicadores de resultado (realidade clínica)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>% de médicos prescritores certificados no portal.</td>
                  <td>Taxa de gestações durante o uso do medicamento (meta = ZERO).</td>
                </tr>
                <tr>
                  <td>% de pacientes que assinaram o TCLE antes da dispensação.</td>
                  <td>Número de dispensações bloqueadas por ausência de beta-hCG.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Interação sistêmica: VigiMed e busca ativa</h3>
          <p>
            Um desvio crítico do PMR — como uma gravidez exposta — é identificado no hospital
            sentinela, notificado ao DRM e chega ao SNVS/VigiMed. Graves e desvios críticos exigem
            notificação em prazo máximo de <strong>15 dias corridos</strong> (art. 30). Além disso, o
            DRM e a Rede Sentinela devem investigar proativamente dados hospitalares (prontuários)
            para capturar subnotificações de falhas contraceptivas.
          </p>

          <h3>Autoinspeção e melhoria contínua (art. 27/28)</h3>
          <p>
            A auditoria interna é realizada anualmente para avaliar o cumprimento das Boas Práticas
            de Farmacovigilância e gera <strong>CAPA</strong>. Exemplo prático: se a avaliação de
            efetividade detectar falhas no entendimento do guia educacional, a autoinspeção gera um
            plano de ação para redesenhar a linguagem clínica do material.
          </p>
        </article>

        <article id="proposito" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">17</span>
            <div>
              <p class="card-heading__eyebrow">Síntese</p>
              <h2>O propósito final: equilíbrio benefício-risco</h2>
            </div>
          </header>
          <p>
            A conformidade regulatória (SNVS), o rigor científico e de dados e a gestão corporativa
            de risco convergem para um único ponto: <strong>segurança do paciente e eficácia clínica
            no mundo real</strong>.
          </p>
          <p class="card-note">
            Um PMR bem estruturado sob a RDC 406/2020 não é punição burocrática: é a ferramenta
            arquitetônica que permite que pacientes recebam inovações farmacológicas poderosas com o
            nível máximo de segurança humana.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              Proatividade = detecção de sinais + PMR + RPBR; a vigilância deixa de ser repositório
              e passa a ser inteligência clínica.
            </li>
            <li>
              RDC 406/2020 = estrutura e defesa; IN 63/2020 = inteligência e monitoramento.
            </li>
            <li>
              RFV: residência no Brasil, autonomia tática, acesso a dados (qualidade/fábrica) e
              gestão do plano de contingência; cargo não terceirizável.
            </li>
            <li>
              Prazos: 72 h (crítico/urgência), 15 dias (EAG, inefetividade com risco, vacinas e
              contraceptivos), envios periódicos no RPBR.
            </li>
            <li>
              Descumprir prazo é infração sanitária grave, mas não desobriga o envio posterior.
            </li>
            <li>
              RPBR: semestral nos 2 primeiros anos e anual nos 3 seguintes (produtos novos); a cada 5
              anos para consolidados.
            </li>
            <li>
              PGR (art. 42) para todos os novos registros; PMR (art. 46) apenas para riscos críticos
              identificados.
            </li>
            <li>
              Ciclo do PMR: caracterização → intervenção → implementação → avaliação (com ajuste).
            </li>
            <li>
              Indicadores de processo medem esforço; de resultado medem redução real do risco.
            </li>
            <li>
              Inspeção: autoinspeção anual (registros por 5 anos), rastreabilidade de 20 anos, CAPA e
              vedação à quarteirização.
            </li>
            <li>
              Agravantes: RFV figurativo, ocultação de eventos críticos, subnotificação
              institucionalizada e ausência de CAPA.
            </li>
            <li>
              No caso didático: três pilares (conscientização, TCLE e barreira logística)
              transformam uma molécula teratogênica em terapia possível com exposição zero.
            </li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir do material de Farmacovigilância da UNIFAL-MG —
            «Farmacovigilância na indústria: o paradigma da proatividade», com base na RDC nº
            406/2020 e na IN nº 63/2020. O caso «Teratridina» é um exercício didático com molécula
            fictícia.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/industria-rdc">
            <span>Anterior</span>
            ← Indústria: RDC 406 e IN 63
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia">
            <span>Todos</span>
            Farmacovigilância — índice →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
