<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>UNIFAL-MG</span>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/unifal/farmacovigilancia">Farmacovigilância</router-link>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · FARMACOVIGILÂNCIA</p>
        <h1 class="intro__title">Farmacovigilância</h1>
        <p class="intro__lead">
          Resumo geral da disciplina: o que é farmacovigilância, como ela
          nasceu, o que distingue evento adverso de reação adversa e de erro de
          medicação, por que o uso irracional de medicamentos é um problema de
          saúde pública e como a regulação brasileira (RDC 406/2020 e IN
          63/2020) organiza as obrigações da indústria e a atuação do
          farmacêutico.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>8 tópicos essenciais</span>
          <span aria-hidden="true">·</span>
          <span>Prof. Dr. Ricardo Radighieri Rascado</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#conceito">Conceito</a>
        <a href="#historico">Histórico</a>
        <a href="#conceitos">Evento, RAM e erro</a>
        <a href="#uso-racional">Uso racional</a>
        <a href="#pos-registro">Pós-registro</a>
        <a href="#categorias">Categorias</a>
        <a href="#regulacao">Regulação</a>
        <a href="#farmaceutico">Farmacêutico</a>
      </nav>

      <div class="lesson">
        <article id="conceito" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">A ideia central</p>
              <h2>O que é farmacovigilância</h2>
            </div>
          </header>
          <p>
            Medicamentos são formulados para prevenir, aliviar e curar
            enfermidades, mas podem produzir efeitos indesejáveis, maléficos e
            danosos. Como esses efeitos têm impacto significativo na saúde
            pública, a farmacovigilância é uma atividade
            <strong>indispensável à regulação sanitária</strong> em qualquer
            país: ela protege a população de danos causados por produtos
            comercializados, por meio da identificação precoce do risco e da
            intervenção oportuna.
          </p>

          <div
            class="formula"
            aria-label="Definição da Organização Mundial da Saúde, de 2002: ciência e atividades relativas à detecção, avaliação, compreensão e prevenção dos efeitos adversos e quaisquer outros problemas associados a medicamentos"
          >
            <span>
              «A ciência e as atividades relativas à detecção, avaliação,
              compreensão e prevenção dos efeitos adversos e quaisquer outros
              problemas associados a medicamentos.»
            </span>
          </div>
          <p class="card-note">
            Definição da <strong>OMS (2002)</strong>. Na formulação de Bégaud e
            Arias (1997), o foco está nos <em>riscos</em> das reações adversas a
            medicamentos. A etimologia resume a ideia: do grego
            <em>pharmakon</em> (droga) e do latim <em>vigilare</em> (estar
            acordado, atento).
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--rose">
              <h3>Primum non nocere</h3>
              <p>
                «Não existem medicamentos seguros. Existem modos seguros de
                usá-los.» A farmacovigilância existe porque risco zero não
                existe — o que existe é risco conhecido, medido e gerenciado.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Uma ciência relativamente nova</h3>
              <p>
                A atividade institucional tem mais de 180 anos, mas a
                farmacovigilância como ciência ganhou corpo apenas depois das
                grandes tragédias do século XX — e hoje é exigência legal para a
                indústria farmacêutica.
              </p>
            </section>
          </div>

          <h3>Áreas da vigilância</h3>
          <p>
            A preocupação inicial era apenas com medicamentos. Hoje a lista de
            vigilâncias é bem mais ampla:
          </p>
          <ul class="key-points">
            <li><strong>Farmacovigilância</strong> — medicamentos.</li>
            <li>
              <strong>Biovigilância</strong> — células, tecidos, órgãos, sangue e
              componentes e produtos de terapias avançadas.
            </li>
            <li><strong>Hemovigilância</strong> — sangue e hemocomponentes.</li>
            <li><strong>Cosmetovigilância</strong> — cosméticos.</li>
            <li>
              <strong>Tecnovigilância</strong> — equipamentos e produtos para a
              saúde.
            </li>
            <li>
              <strong>Infectovigilância</strong> — infecções relacionadas à
              assistência.
            </li>
            <li><strong>Toxicovigilância</strong> — intoxicações.</li>
          </ul>
        </article>

        <article id="historico" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">De onde vem a exigência</p>
              <h2>Histórico da farmacovigilância</h2>
            </div>
          </header>
          <p>
            Considera-se que o marco inicial da atividade foi uma reação adversa
            grave em uma jovem de quinze anos, que faleceu após uma cirurgia de
            rotina na unha de um pododáctilo — provavelmente por fibrilação
            ventricular decorrente do uso de <strong>clorofórmio</strong> como
            anestésico. De lá para cá, cada grande tragédia produziu uma nova
            exigência regulatória.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Marcos históricos — mundo e Brasil</caption>
              <thead>
                <tr>
                  <th scope="col">Ano</th>
                  <th scope="col">Onde</th>
                  <th scope="col">Marco</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="num">1775–1778</td>
                  <td>Mundo</td>
                  <td>
                    William Withering descreve os eventos adversos dos
                    digitálicos.
                  </td>
                </tr>
                <tr>
                  <td class="num">1884</td>
                  <td>Mundo</td>
                  <td>
                    Intoxicação por mercúrio usado no tratamento da febre
                    amarela.
                  </td>
                </tr>
                <tr>
                  <td class="num">1890</td>
                  <td>Mundo</td>
                  <td>
                    Mortes por clorofórmio (anestesia) e por arsênico
                    (tratamento de sífilis).
                  </td>
                </tr>
                <tr>
                  <td class="num">1929</td>
                  <td>Mundo</td>
                  <td>
                    Criação do FDA, órgão federal de vigilância sanitária dos
                    EUA.
                  </td>
                </tr>
                <tr>
                  <td class="num">1937</td>
                  <td>Mundo</td>
                  <td>
                    Dietilenoglicol como veículo da sulfanilamida causa 107
                    mortes em crianças.
                  </td>
                </tr>
                <tr>
                  <td class="num">1938</td>
                  <td>Mundo</td>
                  <td>
                    Food, Drug and Cosmetic Act passa a exigir toxicidade
                    pré-clínica e dados clínicos de segurança antes da
                    comercialização.
                  </td>
                </tr>
                <tr>
                  <td class="num">1950</td>
                  <td>Mundo</td>
                  <td>
                    Casos de anemia aplástica pelo cloranfenicol chamam atenção
                    para as RAM.
                  </td>
                </tr>
                <tr>
                  <td class="num">1959–1961</td>
                  <td>Mundo</td>
                  <td>
                    Epidemia de focomelia por talidomida — cerca de 4.000 casos,
                    com 15% de mortes.
                  </td>
                </tr>
                <tr>
                  <td class="num">1976</td>
                  <td>Brasil</td>
                  <td>
                    Lei 6.360: notificação de acidentes ou reações nocivas
                    causadas por medicamentos à autoridade sanitária.
                  </td>
                </tr>
                <tr>
                  <td class="num">1990</td>
                  <td>Brasil</td>
                  <td>
                    Lei 8.080 (Lei Orgânica da Saúde): vigilância sanitária e
                    farmacoepidemiologia.
                  </td>
                </tr>
                <tr>
                  <td class="num">1998</td>
                  <td>Brasil</td>
                  <td>
                    Androcur falsificado e «pílula de farinha» (Microvlar);
                    criação da Política Nacional de Medicamentos.
                  </td>
                </tr>
                <tr>
                  <td class="num">1999</td>
                  <td>Brasil</td>
                  <td>
                    Lei 9.782 cria o Sistema Nacional de Vigilância Sanitária e
                    a Anvisa.
                  </td>
                </tr>
                <tr>
                  <td class="num">2000–2002</td>
                  <td>Brasil</td>
                  <td>
                    Reações graves com antimoniato de meglumina (contaminação por
                    arsênico e chumbo), álcool em fortificantes, Hypericum
                    perforatum e Kava-Kava.
                  </td>
                </tr>
                <tr>
                  <td class="num">2001</td>
                  <td>Brasil</td>
                  <td>
                    Portaria 696/MS cria o Centro Nacional de Monitoração de
                    Medicamentos (CNMM) na unidade de FV da Anvisa.
                  </td>
                </tr>
                <tr>
                  <td class="num">2003</td>
                  <td>Brasil</td>
                  <td>
                    Celobar (sulfato de bário contaminado com carbonato de
                    bário): 22 mortes e 200 casos de intoxicação.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            O padrão se repete: o evento adverso grave aparece primeiro, a regra
            vem depois. É por isso que a farmacovigilância é
            <strong>pós-comercialização</strong> — e por isso ela é obrigatória,
            não opcional.
          </p>
        </article>

        <article id="conceitos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Vocabulário que não é sinônimo</p>
              <h2>Evento adverso, RAM e erro de medicação</h2>
            </div>
          </header>
          <p>
            A farmacovigilância protege a população contra
            <strong>erros de medicação</strong>,
            <strong>reações adversas a medicamentos</strong> e
            <strong>queixas técnicas ou desvios de qualidade</strong>. Misturar
            esses conceitos compromete a notificação e a análise de causalidade.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Conceitos que precisam ser distinguidos</caption>
              <thead>
                <tr>
                  <th scope="col">Termo</th>
                  <th scope="col">Definição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Evento adverso</th>
                  <td>
                    Qualquer agravo à saúde do paciente que pode estar presente
                    durante o tratamento com um produto farmacêutico — inclui
                    dose incorreta, dose omitida, via não especificada, horário
                    errado e outros fatores relacionados ao tratamento.
                  </td>
                </tr>
                <tr>
                  <th scope="row">RAM</th>
                  <td>
                    Reação nociva e não intencional ao medicamento. Uma
                    superdose <strong>não</strong> é RAM pela definição, mas pode
                    ser um evento adverso.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Efeito colateral</th>
                  <td>
                    Efeito previsível, ligado à própria ação farmacológica do
                    medicamento e geralmente dependente da dose.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Erro de medicação</th>
                  <td>
                    Falha evitável no processo: erro de
                    <strong>prescrição</strong>, de <strong>dispensação</strong> ou
                    de <strong>administração</strong>. Não é RAM, mas é evento
                    adverso.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Queixa técnica / desvio de qualidade</th>
                  <td>
                    Suspeita de alteração do produto em si (aspecto, embalagem,
                    teor, contaminação) — segue fluxo próprio de notificação.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--rose">
              <h3>Prescrição ilegível</h3>
              <p>
                Prescrição manual, ilegível ou incompleta é fator clássico de uso
                irracional e de erro: quantas mg? Qual apresentação? Qual
                intervalo?
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Dispensação trocada</h3>
              <p>
                Nomes e embalagens parecidos derrubam o sistema: bromoprida
                trocada por tartarato de brimonidina é o exemplo usado em aula
                para erros de dispensação.
              </p>
            </section>
          </div>

          <p class="card-note">
            <strong>Regra prática:</strong> se houve erro no processo de uso, é
            erro de medicação; se o dano vem da ação do fármaco em dose correta,
            pensa-se em RAM. Os dois podem coexistir no mesmo caso — e ambos
            devem ser notificados.
          </p>
        </article>

        <article id="uso-racional" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">O problema de saúde pública</p>
              <h2>Uso racional de medicamentos e automedicação</h2>
            </div>
          </header>
          <p>
            Usar medicamentos de modo racional é utilizá-los de modo a
            <strong>maximizar a eficácia</strong>,
            <strong>minimizar o risco</strong> de reações adversas e manter um
            custo razoável (OMS, 1989). O uso racional compreende a prescrição
            apropriada, a disponibilidade oportuna e a preços acessíveis, a
            dispensação em condições adequadas e o consumo nas doses, intervalos
            e duração indicados.
          </p>

          <ul class="key-points">
            <li>
              Medicamentos <strong>eficazes</strong>, <strong>seguros</strong> e
              com <strong>qualidade</strong>.
            </li>
            <li>Custo justo e acesso ao medicamento.</li>
            <li>Paciente consciente e pauta de tratamento individualizada.</li>
          </ul>

          <div class="two-columns">
            <section class="concept-panel concept-panel--rose">
              <h3>O que alimenta o uso irracional</h3>
              <ul class="comparison-list">
                <li>Interação de fármacos (3 ou mais).</li>
                <li>Prescrição de medicamentos novos.</li>
                <li>Prescrição manual, ilegível ou incompleta.</li>
                <li>Ausência de farmacêutico clínico em áreas críticas.</li>
                <li>
                  Falta de disciplina de terapêutica clínica nas graduações da
                  área da saúde.
                </li>
                <li>Ausência de medidas não medicamentosas (estilo de vida).</li>
                <li>
                  Baixa qualidade na produção, distribuição e armazenamento.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>O tamanho do problema</h3>
              <ul class="comparison-list">
                <li>
                  279.149 casos confirmados de intoxicação medicamentosa no
                  Brasil entre 2015 e 2021 (DATASUS).
                </li>
                <li>
                  Cerca de 2/3 dos casos associados à tentativa de suicídio
                  (CFF).
                </li>
                <li>
                  Aumento de 70% (2018–2019) e de 19% (2020–2021) nos casos por
                  automedicação.
                </li>
                <li>
                  20.637 intoxicações e 50 mortes por medicamentos em 2017
                  (Sinitox).
                </li>
                <li>
                  Entre 1,2 e 3,2 milhões de internações de urgência por
                  problemas relacionados a medicamentos, com custo de R$ 1,3 a
                  3,6 bilhões.
                </li>
                <li>
                  O uso excessivo de antimicrobianos pode causar até 10 milhões
                  de mortes por ano até 2050 (relatório de entidades ligadas à
                  ONU, 2019).
                </li>
              </ul>
            </section>
          </div>

          <h3>Automedicação responsável</h3>
          <p>
            A OMS reconhece a automedicação responsável como a prática de tratar
            sintomas e males menores com medicamentos aprovados, disponíveis sem
            prescrição, seguros e efetivos quando usados conforme as instruções —
            sempre acompanhados de informação adequada ao consumidor. Praticada
            com consciência, economiza tempo e dinheiro e desonera o sistema
            público de saúde.
          </p>
          <ul class="key-points">
            <li>
              Na farmácia, a automedicação responsável é
              <strong>responsabilidade do farmacêutico</strong>: informar,
              educar e selecionar o que é adequado a cada caso.
            </li>
            <li>
              Base legal e profissional: RDC 586/2013 (prescrição farmacêutica),
              Lei 13.021/2014 (farmácia como estabelecimento de saúde) e
              Resolução CFF 585/2013 (atribuições clínicas do farmacêutico).
            </li>
            <li>
              Autocuidado apoiado (<em>self-care</em>): o farmacêutico orienta,
              acompanha, identifica sinais de alerta e encaminha quando
              necessário.
            </li>
          </ul>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>7 pilares do autocuidado (OMS)</h3>
              <ol class="steps">
                <li>Uso racional de medicamentos.</li>
                <li>Alimentação saudável.</li>
                <li>Atividade física.</li>
                <li>Saúde mental.</li>
                <li>Sono adequado.</li>
                <li>Prevenção de fatores de risco.</li>
                <li>Higiene e autocuidado.</li>
              </ol>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Riscos da automedicação</h3>
              <ul class="comparison-list">
                <li>Reações adversas e interações medicamentosas.</li>
                <li>Intoxicações e erros de dose.</li>
                <li>Mascaramento de doenças.</li>
                <li>Resistência bacteriana.</li>
                <li>Dependência.</li>
                <li>Uso excessivo de vitaminas e suplementos.</li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            Indicação farmacêutica exige atualização científica contínua,
            farmacologia e semiologia, respeito aos limites da atuação
            profissional (cuidado com marketing agressivo e conflitos de
            interesse), compromisso com o uso racional, encaminhamento adequado
            — e, acima de tudo, bom senso, ética e conhecimento
            técnico-científico.
          </p>
        </article>

        <article id="pos-registro" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">
                Por que avaliar depois do registro
              </p>
              <h2>Do ensaio clínico ao mundo real</h2>
            </div>
          </header>
          <p>
            Os estudos em animais identificam toxicidade aguda, dano a órgãos
            específicos, relação dose-efeito, metabolismo (ADME),
            carcinogenicidade, mutagenicidade e teratogenicidade. Ainda assim,
            boa parte das reações adversas só é detectável com o uso em larga
            escala: a probabilidade de detecção cresce ao longo das fases
            clínicas e se concentra na
            <strong>fase IV / farmacovigilância</strong>.
          </p>

          <ul class="key-points">
            <li>
              <strong>Pré-comercialização</strong> — fases I, II e III: estudos
              limitados de toxicidade e população selecionada.
            </li>
            <li>
              <strong>Pós-comercialização</strong> — fase IV: efeitos
              farmacológicos inesperados em alguns pacientes, efeitos
              idiossincráticos e câncer aparecem aqui.
            </li>
          </ul>

          <h3>Limitações dos ensaios clínicos</h3>
          <ul class="comparison-list">
            <li>Número de sujeitos limitado.</li>
            <li>População super-selecionada.</li>
            <li>Indicações de uso restritas.</li>
            <li>Duração limitada.</li>
          </ul>
          <p>
            Mesmo após a aprovação pela Anvisa, FDA ou EMA, ainda faltam
            informações sobre eventos adversos raros, segurança em idosos,
            crianças e gestantes, uso em pacientes com múltiplas doenças,
            efetividade na prática clínica diária e adesão ao tratamento. Por
            isso a avaliação do medicamento continua após a comercialização.
          </p>

          <div
            class="reaction"
            aria-label="Da prática clínica aos dados do mundo real, à análise estatística, à evidência do mundo real e à tomada de decisão"
          >
            <span>Prática clínica</span>
            <span class="reaction__arrow" aria-hidden="true">→</span>
            <span>RWD</span>
            <span class="reaction__arrow" aria-hidden="true">→</span>
            <span>Análise</span>
            <span class="reaction__arrow" aria-hidden="true">→</span>
            <span>RWE</span>
            <span class="reaction__arrow" aria-hidden="true">→</span>
            <span>Decisão</span>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>RWD — os dados</h3>
              <p>
                Dados coletados na prática clínica: prontuários eletrônicos,
                registros hospitalares, sistemas de farmacovigilância (VigiMed,
                VigiBase), bases administrativas (DATASUS, SIH-SUS, SIA-SUS),
                prescrições, registros de pacientes e dispositivos vestíveis.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>RWE — o conhecimento</h3>
              <p>
                Evidência clínica gerada pela análise desses dados. Aplicações:
                identificar eventos adversos raros, avaliar efetividade fora das
                condições ideais dos ensaios, medir adesão e persistência,
                avaliar custos e apoiar decisões regulatórias.
              </p>
            </section>
          </div>

          <h3>Limitações do RWE</h3>
          <ul class="comparison-list">
            <li>Viés de seleção — os pacientes não são randomizados.</li>
            <li>Dados incompletos — prontuários podem apresentar falhas.</li>
            <li>Fatores de confusão entre os grupos.</li>
            <li>Menor controle experimental.</li>
          </ul>

          <p class="card-note">
            Os ensaios clínicos mostram como o medicamento funciona em condições
            ideais; o RWE mostra como ele funciona na vida real.
            <strong>O RWE complementa os ensaios clínicos, mas não os substitui</strong>
            — RWE + farmacovigilância = uso mais seguro e racional dos
            medicamentos.
          </p>
        </article>

        <article id="categorias" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Intercambialidade</p>
              <h2>Categorias de medicamentos</h2>
            </div>
          </header>
          <p>
            Saber o que cada categoria significa é condição para interpretar
            notificações de segurança: o evento precisa ser atribuído ao
            <strong>produto específico</strong> que o paciente utilizou.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Categorias e possibilidade de substituição</caption>
              <thead>
                <tr>
                  <th scope="col">Categoria</th>
                  <th scope="col">O que é</th>
                  <th scope="col">Substituição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Referência</th>
                  <td>
                    Produto inovador, com eficácia, segurança e qualidade
                    comprovadas.
                  </td>
                  <td>É o comparador de todos os demais.</td>
                </tr>
                <tr>
                  <th scope="row">Genérico</th>
                  <td>Bioequivalente ao medicamento de referência.</td>
                  <td>Intercambiável — substituição permitida.</td>
                </tr>
                <tr>
                  <th scope="row">Similar</th>
                  <td>
                    Pode ser intercambiável quando comprovar equivalência
                    farmacêutica e bioequivalência.
                  </td>
                  <td>Somente se constar na lista da Anvisa.</td>
                </tr>
                <tr>
                  <th scope="row">Biológico comparador</th>
                  <td>
                    Obtido de organismos vivos ou de suas células, por processos
                    biotecnológicos complexos (proteínas terapêuticas, hormônios,
                    vacinas, fatores de coagulação, anticorpos monoclonais).
                  </td>
                  <td>É a referência para os biossimilares.</td>
                </tr>
                <tr>
                  <th scope="row">Biossimilar</th>
                  <td>
                    Biológico desenvolvido por exercício de comparabilidade, com
                    alto grau de similaridade em qualidade, segurança, eficácia e
                    imunogenicidade.
                  </td>
                  <td>
                    Alternância reconhecida pela Anvisa, com rastreabilidade e
                    farmacovigilância.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Sintéticos: bioequivalência</h3>
              <p>
                Referência → genérico (e similar intercambiável). A molécula é a
                mesma; o que se demonstra é a equivalência farmacêutica e a
                bioequivalência.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Biológicos: comparabilidade</h3>
              <p>
                Biológico comparador → biossimilares. Por serem proteínas
                complexas, pequenas variações entre lotes são esperadas; no
                Brasil o registro segue a RDC 55/2010 e a RDC 875/2024.
              </p>
            </section>
          </div>

          <h3>Intercambialidade e farmacovigilância</h3>
          <ul class="key-points">
            <li>Toda substituição entre produtos exige monitoramento.</li>
            <li>Biossimilares necessitam de rastreabilidade.</li>
            <li>
              Eventos adversos devem ser relacionados ao produto específico
              utilizado.
            </li>
            <li>
              A Anvisa reconhece a alternância entre comparador e biossimilares e
              entre biossimilares de um mesmo comparador, sempre acompanhada de
              rastreabilidade e farmacovigilância.
            </li>
            <li>
              Intercambialidade inadequada pode gerar erros de dispensação e de
              prescrição.
            </li>
          </ul>
        </article>

        <article id="regulacao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Base regulatória brasileira</p>
              <h2>RDC 406/2020 e IN 63/2020</h2>
            </div>
          </header>
          <p>
            As duas normas formam a base da farmacovigilância no Brasil: a
            <strong>RDC 406/2020</strong> estabelece as regras gerais de Boas
            Práticas de Farmacovigilância (o «manual» da indústria) e a
            <strong>IN 63/2020</strong> detalha o relatório periódico que as
            empresas devem entregar.
          </p>

          <h3>RDC 406/2020 — obrigações do detentor de registro (DRM)</h3>
          <ul class="key-points">
            <li>
              <strong>Responsável pela Farmacovigilância (RFV)</strong> e
              substituto: graduação na área de saúde, experiência comprovada,
              residência no Brasil e disponibilidade em tempo integral (24h).
              Pode acumular outras funções, mas a disponibilidade para questões
              de segurança deve ser total.
            </li>
            <li>
              <strong>Terceirização</strong> é permitida para as atividades de
              farmacovigilância — <em>exceto</em> o RFV e seu substituto, que
              devem ser funcionários da própria empresa.
            </li>
            <li>
              <strong>Autoinspeção</strong>: auditorias internas para avaliar a
              conformidade do sistema, preferencialmente anuais, não excedendo
              dois anos.
            </li>
            <li>
              <strong>RDC 967/2025</strong> (vigência a partir de 2026): torna
              obrigatório o dicionário <strong>WHODrug</strong> para codificação
              de medicamentos, complementando o já obrigatório
              <strong>MedDRA</strong> para eventos adversos.
            </li>
          </ul>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Prazos e guarda da informação</caption>
              <thead>
                <tr>
                  <th scope="col">Situação</th>
                  <th scope="col">Prazo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Evento adverso grave (esperado ou inesperado) no Brasil
                  </th>
                  <td class="num">
                    15 dias corridos do conhecimento do caso (VigiMed)
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Evento adverso grave com óbito ou risco de morte, no Brasil
                  </th>
                  <td class="num">7 dias corridos</td>
                </tr>
                <tr>
                  <th scope="row">
                    Situações urgentes que afetem a segurança do paciente
                  </th>
                  <td class="num">72 horas</td>
                </tr>
                <tr>
                  <th scope="row">Autoinspeção do sistema</th>
                  <td class="num">Preferencialmente anual, máximo de 2 anos</td>
                </tr>
                <tr>
                  <th scope="row">Rastreabilidade dos registros de segurança</th>
                  <td class="num">Mínimo de 20 anos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>
            IN 63/2020 — Relatório Periódico de Avaliação Benefício-Risco (RPBR)
          </h3>
          <p>
            É o documento em que a indústria consolida todos os dados de
            segurança e faz a análise crítica do balanço entre riscos e
            benefícios do produto.
          </p>
          <ul class="key-points">
            <li>
              <strong>Periodicidade</strong> — conforme prazos definidos pela
              Anvisa, geralmente baseados na Data de Nascimento Internacional do
              princípio ativo.
            </li>
            <li>
              <strong>Conteúdo</strong> — sumário executivo em português, análise
              dos dados de segurança (incluindo casos de inefetividade
              terapêutica), exposição de pacientes, estudos clínicos e não
              clínicos e avaliação integrada de benefício-risco.
            </li>
            <li>
              <strong>Responsabilidade</strong> — de todos os DRMs. Em
              medicamentos clones, um único RPBR consolidado deve ser elaborado e
              protocolado por todos os detentores envolvidos.
            </li>
          </ul>

          <p class="card-note">
            A obrigatoriedade da farmacovigilância na indústria vem da RDC
            4/2009 e foi consolidada pela RDC 406/2020, pela IN 63/2020 e pelas
            atualizações relacionadas ao VigiMed.
          </p>
        </article>

        <article id="farmaceutico" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Os dois lados do sistema</p>
              <h2>O papel do farmacêutico na prática</h2>
            </div>
          </header>
          <p>
            O mesmo profissional atua na execução (indústria) e na fiscalização
            (órgão regulador). Entender os dois lados fecha o ciclo da
            farmacovigilância.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Na indústria (DRM), como RFV</h3>
              <ul class="comparison-list">
                <li>
                  Garantir que todos os relatos de eventos adversos (graves,
                  inefetividade, erros de medicação, uso off-label, exposição na
                  gravidez) sejam coletados, processados e notificados nos prazos
                  legais.
                </li>
                <li>
                  Gerenciar o banco de dados de segurança e garantir a
                  rastreabilidade das informações por, no mínimo, 20 anos.
                </li>
                <li>
                  Elaborar o RPBR e o Plano de Gerenciamento de Risco, propondo
                  medidas para minimizar riscos.
                </li>
                <li>
                  Treinar as equipes (incluindo vendas e atendimento ao
                  consumidor) sobre a importância de reportar informações de
                  segurança.
                </li>
                <li>
                  Realizar autoinspeções para garantir que o sistema está
                  funcionando e em conformidade.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>No órgão regulador (Anvisa/SNVS)</h3>
              <ul class="comparison-list">
                <li>
                  <strong>Inspeções</strong> in loco para verificar se a empresa
                  cumpre a RDC 406/2020: existe RFV, notifica nos prazos, o banco
                  de dados é seguro?
                </li>
                <li>
                  <strong>Análise de risco</strong>: avaliar os RPBRs, os sinais
                  gerados no VigiMed e os dados de literatura para decidir se uma
                  bula precisa ser alterada, se o medicamento necessita de
                  restrições ou de recolhimento.
                </li>
                <li>
                  <strong>Regulamentação</strong>: atualizar as normas (como a RDC
                  967/2025) e publicar guias para orientar o setor.
                </li>
              </ul>
            </section>
          </div>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              Farmacovigilância = detecção, avaliação, compreensão e prevenção
              dos efeitos adversos e outros problemas associados a medicamentos
              (OMS, 2002).
            </li>
            <li>Talidomida (focomelia) é o divisor de águas histórico da área.</li>
            <li>
              Evento adverso é mais amplo que RAM: superdose e erro de prescrição
              são eventos adversos, não RAM.
            </li>
            <li>
              Erro de medicação ocorre na prescrição, na dispensação ou na
              administração.
            </li>
            <li>
              Uso racional = eficácia máxima, risco mínimo e custo razoável;
              envolve prescrição, disponibilidade, dispensação e consumo.
            </li>
            <li>
              Automedicação responsável é reconhecida pela OMS e, na farmácia, é
              responsabilidade do farmacêutico.
            </li>
            <li>
              Ensaios clínicos têm população selecionada e duração limitada;
              eventos raros aparecem na fase IV.
            </li>
            <li>RWE complementa os ensaios clínicos, mas não os substitui.</li>
            <li>
              Genérico é bioequivalente; similar precisa constar na lista da
              Anvisa; biossimilar se apoia em comparabilidade e rastreabilidade.
            </li>
            <li>
              RDC 406/2020 exige RFV com disponibilidade integral e veda a
              terceirização do RFV e do substituto.
            </li>
            <li>EAG no Brasil: notificação via VigiMed em até 15 dias corridos.</li>
            <li>
              EAG com óbito ou risco de morte: até 7 dias corridos; urgências de segurança:
              comunicação em até 72 horas.
            </li>
            <li>Registros de segurança guardados por, no mínimo, 20 anos.</li>
            <li>
              RPBR: sumário executivo em português e avaliação integrada de
              benefício-risco.
            </li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir dos materiais de Farmacovigilância da
            UNIFAL-MG (Prof. Dr. Ricardo Radighieri Rascado) —
            «Farmacovigilância e a Promoção do Uso Racional de Medicamentos»,
            assuntos 2 e 3, e do texto complementar sobre a RDC 406/2020 e a IN
            63/2020.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia">
            <span>Índice</span>
            ← Todos os assuntos
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/reacoes-adversas">
            <span>Próximo</span>
            Reações adversas →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
