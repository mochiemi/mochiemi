<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/unifal/farmacovigilancia">Farmacovigilância</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Reações adversas</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">UNIFAL-MG · FARMACOVIGILÂNCIA · ASSUNTO 4</p>
        <h1 class="intro__title">Reações adversas</h1>
        <p class="intro__lead">
          O que é uma reação adversa a medicamento, como classificá-la pelo
          <strong>mecanismo</strong> (efeito colateral, superdosagem relativa, efeito secundário,
          idiossincrasia, hipersensibilidade e tolerância), pelo <strong>tipo A–H</strong> e pela
          <strong>gravidade</strong>, e como tudo isso se conecta ao sistema que vigia os
          medicamentos no Brasil: CNMM, Notivisa, VigiMed, CIMs e as ações da Anvisa.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">Guia de estudo</span>
          <span class="intro__chip">10 tópicos essenciais</span>
          <span class="intro__chip">Prof. Dr. Ricardo Radighieri Rascado</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#conceito">Conceito</a>
        <a href="#mecanismo">Por mecanismo</a>
        <a href="#tipos-ah">Tipos A–H</a>
        <a href="#gravidade">Gravidade</a>
        <a href="#agencia">Quem vigia</a>
        <a href="#brasil">Por que no Brasil</a>
        <a href="#beneficio-risco">Benefício × risco</a>
        <a href="#notivisa">Notivisa e VigiMed</a>
        <a href="#cim">CIMs</a>
        <a href="#anvisa">Ações da Anvisa</a>
      </nav>

      <div class="lesson">
        <article id="conceito" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">Ponto de partida</p>
              <h2>O que é uma reação adversa a medicamento</h2>
            </div>
          </header>

          <div
            class="formula"
            aria-label="Definição de reação adversa a medicamento: reação nociva e não intencional produzida por medicamentos em doses normalmente utilizadas no homem para profilaxia, diagnóstico, tratamento de enfermidades ou modificação de uma função fisiológica"
          >
            <span>
              «Reação <strong>nociva</strong> e <strong>não intencional</strong> produzida por
              medicamentos, em <strong>doses normalmente utilizadas</strong>, no homem, para
              profilaxia, diagnóstico, tratamento das enfermidades ou para modificação de uma função
              fisiológica.»
            </span>
          </div>

          <p>
            Três pedaços dessa definição carregam todo o resto da disciplina:
          </p>
          <ul class="key-points">
            <li>
              <strong>Nociva e não intencional</strong> — o efeito indesejável não é o objetivo da
              terapia. Se o objetivo era o efeito, não há reação adversa.
            </li>
            <li>
              <strong>Em doses normalmente utilizadas</strong> — é isso que separa a reação adversa
              da <em>intoxicação</em>. Quem tomou o dobro da dose produziu um evento por
              superdose, não uma RAM «típica» de uso terapêutico.
            </li>
            <li>
              <strong>Qualquer finalidade terapêutica</strong> — vale também para profilaxia
              (vacinas), diagnóstico (contrastes) e modificação de função fisiológica (anticoncepção).
            </li>
          </ul>

          <p class="card-note">
            Não confunda os três conceitos: <strong>evento adverso</strong> é qualquer ocorrência
            médica indesejável (o guarda-chuva, sem exigir nexo causal);
            <strong>reação adversa</strong> exige a <em>suspeita</em> de que o medicamento causou o
            dano; e <strong>erro de medicação</strong> é a falha evitável no processo (prescrição,
            dispensação, administração). O detalhamento está no
            <router-link to="/resumins/unifal/farmacovigilancia/resumogeral">resumo geral</router-link>.
          </p>
        </article>

        <article id="mecanismo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Classificação clássica</p>
              <h2>Os seis tipos de reação pelo mecanismo</h2>
            </div>
          </header>
          <p>
            A classificação mais usada em sala entende os principais mecanismos de produção como
            seis padrões distintos. Ela ajuda a responder a pergunta prática:
            <strong>«por que esse paciente reagiu assim?»</strong>
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Seis tipos de reações indesejáveis (Gomes &amp; Reis, Ciências Farmacêuticas —
                abordagem em Farmácia Hospitalar, 2001).
              </caption>
              <thead>
                <tr>
                  <th scope="col">Tipo</th>
                  <th scope="col">Mecanismo</th>
                  <th scope="col">Exemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Efeito colateral</th>
                  <td>
                    Inerente à própria ação farmacológica, mas indesejável naquele momento; é um
                    prolongamento (mais fraco) da ação principal.
                  </td>
                  <td>
                    Broncoespasmo com β-bloqueadores; sonolência com benzodiazepínicos; arritmias
                    com glicosídeos.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Superdosagem relativa</th>
                  <td>
                    Dose terapêutica, mas concentrações acima do habitual por alteração funcional do
                    organismo.
                  </td>
                  <td>
                    Surdez em pacientes com insuficiência renal tratados com aminoglicosídeos.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Efeito secundário</th>
                  <td>
                    Não decorre da ação principal, e sim da <em>consequência</em> do efeito buscado.
                  </td>
                  <td>
                    Tetraciclina depositada em dentes e ossos na pediatria, descolorindo o esmalte
                    dos dentes decíduos e permanentes.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Idiossincrasia</th>
                  <td>
                    Sensibilidade peculiar ligada à estrutura singular de um sistema enzimático —
                    em geral polimorfismo genético. Atinge minoria dos indivíduos, pode ser fatal.
                  </td>
                  <td>
                    Anemia hemolítica por deficiência de glicose-6-fosfato desidrogenase (G6PD) com
                    primaquina (traço recessivo ligado ao sexo).
                  </td>
                </tr>
                <tr>
                  <th scope="row">Hipersensibilidade alérgica</th>
                  <td>
                    Exige sensibilização prévia e mediação imunitária. A intensidade
                    <strong>não</strong> acompanha a dose.
                  </td>
                  <td>
                    Anafilaxia (tipo I): urticária, edema de tecidos moles, broncoconstrição e
                    hipotensão por liberação de histamina e outros mediadores.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Tolerância</th>
                  <td>
                    Administração repetida na mesma dose diminui progressivamente o efeito; é preciso
                    aumentar a dose. Instala-se em dias ou semanas.
                  </td>
                  <td>
                    Tolerância aos barbitúricos, com redução do efeito anticonvulsivante.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Dose explica?</h3>
              <p>
                <strong>Efeito colateral</strong>, <strong>superdosagem relativa</strong> e
                <strong>tolerância</strong> são fenômenos previsíveis pelo conhecimento da
                farmacologia: mudando a dose (ou o esquema), muda o efeito.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Hospedeiro explica?</h3>
              <p>
                <strong>Idiossincrasia</strong> e <strong>hipersensibilidade</strong> dependem do
                indivíduo, não da dose — e é justamente aí que a farmacovigilância encontra os casos
                raros e graves, invisíveis nos ensaios clínicos.
              </p>
            </section>
          </div>
        </article>

        <article id="tipos-ah" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Classificação por previsibilidade</p>
              <h2>Tipos A a H (Wills &amp; Brown, 1999)</h2>
            </div>
          </header>
          <p>
            Wills e Brown propuseram oito categorias (mais o tipo <strong>U</strong>, das reações
            não classificadas). O ganho em relação à classificação por mecanismo é operacional: cada
            letra indica <strong>o que se pode prever</strong> e, portanto, o que se pode monitorar.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Tipo A — aumentada</h3>
              <ul class="comparison-list">
                <li>Efeito tóxico ou secundário explicado pela ação farmacológica.</li>
                <li>Comum, <strong>dose-dependente</strong>, baixa letalidade.</li>
                <li>Manejo: ajuste de dose ou suspensão.</li>
                <li>Exemplo: secura da boca por anticolinérgicos (atropina).</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Tipo B — bizarra</h3>
              <ul class="comparison-list">
                <li>Resposta anormal, alergia ou idiossincrasia fora do alvo terapêutico.</li>
                <li>Rara, <strong>independente da dose</strong>, grave (morbidade ou óbito).</li>
                <li>Manejo: suspensão imediata e contraindicação absoluta.</li>
                <li>Exemplo: choque anafilático por penicilina.</li>
              </ul>
            </section>
          </div>

          <ul class="key-points">
            <li>
              <strong>C a H</strong> completam o quadro considerando <strong>tempo de exposição</strong>
              (reações crônicas e tardias), <strong>suspensão do fármaco</strong> (reações de
              abstinência), <strong>falha terapêutica</strong> e padrões menos frequentes, como
              genotoxicidade.
            </li>
            <li>
              <strong>Tipo U</strong> — não classificadas: o caso não se encaixa em nenhuma
              categoria e permanece em observação.
            </li>
            <li>
              Para prova, o que importa é a lógica da dupla <strong>A × B</strong> (previsível e
              dependente da dose versus imprevisível e independente da dose). O detalhamento das
              escalas está na
              <router-link to="/resumins/unifal/farmacovigilancia/escalas">página das escalas</router-link>.
            </li>
          </ul>
        </article>

        <article id="gravidade" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Quanto doeu</p>
              <h2>Classificação pela gravidade</h2>
            </div>
          </header>
          <p>
            Gravidade é uma escala de <strong>impacto clínico</strong> — e ela tem consequência
            regulatória direta: quanto mais grave, mais rápido o prazo de notificação.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Gradação de gravidade das reações adversas a medicamentos.</caption>
              <thead>
                <tr>
                  <th scope="col">Gravidade</th>
                  <th scope="col">O que caracteriza</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Leve</th>
                  <td>
                    Não requer tratamento específico nem antídoto; não é necessário suspender o
                    fármaco.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Moderada</th>
                  <td>
                    Exige modificação da terapêutica, mas não a suspensão do fármaco agressor; pode
                    prolongar a hospitalização e exigir tratamento específico.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Grave</th>
                  <td>
                    Potencialmente fatal; requer interromper o medicamento e tratar a reação; exige
                    hospitalização ou prolonga a internação.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Letal</th>
                  <td>Contribui direta ou indiretamente para a morte do paciente.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            <strong>Cuidado com o falso sinônimo.</strong> «Grave» (gravidade do desfecho) não é o
            mesmo que «severo» (intensidade do sintoma). Uma reação intensa que passa sozinha pode
            não ser grave; um evento discreto que exige internação é grave. Na oncologia, o padrão
            de gradação é o <strong>CTCAE</strong>, com critérios específicos por sistema de órgãos.
          </p>
        </article>

        <article id="agencia" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Panorama institucional</p>
              <h2>Quem faz farmacovigilância no mundo</h2>
            </div>
          </header>
          <p>
            Cada país tem sua agência responsável pela farmacovigilância. Os dados convergem para o
            programa internacional coordenado pela OMS, sediado no
            <strong>Uppsala Monitoring Centre (UMC)</strong>, na Suécia.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Agências de referência citadas no material da disciplina.</caption>
              <thead>
                <tr>
                  <th scope="col">Local</th>
                  <th scope="col">Agência</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Brasil</th>
                  <td>ANVISA</td>
                </tr>
                <tr>
                  <th scope="row">Portugal</th>
                  <td>Infarmed</td>
                </tr>
                <tr>
                  <th scope="row">Reino Unido</th>
                  <td>MHRA — Medicines and Healthcare products Regulatory Agency</td>
                </tr>
                <tr>
                  <th scope="row">Estados Unidos</th>
                  <td>FDA</td>
                </tr>
                <tr>
                  <th scope="row">Europa</th>
                  <td>
                    PhVWP — Grupo Europeu de Farmacovigilância, subgrupo do CHMP (Comitê de
                    Medicamentos de Uso Humano) da EMEA (Agência Europeia do Medicamento).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>O arranjo brasileiro</h3>
          <p>
            A <strong>Portaria nº 696, de 7 de maio de 2001</strong> instituiu o
            <strong>Centro Nacional de Monitorização de Medicamentos (CNMM)</strong>, sediado na
            Unidade de Farmacovigilância da Anvisa (UFARM/GGMED). O CNMM é o ponto nacional que
            conversa com a OMS/UMC e recebe notificações de farmácias, profissionais de saúde,
            centros notificadores, indústrias farmacêuticas, programas federais, centros municipais,
            instituições colaboradoras e consumidores.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Programa da OMS</h3>
              <p>
                Em dezembro de 2004, o programa internacional já reunia mais de 3 milhões de
                notificações de RAM, com 74 países membros e 11 países associados.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Ciclo de gestão de segurança</h3>
              <p>
                Identificar → notificar → investigar → avaliar → agir → informar → monitorar. Um
                único caso raramente muda uma bula; o ciclo existe para acumular, comparar e então
                decidir.
              </p>
            </section>
          </div>
        </article>

        <article id="brasil" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Contexto local</p>
              <h2>Por que o Brasil precisa de farmacovigilância própria</h2>
            </div>
          </header>
          <p>
            Dados de farmacovigilância não são universalmente transferíveis. O perfil de segurança
            de um medicamento depende de quem o usa, de como é usado e de como o sistema de saúde o
            entrega. O material organiza os motivos em três níveis:
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Fatores que justificam a farmacovigilância no Brasil.</caption>
              <thead>
                <tr>
                  <th scope="col">Nível</th>
                  <th scope="col">Fatores</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Individual</th>
                  <td>Genética e práticas individuais do paciente (adesão, automedicação).</td>
                </tr>
                <tr>
                  <th scope="row">Regional</th>
                  <td>
                    Cultura, condições socioeconômicas, práticas profissionais em saúde e distintas
                    formulações farmacêuticas disponíveis.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Nacional</th>
                  <td>
                    Sistema de saúde, mercado de produtos farmacêuticos, perfil epidemiológico das
                    doenças e práticas distintas de farmacovigilância no mundo.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A tudo isso se somam as <strong>limitações próprias da pesquisa clínica</strong>: número
            limitado de pacientes, critérios de inclusão restritivos e tempo de observação curto.
            O que não apareceu no ensaio clínico só pode aparecer no mundo real — e é a
            farmacovigilância que faz esse «ensaio da vida real».
          </p>
        </article>

        <article id="beneficio-risco" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">O critério de tudo</p>
              <h2>Relação benefício × risco</h2>
            </div>
          </header>
          <p>
            Nenhum medicamento é seguro em absoluto: ele é registrado porque, para uma dada
            população, o <strong>benefício (efetividade)</strong> supera o <strong>risco
            (segurança)</strong>. A farmacovigilância acompanha essa balança ao longo de todo o
            ciclo de vida do produto.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Equilíbrio benefício × risco (CIOMS IV, 1998).</caption>
              <thead>
                <tr>
                  <th scope="col">Situação</th>
                  <th scope="col">Benefício</th>
                  <th scope="col">Risco</th>
                  <th scope="col">Consequência</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Excelente equilíbrio</th>
                  <td>Maior</td>
                  <td>Menor</td>
                  <td>Uso amplo.</td>
                </tr>
                <tr>
                  <th scope="row">Equilíbrio intermediário</th>
                  <td>Menor</td>
                  <td>Maior</td>
                  <td>Uso em populações restritas e necessidade de monitorização.</td>
                </tr>
                <tr>
                  <th scope="row">Pior equilíbrio</th>
                  <td>Menor</td>
                  <td>Maior</td>
                  <td>Restrições, medidas adicionais ou retirada do mercado.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            É essa mesma balança que sustenta as decisões regulatórias: mudar a bula, restringir o
            uso, suspender a comercialização ou retirar o produto do mercado não são punições — são
            correções de rota quando o prato do risco começa a pesar mais que o do benefício.
          </p>
        </article>

        <article id="notivisa" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Onde a notificação vira dado</p>
              <h2>Notivisa e VigiMed</h2>
            </div>
          </header>
          <p>
            O <strong>Notivisa</strong> (Sistema Nacional de Notificações para a Vigilância
            Sanitária) foi a ferramenta informatizada em plataforma web desenvolvida pela Anvisa
            para receber notificações de problemas com produtos sob vigilância sanitária. Em 2007
            recebeu <strong>9.733 notificações</strong>, sendo cerca de 35% provenientes de São
            Paulo — e a maior parte delas era de <strong>queixas técnicas</strong>, não de eventos
            adversos.
          </p>
          <p>
            O <strong>VigiMed</strong> o substituiu como porta de entrada das notificações de
            farmacovigilância, com melhorias práticas:
          </p>
          <ul class="key-points">
            <li>Acesso fácil e rápido, sem cadastro, para cidadãos e profissionais liberais.</li>
            <li>Maior estabilidade do sistema.</li>
            <li>Cadastro simplificado para serviços de saúde e vigilância sanitária.</li>
            <li>Melhoria no envio das notificações pelos usuários e no recebimento pela Anvisa.</li>
            <li>Funcionalidades mais modernas de avaliação pela farmacovigilância.</li>
            <li>Geração facilitada de informação para decisão e divulgação ao público.</li>
          </ul>
          <p class="card-note">
            <strong>Queixa técnica não é evento adverso.</strong> Desvio de qualidade, embalagem
            violada ou comprimido quebrado são desvios do produto; a RAM é o dano ao paciente. Os
            dois entram no sistema, mas em categorias diferentes — e o VigiMed padroniza ambos.
          </p>
        </article>

        <article id="cim" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">09</span>
            <div>
              <p class="card-heading__eyebrow">Informação qualificada</p>
              <h2>Centros de Informação sobre Medicamentos</h2>
            </div>
          </header>
          <p>
            Os <strong>CIMs</strong> são unidades operacionais que fornecem informação
            técnico-científica sobre medicamentos de forma objetiva e oportuna. Eles existem porque
            há um descompasso estrutural: falta informação adequada a quem prescreve, dispensa,
            administra e consome — e essa falta resulta em uso inapropriado.
          </p>

          <h3>A «explosão de informação»</h3>
          <p>
            Estima-se que, para se manter atualizado apenas na leitura das melhores revistas de
            medicina interna, um clínico precisaria ler cerca de <strong>200 artigos e 70
            editoriais por mês</strong>. Somam-se novos conceitos de farmacocinética e
            biodisponibilidade, descrições de reações adversas e interações cada vez mais complexas,
            interferências pré-analíticas em exames laboratoriais e mudanças frequentes na
            legislação.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Para o profissional</h3>
              <p>
                Resposta rápida e confiável para dúvidas de prescrição, sem exigir que ele consiga
                acompanhar sozinho toda a literatura nova.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Para o paciente</h3>
              <p>
                Esclarecimento sobre o uso correto do medicamento e um local seguro para tirar
                dúvidas surgidas durante o tratamento.
              </p>
            </section>
          </div>

          <h3>Como funciona o CIM-Unifal</h3>
          <ol class="steps">
            <li>
              A solicitação chega por e-mail, blog, site, redes sociais, fax, telefone ou
              pessoalmente.
            </li>
            <li>A demanda é encaminhada a toda a equipe e delegada a um membro.</li>
            <li>O membro faz a pesquisa prévia e elabora a resposta.</li>
            <li>O professor responsável confere a resposta antes do envio.</li>
            <li>Semanalmente, as respostas são discutidas em reunião.</li>
            <li>
              As solicitações alimentam um banco de dados, e são promovidos ciclos de palestras
              sobre uso racional de medicamentos.
            </li>
          </ol>
        </article>

        <article id="anvisa" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">10</span>
            <div>
              <p class="card-heading__eyebrow">Do dado à decisão</p>
              <h2>O que a Anvisa pode fazer com as notificações</h2>
            </div>
          </header>
          <p>
            Diante das notificações recebidas, a Anvisa dispõe de instrumentos de complexidade
            crescente — do simples alerta à retirada do produto do mercado:
          </p>
          <ul class="key-points">
            <li><strong>Alertas em farmacovigilância</strong> — comunicação de um risco novo.</li>
            <li>
              <strong>Cartas das indústrias aos profissionais de saúde</strong> — comunicação direta
              do detentor do registro (a DHPC).
            </li>
            <li><strong>Informes técnicos</strong> — posicionamento técnico da agência.</li>
            <li>
              <strong>Atos regulatórios</strong> — modificações na bula, restrição de uso, suspensão
              da comercialização e retirada do mercado.
            </li>
          </ul>
          <p class="card-note">
            Repare na lógica: a notificação de um único profissional de saúde, somada a outras,
            pode terminar em alteração de bula para milhões de pacientes. É o percurso completo
            da farmacovigilância — e explica por que a subnotificação é tratada como o principal
            problema do sistema.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              RAM = reação nociva e não intencional, em <strong>doses normalmente utilizadas</strong>
              — o que a distingue da intoxicação.
            </li>
            <li>
              Seis tipos por mecanismo: efeito colateral, superdosagem relativa, efeito secundário,
              idiossincrasia, hipersensibilidade alérgica e tolerância.
            </li>
            <li>
              Efeito colateral é farmacológico; efeito secundário é consequência do efeito buscado
              (tetraciclina nos dentes).
            </li>
            <li>
              Idiossincrasia — polimorfismo genético (G6PD + primaquina). Hipersensibilidade —
              sensibilização prévia e intensidade independente da dose (anafilaxia).
            </li>
            <li>Tolerância leva dias ou semanas e exige aumento progressivo de dose.</li>
            <li>
              Tipos A (previsível, dose-dependente, comum) e B (imprevisível, independente da dose,
              raro e grave) — Wills &amp; Brown, 1999.
            </li>
            <li>Gravidade: leve, moderada, grave e letal; CTCAE é o padrão em oncologia.</li>
            <li>
              CNMM criado pela Portaria 696/2001, na Unidade de Farmacovigilância da Anvisa
              (UFARM/GGMED), conectado à OMS/UMC (Uppsala, Suécia).
            </li>
            <li>Notivisa → VigiMed: notificação de cidadãos e profissionais liberais sem cadastro.</li>
            <li>
              Ações da Anvisa: alertas, cartas aos profissionais, informes técnicos e atos
              regulatórios (bula, restrição, suspensão, retirada).
            </li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir do material de Farmacovigilância da UNIFAL-MG (Prof. Dr.
            Ricardo Radighieri Rascado) — «Reações adversas», assunto 4, com apoio em Gomes &amp;
            Reis (2001) e Wills &amp; Brown (1999).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/resumogeral">
            <span>Anterior</span>
            ← Farmacovigilância — resumo geral
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacovigilancia/hospitalar">
            <span>Próximo</span>
            Farmacovigilância no hospital →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
