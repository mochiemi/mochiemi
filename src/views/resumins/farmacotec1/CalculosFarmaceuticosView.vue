<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <router-link to="/resumins/farmacotec1">Farmacotécnica I</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Cálculos</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">FARMACOTÉCNICA I · UNIDADE I</p>
        <h1 class="intro__title">Cálculos farmacêuticos</h1>
        <p class="intro__lead">
          Da diluição simples ao fator de equivalência sal/base: os cálculos que definem quanto pesar.
          Reúne Q₁C₁ = Q₂C₂, sistema métrico, UI/UTR, diluições de matérias-primas, FEq, fator de
          correção de teor e de umidade e a correção de minerais quelatos.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>9 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#capsulas">Cápsulas</a>
        <a href="#diluicao">Diluição</a>
        <a href="#metrico">Sistema métrico</a>
        <a href="#ui">UI / UTR</a>
        <a href="#feq">Fator de equivalência</a>
        <a href="#fcr">Fator de correção</a>
        <a href="#chu">CHU</a>
        <a href="#exemplos">Exemplos</a>
      </nav>

      <div class="lesson">
        <article id="capsulas" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">O ponto de partida</p>
              <h2>Cápsulas dobradas e cálculo do excipiente</h2>
            </div>
          </header>

          <section class="worked-example">
            <h3>Cápsula dobrada — quando a dose não cabe em uma cápsula</h3>
            <div class="table-scroll">
              <table class="data-table">
                <thead>
                  <tr>
                    <th scope="col">Componente</th>
                    <th scope="col" class="num">Por dose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Hidróxido de alumínio</th>
                    <td class="num">300 mg</td>
                  </tr>
                  <tr>
                    <th scope="row">Hidróxido de magnésio</th>
                    <td class="num">300 mg</td>
                  </tr>
                  <tr>
                    <th scope="row">Simeticona (50%)</th>
                    <td class="num">100 mg</td>
                  </tr>
                  <tr>
                    <th scope="row">Metoclopramida</th>
                    <td class="num">20 mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ol class="steps">
              <li>Soma da dose: 300 + 300 + 100 + 20 = <strong>720 mg</strong>.</li>
              <li>
                A maior cápsula de uso magistral comporta cerca de 500–600 mg de pó. Como 720 mg não
                cabe, a dose é <strong>dobrada</strong> em duas cápsulas.
              </li>
              <li>
                Por cápsula: 720 ÷ 2 = <strong>360 mg</strong> — ou seja, cada componente entra pela
                metade (150 + 150 + 50 + 10 mg).
              </li>
              <li>
                Para 30 doses (60 cápsulas), multiplica-se cada componente por 30 antes de dividir por
                2 — ou se pesa a dose inteira e se divide em duas porções iguais.
              </li>
            </ol>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>Cálculo do excipiente — famotidina 25 mg + cisaprida 8 mg, 60 cápsulas</h3>
            <p>
              O excipiente não é arbitrário: ele completa o volume da cápsula escolhida. A massa de
              excipiente por cápsula é a capacidade mássica da cápsula menos a massa dos ativos.
            </p>
            <ol class="steps">
              <li>Ativos por cápsula: 25 mg + 8 mg = <strong>33 mg</strong>.</li>
              <li>
                Capacidade da cápsula nº 1 ≈ 0,50 mL; densidade aparente do excipiente (após
                acomodação) ≈ 0,80 g/mL → <strong>400 mg</strong> por cápsula.
              </li>
              <li>Excipiente por cápsula: 400 − 33 = <strong>367 mg</strong>.</li>
              <li>Para 60 cápsulas: ativos 60 × 33 mg = 1,98 g; excipiente 60 × 367 mg = 22,02 g.</li>
              <li>
                Perda de manipulação: pesar um excedente de 5–10% (ou o fator de perda adotado na
                farmácia) e registrar no boletim.
              </li>
            </ol>
            <p class="card-note">
              Os valores de volume e densidade são os do excipiente e da cápsula efetivamente usados —
              sempre confira na tabela do fornecedor.
            </p>
          </section>
        </article>

        <article id="diluicao" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">A fórmula que mais aparece</p>
              <h2>Diluição e concentração</h2>
            </div>
          </header>

          <div class="formula" aria-label="Quantidade inicial vezes concentração inicial igual a quantidade final vezes concentração final">
            <span class="formula__label">Q₁ × C₁ = Q₂ × C₂</span>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Significado das variáveis</h3>
              <ul class="key-points">
                <li><strong>Q₁</strong> — quantidade conhecida.</li>
                <li><strong>C₁</strong> — concentração conhecida.</li>
                <li><strong>Q₂</strong> — quantidade final obtida após a diluição.</li>
                <li><strong>C₂</strong> — concentração final obtida após a diluição.</li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Uso típico</h3>
              <p>
                Sempre que se transfere uma alíquota de uma solução estoque para um balão e se completa
                o volume, a massa de soluto não muda — só o volume. Daí o produto constante.
              </p>
            </section>
          </div>

          <section class="worked-example">
            <h3>Exemplo resolvido — furosemida</h3>
            <p>
              Se 8 mL de uma solução aquosa de furosemida 15% p/V forem diluídos para 12 mL, qual será
              a concentração final?
            </p>
            <ol class="steps">
              <li>Dados: Q₁ = 8 mL; C₁ = 15% p/V; Q₂ = 12 mL; C₂ = X.</li>
              <li>8 × 15 = 12 × X</li>
              <li>X = (8 × 15) ÷ 12 = 120 ÷ 12</li>
              <li><strong>X = 10% p/V</strong></li>
            </ol>
          </section>
        </article>

        <article id="metrico" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Conversões</p>
              <h2>Sistema métrico e produtos industrializados</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Escala: g · dg · cg · mg · dmg · cmg · µg</caption>
              <thead>
                <tr>
                  <th scope="col">Conversão</th>
                  <th scope="col">Operação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">g → mg</th>
                  <td>multiplicar por 1.000</td>
                </tr>
                <tr>
                  <th scope="row">mg → µg</th>
                  <td>multiplicar por 1.000</td>
                </tr>
                <tr>
                  <th scope="row">g → µg</th>
                  <td>multiplicar por 1.000.000</td>
                </tr>
                <tr>
                  <th scope="row">µg → mg</th>
                  <td>dividir por 1.000</td>
                </tr>
                <tr>
                  <th scope="row">mg → g</th>
                  <td>dividir por 1.000</td>
                </tr>
                <tr>
                  <th scope="row">µg → g</th>
                  <td>dividir por 1.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>Produtos industrializados</h3>
            <p>
              Quando a matéria-prima não está disponível para manipulação, usa-se o produto
              industrializado como fonte do ativo.
            </p>
            <p class="equation">
              Glicazida 40 mg · excipiente qsp 1 cápsula · mande 30 cápsulas
            </p>
            <ul class="key-points">
              <li>A glicazida não está disponível na forma de sal para manipulação.</li>
              <li>Usa-se o produto industrializado de referência (Diamicron®).</li>
              <li>
                Calcula-se a massa de comprimido que contém a dose prescrita e completa-se com
                excipiente — a escolha do excipiente precisa considerar o desgaste do comprimido e a
                uniformidade.
              </li>
            </ul>
          </section>
        </article>

        <article id="ui" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Unidades biológicas</p>
              <h2>UI e UTR</h2>
            </div>
          </header>
          <p>
            Vitaminas e enzimas não são dosadas em massa, mas em <strong>Unidades Internacionais
            (UI)</strong> ou <strong>Unidades de Trombina (UTR)</strong>. A conversão depende da
            concentração declarada da matéria-prima.
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Potências usuais das matérias-primas</caption>
              <thead>
                <tr>
                  <th scope="col">Matéria-prima</th>
                  <th scope="col" class="num">Potência</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Vitamina A oleosa (palmitato)</th>
                  <td class="num">100.000 UI/g</td>
                </tr>
                <tr>
                  <th scope="row">Acetato de vitamina A (pó)</th>
                  <td class="num">500.000 UI/g</td>
                </tr>
                <tr>
                  <th scope="row">Betacaroteno</th>
                  <td class="num">1.670 UI/mg</td>
                </tr>
                <tr>
                  <th scope="row">Vitamina D2 (pó)</th>
                  <td class="num">40.000.000 UI/g</td>
                </tr>
                <tr>
                  <th scope="row">Vitamina D2 (oleosa)</th>
                  <td class="num">1.000.000 UI/g</td>
                </tr>
                <tr>
                  <th scope="row">Vitamina D3</th>
                  <td class="num">40.000.000 UI/g</td>
                </tr>
                <tr>
                  <th scope="row">Vitamina E oleosa</th>
                  <td class="num">1.000 UI/g</td>
                </tr>
                <tr>
                  <th scope="row">Vitamina E pó 50%</th>
                  <td class="num">0,5 UI/g</td>
                </tr>
                <tr>
                  <th scope="row">Thiomucase</th>
                  <td class="num">350.000 UTR/g</td>
                </tr>
                <tr>
                  <th scope="row">Heparina</th>
                  <td class="num">100 UI/g</td>
                </tr>
                <tr>
                  <th scope="row">Hialuronidase</th>
                  <td class="num">2.000 UTR/20 mg</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="worked-example">
            <h3>Exemplo — vitamina A 25.000 UI em cápsula</h3>
            <ol class="steps">
              <li>Matéria-prima: palmitato de vitamina A oleoso, 100.000 UI/g.</li>
              <li>Massa necessária: 25.000 ÷ 100.000 = <strong>0,25 g = 250 mg</strong> por cápsula.</li>
              <li>Para 100 cápsulas: 25 g de vitamina A oleosa.</li>
              <li>
                Com betacaroteno (1.670 UI/mg), a mesma dose exigiria 25.000 ÷ 1.670 = 14,97 mg ≈
                <strong>15 mg</strong> — e ainda o fator de correção do teor do lote.
              </li>
            </ol>
          </section>
        </article>

        <article id="feq" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Sal, éster, hidrato</p>
              <h2>Fator de equivalência (FEq)</h2>
            </div>
          </header>
          <p>
            O FEq calcula a massa de um <strong>sal, éster ou substância hidratada</strong> a ser pesada
            quando a dose é expressa na forma livre (base), anidra, ou em outro sal/éster de
            referência.
          </p>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Quando vale 1,00</h3>
              <p>
                Quando a dose é expressa no próprio princípio ativo utilizado. Exemplo: cloridrato de
                amitriptilina prescrito em cloridrato de amitriptilina → <strong>FEq = 1,00</strong>.
              </p>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Quando é maior que 1,00</h3>
              <p>
                Quando a matéria-prima é sal, éster ou hidrato e a dose é expressa como base, forma
                anidra ou outro sal.
              </p>
              <ul class="key-points">
                <li>Besilato de anlodipino → base: FEq = 1,39</li>
                <li>Metildopa sesqui-hidratada → anidra: FEq = 1,13</li>
                <li>Fosfato complexo de tetraciclina → cloridrato: FEq = 1,13</li>
              </ul>
            </section>
          </div>

          <div class="formula" aria-label="Fator de equivalência é o equivalente-grama do sal dividido pelo equivalente-grama da base">
            <span class="formula__label">FEq</span>
            <span class="formula__fraction">
              <span>Eq g do sal</span>
              <span>Eq g da base</span>
            </span>
          </div>

          <section class="worked-example">
            <h3>Exemplo resolvido — sulfato de salbutamol</h3>
            <ol class="steps">
              <li>
                Fórmula do sulfato: (C₁₃H₂₁NO₃)₂·H₂SO₄ — PM = 576,71 g. Equivalente-grama do sal =
                576,71 ÷ 2 = <strong>288,35 g</strong>.
              </li>
              <li>Salbutamol: C₁₃H₂₁NO₃ — PM = 239,31 g. Equivalente-grama da base = 239,31 g.</li>
              <li>FEq = 288,35 ÷ 239,31 = <strong>1,20</strong>.</li>
              <li>
                Prescrição de 4 mg de salbutamol base → pesar 4 × 1,20 = <strong>4,8 mg</strong> de
                sulfato de salbutamol.
              </li>
            </ol>
            <p class="card-note">
              Lembre: equivalente-grama = mol ÷ valência. Para o sulfato, a valência é 2 porque há dois
              grupos ácidos.
            </p>
          </section>
        </article>

        <article id="fcr" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">06</span>
            <div>
              <p class="card-heading__eyebrow">Pureza e diluição</p>
              <h2>Fator de correção (FCr)</h2>
            </div>
          </header>
          <p>
            O FCr corrige a <strong>diluição</strong> de uma substância, o <strong>teor</strong> de
            princípio ativo, o <strong>teor elementar</strong> de um mineral ou a <strong>umidade</strong>
            — com base nos certificados de análise ou nas diluições feitas na própria farmácia.
          </p>

          <div class="formula" aria-label="Fator de correção é cem dividido pelo teor da substância">
            <span class="formula__label">FCr</span>
            <span class="formula__fraction">
              <span>100</span>
              <span>teor (%)</span>
            </span>
            <span>ou</span>
            <span class="formula__fraction">
              <span>100</span>
              <span>100 − % umidade</span>
            </span>
          </div>

          <div class="table-scroll">
            <table class="data-table">
              <caption>Situações em que se emprega o fator de correção</caption>
              <thead>
                <tr>
                  <th scope="col">Situação</th>
                  <th scope="col">Regra / exemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Substância comercializada diluída</th>
                  <td>
                    FC = 100 ÷ teor. Betacaroteno 10% → FC = 10; omeprazol 8,5% → FC = 11,8;
                    vitamina E 50% → FC = 2.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Sal dosificado em relação à base</th>
                  <td>
                    FC = PM do sal ÷ PM da base. Acetato de hidrocortisona: 404,51 ÷ 362,47 =
                    <strong>1,12</strong>.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Sal ou base hidratada → forma anidra</th>
                  <td>
                    FC = PM hidratado ÷ PM anidro. Amoxicilina tri-hidratada: 419,46 ÷ 365,41 =
                    <strong>1,15</strong>.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Diluições feitas na farmácia</th>
                  <td>
                    T3 (1:1000) → FC = 1.000; Triac (1:100) → FC = 100. Também vale a diluição de
                    fábrica: selênio 0,2% → multiplicar por 500.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Compostos minerais (teor elementar)</th>
                  <td>
                    FC = 100 ÷ % do elemento. Cálcio com 13% de Ca → 100 ÷ 13 = <strong>7,7</strong>.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Fitoterápicos padronizados</th>
                  <td>
                    FC = teor do marcador na referência ÷ teor do marcador no lote. Kawa Kawa
                    (referência 70%, lote 30%) → 70 ÷ 30 = <strong>2,33</strong>.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Correção de umidade</th>
                  <td>
                    FC = 100 ÷ (100 − % umidade). Metotrexato com 8% de água → 100 ÷ 92 =
                    <strong>1,09</strong>.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Fator de correção × fator de conversão</h3>
              <ul class="key-points">
                <li>
                  <strong>Correção</strong> — ajuste de teor, compensação de hidratação ou de diluição.
                </li>
                <li>
                  <strong>Conversão</strong> — intercambiar a forma salina com a molécula base em
                  relação à qual a forma farmacêutica de referência está dosificada.
                </li>
              </ul>
            </section>

            <section class="concept-panel concept-panel--rose">
              <h3>Erros clássicos</h3>
              <ul class="key-points">
                <li>Aplicar o FC invertido (dividir em vez de multiplicar).</li>
                <li>Somar fatores em vez de multiplicá-los em série.</li>
                <li>Esquecer a umidade quando o insumo é higroscópico.</li>
                <li>Ignorar o lote do certificado de análise.</li>
              </ul>
            </section>
          </div>
        </article>

        <article id="chu" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">07</span>
            <div>
              <p class="card-heading__eyebrow">Manual de Equivalência e Correção (CFF)</p>
              <h2>Siglas de correção de hidratação/umidade</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <thead>
                <tr>
                  <th scope="col">Sigla</th>
                  <th scope="col">Significado</th>
                  <th scope="col">Observação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">SD / SA</th>
                  <td>Substância dessecada ou substância anidra.</td>
                  <td>
                    Corrigir a umidade do certificado de análise. Não dispensa a correção do teor nem o
                    FEq.
                  </td>
                </tr>
                <tr>
                  <th scope="row">CE</th>
                  <td>Correção pela equivalência.</td>
                  <td>A hidratação é corrigida pelo FEq. Não dispensa a correção do teor.</td>
                </tr>
                <tr>
                  <th scope="row">SOL</th>
                  <td>Solução.</td>
                  <td>
                    Ativo dissolvido em solvente adequado; corrigir teor por c₁V₁ = c₂V₂ e aplicar FEq
                    quando cabível.
                  </td>
                </tr>
                <tr>
                  <th scope="row">EF</th>
                  <td>Especificação do fabricante.</td>
                  <td>Avaliar o certificado de análise para decidir sobre umidade e/ou FEq.</td>
                </tr>
                <tr>
                  <th scope="row">SC</th>
                  <td>Sem correção.</td>
                  <td>Não corrigir a umidade (desde que dentro dos limites da monografia), mas corrigir teor e FEq.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            A lista de princípios ativos com FEq = 1,00 é a maioria; os de FEq maior que 1,00 são sais,
            ésteres e hidratos. As “situações especiais” (minerais quelatos, fitoterápicos padronizados)
            exigem FCr adicional.
          </p>
        </article>

        <article id="exemplos" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">08</span>
            <div>
              <p class="card-heading__eyebrow">Prescrições completas</p>
              <h2>Exemplos resolvidos com fatores em série</h2>
            </div>
          </header>

          <section class="worked-example">
            <h3>Exemplo 1 — fórmula com diluições</h3>
            <p class="equation">
              Piridoxina 60 mg · cistina 200 mg · Vit. B12 (1:100) 100 µg · biotina (1:10) 0,2 mg ·
              vitamina A 25.000 UI · mande 100 cápsulas
            </p>
            <ol class="steps">
              <li>
                <strong>Vitamina B12 (1:100)</strong> — 100 µg × 100 = 10.000 µg = <strong>10 mg</strong>
                por cápsula.
              </li>
              <li>
                <strong>Biotina (1:10)</strong> — 0,2 mg × 10 = <strong>2 mg</strong> por cápsula.
              </li>
              <li>
                <strong>Vitamina A</strong> — palmitato oleoso 100.000 UI/g: 25.000 ÷ 100.000 =
                <strong>0,25 g = 250 mg</strong>.
              </li>
              <li>
                <strong>Total por cápsula</strong> — 60 + 200 + 10 + 2 + 250 = <strong>522 mg</strong>.
              </li>
              <li>
                <strong>Para 100 cápsulas</strong> — piridoxina 6 g; cistina 20 g; B12 1:100 1 g; biotina
                1:10 0,2 g; vitamina A oleosa 25 g.
              </li>
            </ol>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>Exemplo 2 — minerais e matérias-primas diluídas</h3>
            <p class="equation">
              Zinco (20%) 30 mg · cobre (13,66%) 1,5 mg · vit. C 100 mg · betacaroteno (10%) 5.000 UI ·
              vit. E (50%) 20 mg · selênio (0,2%) 40 µg · mande 30 cápsulas
            </p>
            <div class="table-scroll">
              <table class="data-table">
                <thead>
                  <tr>
                    <th scope="col">Componente</th>
                    <th scope="col" class="num">Prescrito</th>
                    <th scope="col" class="num">Fator</th>
                    <th scope="col" class="num">A pesar (mg)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Zinco (20%)</th>
                    <td class="num">30 mg</td>
                    <td class="num">100/20 = 5</td>
                    <td class="num">150</td>
                  </tr>
                  <tr>
                    <th scope="row">Cobre (13,66%)</th>
                    <td class="num">1,5 mg</td>
                    <td class="num">100/13,66 ≅ 7,32</td>
                    <td class="num">10,98</td>
                  </tr>
                  <tr>
                    <th scope="row">Vitamina C</th>
                    <td class="num">100 mg</td>
                    <td class="num">1</td>
                    <td class="num">100</td>
                  </tr>
                  <tr>
                    <th scope="row">Betacaroteno (10%)</th>
                    <td class="num">5.000 UI</td>
                    <td class="num">10</td>
                    <td class="num">29,94</td>
                  </tr>
                  <tr>
                    <th scope="row">Vitamina E (50%)</th>
                    <td class="num">20 mg</td>
                    <td class="num">2</td>
                    <td class="num">40</td>
                  </tr>
                  <tr>
                    <th scope="row">Selênio (0,2%)</th>
                    <td class="num">40 µg</td>
                    <td class="num">500</td>
                    <td class="num">20 mg (0,02 g)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ol class="steps">
              <li>
                <strong>Betacaroteno</strong> — 5.000 UI ÷ 1.670 UI/mg = 2,994 mg de betacaroteno puro;
                como o insumo é 10%, × 10 = <strong>29,94 mg</strong>.
              </li>
              <li>
                <strong>Selênio 0,2%</strong> — equivale a 1:500; 40 µg × 500 = 20.000 µg = 20 mg.
              </li>
              <li>
                <strong>Total por cápsula</strong> — 150 + 10,98 + 100 + 29,94 + 40 + 20 = 350,92 mg.
              </li>
              <li>
                <strong>Para 30 cápsulas</strong> — multiplicar cada valor por 30 e acrescentar o excesso
                técnico de manipulação.
              </li>
            </ol>
            <p class="card-note">
              Minerais quelatos têm o teor diminuído pela presença dos aminoácidos: aplica-se o FCr do
              certificado. Magnésio (aspartato) com 8,42% de magnésio → FCr = 100 ÷ 8,42 = 11,87;
              100 mg prescritos → 1.187 mg de matéria-prima.
            </p>
          </section>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>Q₁C₁ = Q₂C₂: o produto quantidade × concentração se conserva na diluição.</li>
            <li>Conversão: g→mg ×1.000; mg→µg ×1.000; g→µg ×1.000.000.</li>
            <li>FEq = Eq g do sal ÷ Eq g da base. Equivalente-grama = mol ÷ valência.</li>
            <li>FEq = 1,00 quando a dose é expressa no próprio ativo utilizado.</li>
            <li>FCr = 100 ÷ teor; para umidade, FCr = 100 ÷ (100 − % umidade).</li>
            <li>Fatores aplicados em série se multiplicam, nunca se somam.</li>
            <li>Teor elementar de mineral: FCr = 100 ÷ % do elemento.</li>
            <li>SD/SA corrige umidade; CE corrige hidratação via FEq; SC não corrige umidade.</li>
            <li>Cápsula dobrada: dose maior que a capacidade da cápsula é dividida em duas.</li>
            <li>Excipiente = capacidade mássica da cápsula − massa dos ativos.</li>
          </ul>
          <p class="study-note__source">
            Conteúdo elaborado a partir de “Cálculos farmacêuticos” (Prof. Antonio Luengo Garcia,
            UNIFAL-MG, 2026) e do “Manual de Equivalência e Correção” (CFF, 2017).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/corretivos">
            <span>Anterior</span>
            ← Corretivos
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/farmacotec1/solucoes">
            <span>Próximo</span>
            Soluções simples →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
