<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/farmacotec1">Farmacotécnica I</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Classificação</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE I</p>
        <h1 class="intro__title">Classificação dos medicamentos</h1>
        <p class="intro__lead">
          Antes de manipular é preciso nomear: o que é forma e o que é fórmula, o que distingue droga
          de fármaco, medicamento de remédio, oficinal de magistral. Esta página reúne a terminologia,
          os critérios de classificação e a anatomia da fórmula farmacêutica.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>10 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#forma">Forma e fórmula</a>
        <a href="#terminologia">Terminologia</a>
        <a href="#farmacopeia">Farmacopeia</a>
        <a href="#criterios">Critérios</a>
        <a href="#topicos">Tópicos</a>
        <a href="#constituintes">Constituintes</a>
        <a href="#analise">Análise da fórmula</a>
      </nav>

      <div class="lesson">
        <article id="forma" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O ponto de partida</p>
              <h2>Forma e fórmula farmacêutica</h2>
            </div>
          </header>
          <p>
            <strong>Formas farmacêuticas</strong> são o resultado das várias operações a que se
            submetem as substâncias medicamentosas a fim de facilitar a posologia e a administração,
            mascarar os caracteres organolépticos e assegurar a ação desejada.
          </p>
          <p>
            Compete ao ramo farmacêutico <strong>preparar, conservar, acondicionar e dispensar</strong>
            medicamentos doseados com maior precisão e apresentados sob uma forma que facilite a
            administração.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Forma farmacêutica</h3>
              <p>
                O <em>produto final</em>: cápsula, xarope, creme, colírio, supositório. É a
                apresentação física que veicula o princípio ativo.
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Fórmula farmacêutica</h3>
              <p>
                A <em>receita de composição</em>: quais componentes entram, em que quantidade e com
                qual função. É o documento que descreve a forma.
              </p>
            </section>
          </div>

          <p class="card-note">
            A disciplina é a <strong>Tecnologia Farmacêutica</strong> — também chamada Farmacotécnica
            ou Farmácia Galênica: a transformação de insumos em formas farmacêuticas
            <strong>estáveis, precisas e administráveis</strong>.
          </p>
        </article>

        <article id="terminologia" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Vocabulário técnico</p>
              <h2>Terminologia essencial</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Termos cobrados em prova e usados na rotina da farmácia</caption>
              <thead>
                <tr>
                  <th scope="col">Termo</th>
                  <th scope="col">Definição</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Manipulação</th>
                  <td>
                    Conjunto de procedimentos técnicos e operacionais pelos quais a farmácia prepara
                    o medicamento, a partir de uma prescrição (magistral) ou de uma fórmula oficial
                    (oficinal).
                  </td>
                </tr>
                <tr>
                  <th scope="row">Preparação oficinal</th>
                  <td>
                    Medicamento preparado na farmácia segundo fórmula inscrita na Farmacopeia ou em
                    formulário oficial.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Dispensação</th>
                  <td>
                    Ato profissional de fornecer o medicamento ao paciente, com as orientações de uso
                    e conservação.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Especialidade farmacêutica</th>
                  <td>
                    Medicamento produzido pela indústria, registrado no órgão sanitário e identificado
                    por marca comercial.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Droga</th>
                  <td>
                    Matéria-prima de origem vegetal, animal ou mineral, empregada como tal ou como
                    ponto de partida para a obtenção de princípios ativos.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Fármaco</th>
                  <td>
                    Substância química de constituição definida, dotada de ação farmacológica — o
                    princípio ativo.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Matéria-prima</th>
                  <td>
                    Todo insumo que entra na composição: princípio ativo, excipiente, veículo,
                    material de embalagem.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Medicamento</th>
                  <td>
                    Produto farmacêutico, tecnicamente obtido ou elaborado, com finalidade
                    profilática, curativa, paliativa ou para fins de diagnóstico.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Remédio</th>
                  <td>
                    Tudo aquilo que cura ou alivia — inclui medidas que não são medicamentos
                    (repouso, fisioterapia, dieta).
                  </td>
                </tr>
                <tr>
                  <th scope="row">Entorpecente / psicotrópico</th>
                  <td>
                    Substâncias que atuam no sistema nervoso central com potencial de dependência,
                    sujeitas a controle especial de prescrição, dispensação e escrituração.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Medicamento alopático</th>
                  <td>Preparado segundo a terapêutica alopática (princípio dos contrários).</td>
                </tr>
                <tr>
                  <th scope="row">Medicamento homeopático</th>
                  <td>
                    Preparado segundo a farmacotécnica homeopática (diluições e dinamizações),
                    conforme a Farmacopeia Homeopática Brasileira.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            <strong>Droga ≠ fármaco ≠ medicamento.</strong> A droga é o material bruto, o fármaco é a
            molécula com atividade e o medicamento é o produto pronto para uso. O remédio é o conceito
            mais amplo dos quatro.
          </p>
        </article>

        <article id="farmacopeia" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">A referência legal</p>
              <h2>Farmacopeia Brasileira e literatura farmacotécnica</h2>
            </div>
          </header>
          <p>
            A Farmacopeia é o <strong>código oficial da profissão farmacêutica</strong> no país: fixa
            métodos gerais, monografias de insumos e de produtos, e é o parâmetro legal para os
            ensaios de controle da qualidade.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Edições da Farmacopeia Brasileira</caption>
              <thead>
                <tr>
                  <th scope="col">Edição</th>
                  <th scope="col">Ano</th>
                  <th scope="col">Marcos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1ª</th>
                  <td class="num">1926</td>
                  <td>
                    Farmacopeia dos Estados Unidos do Brasil; elaborada pelo farmacêutico Rodolfo
                    Albino Dias da Silva.
                  </td>
                </tr>
                <tr>
                  <th scope="row">2ª</th>
                  <td class="num">1959</td>
                  <td>Revisão geral após a estruturação da legislação sanitária.</td>
                </tr>
                <tr>
                  <th scope="row">3ª</th>
                  <td class="num">1977</td>
                  <td>
                    Publicada junto com a 1ª Farmacopeia Homeopática; dividida em Métodos Gerais,
                    Monografias, Produtos de origem biológica e Não classificados.
                  </td>
                </tr>
                <tr>
                  <th scope="row">4ª</th>
                  <td class="num">1988 / 1996</td>
                  <td>
                    Parte I (Métodos Gerais) em 1988 e Parte II (monografias) em 1996; chegou ao
                    sexto fascículo (2000–2005).
                  </td>
                </tr>
                <tr>
                  <th scope="row">5ª</th>
                  <td class="num">2010</td>
                  <td>Volume I (Métodos Gerais) e Volume II (monografias); disponível na ANVISA.</td>
                </tr>
                <tr>
                  <th scope="row">6ª</th>
                  <td class="num">2019</td>
                  <td>Publicada em 15/08/2019; vigente como referência atual.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>Literatura farmacotécnica de apoio</h3>
            <ul class="key-points">
              <li>
                <strong>Prista, L. N. et al.</strong> — <em>Técnica Farmacêutica e Farmácia
                Galênica</em> (a referência clássica em língua portuguesa).
              </li>
              <li>
                <strong>Fonseca, A.</strong> — <em>Guia Prático de Farmácia Magistral</em>.
              </li>
              <li>
                <strong>Gennaro, A. R.</strong> — <em>Remington: A Ciência e a Prática da
                Farmácia</em>.
              </li>
              <li>
                <strong>Fonseca, A. &amp; Prista, L. N.</strong> — <em>Manual de Terapêutica
                Dermatológica e Cosmetologia</em>.
              </li>
              <li>
                <strong>Ansel, H. C.</strong> — <em>Farmacotécnica: Formas Farmacêuticas e Sistemas
                de Liberação de Fármacos</em>.
              </li>
            </ul>
          </section>
        </article>

        <article id="criterios" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Sete eixos</p>
              <h2>Critérios de classificação</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Classificação das formas farmacêuticas</caption>
              <thead>
                <tr>
                  <th scope="col">Critério</th>
                  <th scope="col">Classes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1. Composição</th>
                  <td>Simples · compostos</td>
                </tr>
                <tr>
                  <th scope="row">2. Modo de aplicação</th>
                  <td>Uso interno · uso externo</td>
                </tr>
                <tr>
                  <th scope="row">3. Estado físico</th>
                  <td>Sólidos · líquidos · semissólidos · gasosos</td>
                </tr>
                <tr>
                  <th scope="row">4. Efeito terapêutico</th>
                  <td>
                    Hipnóticos, sedativos, analgésicos, diuréticos, purgativos, anti-inflamatórios,
                    cardiotônicos, anestésicos, anti-infecciosos…
                  </td>
                </tr>
                <tr>
                  <th scope="row">5. Ponto de vista da fabricação</th>
                  <td>
                    <strong>Oficinais</strong> (farmacopeias e formulários oficiais — ex.:
                    mercurocromo, tintura de iodo) · <strong>Magistrais</strong> (prescritas de forma
                    individualizada) · <strong>Especialidades</strong> (indústria — ex.: Atroveran®,
                    Anador®, Azi®, Decongex Plus®)
                  </td>
                </tr>
                <tr>
                  <th scope="row">6. Prescrição</th>
                  <td>Alopáticos · homeopáticos</td>
                </tr>
                <tr>
                  <th scope="row">7. Modo de atuação</th>
                  <td>
                    Absorvidos (efeito sistêmico) · tópicos (externos, sem absorção sistêmica) ·
                    locais (ação na zona de aplicação)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Tópico <strong>não</strong> é sinônimo de local: o tópico atua externamente sem absorção
            sistêmica; o local age numa zona determinada de aplicação.
          </p>
        </article>

        <article id="topicos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Ação sobre a pele e mucosas</p>
              <h2>Classes de medicamentos tópicos</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Mecanismo de ação e exemplos</caption>
              <thead>
                <tr>
                  <th scope="col">Classe</th>
                  <th scope="col">Mecanismo / observação</th>
                  <th scope="col">Exemplos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Anti-inflamatórios</th>
                  <td>
                    Favorecem o desaparecimento de edemas desidratando os tecidos inflamados, por
                    ativação da circulação local, vasoconstrição ou coagulação de albuminas.
                    Subdividem-se em adstringentes, emolientes e outros.
                  </td>
                  <td>Corticoides, arnica, azuleno</td>
                </tr>
                <tr>
                  <th scope="row">Revulsivos</th>
                  <td>
                    Ação irritante local com hiperemia (&ldquo;sangue no local&rdquo;). Rubefaciente
                    provoca hiperemia; vesicante forma vesículas com líquido de exsudação.
                  </td>
                  <td>
                    Cânfora, mentol, amônia 10–20%, salicilato de metila, tintura de cantáridas,
                    ácido acético, iodo
                  </td>
                </tr>
                <tr>
                  <th scope="row">Queratoplásticos</th>
                  <td>
                    Estimulam as células do corpo mucoso de Malpighi ou asfixiam as células
                    superficiais do epitélio (redutores).
                  </td>
                  <td>Alcatrões, ácido salicílico em baixa concentração</td>
                </tr>
                <tr>
                  <th scope="row">Queratolíticos</th>
                  <td>Dissolvem as formações queratínicas (calosidades e cicatrizes).</td>
                  <td>Ácido salicílico acima de 5%</td>
                </tr>
                <tr>
                  <th scope="row">Cáusticos</th>
                  <td>Destroem ou corroem porções de tecido (calos e verrugas).</td>
                  <td>Cloreto de zinco, nitrato de prata, fenol, ácido tricloroacético</td>
                </tr>
                <tr>
                  <th scope="row">Protetores</th>
                  <td>Protegem os tecidos sobre que se aplicam.</td>
                  <td>Internos: caulim, carvão ativo. Externos: óxido de zinco, talco, colódio elástico, filtros solares</td>
                </tr>
                <tr>
                  <th scope="row">Anti-infecciosos</th>
                  <td>Ação antimicrobiana de uso tópico.</td>
                  <td>Violeta de genciana, neomicina + bacitracina, tetraciclina, sulfadiazina, cloranfenicol</td>
                </tr>
                <tr>
                  <th scope="row">Antifúngicos</th>
                  <td>Ação contra fungos cutâneos e mucosos.</td>
                  <td>Sulfeto de selênio, miconazol, itraconazol, nistatina</td>
                </tr>
                <tr>
                  <th scope="row">Parasiticidas</th>
                  <td>Ação contra ectoparasitas.</td>
                  <td>Enxofre, benzoato de benzila, permetrina</td>
                </tr>
                <tr>
                  <th scope="row">Desinfetantes e antissépticos</th>
                  <td>
                    Desinfetante age sobre superfícies inanimadas; antisséptico, sobre tecidos vivos.
                  </td>
                  <td>
                    Hipoclorito de cálcio ou sódio, glutaraldeído, álcool 70º GL, clorexidina, iodo,
                    peróxido de hidrogênio
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="constituintes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Anatomia da fórmula</p>
              <h2>Tipos de fórmula e constituintes</h2>
            </div>
          </header>

          <p>
            Toda fórmula tem componentes <strong>com</strong> e <strong>sem</strong> atividade
            terapêutica. Reconhecer a função de cada um é o primeiro passo da análise farmacotécnica.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Com atividade terapêutica</h3>
              <ul class="key-points">
                <li>
                  <strong>Princípio ativo</strong> — o responsável pelo efeito. Ex.: Novalgina® é o
                  nome comercial; dipirona é o princípio ativo.
                </li>
                <li>
                  <strong>Adjuvante terapêutico</strong> — potencializa ou complementa o efeito.
                  Ex.: sulfametoxazol + trimetoprima (Bactrim®).
                </li>
                <li>
                  <strong>Atenuante ou corretivo terapêutico</strong> — modera um efeito indesejado do
                  princípio ativo.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Sem atividade terapêutica</h3>
              <ul class="key-points">
                <li>
                  <strong>Adjuvante técnico</strong> — conserva e estabiliza a preparação. Ex.:
                  bissulfito ou metabissulfito de sódio em soluções anestésicas locais; parabenos como
                  conservantes.
                </li>
                <li>
                  <strong>Corretivos</strong> — ajustam cor, odor e sabor. Ex.: essência de menta em
                  bochecho de flúor 0,2%.
                </li>
                <li>
                  <strong>Veículo, excipiente ou base</strong> — dá volume e consistência e veicula os
                  demais componentes.
                </li>
              </ul>
            </section>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Tipos de fórmula farmacêutica</caption>
              <thead>
                <tr>
                  <th scope="col">Tipo</th>
                  <th scope="col">Origem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Oficinal</th>
                  <td>Consta de farmacopeias ou formulários oficiais.</td>
                </tr>
                <tr>
                  <th scope="row">Magistral</th>
                  <td>Receitada por médico, veterinário ou dentista — individualizada e personalizada.</td>
                </tr>
                <tr>
                  <th scope="row">Especialidade</th>
                  <td>Preparada pela indústria farmacêutica.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article id="analise" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Aplicando o raciocínio</p>
              <h2>Análise crítica de uma fórmula</h2>
            </div>
          </header>

          <section class="worked-example">
            <h3>Solução fluoretada de uso diário</h3>
            <div class="table-scroll">
              <table class="data-table">
                <thead>
                  <tr>
                    <th scope="col">Componente</th>
                    <th scope="col" class="num">Concentração</th>
                    <th scope="col">Função na fórmula</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Fluoreto de sódio</th>
                    <td class="num">0,05%</td>
                    <td>Princípio ativo (anticariogênico)</td>
                  </tr>
                  <tr>
                    <th scope="row">Álcool etílico</th>
                    <td class="num">0,3%</td>
                    <td>Solubilizante da essência — adjuvante técnico</td>
                  </tr>
                  <tr>
                    <th scope="row">Metilparabeno</th>
                    <td class="num">0,015%</td>
                    <td>Conservante antimicrobiano</td>
                  </tr>
                  <tr>
                    <th scope="row">Propilparabeno</th>
                    <td class="num">0,015%</td>
                    <td>Conservante antimicrobiano (sinergia com o metil)</td>
                  </tr>
                  <tr>
                    <th scope="row">Essência de menta</th>
                    <td class="num">0,4%</td>
                    <td>Corretivo de aroma e paladar</td>
                  </tr>
                  <tr>
                    <th scope="row">Água destilada</th>
                    <td class="num">qsp 100%</td>
                    <td>Veículo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ol class="steps">
              <li>
                <strong>Solubilidade</strong> — o NaF é hidrossolúvel; a essência de menta é
                lipossolúvel e exige o álcool como solubilizante.
              </li>
              <li>
                <strong>Conservação</strong> — a preparação é aquosa e de uso repetido: a associação
                metil + propilparabeno cobre melhor o espectro do que cada um isolado.
              </li>
              <li>
                <strong>Correção</strong> — a menta mascara o sabor salino do fluoreto.
              </li>
              <li>
                <strong>Ordem de adição</strong> — dissolver os parabenos no álcool, adicionar a
                essência, incorporar à água com o NaF já dissolvido, completar o volume e filtrar.
              </li>
            </ol>
          </section>

          <p class="card-note">
            Use sempre essa grade de leitura: <strong>o que é ativo</strong>, <strong>o que é
            adjuvante</strong>, <strong>o que é corretivo</strong>, <strong>qual é o veículo</strong> —
            e depois verifique compatibilidade, ordem de adição e acondicionamento.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Forma = produto final; fórmula = composição descrita.</li>
            <li>Droga (bruta) → fármaco (molécula ativa) → medicamento (produto).</li>
            <li>Oficinal consta da Farmacopeia; magistral é individualizada; especialidade é industrial.</li>
            <li>Farmacopeia Brasileira: 1ª edição em 1926; a 6ª é de 2019.</li>
            <li>Tópico ≠ local: tópico não tem absorção sistêmica.</li>
            <li>Rubefaciente → hiperemia; vesicante → vesículas.</li>
            <li>Queratolítico dissolve queratina (ácido salicílico &gt; 5%); queratoplástico estimula o epitélio.</li>
            <li>Adjuvante terapêutico tem atividade; adjuvante técnico não tem.</li>
            <li>Parabenos e metabissulfito são adjuvantes técnicos clássicos.</li>
            <li>Analisar a fórmula = identificar função de cada componente e testar compatibilidade.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Classificação dos medicamentos” (Prof. Antonio Luengo
            Garcia, UNIFAL-MG, 2026) e do “Resumão Farmacotécnica I”.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/farmacotec1">
            <span>Voltar</span>
            ← Farmacotécnica I
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/conservacao">
            <span>Próximo</span>
            Operações e conservação →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
