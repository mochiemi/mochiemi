<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/unifal/farmacovigilancia">Farmacovigilância</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Indústria e RDC 406</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · FARMACOVIGILÂNCIA · ASSUNTO 6.1</p>
        <h1 class="intro__title">Farmacovigilância na indústria</h1>
        <p class="intro__lead">
          Diretrizes, regulamentações e a arquitetura da segurança clínica segundo a
          <strong>RDC nº 406/2020</strong> e a <strong>IN nº 63/2020</strong>: por que o ensaio
          clínico não basta, quem responde legalmente (DRM e RFV), o que é obrigatório notificar,
          quais são os prazos no VigiMed, como se gera um sinal, e como funcionam o PGR, o RPBR e as
          ações de minimização de risco.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Guia de estudo</span>
          <span class="intro__chip">13 tópicos essenciais</span>
          <span class="intro__chip">Assuntos regulatórios</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#mundo-real">Mundo real</a>
        <a href="#alicerce">Alicerce legal</a>
        <a href="#definicoes">Definições</a>
        <a href="#drn-rfv">DRM e RFV</a>
        <a href="#sistema">Sistema de FV</a>
        <a href="#escopo">O que notificar</a>
        <a href="#prazos">Prazos</a>
        <a href="#sinal">Sinal</a>
        <a href="#pgr">PGR</a>
        <a href="#rpbr">RPBR</a>
        <a href="#pgr-rpbr">PGR × RPBR</a>
        <a href="#acoes">Minimização</a>
        <a href="#ecossistema">Ecossistema</a>
      </nav>

      <div class="lesson">
        <article id="mundo-real" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">Por que a farmacovigilância existe</p>
              <h2>Do ensaio clínico ao mundo real</h2>
            </div>
          </header>
          <p>
            Ensaios clínicos de fase I a III trabalham com população <strong>restrita e altamente
            selecionada</strong> e tempo de observação <strong>limitado</strong>. O foco é eficácia
            comprovada e perfil de segurança inicial. Quando o medicamento é aprovado, muda tudo:
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>O que muda entre o ensaio clínico e o pós-mercado.</caption>
              <thead>
                <tr>
                  <th scope="col">Aspecto</th>
                  <th scope="col">Fases I a III</th>
                  <th scope="col">Pós-mercado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">População</th>
                  <td>Restrita e altamente selecionada.</td>
                  <td>
                    Heterogênea — comorbidades, polifarmácia, gestantes e idosos.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Tempo de observação</th>
                  <td>Limitado.</td>
                  <td>Contínuo e indefinido.</td>
                </tr>
                <tr>
                  <th scope="row">Foco</th>
                  <td>Eficácia e perfil de segurança inicial.</td>
                  <td>Avaliação contínua da relação benefício-risco (RDC 406/2020).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A farmacovigilância moderna é a ciência de detecção, avaliação e prevenção contínua —
            ela existe para compensar as limitações inerentes aos ensaios clínicos controlados.
            Eventos raros, tardios ou restritos a subgrupos aparecem justamente aqui.
          </p>
        </article>

        <article id="alicerce" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Duas normas, dois papéis</p>
              <h2>O alicerce regulatório</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>RDC nº 406/2020 — o sistema e a operação</h3>
              <ul class="comparison-list">
                <li>
                  Estabelece as <strong>Boas Práticas de Farmacovigilância</strong> para os
                  detentores de registro de medicamento (DRM).
                </li>
                <li>Responsabilidades do DRM.</li>
                <li>Prazos de notificação.</li>
                <li>Arquitetura do sistema.</li>
                <li>Plano de Gestão de Risco (PGR).</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>IN nº 63/2020 — a análise e o relato periódico</h3>
              <ul class="comparison-list">
                <li>
                  Dispõe especificamente sobre o
                  <strong>Relatório Periódico de Avaliação Benefício-Risco (RPBR)</strong>.
                </li>
                <li>Formato ICH E2C.</li>
                <li>Frequência de submissão.</li>
                <li>Análise integrada retrospectiva.</li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            Regra de leitura: a <strong>RDC</strong> diz <em>como o sistema deve funcionar</em>; a
            <strong>IN</strong> diz <em>como o relatório periódico deve ser escrito e entregue</em>.
            Uma é estrutura, a outra é inteligência consolidada.
          </p>
        </article>

        <article id="definicoes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Vocabulário que decide prazos</p>
              <h2>Matriz de definições críticas</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Evento adverso, reação adversa e erro de medicação.</caption>
              <thead>
                <tr>
                  <th scope="col">Conceito</th>
                  <th scope="col">Definição</th>
                  <th scope="col">Diferencial</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Evento adverso (EA)</th>
                  <td>Qualquer ocorrência médica indesejável em paciente.</td>
                  <td>
                    Não exige suspeita de nexo causal com o tratamento — é o conceito guarda-chuva.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Reação adversa a medicamento (RAM)</th>
                  <td>
                    Resposta prejudicial e não intencional, nas doses usualmente empregadas.
                  </td>
                  <td>Caracteriza-se pela suspeita de relação causal.</td>
                </tr>
                <tr>
                  <th scope="row">Erro de medicação</th>
                  <td>Evento evitável que leva ao uso inapropriado ou a dano.</td>
                  <td>
                    Envolve falhas no processo (prescrição, dispensação, administração) — é sempre
                    evitável em princípio.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="drn-rfv" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Responsabilidade legal e operacional</p>
              <h2>DRM e o Responsável pela Farmacovigilância</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Detentor de Registro de Medicamento</h3>
              <p>
                Responsabilidade <strong>inalienável</strong> pela segurança dos produtos que
                registra.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Responsável pela Farmacovigilância (RFV)</h3>
              <ul class="comparison-list">
                <li>Profissional de saúde de nível superior, residente no Brasil.</li>
                <li>
                  Disponível sempre que acionado, com substituto formalmente designado.
                </li>
                <li>
                  Autoridade e autonomia total para implementar alterações de segurança.
                </li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            <strong>Regra da terceirização (art. 10):</strong> o DRM pode terceirizar a execução
            operacional dos processos de farmacovigilância, mas a figura do RFV (e de seu substituto)
            e a responsabilidade legal perante a Anvisa <strong>nunca</strong> podem ser
            terceirizadas.
          </p>
        </article>

        <article id="sistema" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">O que a inspeção procura</p>
              <h2>A arquitetura do sistema de farmacovigilância</h2>
            </div>
          </header>

          <div class="factor-grid">
            <section class="concept-panel concept-panel--mint">
              <h3>Documentação (POPs)</h3>
              <p>
                Procedimentos Operacionais Padrão claros, legíveis e rastreáveis para todas as
                etapas: coleta, avaliação, envio e RPBR.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Capacitação de pessoal</h3>
              <p>
                Treinamento contínuo documentado para todas as equipes — indo além da matriz médica,
                para incluir Vendas e Serviço de Atendimento ao Consumidor (SAC).
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Banco de dados e tecnologia</h3>
              <p>
                Sistema informático rastreável e seguro, com retenção legal mínima de
                <strong>20 anos</strong> e planos de contingência para falha de TI.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Controle de qualidade</h3>
              <p>
                Auditorias internas e autoinspeção, preferencialmente <strong>1 vez por ano</strong>,
                não excedendo <strong>2 anos</strong>.
              </p>
            </section>
          </div>

          <p class="card-note">
            A equipe de vendas é parte do sistema: é frequentemente o primeiro a ouvir um relato de
            evento adverso em campo. Se ela não sabe reconhecer e encaminhar, o caso se perde antes
            de chegar ao banco de dados.
          </p>
        </article>

        <article id="escopo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Escopo de captação obrigatória (art. 29)</p>
              <h2>O espectro da notificação</h2>
            </div>
          </header>
          <p>
            Não é só «reação adversa». A RDC 406/2020 obriga o DRM a captar e registrar:
          </p>
          <ul class="key-points">
            <li>Suspeitas de reações adversas a medicamentos.</li>
            <li>Eventos adversos por desvio de qualidade.</li>
            <li>Eventos decorrentes de uso não aprovado (off-label).</li>
            <li>Interações medicamentosas.</li>
            <li>Inefetividade terapêutica, total ou parcial.</li>
            <li>Intoxicações relacionadas a medicamentos.</li>
            <li>Uso abusivo e superdose.</li>
            <li>Exposição durante gravidez e lactação.</li>
            <li>Erros de medicação, reais e potenciais.</li>
          </ul>
          <p class="card-note">
            <strong>Atenção:</strong> todo dado de segurança — mesmo aquele ainda não confirmado por
            nexo causal — deve ser obrigatoriamente registrado no banco de dados do DRM. O registro
            não é confissão de culpa; é matéria-prima da avaliação.
          </p>
        </article>

        <article id="prazos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">O relógio da regulação</p>
              <h2>Prazos de submissão no VigiMed</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Três velocidades de resposta — cada uma com seu gatilho clínico.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Prazo</th>
                  <th scope="col">Situação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">Menos de 72 horas</td>
                  <td>
                    Urgências que afetem a segurança do paciente. Comunicações públicas exigem
                    notificação prévia ou simultânea à Anvisa.
                  </td>
                </tr>
                <tr>
                  <td class="num">7 dias</td>
                  <td>
                    Evento adverso grave ocorrido no Brasil que envolva óbito ou risco de morte.
                  </td>
                </tr>
                <tr>
                  <td class="num">Até 15 dias</td>
                  <td>
                    Todos os demais eventos adversos graves nacionais, inefetividade com risco à
                    vida e casos associados a vacinas e contraceptivos.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            <strong>Nota técnica:</strong> o envio ao SNVS/Anvisa é feito pelo sistema
            <strong>VigiMed</strong>, no padrão <strong>E2B(R3)</strong>, com os dicionários globais
            mandatórios — <strong>MedDRA</strong> para eventos médicos e
            <strong>WHODrug</strong> para medicamentos.
          </p>
        </article>

        <article id="sinal" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Do relato isolado à inteligência</p>
              <h2>A geração de sinal</h2>
            </div>
          </header>
          <ol class="steps">
            <li>
              <strong>Relato isolado (notificação)</strong> — dados crus e fragmentados, captados
              por notificação espontânea ou busca ativa.
            </li>
            <li>
              <strong>Banco de dados (acúmulo)</strong> — agrupamento sistemático com codificação
              MedDRA/WHODrug, permitindo cruzamento estatístico e clínico contínuo.
            </li>
            <li>
              <strong>Geração de sinal (inteligência clínica)</strong> — informação emergente que
              sugere uma possível relação causal nova ou mudança na frequência/intensidade de uma
              reação conhecida, exigindo investigação formal de causalidade.
            </li>
          </ol>
          <p class="card-note">
            Sem a fase 2 não existe fase 3: a codificação padronizada é o que permite comparar
            «dor de cabeça» relatada por milhares de pacientes diferentes em centenas de hospitais.
            É também por isso que dicionários como MedDRA e WHODrug são obrigatórios.
          </p>
        </article>

        <article id="pgr" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">09</span>
            <div>
              <p class="card-heading__eyebrow">Visão proativa</p>
              <h2>Plano de Gestão de Risco (PGR)</h2>
            </div>
          </header>

          <h3>Quando é exigido</h3>
          <ul class="key-points">
            <li>Registro de novas moléculas sintéticas ou biológicas.</li>
            <li>Vacinas.</li>
            <li>Biológicos por comparabilidade (biossimilares).</li>
            <li>Alterações significativas de registro que impactem a segurança.</li>
          </ul>

          <h3>A anatomia do PGR</h3>
          <div class="table-scroll">
            <table class="data-table">
              <caption>Os três componentes centrais do PGR.</caption>
              <thead>
                <tr>
                  <th scope="col">Componente</th>
                  <th scope="col">Conteúdo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">A · Especificações de segurança</th>
                  <td>Sumário do perfil conhecido e mapeamento das informações faltantes.</td>
                </tr>
                <tr>
                  <th scope="row">B · Plano de farmacovigilância</th>
                  <td>Ações de rotina e atividades de coleta adicionais estruturadas.</td>
                </tr>
                <tr>
                  <th scope="row">C · Plano de Minimização de Risco (PMR)</th>
                  <td>
                    Ações intervencionistas para mitigar riscos confirmados, com métricas de
                    efetividade.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="rpbr" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">10</span>
            <div>
              <p class="card-heading__eyebrow">Relatório Periódico de Avaliação Benefício-Risco</p>
              <h2>RPBR</h2>
            </div>
          </header>
          <p>
            É a análise sistemática e global do perfil de segurança, baseada estritamente no modelo
            <strong>E2C</strong> do guia internacional ICH. Consolida todas as notificações — graves e
            não graves, nacionais e internacionais — além de estudos e literatura científica.
          </p>
          <div class="formula">
            <span>os benefícios ainda superam os riscos identificados no período?</span>
          </div>

          <h3>Mecânica de prazos (IN 63/2020)</h3>
          <ul class="key-points">
            <li>
              Ancorado na <strong>Data de Nascimento Internacional</strong> (IBD —
              <em>International Birth Date</em>).
            </li>
            <li>
              Exige o fechamento estrito do banco de dados (<em>Data Lock Point</em>).
            </li>
            <li>
              Prazo de submissão à Anvisa: <strong>70 dias</strong> após o fechamento quando a
              periodicidade exigida for menor que 12 meses, ou <strong>90 dias</strong> quando for
              superior a 12 meses.
            </li>
          </ul>

          <h3>Frequência</h3>
          <div class="table-scroll">
            <table class="data-table">
              <caption>Periodicidade do relatório conforme o tempo de mercado.</caption>
              <thead>
                <tr>
                  <th scope="col">Medicamento</th>
                  <th scope="col">Periodicidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Novo (menos de 5 anos)</th>
                  <td>
                    Semestral nos <strong>2 primeiros anos</strong>; anual nos
                    <strong>3 anos seguintes</strong>.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Consolidado (mais de 5 anos)</th>
                  <td>
                    A cada <strong>5 anos</strong>, conjuntamente à renovação do registro.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="pgr-rpbr" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">11</span>
            <div>
              <p class="card-heading__eyebrow">Síntese estrutural</p>
              <h2>PGR × RPBR: futuro e passado</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Os dois documentos olham para direções opostas do tempo.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Dimensão</th>
                  <th scope="col">PGR</th>
                  <th scope="col">RPBR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Natureza temporal</th>
                  <td>Proativo e prospectivo — olha o futuro do uso clínico.</td>
                  <td>Retrospectivo e periódico — consolida a experiência passada.</td>
                </tr>
                <tr>
                  <th scope="row">Objetivo central</th>
                  <td>
                    Antecipar e mapear riscos potenciais, com planos de contenção e mitigação.
                  </td>
                  <td>
                    Analisar o volume acumulado de dados globais para revalidar (ou alterar) o
                    equilíbrio benefício-risco.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Escopo dos dados</th>
                  <td>
                    Planejamento de estudos, mapeamento de populações não testadas e busca de
                    informações críticas faltantes.
                  </td>
                  <td>
                    Notificações reais globais, erros de medicação, dados off-label e vasta
                    literatura do período.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="acoes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">12</span>
            <div>
              <p class="card-heading__eyebrow">Quando a relação fica desfavorável</p>
              <h2>Ações corretivas e minimização de risco</h2>
            </div>
          </header>
          <p>
            <strong>Gatilho:</strong> alteração desfavorável na relação benefício-risco identificada
            pelo sistema de farmacovigilância. <strong>Ação imediata:</strong> comunicação
            compulsória e imediata à Anvisa. A partir daí, as medidas escalam:
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Escada de intervenções regulatórias.</caption>
              <thead>
                <tr>
                  <th scope="col">Medida</th>
                  <th scope="col">O que envolve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Atualização regulatória</th>
                  <td>
                    Mudanças globais no CCDS/CCSI e adequação imediata da bula nacional, com
                    inclusão de contraindicações e novas RAMs.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Restrição farmacológica</th>
                  <td>
                    Alteração de posologia, mudança na via de administração ou restrição severa a
                    populações específicas.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Comunicação de risco</th>
                  <td>
                    Alertas públicos e cartas direcionadas aos profissionais de saúde detalhando os
                    novos riscos.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Ação extrema</th>
                  <td>
                    Recolhimento compulsório de lotes ou cancelamento/suspensão definitiva do
                    registro.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="ecossistema" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">13</span>
            <div>
              <p class="card-heading__eyebrow">O sistema completo</p>
              <h2>O ecossistema de proteção global</h2>
            </div>
          </header>
          <ol class="steps">
            <li>
              <strong>Origem clínica (captação)</strong> — pacientes, médicos, farmacêuticos e
              hospitais da Rede Sentinela realizam busca ativa e notificação passiva.
            </li>
            <li>
              <strong>Indústria (sistematização)</strong> — o DRM codifica as notificações,
              investiga a causalidade e submete estruturalmente pelo VigiMed.
            </li>
            <li>
              <strong>Autoridade nacional (regulação)</strong> — a Anvisa (SNVS) recebe os dados
              padronizados, avalia os RPBRs, realiza inspeções in loco e emite medidas sanitárias.
            </li>
            <li>
              <strong>Repositório global (vigilância mundial)</strong> — o Uppsala Monitoring Centre
              (UMC/OMS) recebe os dados no VigiBase: um evento isolado no interior do Brasil ajuda a
              confirmar um alerta na Europa.
            </li>
          </ol>

          <div
            class="formula"
            aria-label="A farmacovigilância vai além do cumprimento de prazos e da submissão de dossiês: é a inteligência em tempo real que sustenta a ética médica e garante a segurança do paciente"
          >
            <span>
              «A farmacovigilância vai muito além do cumprimento estrito de prazos e da submissão de
              dossiês. Ela é a <strong>inteligência em tempo real</strong> que sustenta a ética
              médica e garante a segurança do paciente e o uso racional dos medicamentos em escala
              global.»
            </span>
          </div>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              RDC 406/2020 = Boas Práticas de Farmacovigilância (sistema, prazos, PGR). IN 63/2020 =
              RPBR (formato ICH E2C, frequência, análise integrada).
            </li>
            <li>
              EA não exige nexo causal; RAM exige suspeita de relação causal; erro de medicação é
              falha de processo, evitável.
            </li>
            <li>
              O RFV e seu substituto não podem ser terceirizados (art. 10); a execução operacional
              pode.
            </li>
            <li>
              Sistema de FV: POPs, capacitação (incluindo vendas e SAC), banco de dados com retenção
              de 20 anos e autoinspeção anual (máximo 2 anos).
            </li>
            <li>
              Escopo obrigatório inclui off-label, inefetividade, erros de medicação, exposição na
              gravidez e desvios de qualidade.
            </li>
            <li>
              Prazos: menos de 72 h (urgências de segurança), 7 dias (óbito ou risco de morte), 15
              dias (demais graves).
            </li>
            <li>
              VigiMed usa padrão E2B(R3) com MedDRA e WHODrug.
            </li>
            <li>
              Sinal nasce do acúmulo codificado de notificações — sem banco de dados, não há sinal.
            </li>
            <li>
              PGR: novas moléculas, vacinas, biossimilares e alterações que impactem segurança; três
              componentes (A, B e C).
            </li>
            <li>
              RPBR: 70 dias após o fechamento se periodicidade menor que 12 meses; 90 dias se maior.
            </li>
            <li>
              Medidas possíveis: atualização de bula/CCDS, restrição, comunicação de risco e
              recolhimento/suspensão.
            </li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir do material de Farmacovigilância da UNIFAL-MG — «Módulo
            avançado de assuntos regulatórios: farmacovigilância na indústria farmacêutica», assunto
            6.1, baseado na RDC nº 406/2020 e na IN nº 63/2020.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/causalidade">
            <span>Anterior</span>
            ← Causalidade: OMS-UMC em perspectiva
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/industria-pratica">
            <span>Próximo</span>
            Indústria na prática: proatividade e PMR →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
