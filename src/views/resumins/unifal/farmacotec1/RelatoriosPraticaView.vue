<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>UNIFAL-MG</span>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/unifal/farmacotec1">Farmacotécnica I</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Relatórios de prática</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · AULAS PRÁTICAS</p>
        <h1 class="intro__title">Relatórios de aulas práticas</h1>
        <p class="intro__lead">
          Dois relatórios completos, no formato exigido na disciplina: objetivo, fundamentação, materiais,
          cálculos, procedimento, resultados, discussão e conclusão. O primeiro trata de uma solução
          simples (fluoretada de uso diário); o segundo, de xarope simples e xarope medicamentoso.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">2 relatórios</span>
          <span class="intro__chip">Cálculos demonstrados</span>
          <span class="intro__chip">Dados ilustrativos</span>
        </div>
      </header>

      <aside class="study-note">
        <h2>Antes de entregar</h2>
        <p>
          Os valores de massa, volume, pH, densidade e polarimetria abaixo são
          <strong>modelos didáticos</strong>, coerentes com a especificação farmacopeica. Substitua-os
          pelas suas medições reais, mantendo a estrutura, os cálculos e a discussão — é a estrutura que
          a disciplina avalia.
        </p>
        <p class="study-note__source">
          Fórmulas extraídas do material de aula: “Classificação dos medicamentos” (solução fluoretada) e
          “Xaropes, melitos e elixires” (xarope simples FB).
        </p>
      </aside>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#relatorio-1">Relatório 1</a>
        <a href="#r1-calculos">R1 · cálculos</a>
        <a href="#r1-resultados">R1 · resultados</a>
        <a href="#relatorio-2">Relatório 2</a>
        <a href="#r2-calculos">R2 · cálculos</a>
        <a href="#r2-resultados">R2 · resultados</a>
        <a href="#discussao">Discussão geral</a>
      </nav>

      <div class="lesson">
        <article id="relatorio-1" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">R1</span>
            <div>
              <p class="card-heading__eyebrow">Aula prática 1 · soluções</p>
              <h2>Preparação e controle de solução fluoretada de uso diário</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Identificação</caption>
              <tbody>
                <tr>
                  <th scope="row">Disciplina</th>
                  <td>Farmacotécnica I — DF 125 (UNIFAL-MG)</td>
                </tr>
                <tr>
                  <th scope="row">Prática</th>
                  <td>Soluções simples: cálculo, preparo e controle de qualidade</td>
                </tr>
                <tr>
                  <th scope="row">Forma farmacêutica obtida</th>
                  <td>Solução aquosa hidroalcoólica de uso bucal (bochecho diário)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>1. Objetivo</h3>
            <p>
              Preparar 100 mL de solução fluoretada de uso diário a 0,05% de fluoreto de sódio, aplicando
              os conceitos de concentração percentual, solubilização por co-solvente, conservação e
              correção de sabor, e verificar o produto quanto a aspecto, pH, densidade e teor de fluoreto.
            </p>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>2. Fundamentação teórica</h3>
            <ul class="key-points">
              <li>
                O fluoreto de sódio é hidrossolúvel e atua na prevenção da cárie por favorecer a
                remineralização do esmalte e reduzir a desmineralização ácida.
              </li>
              <li>
                A essência de menta é lipossolúvel: exige um co-solvente (álcool etílico) para se
                dispersar homogeneamente na fase aquosa.
              </li>
              <li>
                A preparação é aquosa e de uso repetido — portanto sujeita a contaminação. Associa-se
                metilparabeno e propilparabeno, que cobrem espectros e solubilidades complementares.
              </li>
              <li>
                A mistura é ordenada pela solubilidade: primeiro a fase alcoólica (parabenos + essência),
                depois a incorporação na fase aquosa (NaF), para evitar precipitação.
              </li>
            </ul>
          </section>

          <section class="worked-example">
            <h3>3. Materiais e reagentes</h3>
            <div class="two-columns">
              <div>
                <h3>Materiais</h3>
                <ul class="key-points">
                  <li>Balança de precisão</li>
                  <li>Cálice graduado de 100 mL</li>
                  <li>Béquer de 100 mL e bastão de vidro</li>
                  <li>Proveta de 10 mL e de 100 mL</li>
                  <li>Funil e papel de filtro</li>
                  <li>Frasco de vidro âmbar com tampa</li>
                  <li>Papel manteiga</li>
                  <li>Potenciômetro e picnômetro (ou densímetro)</li>
                </ul>
              </div>
              <div>
                <h3>Reagentes</h3>
                <ul class="key-points">
                  <li>Fluoreto de sódio</li>
                  <li>Metilparabeno (Nipagin)</li>
                  <li>Propilparabeno (Nipazol)</li>
                  <li>Álcool etílico</li>
                  <li>Essência de menta</li>
                  <li>Água destilada</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="r1-calculos" class="worked-example">
            <h3>4. Fórmula e cálculos</h3>
            <div class="table-scroll">
              <table class="data-table">
                <caption>Solução fluoretada — uso diário</caption>
                <thead>
                  <tr>
                    <th scope="col">Componente</th>
                    <th scope="col" class="num">%</th>
                    <th scope="col">Função</th>
                    <th scope="col" class="num">Para 100 mL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Fluoreto de sódio</th>
                    <td class="num">0,05</td>
                    <td>Princípio ativo</td>
                    <td class="num">0,05 g = 50 mg</td>
                  </tr>
                  <tr>
                    <th scope="row">Álcool etílico</th>
                    <td class="num">0,3</td>
                    <td>Solubilizante</td>
                    <td class="num">0,3 mL</td>
                  </tr>
                  <tr>
                    <th scope="row">Metilparabeno</th>
                    <td class="num">0,015</td>
                    <td>Conservante</td>
                    <td class="num">0,015 g = 15 mg</td>
                  </tr>
                  <tr>
                    <th scope="row">Propilparabeno</th>
                    <td class="num">0,015</td>
                    <td>Conservante</td>
                    <td class="num">0,015 g = 15 mg</td>
                  </tr>
                  <tr>
                    <th scope="row">Essência de menta</th>
                    <td class="num">0,4</td>
                    <td>Corretivo de sabor</td>
                    <td class="num">0,4 mL</td>
                  </tr>
                  <tr>
                    <th scope="row">Água destilada</th>
                    <td class="num">qsp 100</td>
                    <td>Veículo</td>
                    <td class="num">qsp 100 mL</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="formula" aria-label="Cinquenta miligramas de fluoreto de sódio vezes dezenove dividido por quarenta e um vírgula noventa e nove dá vinte e dois vírgula sessenta e três miligramas de fluoreto">
              <span class="formula__label">m(F⁻)</span>
              <span>=</span>
              <span>50 mg ×</span>
              <span class="formula__fraction">
                <span>19,00</span>
                <span>41,99</span>
              </span>
              <span>= 22,63 mg</span>
            </div>

            <ol class="steps">
              <li>
                <strong>Massa de NaF</strong> — 0,05% m/V em 100 mL = 0,05 g = <strong>50 mg</strong>.
              </li>
              <li>
                <strong>Fator de conversão da massa atômica</strong> — PM do NaF = 41,99 g/mol;
                massa atômica do F = 19,00 g/mol.
              </li>
              <li>
                <strong>Fluoreto efetivo</strong> — 50 mg × (19,00 ÷ 41,99) = <strong>22,63 mg de F⁻</strong>
                em 100 mL.
              </li>
              <li>
                <strong>Concentração em ppm</strong> — 22,63 mg ÷ 0,100 L = <strong>226,3 ppm de F⁻</strong>,
                valor coerente com a faixa de 225 ppm usada em soluções de uso diário.
              </li>
              <li>
                <strong>Parabenos</strong> — 0,015% m/V em 100 mL = 0,015 g = <strong>15 mg</strong> de cada.
              </li>
            </ol>
            <p class="card-note">
              As massas de 15 mg e 50 mg são compatíveis com balança de precisão (0,001 g). Abaixo de
              50 mg, avaliaria-se o uso de uma diluição geométrica (T3 ou 1:10) para garantir exatidão.
            </p>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>5. Procedimento</h3>
            <ol class="steps">
              <li>
                Pesar, em papel manteiga e separadamente, 0,050 g de NaF, 0,015 g de metilparabeno e
                0,015 g de propilparabeno.
              </li>
              <li>
                Transferir os dois parabenos para um béquer e adicionar 0,3 mL de álcool etílico e 0,4 mL
                de essência de menta; agitar até dissolução completa (fase alcoólica).
              </li>
              <li>
                Em outro béquer, dissolver o NaF em cerca de 70 mL de água destilada (fase aquosa).
              </li>
              <li>
                Verter a fase alcoólica sobre a aquosa, lentamente e sob agitação constante com bastão de
                vidro.
              </li>
              <li>
                Transferir para cálice graduado de 100 mL, lavando os béqueres com pequenas porções de
                água, e completar o volume com água destilada (qsp 100 mL).
              </li>
              <li>Filtrar em papel de filtro para garantir limpidez.</li>
              <li>
                Envasar em frasco de vidro âmbar, tampar, lacrar e rotular: nome, concentração, volume,
                lote, data de manipulação, validade e condições de conservação.
              </li>
            </ol>
          </section>

          <section id="r1-resultados" class="worked-example">
            <h3>6. Resultados</h3>
            <div class="table-scroll">
              <table class="data-table">
                <caption>Dados obtidos (modelo)</caption>
                <thead>
                  <tr>
                    <th scope="col">Ensaio</th>
                    <th scope="col" class="num">Resultado</th>
                    <th scope="col">Especificação / esperado</th>
                    <th scope="col">Situação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Massa de NaF pesada</th>
                    <td class="num">0,0512 g</td>
                    <td>0,0500 g (desvio ≤ 5%)</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">Volume final</th>
                    <td class="num">100,2 mL</td>
                    <td>100,0 mL</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">Aspecto</th>
                    <td class="num">límpido, incolor</td>
                    <td>Límpido e transparente</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">Odor</th>
                    <td class="num">mentolado</td>
                    <td>Menta</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">pH</th>
                    <td class="num">7,1</td>
                    <td>6,5 – 8,0 (compatível com mucosa)</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">Densidade</th>
                    <td class="num">0,997 g/mL</td>
                    <td>Próxima de 1,000 g/mL</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">Teor de F⁻ (calculado)</th>
                    <td class="num">231,2 ppm</td>
                    <td>≈ 226 ppm</td>
                    <td>Conforme</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="table-scroll">
              <table class="data-table">
                <caption>Cálculo do teor a partir da massa efetivamente pesada</caption>
                <thead>
                  <tr>
                    <th scope="col">Etapa</th>
                    <th scope="col" class="num">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">F⁻ na massa pesada (51,2 mg × 19,00/41,99)</th>
                    <td class="num">23,17 mg</td>
                  </tr>
                  <tr>
                    <th scope="row">Concentração (23,17 mg ÷ 0,1002 L)</th>
                    <td class="num">231,3 ppm</td>
                  </tr>
                  <tr>
                    <th scope="row">Desvio em relação a 226,3 ppm</th>
                    <td class="num">+2,2%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>7. Discussão</h3>
            <ul class="key-points">
              <li>
                <strong>Desvio de massa.</strong> Os 51,2 mg pesados representam +2,4% sobre os 50 mg
                teóricos, dentro do limite usual de ±5% para pesagem magistral. O desvio se propaga
                linearmente ao teor final.
              </li>
              <li>
                <strong>Solubilização.</strong> Não houve turvação na incorporação da fase alcoólica,
                indicando que a proporção álcool/essência foi suficiente para manter a menta dispersa.
                Com teor alcoólico maior, haveria risco de ardor em mucosa.
              </li>
              <li>
                <strong>pH próximo do neutro.</strong> Compatível com uso bucal diário; valores ácidos
                demais poderiam comprometer o esmalte e a estabilidade dos parabenos (ativos em pH 3–9,5).
              </li>
              <li>
                <strong>Conservação.</strong> A preparação é aquosa, de uso repetido e sem esterilização:
                a associação metil + propilparabeno é a barreira microbiológica. Se houvesse dúvida sobre
                a carga inicial, a filtração deveria ser feita em membrana.
              </li>
              <li>
                <strong>Acondicionamento.</strong> Frasco âmbar protege de fotodegradação; o lacre reduz
                a troca gasosa e a evaporação do álcool e da essência.
              </li>
            </ul>
          </section>

          <section class="worked-example">
            <h3>8. Conclusão</h3>
            <p>
              A solução fluoretada foi obtida límpida, com pH e densidade compatíveis com a via bucal e
              teor de fluoreto dentro do esperado para uso diário (≈ 225 ppm de F⁻). O experimento
              demonstrou, na prática, a sequência solubilidade → ordem de adição → conservação →
              acondicionamento, e evidenciou que o cálculo de conversão sal → íon é indispensável para
              expressar corretamente a concentração do ativo.
            </p>
          </section>
        </article>

        <article id="relatorio-2" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">R2</span>
            <div>
              <p class="card-heading__eyebrow">Aula prática 2 · xaropes</p>
              <h2>Xarope simples (FB) e xarope medicamentoso de iodeto de potássio</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Identificação</caption>
              <tbody>
                <tr>
                  <th scope="row">Disciplina</th>
                  <td>Farmacotécnica I — DF 125 (UNIFAL-MG)</td>
                </tr>
                <tr>
                  <th scope="row">Prática</th>
                  <td>Xaropes: preparo do xarope simples, incorporação de líquido medicinal e ensaios</td>
                </tr>
                <tr>
                  <th scope="row">Formas obtidas</th>
                  <td>Xarope simples (veículo) e xarope medicamentoso</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>1. Objetivo</h3>
            <p>
              Preparar 100 mL de xarope simples conforme a Farmacopeia Brasileira, caracterizá-lo por
              densidade e poder rotatório e, a partir dele, obter 100 mL de xarope medicamentoso de
              iodeto de potássio a 5% p/V, avaliando o efeito da incorporação do líquido medicinal sobre a
              concentração de sacarose.
            </p>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>2. Fundamentação teórica</h3>
            <ul class="key-points">
              <li>
                Xaropes são soluções aquosas límpidas com elevada concentração de açúcar; a saturação em
                sacarose confere ao mesmo tempo edulcoração e autopreservação.
              </li>
              <li>
                A solução saturada obtém-se dissolvendo cerca de 2/3 de açúcar em 1/3 de água; o xarope
                simples da FB leva 850 g de açúcar cristal para 1.000 mL.
              </li>
              <li>
                Calor excessivo e pH inadequado hidrolisam a sacarose, gerando glicose e levulose (açúcar
                invertido), que altera o poder rotatório e pode cristalizar.
              </li>
              <li>
                Ao incorporar um líquido medicinal aquoso, dilui-se a sacarose: é o caso de “mistura com
                concentração de volume”, em que se deve recalcular o teor de açúcar.
              </li>
            </ul>
          </section>

          <section class="worked-example">
            <h3>3. Materiais e reagentes</h3>
            <div class="two-columns">
              <div>
                <h3>Materiais</h3>
                <ul class="key-points">
                  <li>Balança de precisão</li>
                  <li>Béquer de 250 mL e bastão de vidro</li>
                  <li>Chapa aquecedora e banho-maria</li>
                  <li>Cálice graduado de 100 mL</li>
                  <li>Funil, papel de filtro, gaze</li>
                  <li>Picnômetro de 25 mL e termômetro</li>
                  <li>Polarímetro e cubeta de 200 mm</li>
                  <li>Frasco de vidro esterilizado</li>
                </ul>
              </div>
              <div>
                <h3>Reagentes</h3>
                <ul class="key-points">
                  <li>Sacarose (açúcar cristal)</li>
                  <li>Iodeto de potássio</li>
                  <li>Talco farmacêutico</li>
                  <li>Água destilada</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="r2-calculos" class="worked-example">
            <h3>4. Fórmulas e cálculos</h3>

            <h3>A) Xarope simples (FB) — escala de 100 mL</h3>
            <div class="formula" aria-label="Oitocentos e cinquenta gramas em mil mililitros equivalem a oitenta e cinco gramas em cem mililitros">
              <span class="formula__label">850 g / 1.000 mL</span>
              <span>=</span>
              <span>X / 100 mL</span>
              <span>→ X = 85 g</span>
            </div>
            <ol class="steps">
              <li>Sacarose: 850 g × (100 ÷ 1.000) = <strong>85 g</strong> para 100 mL.</li>
              <li>Água destilada: qsp 100 mL.</li>
              <li>
                Concentração final esperada: 85% m/V — praticamente a saturação a 20 °C.
              </li>
            </ol>

            <h3>B) Xarope de iodeto de potássio 5% p/V</h3>
            <div class="table-scroll">
              <table class="data-table">
                <thead>
                  <tr>
                    <th scope="col">Componente</th>
                    <th scope="col" class="num">Concentração</th>
                    <th scope="col" class="num">Para 100 mL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Iodeto de potássio</th>
                    <td class="num">5%</td>
                    <td class="num">5,0 g</td>
                  </tr>
                  <tr>
                    <th scope="row">Água destilada (para dissolver)</th>
                    <td class="num">—</td>
                    <td class="num">10,0 mL</td>
                  </tr>
                  <tr>
                    <th scope="row">Xarope simples</th>
                    <td class="num">qsp</td>
                    <td class="num">qsp 100,0 mL</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="formula" aria-label="Noventa por cento de noventa e cinco menos dez mililitros de xarope simples, multiplicado por oitenta e cinco por cento, resulta em setenta e seis vírgula cinco por cento">
              <span class="formula__label">C<sub>sacarose</sub></span>
              <span>= 85% ×</span>
              <span class="formula__fraction">
                <span>90 mL</span>
                <span>100 mL</span>
              </span>
              <span>= 76,5% m/V</span>
            </div>

            <ol class="steps">
              <li>
                <strong>Volume de xarope simples usado</strong> — 100 mL − 10 mL de água do líquido
                medicinal = <strong>90 mL</strong>.
              </li>
              <li>
                <strong>Sacarose remanescente</strong> — 85 g/100 mL × 0,90 = <strong>76,5 g</strong> por
                100 mL de produto final, ou seja, 76,5% m/V.
              </li>
              <li>
                <strong>Perda relativa de açúcar</strong> — (85 − 76,5) ÷ 85 = <strong>10%</strong>.
              </li>
              <li>
                <strong>Iodeto de potássio</strong> — 5 g em 100 mL = 50 mg/mL (5% p/V).
              </li>
            </ol>
            <p class="card-note">
              76,5% de sacarose ainda é uma solução muito concentrada, mas já abaixo da saturação: a
              autopreservação fica reduzida em relação ao xarope simples. Se o volume de líquido
              medicinal fosse maior, seria necessário partir de um xarope mais concentrado para compensar
              (a chamada “concentração de volume”).
            </p>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>5. Procedimento</h3>
            <ol class="steps">
              <li>
                Pesar 85,0 g de sacarose em béquer tarado.
              </li>
              <li>
                Adicionar cerca de 45 mL de água destilada e aquecer em banho-maria (≤ 60 °C), agitando
                até dissolução completa — evitar ebulição, que hidrolisa a sacarose.
              </li>
              <li>
                Retirar do calor, esfriar e transferir para cálice graduado de 100 mL, completando o
                volume com água destilada.
              </li>
              <li>
                Se houver turvação, adicionar talco farmacêutico (1 g/100 mL), agitar e filtrar em papel
                ou gaze.
              </li>
              <li>
                Medir densidade em picnômetro a 25 °C e poder rotatório em polarímetro (cubeta de
                200 mm).
              </li>
              <li>
                Em béquer separado, dissolver 5,0 g de iodeto de potássio em 10,0 mL de água destilada.
              </li>
              <li>
                Incorporar a solução de KI a 90 mL do xarope simples, sob agitação, e completar o volume
                para 100 mL com xarope simples.
              </li>
              <li>
                Repetir densidade e aspecto; envasar em frasco de vidro lavado e esterilizado,
                imediatamente após a produção, tampar, lacrar e rotular.
              </li>
            </ol>
          </section>

          <section id="r2-resultados" class="worked-example">
            <h3>6. Resultados</h3>
            <div class="table-scroll">
              <table class="data-table">
                <caption>A) Xarope simples</caption>
                <thead>
                  <tr>
                    <th scope="col">Ensaio</th>
                    <th scope="col" class="num">Resultado</th>
                    <th scope="col" class="num">Especificação</th>
                    <th scope="col">Situação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Massa de sacarose</th>
                    <td class="num">85,02 g</td>
                    <td class="num">85,00 g</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">Volume final</th>
                    <td class="num">100,0 mL</td>
                    <td class="num">100,0 mL</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">Aspecto</th>
                    <td class="num">límpido, amarelo-palha</td>
                    <td class="num">—</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">Densidade (25 °C)</th>
                    <td class="num">1,318 g/mL</td>
                    <td class="num">1,30 – 1,33 g/mL</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">Poder rotatório</th>
                    <td class="num">+8°31′</td>
                    <td class="num">+8°26′ a +8°50′</td>
                    <td>Conforme</td>
                  </tr>
                  <tr>
                    <th scope="row">pH</th>
                    <td class="num">6,4</td>
                    <td class="num">—</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="table-scroll">
              <table class="data-table">
                <caption>B) Xarope de iodeto de potássio 5%</caption>
                <thead>
                  <tr>
                    <th scope="col">Ensaio</th>
                    <th scope="col" class="num">Resultado</th>
                    <th scope="col">Observação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Massa de KI</th>
                    <td class="num">5,01 g</td>
                    <td>Desvio +0,2%</td>
                  </tr>
                  <tr>
                    <th scope="row">Volume final</th>
                    <td class="num">100,0 mL</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <th scope="row">Aspecto</th>
                    <td class="num">límpido, amarelo-claro</td>
                    <td>Sem precipitado nem cristais</td>
                  </tr>
                  <tr>
                    <th scope="row">Densidade (25 °C)</th>
                    <td class="num">1,297 g/mL</td>
                    <td>Queda coerente com a diluição a 76,5% de sacarose</td>
                  </tr>
                  <tr>
                    <th scope="row">pH</th>
                    <td class="num">6,8</td>
                    <td>Compatível com solução de iodeto</td>
                  </tr>
                  <tr>
                    <th scope="row">Teor de KI</th>
                    <td class="num">50,1 mg/mL</td>
                    <td>5,01% p/V</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="table-scroll">
              <table class="data-table">
                <caption>C) Comparação entre os dois xaropes</caption>
                <thead>
                  <tr>
                    <th scope="col">Parâmetro</th>
                    <th scope="col" class="num">Simples</th>
                    <th scope="col" class="num">Medicamentoso</th>
                    <th scope="col" class="num">Variação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Sacarose (% m/V)</th>
                    <td class="num">85,0</td>
                    <td class="num">76,5</td>
                    <td class="num">−10%</td>
                  </tr>
                  <tr>
                    <th scope="row">Densidade (g/mL)</th>
                    <td class="num">1,318</td>
                    <td class="num">1,297</td>
                    <td class="num">−1,6%</td>
                  </tr>
                  <tr>
                    <th scope="row">Aspecto</th>
                    <td class="num">palha</td>
                    <td class="num">amarelo-claro</td>
                    <td class="num">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>7. Discussão</h3>
            <ul class="key-points">
              <li>
                <strong>Densidade dentro da faixa.</strong> 1,318 g/mL está entre 1,30 e 1,33 — indicativo
                de xarope saturado e, portanto, microbiologicamente estável.
              </li>
              <li>
                <strong>Poder rotatório.</strong> +8°31′ está na faixa farmacopeica (+8°26′ a +8°50′). Um
                valor abaixo indicaria hidrólise parcial da sacarose (formação de açúcar invertido) por
                aquecimento excessivo ou pH inadequado.
              </li>
              <li>
                <strong>Efeito da incorporação.</strong> A queda de densidade (1,318 → 1,297 g/mL) é
                compatível com a diluição calculada de 85% para 76,5% de sacarose. Isso mostra, na
                prática, o conceito de “mistura com concentração de volume”.
              </li>
              <li>
                <strong>Cor.</strong> O tom palha vem de impurezas da sacarose; o carvão ativado
                clarificaria, mas adsorveria também aroma e possivelmente o ativo — por isso não se usa
                indiscriminadamente.
              </li>
              <li>
                <strong>Estabilidade.</strong> O xarope medicamentoso é mais suscetível: a 76,5% de
                sacarose a atividade de água já não é tão restritiva. Recomenda-se conservar em local
                fresco, ao abrigo da luz, e observar prazo de validade mais curto.
              </li>
              <li>
                <strong>Acondicionamento.</strong> Envase imediato em vidro lavado e esterilizado, com
                tampa lacrada, aproveitando o vapor condensado do frasco.
              </li>
            </ul>
          </section>

          <section class="worked-example">
            <h3>8. Conclusão</h3>
            <p>
              O xarope simples atendeu às especificações de densidade e poder rotatório, confirmando a
              saturação em sacarose. O xarope de iodeto de potássio foi obtido límpido e com teor de
              5,01% p/V, mas com redução de 10% na concentração de açúcar em relação ao xarope simples —
              consequência direta da incorporação de 10 mL de fase aquosa. O experimento comprova que, em
              xaropes medicamentosos com líquido medicinal aquoso, o balanço de sacarose deve ser
              recalculado, sob pena de comprometer a conservação do produto.
            </p>
          </section>
        </article>

        <article id="discussao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">09</span>
            <div>
              <p class="card-heading__eyebrow">Fechando os dois relatórios</p>
              <h2>O que os dois experimentos ensinam juntos</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Conceito</th>
                  <th scope="col">Relatório 1</th>
                  <th scope="col">Relatório 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Cálculo</th>
                  <td>Conversão sal → íon e ppm</td>
                  <td>Proporção da receita oficial e balanço de sacarose</td>
                </tr>
                <tr>
                  <th scope="row">Ordem de adição</th>
                  <td>Fase alcoólica sobre a aquosa</td>
                  <td>Líquido medicinal sobre o xarope, sob agitação</td>
                </tr>
                <tr>
                  <th scope="row">Conservação</th>
                  <td>Parabenos em solução aquosa</td>
                  <td>Autopreservação pela saturação de sacarose</td>
                </tr>
                <tr>
                  <th scope="row">Ensaio decisivo</th>
                  <td>pH e teor do ativo</td>
                  <td>Densidade e poder rotatório</td>
                </tr>
                <tr>
                  <th scope="row">Acondicionamento</th>
                  <td>Vidro âmbar lacrado</td>
                  <td>Vidro esterilizado, envase imediato</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Ambos os relatórios mostram o mesmo raciocínio farmacotécnico: <strong>calcular → ordenar as
            fases → conservar → provar por ensaio</strong>. É essa cadeia que a disciplina cobra na prova
            prática.
          </p>

          <section class="worked-example">
            <h3>Referências</h3>
            <ul class="key-points">
              <li>
                FARMACOPEIA BRASILEIRA. 6ª ed. Brasília: ANVISA, 2019.
              </li>
              <li>
                GARCIA, A. L. <em>Classificação dos medicamentos</em>; <em>Xaropes, melitos e
                elixires</em>; <em>Soluções simples</em>. Material de aula, UNIFAL-MG, 2026.
              </li>
              <li>
                PRISTA, L. N. et al. <em>Técnica Farmacêutica e Farmácia Galênica</em>. 5ª ed. Lisboa:
                Fundação Calouste Gulbenkian.
              </li>
              <li>
                ANSEL, H. C.; POPOVICH, N. G.; ALLEN JR., L. V. <em>Farmacotécnica: formas
                farmacêuticas e sistemas de liberação de fármacos</em>. 6ª ed. São Paulo: Premier, 2000.
              </li>
              <li>
                GENNARO, A. R. (Ed.). <em>Remington: A Ciência e a Prática da Farmácia</em>. 20ª ed.
              </li>
            </ul>
          </section>
        </article>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/otologicos">
            <span>Anterior</span>
            ← Otofármacos e errinos
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1">
            <span>Voltar</span>
            Farmacotécnica I →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
