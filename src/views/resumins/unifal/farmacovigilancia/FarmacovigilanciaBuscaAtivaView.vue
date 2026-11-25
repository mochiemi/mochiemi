<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/unifal/farmacovigilancia">Farmacovigilância</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Busca ativa e causalidade</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · FARMACOVIGILÂNCIA · ASSUNTO 5.1</p>
        <h1 class="intro__title">Da busca ativa à causalidade clínica</h1>
        <p class="intro__lead">
          Farmacovigilância hospitalar avançada: por que a notificação espontânea é só
          <strong>a ponta do iceberg</strong>, quais gatilhos usar para caçar eventos adversos no
          prontuário, como a busca ativa se diferencia da monitorização intensiva, como os hospitais
          sentinelas organizam isso — e como transformar um caso suspeito em um escore de
          causalidade com o algoritmo de Naranjo.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Guia de estudo</span>
          <span class="intro__chip">10 tópicos essenciais</span>
          <span class="intro__chip">Hospitalar avançada</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#iceberg">Ponta do iceberg</a>
        <a href="#arsenal">Arsenal</a>
        <a href="#busca-ativa">Busca ativa</a>
        <a href="#mim">MIM</a>
        <a href="#matriz">Matriz</a>
        <a href="#sentinelas">Sentinelas</a>
        <a href="#pilares">4 pilares</a>
        <a href="#naranjo">Naranjo</a>
        <a href="#fluxo">Fluxo</a>
        <a href="#impacto">Impacto</a>
      </nav>

      <div class="lesson">
        <article id="iceberg" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O problema de partida</p>
              <h2>A armadilha da farmacovigilância passiva</h2>
            </div>
          </header>
          <p>
            A notificação espontânea é apenas a <strong>ponta do iceberg</strong>: a maior parte das
            reações adversas que ocorrem no hospital nunca é relatada — e parte importante das
            internações no Brasil está relacionada a problemas com medicamentos.
          </p>

          <h3>Por que as RAM não são notificadas</h3>
          <div class="factor-grid">
            <section class="concept-panel concept-panel--rose">
              <h3>1 · Ingenuidade</h3>
              <p>«Se está comercializado, é 100% seguro.»</p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>2 · Medo e culpa</h3>
              <p>Receio de processos ou culpa pela prescrição que gerou o dano.</p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>3 · Desconhecimento</h3>
              <p>Falta de treinamento sobre <em>o que</em> e <em>como</em> notificar.</p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>4 · Apatia</h3>
              <p>Falta de tempo e desmotivação na rotina hospitalar.</p>
            </section>
          </div>

          <p class="card-note">
            Note que nenhum dos quatro motivos é técnico. O gargalo da farmacovigilância hospitalar
            é <strong>cultural e operacional</strong> — e é justamente por isso que a busca ativa
            existe: ela não depende da disposição de alguém em notificar.
          </p>
        </article>

        <article id="arsenal" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Três posturas</p>
              <h2>O arsenal de monitoramento hospitalar</h2>
            </div>
          </header>
          <div class="table-scroll">
            <table class="data-table">
              <caption>Do passivo ao prospectivo: as três posturas de captação.</caption>
              <thead>
                <tr>
                  <th scope="col">Postura</th>
                  <th scope="col">Método</th>
                  <th scope="col">Característica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Passivo</th>
                  <td>Notificação espontânea</td>
                  <td>
                    Depende exclusivamente da iniciativa do profissional; sofre de subnotificação
                    severa e de notificação incompleta.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Proativo</th>
                  <td>Busca ativa</td>
                  <td>
                    Procura deliberada de eventos adversos subnotificados, cruzando dados
                    institucionais.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Prospectivo</th>
                  <td>Monitorização intensiva (MIM)</td>
                  <td>
                    Sistema estruturado, em tempo real, acompanhando populações específicas ou novos
                    fármacos em condições reais.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="busca-ativa" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">O motor da detecção proativa</p>
              <h2>Busca ativa: onde procurar</h2>
            </div>
          </header>
          <p>
            É uma abordagem sistemática para procurar eventos adversos ocultos, aumentando a
            sensibilidade do sistema hospitalar. Pode ser <strong>pontual</strong> (depois de uma
            suspeita) ou <strong>periódica</strong> (rotina). Os pontos de partida clássicos são os
            <em>gatilhos</em>:
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Prescrições (EHR)</h3>
              <p>
                Uso de antídotos, corticoides, antialérgicos ou <strong>suspensão abrupta</strong> de
                fármacos são pistas de que algo aconteceu.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Entrevistas clínicas</h3>
              <p>
                Relatos diretos do paciente sobre sintomas novos surgidos após a introdução da
                terapia.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Exames laboratoriais</h3>
              <p>
                Alterações súbitas de marcadores hepáticos, renais ou hematológicos — por exemplo,
                plaquetopenia.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Cruzamento de bases</h3>
              <p>
                Registros hospitalares combinados com prescrições: quem recebeu o fármaco e quem
                apresentou o desfecho.
              </p>
            </section>
          </div>

          <p class="card-note">
            <strong>Gatilho não é diagnóstico.</strong> Encontrar um antialérgico prescrito não
            prova que houve RAM — prova apenas que aquele prontuário merece revisão. É a revisão que
            separa o achado do caso.
          </p>
        </article>

        <article id="mim" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Coleta sistemática</p>
              <h2>Monitorização Intensiva de Medicamentos</h2>
            </div>
          </header>
          <p>
            Coleta sistemática, prospectiva e em tempo real sobre segurança e eficácia, geralmente
            aplicada a contextos de alto risco. As abordagens se organizam em três recortes:
          </p>
          <ul class="key-points">
            <li>
              <strong>Por medicamento</strong> — fármacos recém-lançados ou de baixo índice
              terapêutico.
            </li>
            <li>
              <strong>Por paciente</strong> — subpopulações suscetíveis (idade, genética,
              comorbidades severas).
            </li>
            <li>
              <strong>Por enfermaria</strong> — monitoramento contínuo em alas críticas (UTI,
              oncologia, psiquiatria).
            </li>
          </ul>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Vantagem máxima</h3>
              <p>Identifica padrões <em>off-label</em> e interações reais.</p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Limitação</h3>
              <p>Elevado custo financeiro e operacional.</p>
            </section>
          </div>
        </article>

        <article id="matriz" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Matriz diagnóstica</p>
              <h2>Busca ativa × monitorização intensiva</h2>
            </div>
          </header>
          <div class="table-scroll">
            <table class="data-table">
              <caption>Comparação de natureza, escopo e recursos.</caption>
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
                  <td>Pode ser geral ou específica.</td>
                  <td>Definida previamente (coorte).</td>
                </tr>
                <tr>
                  <th scope="row">Abordagem</th>
                  <td>Revisão de registros e entrevistas clínicas.</td>
                  <td>Registro sistemático de dados.</td>
                </tr>
                <tr>
                  <th scope="row">Foco principal</th>
                  <td>Identificação de casos não relatados.</td>
                  <td>Avaliação completa de segurança e uso.</td>
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

        <article id="sentinelas" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">O contexto nacional</p>
              <h2>Hospitais sentinelas</h2>
            </div>
          </header>
          <p>
            Iniciada em 2001, a <strong>Rede Sentinela</strong> (Vigipós/Anvisa) atua como
            observatório ativo do desempenho e da segurança de produtos de saúde em uso regular. Para
            fazer parte dela, a instituição precisa de um ecossistema institucional obrigatório:
          </p>
          <ul class="key-points">
            <li>Gerência de Risco e Núcleo de Segurança do Paciente.</li>
            <li>Comissão de Farmácia e Terapêutica (CFT).</li>
            <li>
              Integração ativa com farmacovigilância, tecnovigilância e hemovigilância.
            </li>
          </ul>
          <p class="card-note">
            Sem essa estrutura, a busca ativa não se sustenta: ela precisa de alguém formalmente
            responsável, de acesso aos dados assistenciais e de um canal que leve a notificação até
            o SNVS.
          </p>
        </article>

        <article id="pilares" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">O sinal foi detectado — e agora?</p>
              <h2>Os quatro pilares universais da causalidade</h2>
            </div>
          </header>
          <p>
            <strong>Avaliação de causalidade</strong> é o estudo da relação etiológica entre uma
            exposição (medicamento) e o aparecimento de um desfecho (evento adverso). O objetivo é
            atribuir um <strong>grau de probabilidade</strong> científico e padronizado à suspeita
            clínica.
          </p>

          <div class="factor-grid">
            <section class="concept-panel concept-panel--mint">
              <h3>1 · Conexão temporal</h3>
              <p>
                Plausibilidade cronológica: administração → retirada → re-administração.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>2 · Explicação farmacológica</h3>
              <p>
                Mecanismo de ação, níveis séricos tóxicos, natureza e frequência documentada da RAM.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>3 · Características clínicas</h3>
              <p>
                Sinais, sintomas, laudos patológicos e exames biológicos compatíveis.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>4 · Exclusão de alternativas</h3>
              <p>
                Eliminação rigorosa de progressão da doença de base ou interação com outras
                terapias.
              </p>
            </section>
          </div>

          <p class="card-note">
            Esses quatro pilares são o <strong>filtro clínico</strong>: eles não dão nota, dão
            descarte. Se qualquer um deles falha de forma grosseira, o caso deve ser reavaliado antes
            de entrar no algoritmo.
          </p>
        </article>

        <article id="naranjo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Padronizando o julgamento</p>
              <h2>O algoritmo de Naranjo</h2>
            </div>
          </header>
          <p>
            Criado em 1981, o algoritmo de Naranjo traduz o julgamento clínico subjetivo em um
            <strong>escore numérico reprodutível</strong> — converte intuição em evidência objetiva.
          </p>
          <ul class="key-points">
            <li>
              <strong>Estrutura dicotômica</strong> — 10 perguntas fechadas (sim / não /
              desconhecido).
            </li>
            <li>
              <strong>Ponderação matemática</strong> — pesos que variam de −1 a +2 por resposta.
            </li>
            <li>
              <strong>Universalidade</strong> — aplicável à maioria dos cenários clínicos e classes
              farmacológicas no hospital.
            </li>
          </ul>

          <h3>Painel diagnóstico das 10 perguntas</h3>
          <div class="table-scroll">
            <table class="data-table">
              <caption>Como as questões se agrupam em quatro tipos de evidência.</caption>
              <thead>
                <tr>
                  <th scope="col">Grupo</th>
                  <th scope="col">Questões</th>
                  <th scope="col">O que se procura</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Histórico e literatura</th>
                  <td>Q1 e Q9</td>
                  <td>
                    Há notificações conclusivas sobre esta reação? O paciente já teve reação
                    semelhante com este fármaco?
                  </td>
                </tr>
                <tr>
                  <th scope="row">Conexão temporal</th>
                  <td>Q2, Q3 e Q4</td>
                  <td>
                    Apareceu após a administração? Melhorou com a suspensão? Reapareceu com a
                    readministração?
                  </td>
                </tr>
                <tr>
                  <th scope="row">Fatores de confusão</th>
                  <td>Q5 e Q6</td>
                  <td>
                    Existem causas alternativas (doença ou outro fármaco)? A reação reaparece com
                    placebo? (Q5: −1 se sim; Q6: +2 se não.)
                  </td>
                </tr>
                <tr>
                  <th scope="row">Evidência objetiva</th>
                  <td>Q7, Q8 e Q10</td>
                  <td>
                    Nível plasmático tóxico confirmado? Efeito dose-resposta observado? Evidência
                    laboratorial objetiva?
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>O veredito clínico</h3>
          <div class="table-scroll">
            <table class="data-table">
              <caption>Categorias de causalidade pelo escore de Naranjo.</caption>
              <thead>
                <tr>
                  <th scope="col">Escore</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Interpretação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">9</td>
                  <th scope="row">Definida</th>
                  <td>
                    Relação temporal exata, confirmada por readministração ou evidência objetiva
                    inequívoca.
                  </td>
                </tr>
                <tr>
                  <td class="num">5 a 8</td>
                  <th scope="row">Provável</th>
                  <td>
                    Tempo razoável, improvável ser a doença de base, melhora com a suspensão; sem
                    necessidade de readministração.
                  </td>
                </tr>
                <tr>
                  <td class="num">1 a 4</td>
                  <th scope="row">Possível</th>
                  <td>
                    Tempo plausível, mas pode ser explicada pela doença de base ou por outro
                    fármaco; dados incompletos.
                  </td>
                </tr>
                <tr>
                  <td class="num">0</td>
                  <th scope="row">Improvável</th>
                  <td>
                    Tempo improvável; outras causas oferecem explicações perfeitamente plausíveis.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="fluxo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">09</span>
            <div>
              <p class="card-heading__eyebrow">O motor operacional</p>
              <h2>Do gatilho à notificação</h2>
            </div>
          </header>
          <ol class="steps">
            <li>
              <strong>Busca ativa (detecção)</strong> — cruzamento de prontuários, exames e alertas
              gera um <em>sinal primário</em>.
            </li>
            <li>
              <strong>Filtro clínico (triagem)</strong> — aplicação dos quatro pilares universais
              para afastar ruídos e vieses óbvios.
            </li>
            <li>
              <strong>Algoritmo de Naranjo (confirmação)</strong> — matematização da suspeita,
              gerando o escore de causalidade.
            </li>
            <li>
              <strong>Ação e notificação (Vigipós)</strong> — relato estruturado à Anvisa/SNVS,
              alteração de conduta clínica e gestão de risco.
            </li>
          </ol>
          <p class="card-note">
            Repare que o algoritmo é o <strong>terceiro</strong> passo, não o primeiro. Naranjo não
            substitui a leitura clínica do caso — ele a organiza.
          </p>
        </article>

        <article id="impacto" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">10</span>
            <div>
              <p class="card-heading__eyebrow">Por que vale o esforço</p>
              <h2>Impacto no ecossistema hospitalar</h2>
            </div>
          </header>
          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Descoberta científica</h3>
              <p>
                Identifica populações de alto risco e detecta RAMs agudas de baixa frequência — ou
                não descritas em bula.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Segurança do paciente</h3>
              <p>
                Interrompe o uso de fármacos inadequados, reduzindo mortalidade e dias de
                internação.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Cultura educativa</h3>
              <p>
                A farmacovigilância vira extensão natural da prática diária e correlaciona falhas
                sistêmicas a riscos medicamentosos.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>O fim da apatia clínica</h3>
              <p>
                Um caso isolado é uma suspeita; o conjunto estruturado de notificações salva vidas.
              </p>
            </section>
          </div>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              Passivo = notificação espontânea; proativo = busca ativa; prospectivo = monitorização
              intensiva.
            </li>
            <li>
              Gatilhos de busca ativa: antídotos, corticoides, antialérgicos e suspensão abrupta;
              entrevistas; exames laboratoriais; cruzamento de bases.
            </li>
            <li>
              MIM: por medicamento, por paciente (subpopulações suscetíveis) e por enfermaria (alas
              críticas).
            </li>
            <li>
              Vantagem máxima da MIM: identifica padrões off-label e interações reais. Limitação:
              custo elevado.
            </li>
            <li>
              Quatro pilares da causalidade: conexão temporal, explicação farmacológica,
              características clínicas e exclusão de alternativas.
            </li>
            <li>
              Naranjo: 10 perguntas, pesos de −1 a +2; 9 = definida, 5–8 = provável, 1–4 = possível,
              0 = improvável.
            </li>
            <li>
              A sequência operacional é busca ativa → filtro clínico → Naranjo → notificação
              (Vigipós).
            </li>
            <li>Na dúvida: notifique.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir do material de Farmacovigilância da UNIFAL-MG (Prof. Dr.
            Ricardo Radighieri Rascado) — «Farmacovigilância hospitalar avançada: da busca ativa à
            avaliação de causalidade clínica», assunto 5.1.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/hospitalar">
            <span>Anterior</span>
            ← Farmacovigilância no hospital
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/escalas">
            <span>Próximo</span>
            Instrumentos de precisão →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
