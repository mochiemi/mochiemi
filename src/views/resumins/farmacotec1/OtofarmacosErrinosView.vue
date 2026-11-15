<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/farmacotec1">Farmacotécnica I</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Otofármacos e errinos</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE II</p>
        <h1 class="intro__title">Otofármacos e errinos</h1>
        <p class="intro__lead">
          Duas mucosas vizinhas, duas lógicas: no ouvido, pH ácido e veículo viscoso; no nariz, pH
          próximo do neutro e respeito absoluto ao movimento ciliar. A página reúne anatomia, patologias
          tratadas, veículos e ensaios.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>6 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#oto">Otofármacos</a>
        <a href="#infeccoes">Infecções auriculares</a>
        <a href="#formas">Formas e veículos</a>
        <a href="#errinos">Errinos</a>
        <a href="#cilios">Efeito sobre os cílios</a>
        <a href="#veiculo-nasal">Veículo nasal</a>
      </nav>

      <div class="lesson">
        <article id="oto" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">Parte I — via auricular</p>
              <h2>Otofármacos</h2>
            </div>
          </header>
          <p>
            São medicamentos administrados por <strong>via auricular</strong>, destinados a exercer efeito
            <strong>tópico</strong>. Usados no tratamento de otites externas e médias.
          </p>

          <section class="worked-example">
            <h3>Anatomia e fisiologia do ouvido externo</h3>
            <p>Meato auditivo. Estruturas de referência:</p>
            <ul class="key-points">
              <li>(1) Pavilhão auricular</li>
              <li>(2) Conduto auditivo</li>
              <li>(3) Tímpano</li>
              <li>(4) Ouvido médio</li>
              <li>(5) Canais semicirculares</li>
              <li>(6) Nervo auditivo</li>
              <li>(7) Trompa de Eustáquio</li>
              <li>(8) Cóclea</li>
            </ul>
            <p class="card-note">
              O conduto auditivo é um tubo curto e revestido por epitélio delicado: volume pequeno
              (10–25 mL por frasco é mais do que suficiente para todo o tratamento) e pouca capacidade de
              tamponamento.
            </p>
          </section>
        </article>

        <article id="infeccoes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Patologias</p>
              <h2>Infecções auriculares</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Quadro</th>
                  <th scope="col">Causa</th>
                  <th scope="col">Sintomas</th>
                  <th scope="col">Tratamento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Obstrução do meato acústico</th>
                  <td>Cerume, insetos</td>
                  <td>Surdez, pressão, dor, tontura</td>
                  <td>
                    Emolientes do cerume, óleos, H₂O₂ 5 a 10 volumes
                  </td>
                </tr>
                <tr>
                  <th scope="row">Otite externa eczematosa</th>
                  <td>Umidade, traumatismos, alcalinidade</td>
                  <td>Eczema do conduto</td>
                  <td>Soluções de nitrato de prata 5%, corticoides/antibióticos</td>
                </tr>
                <tr>
                  <th scope="row">Otite externa piogênica</th>
                  <td><em>Pseudomonas aeruginosa</em>, <em>Staphylococcus</em>, <em>Streptococcus</em></td>
                  <td>Secreção purulenta</td>
                  <td>Sulfas, nitrofurazona, neomicina, polimixina B, rifamicina</td>
                </tr>
                <tr>
                  <th scope="row">Otite média aguda</th>
                  <td><em>Proteus</em>, <em>Pseudomonas</em></td>
                  <td>Diminuição da audição, febre; tímpano íntegro ou perfurado</td>
                  <td>Penicilina, eritromicina, terramicina; calor úmido e descongestionantes nasais</td>
                </tr>
                <tr>
                  <th scope="row">Otite média crônica</th>
                  <td>Otite média aguda supurada não tratada</td>
                  <td>Supuração persistente</td>
                  <td>Tratamento otológico prolongado e avaliação especializada</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>Fórmula cerumenolítica</h3>
            <div class="table-scroll">
              <table class="data-table">
                <thead>
                  <tr>
                    <th scope="col">Componente</th>
                    <th scope="col" class="num">Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Carbonato de sódio ou de potássio</th>
                    <td class="num">2,0 g</td>
                  </tr>
                  <tr>
                    <th scope="row">Glicerina</th>
                    <td class="num">10,0 mL</td>
                  </tr>
                  <tr>
                    <th scope="row">Água destilada</th>
                    <td class="num">10,0 mL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul class="key-points">
              <li>O carbonato alcaliniza e saponifica parcialmente o cerume.</li>
              <li>A glicerina amolece e mantém a viscosidade adequada ao contato prolongado.</li>
              <li>A água permite a dissolução do sal.</li>
            </ul>
          </section>
        </article>

        <article id="formas" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Especificação farmacotécnica</p>
              <h2>Usos, formas farmacêuticas e veículos</h2>
            </div>
          </header>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Usos</h3>
              <ul class="key-points">
                <li>Removedores de cerume.</li>
                <li>Anti-infecciosos.</li>
                <li>Anti-inflamatórios.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Formas farmacêuticas</h3>
              <ul class="key-points">
                <li>Soluções e suspensões.</li>
                <li>Pós e aerossóis.</li>
                <li>Pomadas e otocones.</li>
                <li>Cataplasmas.</li>
              </ul>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Parâmetros da preparação otológica</caption>
              <thead>
                <tr>
                  <th scope="col">Parâmetro</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Volume</th>
                  <td>10 a 25 mL</td>
                </tr>
                <tr>
                  <th scope="row">pH</th>
                  <td>5,0 a 7,8</td>
                </tr>
                <tr>
                  <th scope="row">Veículos</th>
                  <td>Glicerina, propilenoglicol, óleos, álcool</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A faixa de pH 5,0–7,8 exclui valores alcalinos: o pH alcalino no conduto auditivo favorece o
            desenvolvimento de microrganismos — o mesmo raciocínio já visto nos corretores de pH.
          </p>
        </article>

        <article id="errinos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Parte II — via nasal</p>
              <h2>Errinos</h2>
            </div>
          </header>
          <p>
            A mucosa nasal é usada para aplicação tópica de medicamentos destinados a exercer sobre ela
            ação <strong>descongestionante</strong> e <strong>desinfetante</strong>, visando a
            reconstituição das alterações sofridas por estímulos irritantes de várias naturezas.
          </p>

          <section class="worked-example">
            <h3>Histologia e fisiologia do conduto nasal</h3>
            <p>Fossas nasais → mucosa → abertura exterior; glândulas sebáceas e pelos; zona de transição; mucosa nasal respiratória (pituitária); nasofaringe.</p>
            <ul class="key-points">
              <li>
                A mucosa nasal é revestida por <strong>muco</strong> composto de água, sais e
                <strong>mucina</strong>.
              </li>
              <li>
                Reage a estímulos externos com: aumento da vascularização por vasodilatação (obstrução
                nasal); aumento da permeabilidade capilar (exsudação); aumento da temperatura local
                (hipersecreção).
              </li>
              <li>
                A viscosidade do muco é modificada por condições climáticas (temperatura, umidade,
                poeiras, vírus), por medicamentos (atropina) e por fatores acidentais.
              </li>
              <li>
                <strong>pH do muco: 6,4 a 6,8.</strong> Ar frio alcaliniza; ar quente acidifica. As
                variações se devem à fraca capacidade tampão do muco.
              </li>
              <li>A função do muco é proteger a mucosa de agressões externas.</li>
            </ul>
          </section>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Absorção</h3>
              <p>
                Devido à extensa vascularização da mucosa e à fácil administração, a via nasal é usada
                para absorção de fármacos. Ex.: iodeto de potássio e salicilato de sódio são
                identificados na urina cerca de 20 minutos após a administração.
              </p>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Ação tópica</h3>
              <p>Ações: descongestivas, vasoconstritoras, desinfetantes.</p>
              <p>Formas farmacêuticas: soluções (gotas) e aerossóis.</p>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Classes de fármacos usados na via nasal</caption>
              <thead>
                <tr>
                  <th scope="col">Classe</th>
                  <th scope="col">Exemplos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Descongestionantes</th>
                  <td>Efedrina, neo-sinefrina</td>
                </tr>
                <tr>
                  <th scope="row">Anti-inflamatórios</th>
                  <td>Dexametasona, prednisolona</td>
                </tr>
                <tr>
                  <th scope="row">Anti-infecciosos</th>
                  <td>NaCl hipertônico, neomicina</td>
                </tr>
                <tr>
                  <th scope="row">Antissépticos</th>
                  <td>Cloreto de benzalcônio</td>
                </tr>
                <tr>
                  <th scope="row">Anti-histamínicos</th>
                  <td>Rinite alérgica</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="cilios" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">O teste mais importante</p>
              <h2>Efeitos de fármacos sobre os cílios</h2>
            </div>
          </header>
          <p>
            O epitélio nasal é <strong>ciliado</strong>. Paralisar ou destruir os cílios significa perder o
            clearance mucociliar — e transformar uma descongestão em doença crônica.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Agente</th>
                  <th scope="col">Concentração</th>
                  <th scope="col">Efeito</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" rowspan="3">Cloreto de sódio</th>
                  <td>0,2 – 0,3%</td>
                  <td>Paralisação do movimento ciliar</td>
                </tr>
                <tr>
                  <td>0,9%</td>
                  <td>Bem tolerado</td>
                </tr>
                <tr>
                  <td>4,0 – 4,5%</td>
                  <td>Paralisação</td>
                </tr>
                <tr>
                  <th scope="row">Agentes quelantes de cálcio</th>
                  <td>EDTA, tartaratos, citratos, oxalatos</td>
                  <td>Paralisação</td>
                </tr>
                <tr>
                  <th scope="row">Proteinatos de prata</th>
                  <td>—</td>
                  <td>Diminuição do movimento</td>
                </tr>
                <tr>
                  <th scope="row">Nitrato de prata</th>
                  <td>0,5%</td>
                  <td>Destruição</td>
                </tr>
                <tr>
                  <th scope="row">Sulfato de zinco</th>
                  <td>0,5%</td>
                  <td>Destruição</td>
                </tr>
                <tr>
                  <th scope="row">Cocaína</th>
                  <td>&gt; 2,5%</td>
                  <td>Paralisação</td>
                </tr>
                <tr>
                  <th scope="row">Efedrina</th>
                  <td>0,5 – 1%</td>
                  <td>Bem tolerado</td>
                </tr>
                <tr>
                  <th scope="row">Cânfora, eucaliptol, mentol</th>
                  <td>&lt; 0,1%</td>
                  <td>Bem tolerado</td>
                </tr>
                <tr>
                  <th scope="row">Timol</th>
                  <td>&gt; 0,1%</td>
                  <td>Paralisação</td>
                </tr>
                <tr>
                  <th scope="row">Penicilina</th>
                  <td>500 UI/mL</td>
                  <td>Diminuição do movimento</td>
                </tr>
                <tr>
                  <th scope="row">Sulfatiazol</th>
                  <td>5%</td>
                  <td>Destruição</td>
                </tr>
                <tr>
                  <th scope="row">Cloreto de benzalcônio</th>
                  <td>1:1000</td>
                  <td>Bem tolerado</td>
                </tr>
                <tr>
                  <th scope="row">Tensoativos aniônicos e não iônicos</th>
                  <td>—</td>
                  <td>Bem tolerado</td>
                </tr>
                <tr>
                  <th scope="row">Anti-histamínicos</th>
                  <td>—</td>
                  <td>Bem tolerado</td>
                </tr>
                <tr>
                  <th scope="row">Óleos</th>
                  <td>—</td>
                  <td>Interferem no movimento ciliar pela viscosidade</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Curiosidade que cai em prova: NaCl 0,1% também paralisa, 0,9% é tolerado e 4–4,5% volta a
            paralisar. A relação não é monotônica — é justamente por isso que a isotonia importa.
          </p>
        </article>

        <article id="veiculo-nasal" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Especificação e controle</p>
              <h2>Veículo, acondicionamento e ensaios dos errinos</h2>
            </div>
          </header>

          <section class="worked-example">
            <h3>Um veículo para medicamento nasal deve</h3>
            <ul class="key-points">
              <li>Possuir pH entre <strong>6,5 e 8,3</strong>.</li>
              <li>Ter uma certa capacidade tampão.</li>
              <li>Ter tonicidade que não interfira com a motilidade dos cílios.</li>
              <li>Não modificar a viscosidade normal do muco.</li>
              <li>Ser compatível com a atividade dos cílios.</li>
              <li>Ser compatível com os medicamentos.</li>
              <li>Ser estável.</li>
              <li>Ser estéril.</li>
            </ul>
          </section>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Acondicionamento</h3>
              <ul class="key-points">
                <li>Frascos de vidro (conta-gotas).</li>
                <li>Frascos nebulizadores.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Ensaios</h3>
              <ul class="key-points">
                <li>Dosagem e identificação dos princípios ativos.</li>
                <li>
                  <strong>Inocuidade para a atividade ciliar</strong> — traqueia de cobaia em microscópio
                  de Köfler; o movimento ciliar deve se manter por 20 minutos.
                </li>
                <li>
                  <strong>Esterilidade</strong> — não deve conter qualquer microrganismo patogênico.
                </li>
              </ul>
            </section>
          </div>

          <p class="card-note">
            Compare as duas faixas de pH: <strong>otológico 5,0–7,8</strong> (levemente ácido, para inibir
            microrganismos) e <strong>nasal 6,5–8,3</strong> (próximo do pH do muco, 6,4–6,8, para não
            paralisar os cílios). O pH é sempre uma decisão fisiológica, não estética.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Otofármaco: via auricular, efeito tópico, otites externas e médias.</li>
            <li>Volume 10–25 mL; pH 5,0–7,8; veículos glicerina, propilenoglicol, óleos, álcool.</li>
            <li>Cerumenolítico clássico: carbonato de Na/K 2 g + glicerina 10 mL + água 10 mL.</li>
            <li>Otite externa piogênica: <em>Pseudomonas</em> e <em>Staphylococcus</em>.</li>
            <li>Errinos atuam como descongestionantes, vasoconstritores e desinfetantes.</li>
            <li>pH do muco nasal: 6,4–6,8; veículo nasal: 6,5–8,3.</li>
            <li>NaCl 0,9% é tolerado pelos cílios; 0,2–0,3% e 4–4,5% paralisam.</li>
            <li>Nitrato de prata 0,5% e sulfato de zinco 0,5% destroem os cílios.</li>
            <li>Ensaio de inocuidade ciliar: traqueia de cobaia, 20 minutos.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Otofármacos” e “Errinos” (Prof. Antonio Luengo Garcia,
            UNIFAL-MG, 2025–2026).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/colirios">
            <span>Anterior</span>
            ← Colírios
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/relatorios">
            <span>Próximo</span>
            Relatórios de prática →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
