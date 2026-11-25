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
        <span>No hospital</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · FARMACOVIGILÂNCIA · ASSUNTO 5</p>
        <h1 class="intro__title">Fazendo farmacovigilância no hospital</h1>
        <p class="intro__lead">
          Os três métodos de vigilância (notificação espontânea, busca ativa e monitorização
          intensiva), por que as RAM não são notificadas, como funcionam os hospitais sentinelas,
          como se avalia a causalidade (Naranjo, Kramer, Karch &amp; Lasagna), o que notificar — e o
          primeiro contato com as obrigações da indústria na RDC 406/2020 e na IN 63/2020.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Guia de estudo</span>
          <span class="intro__chip">13 tópicos essenciais</span>
          <span class="intro__chip">Prof. Dr. Ricardo Radighieri Rascado</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#metodos">Métodos</a>
        <a href="#espontanea">Notificação espontânea</a>
        <a href="#busca-ativa">Busca ativa</a>
        <a href="#mim">MIM</a>
        <a href="#comparacao">Comparação</a>
        <a href="#nao-notificam">Por que não notificam</a>
        <a href="#sentinelas">Rede Sentinela</a>
        <a href="#profissionais">Profissionais</a>
        <a href="#causalidade">Causalidade</a>
        <a href="#algoritmos">Algoritmos</a>
        <a href="#sinal">Sinal</a>
        <a href="#o-que-notificar">O que notificar</a>
        <a href="#industria">Indústria e RDC 406</a>
      </nav>

      <div class="lesson">
        <article id="metodos" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O mapa do capítulo</p>
              <h2>Três formas de captar eventos adversos</h2>
            </div>
          </header>
          <p>
            Fazer farmacovigilância no hospital é decidir <strong>como</strong> os eventos adversos
            vão aparecer. Existem três métodos, do mais barato e menos sensível ao mais caro e mais
            completo:
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--rose">
              <h3>Notificação espontânea</h3>
              <p>
                O profissional (ou o paciente) decide relatar. É <strong>passiva</strong>: o sistema
                espera. Sofre de <strong>subnotificação</strong>, notificação seletiva e notificação
                incompleta.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Busca ativa</h3>
              <p>
                A equipe <strong>procura</strong> os casos: revisa prontuários, entrevista pacientes,
                cruza bases de dados. Corrige a subnotificação, mas consome recursos humanos e tempo.
              </p>
            </section>
          </div>

          <p>
            E há a <strong>monitorização intensiva de medicamentos (MIM)</strong>: um sistema
            estruturado, prospectivo e em tempo real, aplicado a populações ou medicamentos
            específicos, que coleta dados padronizados de segurança <em>e</em> eficácia. Ela custa
            caro e é mais complexa, mas produz os dados de maior qualidade.
          </p>
          <p class="card-note">
            Busca ativa e MIM são estratégias <strong>proativas</strong>, mas não são sinônimos: a
            busca ativa pode ser pontual e geral; a MIM é sempre estruturada, prospectiva e aplicada
            a um recorte definido. A comparação detalhada está na
            <router-link to="/resumins/unifal/farmacovigilancia/busca-ativa">página do assunto 5.1</router-link>.
          </p>
        </article>

        <article id="espontanea" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">O método que sustenta o sistema</p>
              <h2>Notificação espontânea e seus inconvenientes</h2>
            </div>
          </header>
          <p>
            A notificação espontânea é a base de todos os sistemas nacionais — é barata, cobre toda
            a população exposta e capta justamente as reações que o ensaio clínico não viu. O
            problema é o denominador que falta e o numerador que não aparece:
          </p>
          <ul class="key-points">
            <li>
              <strong>Subnotificação</strong> — a maior parte dos eventos nunca chega ao sistema.
            </li>
            <li>
              <strong>Notificação seletiva</strong> — notifica-se o que é grave, novo ou
              midiático; o resto desaparece.
            </li>
            <li>
              <strong>Notificação incompleta</strong> — sem dados de tempo, dose, desfecho ou
              história, o caso não permite avaliar causalidade.
            </li>
          </ul>
          <p>
            Consequência prática: na notificação espontânea, o número de casos <em>não</em> mede a
            frequência real da reação. Ele mede o quanto as pessoas notificam.
          </p>
        </article>

        <article id="busca-ativa" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Estratégia proativa</p>
              <h2>Busca ativa</h2>
            </div>
          </header>
          <p>
            A busca ativa é uma abordagem <strong>sistemática e deliberada</strong> para procurar
            eventos adversos em determinada população, instituição ou base de dados, mesmo que não
            tenham sido espontaneamente relatados.
          </p>
          <ul class="key-points">
            <li>
              <strong>Objetivo</strong> — aumentar a detecção de eventos subnotificados,
              aumentando a sensibilidade do sistema.
            </li>
            <li>
              <strong>Método</strong> — revisão de prontuários, entrevistas com pacientes e
              cruzamento de bases (registros hospitalares + prescrições).
            </li>
            <li>
              <strong>Tempo de aplicação</strong> — pontual (após uma suspeita de aumento de risco)
              ou periódico.
            </li>
            <li>
              <strong>Exemplo</strong> — ao introduzir um novo medicamento no hospital, a equipe de
              farmacovigilância revisa semanalmente os prontuários de todos os pacientes que o
              utilizaram, à procura de reações adversas.
            </li>
          </ul>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Vantagens</h3>
              <ul class="comparison-list">
                <li>Detecta eventos que não seriam relatados.</li>
                <li>Reduz a subnotificação, principal problema da vigilância passiva.</li>
                <li>Aumenta a sensibilidade do sistema.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Limitações</h3>
              <ul class="comparison-list">
                <li>Requer mais recursos humanos e tempo.</li>
                <li>
                  Pode gerar viés se não houver padronização (critérios claros) na identificação dos
                  eventos.
                </li>
              </ul>
            </section>
          </div>
        </article>

        <article id="mim" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Estratégia prospectiva</p>
              <h2>Monitorização Intensiva de Medicamentos (MIM)</h2>
            </div>
          </header>
          <p>
            A MIM é um sistema <strong>estruturado</strong> de farmacovigilância que acompanha
            sistematicamente o uso de medicamentos em <strong>populações específicas</strong>, por
            meio de um plano prospectivo de coleta de dados em tempo real sobre segurança e
            eficácia.
          </p>
          <ul class="key-points">
            <li>
              <strong>Objetivo</strong> — avaliar o perfil de segurança e de uso de um medicamento
              em condições reais, após o lançamento.
            </li>
            <li>
              <strong>Método</strong> — formulários padronizados preenchidos durante o tratamento,
              com eficácia, reações adversas, interações e adesão.
            </li>
            <li>
              <strong>Quando</strong> — após o lançamento de um medicamento novo ou daquele com
              histórico de preocupações de segurança.
            </li>
            <li>
              <strong>Exemplo</strong> — programa nacional que acompanha por 6 meses todos os
              pacientes que recebem um novo antirretroviral, com coleta de dados clínicos,
              laboratoriais e de eventos adversos.
            </li>
          </ul>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Vantagens</h3>
              <ul class="comparison-list">
                <li>Segurança avaliada em condições reais de uso.</li>
                <li>Dados de alta qualidade e detalhados.</li>
                <li>Identifica uso off-label, interações e adesão.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Limitações</h3>
              <ul class="comparison-list">
                <li>Muito mais cara e complexa.</li>
                <li>Exige treinamento, infraestrutura e tempo.</li>
                <li>Baixa representatividade se o desenho for ruim.</li>
              </ul>
            </section>
          </div>

          <h3>Onde a MIM é aplicada no hospital</h3>
          <div class="two-columns">
            <section class="concept-panel">
              <h3>Estratégias (o que se investiga)</h3>
              <ul class="comparison-list">
                <li>Medicamentos como causa da internação (motivo principal ou contribuinte).</li>
                <li>RAMs ocorridas durante a internação.</li>
                <li>Medicamentos que contribuíram para ou causaram óbitos.</li>
              </ul>
            </section>

            <section class="concept-panel">
              <h3>Abordagens (onde se olha)</h3>
              <ul class="comparison-list">
                <li>
                  <strong>Por medicamento</strong> — novos, de baixo índice terapêutico, grupos
                  terapêuticos definidos.
                </li>
                <li>
                  <strong>Por paciente</strong> — subpopulações suscetíveis (idade, sexo, patologias,
                  genética).
                </li>
                <li>
                  <strong>Por reação</strong> — oculares, dermatológicas, hematológicas (púrpura,
                  anemia hemolítica, agranulocitose).
                </li>
                <li>
                  <strong>Por enfermaria</strong> — clínica, cirurgia, pediatria, psiquiatria,
                  obstetrícia, oncologia.
                </li>
              </ul>
            </section>
          </div>

          <h3>Vantagens da MIM no ambiente hospitalar</h3>
          <ul class="key-points">
            <li>Valor educativo para toda a equipe.</li>
            <li>Pode identificar RAMs ainda não descritas.</li>
            <li>Detecta RAMs agudas de baixa frequência.</li>
            <li>Identifica populações de alto risco para determinados efeitos.</li>
            <li>Pode virar estudo caso-controle para confirmar e quantificar o risco.</li>
          </ul>
        </article>

        <article id="comparacao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Decisão de projeto</p>
              <h2>Busca ativa × monitorização intensiva</h2>
            </div>
          </header>
          <div class="table-scroll">
            <table class="data-table">
              <caption>
                As duas estratégias proativas têm finalidade, escopo e método distintos.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Característica</th>
                  <th scope="col">Busca ativa</th>
                  <th scope="col">Monitorização intensiva</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Natureza</th>
                  <td>Pontual ou periódica.</td>
                  <td>Prospectiva e estruturada.</td>
                </tr>
                <tr>
                  <th scope="row">População</th>
                  <td>Geral ou específica, definida na hora.</td>
                  <td>Coorte definida previamente.</td>
                </tr>
                <tr>
                  <th scope="row">Abordagem</th>
                  <td>Revisão de registros e entrevistas.</td>
                  <td>Registro sistemático em formulários padronizados.</td>
                </tr>
                <tr>
                  <th scope="row">Foco principal</th>
                  <td>Identificar casos não relatados.</td>
                  <td>Avaliar segurança e uso de forma completa.</td>
                </tr>
                <tr>
                  <th scope="row">Recursos</th>
                  <td>Moderados.</td>
                  <td>Elevados (equipe dedicada e sistema de dados).</td>
                </tr>
                <tr>
                  <th scope="row">Duração</th>
                  <td>Curta ou intermitente.</td>
                  <td>Longa e contínua.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="nao-notificam" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">O gargalo humano</p>
              <h2>Por que as RAM não são notificadas</h2>
            </div>
          </header>
          <p>
            Nenhuma ferramenta resolve o problema se o profissional não notifica. O material lista
            sete motivos — e conhecê-los é a primeira etapa para desenhar uma intervenção:
          </p>
          <div class="table-scroll">
            <table class="data-table">
              <caption>Motivos de não notificação de RAM (material da disciplina).</caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Motivo</th>
                  <th scope="col">Como se combate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">1</td>
                  <th scope="row">Ingenuidade</th>
                  <td>«Se está comercializado, é seguro» — educação sobre risco residual.</td>
                </tr>
                <tr>
                  <td class="num">2</td>
                  <th scope="row">Medo de ser processado</th>
                  <td>Garantia de confidencialidade e foco no sistema, não na culpa.</td>
                </tr>
                <tr>
                  <td class="num">3</td>
                  <th scope="row">Culpa pela prescrição</th>
                  <td>Cultura não punitiva, com notificação desvinculada de avaliação individual.</td>
                </tr>
                <tr>
                  <td class="num">4</td>
                  <th scope="row">Ambição de publicar a série de casos</th>
                  <td>Regra clara de que o caso deve entrar no sistema antes da publicação.</td>
                </tr>
                <tr>
                  <td class="num">5</td>
                  <th scope="row">Desconhecimento de como notificar</th>
                  <td>Formulário acessível e treinamento sobre o que e como notificar.</td>
                </tr>
                <tr>
                  <td class="num">6</td>
                  <th scope="row">Receio de a suspeita não se confirmar</th>
                  <td>Reforçar que a notificação não exige diagnóstico fechado.</td>
                </tr>
                <tr>
                  <td class="num">7</td>
                  <th scope="row">Apatia</th>
                  <td>Falta de tempo, interesse ou formulário — resolver o atrito operacional.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="sentinelas" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">A rede nacional</p>
              <h2>Hospitais sentinelas</h2>
            </div>
          </header>
          <p>
            A <strong>Rede Sentinela</strong> é uma estratégia iniciada em meados de 2001 para ser
            um <strong>observatório ativo</strong> do desempenho e da segurança de produtos de saúde
            de uso regular: medicamentos, kits para exames laboratoriais, órteses, próteses,
            equipamentos e materiais médico-hospitalares, saneantes, sangue e componentes. Ela
            integra o <strong>Vigipós</strong> (Sistema de Notificação e Investigação em Vigilância
            Sanitária), instituído pela Portaria MS nº 1.660, de 22 de julho de 2009.
          </p>

          <h3>Objetivos</h3>
          <ul class="key-points">
            <li>
              Obter informações de qualidade sobre eventos adversos e queixas técnicas no pós-uso,
              para subsidiar o SNVS.
            </li>
            <li>Promover e divulgar o Notivisa, consolidando a cultura da notificação.</li>
            <li>Contribuir para o aprimoramento do gerenciamento de risco nos serviços.</li>
            <li>Desenvolver e apoiar estudos de interesse do Sistema de Saúde brasileiro.</li>
            <li>
              Cooperar em formação de pessoal, educação continuada e produção de conhecimento no
              âmbito do Vigipós.
            </li>
          </ul>

          <h3>Como o hospital entra na rede</h3>
          <p>
            O credenciamento exige estrutura institucional formal (RDC nº 872, de 17/05/2024):
          </p>
          <ol class="steps">
            <li>Possuir Gerência de Risco instituída.</li>
            <li>Utilizar as ferramentas de notificação da Anvisa para EA e queixas técnicas.</li>
            <li>Possuir Política de Gestão de Risco instituída.</li>
            <li>Possuir Comitê Transfusional, conforme as atividades executadas.</li>
            <li>Possuir Comissão de Farmácia e Terapêutica (CFT).</li>
            <li>Possuir Núcleo de Segurança do Paciente.</li>
            <li>Possuir Plano de Segurança do Paciente integrado à Política de Gestão de Risco.</li>
            <li>Adotar o Registro Nacional de Implantes (RNI), quando aplicável.</li>
          </ol>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Farmacovigilância</h3>
              <p>
                Detecção, avaliação, compreensão e prevenção dos efeitos adversos ou quaisquer
                problemas relacionados a medicamentos.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Tecnovigilância</h3>
              <p>
                Identificação, análise e prevenção de eventos adversos relacionados a equipamentos,
                artigos médicos e kits laboratoriais durante a prática clínica.
              </p>
            </section>
          </div>

          <p class="card-note">
            <strong>Hemovigilância</strong> — identificação, análise e prevenção dos efeitos
            indesejáveis imediatos e tardios do uso de sangue e seus componentes. Cada hospital
            designa um <strong>gerente de risco</strong>, que articula a assistência com as áreas de
            farmacovigilância, tecnovigilância, hemovigilância e vigilância de saneantes.
          </p>
        </article>

        <article id="profissionais" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Efeito na beira do leito</p>
              <h2>O que muda para cada profissional</h2>
            </div>
          </header>
          <ul class="key-points">
            <li>
              <strong>Médico</strong> — agrega novas referências à avaliação do tratamento a ser
              prescrito.
            </li>
            <li>
              <strong>Enfermeiro</strong> — aprende a relacionar eventos do cuidado com os riscos
              decorrentes do uso do medicamento.
            </li>
            <li>
              <strong>Farmacêutico</strong> — encontra na farmacovigilância uma extensão de sua
              prática, interagindo com a equipe.
            </li>
          </ul>
        </article>

        <article id="causalidade" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">09</span>
            <div>
              <p class="card-heading__eyebrow">Do caso à conclusão</p>
              <h2>Avaliação de causalidade</h2>
            </div>
          </header>
          <p>
            <strong>Causalidade</strong> é o estudo da relação etiológica entre uma exposição e o
            aparecimento de determinado desfecho. Na prática, a
            <strong>avaliação de causalidade</strong> atribui um <em>grau de probabilidade</em> de o
            evento estar relacionado ao medicamento — nunca uma certeza absoluta.
          </p>

          <h3>As cinco perguntas da avaliação</h3>
          <ol class="steps">
            <li>
              <strong>Houve sequência temporal adequada?</strong> O evento surgiu depois do uso — e o
              tempo decorrido é plausível em termos de farmacocinética e farmacodinâmica?
            </li>
            <li>
              <strong>Existe plausibilidade farmacológica?</strong> A associação é conhecida? O
              mecanismo de ação explica a reação? Há descrição na literatura?
            </li>
            <li>
              <strong>Há melhora clínica com a retirada</strong> do medicamento?
            </li>
            <li>
              <strong>Houve reexposição? E a reação voltou</strong> ao reintroduzir o fármaco?
            </li>
            <li>
              <strong>Existe causa alternativa</strong> que explique a reação?
            </li>
          </ol>

          <h3>As quatro considerações universais</h3>
          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>1 · Conexão associativa</h3>
              <p>
                Tempo (administração → retirada → re-administração) e lugar (dermatite de contato,
                reação no local da aplicação).
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>2 · Explicação farmacológica</h3>
              <p>
                Natureza e frequência da RAM, conhecimento prévio dos efeitos do medicamento e
                níveis séricos.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>3 · Características clínicas</h3>
              <p>
                Sinais e sintomas, exames laboratoriais de fluidos biológicos, laudos de anatomia
                patológica e o mecanismo da doença.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>4 · Exclusão de outras causas</h3>
              <p>
                Verificar a probabilidade de outras explicações — ou excluí-las — antes de atribuir
                o desfecho ao medicamento.
              </p>
            </section>
          </div>
        </article>

        <article id="algoritmos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">10</span>
            <div>
              <p class="card-heading__eyebrow">Padronizar o julgamento</p>
              <h2>Algoritmos de causalidade</h2>
            </div>
          </header>
          <p>
            Na década de 1970 surgiram algoritmos de decisão com complexidades diferentes, na
            tentativa de uniformizar o estudo da causalidade de uma RAM. Em geral são questionários
            com questões dicotômicas, cujos resultados viram um <strong>escore</strong> que reflete a
            probabilidade de o efeito ter sido causado pelo medicamento.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Os três algoritmos clássicos do material da disciplina.</caption>
              <thead>
                <tr>
                  <th scope="col">Algoritmo</th>
                  <th scope="col">Como funciona</th>
                  <th scope="col">Limitação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Naranjo et al. (1981)</th>
                  <td>
                    Dez perguntas com respostas sim/não (e «desconhecido»), ponderadas de −1 a +2.
                    É o mais utilizado.
                  </td>
                  <td>
                    Avalia um fármaco por vez; frágil em polifarmácia e interações complexas.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Kramer et al. (1979)</th>
                  <td>
                    Fluxograma com múltiplos eixos de decisão; somatório de escores.
                  </td>
                  <td>
                    Exige muitos dados clínicos; pouco prático na rotina.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Karch &amp; Lasagna (1977)</th>
                  <td>
                    Questões fechadas dicotômicas; a combinação das respostas define a «força» da
                    relação causal.
                  </td>
                  <td>
                    Só classifica como <em>definida</em> se houve reexposição — o que raramente
                    acontece.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Escore do algoritmo de Kramer</h3>
          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Somatório dos scores</th>
                  <th scope="col">Classe de causalidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">+7 ou +6</td>
                  <td>Definida</td>
                </tr>
                <tr>
                  <td class="num">+5 ou +4</td>
                  <td>Provável</td>
                </tr>
                <tr>
                  <td class="num">+3, +2, +1 ou 0</td>
                  <td>Possível</td>
                </tr>
                <tr>
                  <td class="num">−1 a −7</td>
                  <td>Improvável</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Guarde a diferença entre <strong>escore</strong> e <strong>categoria</strong>: o escore é
            a conta; a categoria é a interpretação clínica dela. O detalhamento do Naranjo, do
            OMS-UMC e dos métodos bayesianos está nas páginas dos
            <router-link to="/resumins/unifal/farmacovigilancia/escalas">assuntos 5.2</router-link>
            e
            <router-link to="/resumins/unifal/farmacovigilancia/causalidade">5.3</router-link>.
          </p>
        </article>

        <article id="sinal" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">11</span>
            <div>
              <p class="card-heading__eyebrow">O produto final da notificação</p>
              <h2>Por que notificar: do caso isolado ao sinal</h2>
            </div>
          </header>
          <p>
            Por meio das notificações, os centros de vigilância avaliam a causalidade e estabelecem a
            relevância da reação. O conjunto de várias notificações sobre uma possível relação causal
            até então desconhecida — ou documentada de modo incompleto — é o que gera um
            <strong>sinal</strong>.
          </p>
          <ul class="key-points">
            <li>
              Sinal é a informação sobre uma possível relação causal entre um evento adverso e um
              medicamento, ainda não conhecida ou mal documentada.
            </li>
            <li>
              Em geral é preciso <strong>mais de uma notificação</strong>, dependendo da seriedade do
              evento e da qualidade da informação.
            </li>
            <li>
              Depois de gerado, é preciso estabelecer a força, a importância clínica (severidade e
              impacto em saúde pública) e o potencial para medidas preventivas.
            </li>
          </ul>
          <div class="formula">
            <span>geração → fortalecimento → avaliação → seguimento</span>
          </div>
          <p class="card-note">
            É por isso que a notificação incompleta é tão danosa: ela não permite avaliar
            causalidade, não fortalece o sinal e não sustenta decisão regulatória.
          </p>
        </article>

        <article id="o-que-notificar" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">12</span>
            <div>
              <p class="card-heading__eyebrow">Regra prática</p>
              <h2>O que notificar</h2>
            </div>
          </header>
          <div class="table-scroll">
            <table class="data-table">
              <caption>Critérios de notificação usados no serviço.</caption>
              <thead>
                <tr>
                  <th scope="col">Situação</th>
                  <th scope="col">O que notificar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Qualquer medicamento</th>
                  <td>Qualquer reação <strong>não descrita</strong> na bula ou na literatura.</td>
                </tr>
                <tr>
                  <th scope="row">Medicamentos com mais de 5 anos de mercado</th>
                  <td>Qualquer suspeita de reação <strong>graus 3 e 4</strong>, mesmo descrita.</td>
                </tr>
                <tr>
                  <th scope="row">Medicamentos novos (menos de 5 anos)</th>
                  <td>
                    <strong>Qualquer reação, de todos os graus</strong>, mesmo as já descritas em
                    bula ou literatura.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Sempre</th>
                  <td>Perda de eficácia e suspeita de desvio de qualidade.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="card-note">
            <strong>Na dúvida: notifique.</strong> A notificação não é uma acusação ao medicamento —
            é matéria-prima para a avaliação. Quem decide se havia nexo causal é o sistema, não o
            notificador.
          </p>
        </article>

        <article id="industria" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">13</span>
            <div>
              <p class="card-heading__eyebrow">O outro lado do sistema</p>
              <h2>Farmacovigilância na indústria: RDC 406/2020 e IN 63/2020</h2>
            </div>
          </header>
          <p>
            A <strong>RDC 406/2020</strong> estabelece as Boas Práticas de Farmacovigilância e
            define requisitos, responsabilidades e padrões a serem observados pelos
            <strong>detentores de registro de medicamentos (DRM)</strong>. A
            <strong>IN 63/2020</strong>, de mesma data, trata do relatório periódico.
          </p>

          <h3>O que a indústria deve notificar</h3>
          <ul class="key-points">
            <li>Suspeita de reações adversas a medicamentos.</li>
            <li>Eventos adversos por desvios da qualidade.</li>
            <li>Eventos decorrentes de uso não aprovado (off-label).</li>
            <li>Interações medicamentosas.</li>
            <li>Inefetividade terapêutica, total ou parcial.</li>
            <li>Intoxicações relacionadas a medicamentos.</li>
            <li>Uso abusivo de medicamentos.</li>
            <li>Erros de medicação, potenciais e reais.</li>
          </ul>

          <h3>O que a empresa precisa ter</h3>
          <ol class="steps">
            <li>Responsável pela farmacovigilância designado.</li>
            <li>Estrutura organizacional implantada.</li>
            <li>Manual de procedimento elaborado.</li>
            <li>
              Dados de volume de produção e vendas — <strong>rastreabilidade</strong>.
            </li>
            <li>
              Comunicação prévia ou simultânea ao SNVS de qualquer informação de farmacovigilância a
              ser divulgada publicamente.
            </li>
            <li>
              Informação em até <strong>72 horas</strong> aos órgãos de vigilância sobre medidas
              tomadas que afetem a segurança do paciente.
            </li>
          </ol>

          <h3>Deveres do DRM</h3>
          <ul class="key-points">
            <li>Codificar e avaliar gravidade, causalidade e previsibilidade das suspeitas recebidas.</li>
            <li>Contatar o notificador para complementar ou verificar dados.</li>
            <li>Encaminhar as notificações ao SNVS nos prazos estabelecidos.</li>
            <li>Fazer seguimento dos casos graves sem desfecho clínico.</li>
            <li>
              Designar profissional de saúde de nível superior, com capacidade técnica, como
              responsável pela farmacovigilância.
            </li>
            <li>Manter sistema de registro sistemático, atualizado e rotineiro.</li>
            <li>
              Arquivar as notificações de forma rastreável — arquivos físicos e eletrônicos por, no
              mínimo, <strong>20 anos</strong>.
            </li>
            <li>Manter procedimento para identificação de sinais de segurança.</li>
            <li>Implementar plano de minimização de risco quando solicitado (ou voluntariamente).</li>
            <li>Produzir relatórios periódicos de farmacovigilância.</li>
            <li>Realizar autoinspeções.</li>
            <li>
              Ter canais para receber notificações de profissionais e consumidores, garantindo
              confidencialidade.
            </li>
            <li>Responder às autoridades sanitárias sobre perfil de segurança e eficácia.</li>
          </ul>

          <h3>Prazos de envio</h3>
          <div class="table-scroll">
            <table class="data-table">
              <caption>Prazos conforme o material da disciplina.</caption>
              <thead>
                <tr>
                  <th scope="col">Situação</th>
                  <th scope="col">Prazo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Medidas da empresa que afetem a segurança do paciente</th>
                  <td class="num">72 horas</td>
                </tr>
                <tr>
                  <th scope="row">Evento adverso grave com óbito ou risco de morte, no Brasil</th>
                  <td class="num">Até 7 dias corridos</td>
                </tr>
                <tr>
                  <th scope="row">Demais eventos adversos graves, no Brasil</th>
                  <td class="num">Até 15 dias corridos</td>
                </tr>
                <tr>
                  <th scope="row">Eventos não graves</th>
                  <td>Entram no relatório periódico, inclusive os ocorridos em outros países.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Relatório Periódico de Farmacovigilância (RPF)</h3>
          <ul class="key-points">
            <li><strong>Medicamentos novos (&lt; 5 anos)</strong> — 1 RPF por produto.</li>
            <li>
              Nos <strong>2 primeiros anos</strong>: a cada <strong>6 meses</strong>. Nos
              <strong>3 anos seguintes</strong>: anualmente.
            </li>
            <li>
              <strong>Medicamentos antigos (&gt; 5 anos)</strong> — 1 RPF a cada
              <strong>5 anos</strong>, junto à renovação do registro.
            </li>
          </ul>

          <h3>Plano de Minimização de Risco (PMR)</h3>
          <p>
            Aplicado quando a segurança exige ações adicionais: a empresa deve explicar
            <strong>como avaliará a efetividade</strong> das ações para minimizar riscos. Serve para
            gerenciar riscos novos no pós-registro, acompanhar riscos conhecidos em populações já
            estudadas e cobrir situações de uso provável não estudado adequadamente antes do
            registro.
          </p>

          <h3>Inspeção em farmacovigilância</h3>
          <p>
            O DRM pode ser submetido a inspeção pelo SNVS sempre que houver necessidade de avaliar o
            cumprimento da resolução (art. 13). As inspeções se baseiam em análise documental,
            entrevistas, visita presencial, revisão de base de dados e avaliação do cumprimento das
            exigências legais (art. 15).
          </p>

          <p class="card-note">
            <strong>Uma crítica que vale discussão em sala:</strong> o art. 6º manda encaminhar ao
            SNVS as notificações relatadas por profissionais de saúde — e as dos usuários/pacientes?
            É o tipo de lacuna que a leitura atenta da norma revela.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              Três métodos: notificação espontânea (passiva, barata, subnotificada), busca ativa
              (proativa, pontual ou periódica) e MIM (prospectiva, estruturada, cara).
            </li>
            <li>
              Inconvenientes da notificação espontânea: subnotificação, notificação seletiva e
              incompleta.
            </li>
            <li>
              MIM pode ser por medicamento, paciente, reação ou enfermaria; suas estratégias incluem
              RAMs que causaram internação, ocorridas na internação e que causaram óbito.
            </li>
            <li>
              Sete motivos de não notificação — de ingenuidade e medo a desconhecimento e apatia.
            </li>
            <li>
              Rede Sentinela: desde 2001, ligada ao Vigipós (Portaria MS 1.660/2009); exige gerência
              de risco, CFT, NSP e plano de segurança do paciente.
            </li>
            <li>
              Farmacovigilância = medicamentos; tecnovigilância = equipamentos e artigos;
              hemovigilância = sangue e componentes.
            </li>
            <li>
              Avaliação de causalidade = atribuir grau de probabilidade; cinco perguntas e quatro
              considerações universais.
            </li>
            <li>
              Naranjo (10 perguntas, mais usado), Kramer (escores +6/+7 definida) e Karch &amp;
              Lasagna (exige reexposição).
            </li>
            <li>Sinal = informação sobre relação causal nova ou mal documentada; precisa de conjunto de casos.</li>
            <li>
              Notificar: reação não descrita; graus 3 e 4 em fármacos antigos; qualquer reação de
              fármacos novos; perda de eficácia e desvio de qualidade.
            </li>
            <li>
              RDC 406/2020: estrutura e responsabilidades do DRM; IN 63/2020: relatório periódico.
            </li>
            <li>
              RPF em medicamentos novos: semestral por 2 anos, depois anual por 3 anos; antigos: a
              cada 5 anos.
            </li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir do material de Farmacovigilância da UNIFAL-MG (Prof. Dr.
            Ricardo Radighieri Rascado) — «Fazendo farmacovigilância em hospitais», assunto 5.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/reacoes-adversas">
            <span>Anterior</span>
            ← Reações adversas
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/busca-ativa">
            <span>Próximo</span>
            Da busca ativa à causalidade →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
