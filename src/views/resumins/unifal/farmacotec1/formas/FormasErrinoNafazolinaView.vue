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
        <router-link to="/resumins/unifal/farmacotec1/formas">Formas farmacêuticas</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Errino de nafazolina</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">MÓDULO 7 · PREPARAÇÃO NASAL</p>
        <h1 class="intro__title">Errino isotônico de cloridrato de nafazolina 0,05%</h1>
        <p class="intro__lead">
          A mucosa nasal tem um sistema de limpeza próprio: o tapete mucociliar. Toda a fórmula —
          tampão, isotonia e conservante — existe para não paralisar esse batimento enquanto o
          vasoconstritor age.
        </p>
        <div class="intro__meta">
          <span class="intro__chip">pH 6,4–6,8</span>
          <span class="intro__chip">Tampão fosfato</span>
          <span class="intro__chip">Efeito rebote</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#formula">Fórmula</a>
        <a href="#preparo">Preparo</a>
        <a href="#analise">Análise crítica</a>
        <a href="#rebote">Rinite medicamentosa</a>
      </nav>

      <div class="lesson">
        <article id="formula" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">Fórmula quali-quantitativa</p>
              <h2>O que entra em 100 mL</h2>
            </div>
          </header>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Solução nasal isotônica (volume final 100 mL)
              </caption>
              <thead>
                <tr>
                  <th scope="col">Componente</th>
                  <th scope="col">Concentração</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Função</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Cloridrato de nafazolina</th>
                  <td>0,05% m/v</td>
                  <td>0,05 g (50 mg)</td>
                  <td>Ativo — descongestionante vasoconstritor α-adrenérgico</td>
                </tr>
                <tr>
                  <th scope="row">Fosfato de sódio monobásico</th>
                  <td>0,65% m/v</td>
                  <td>0,65 g</td>
                  <td>Par ácido do tampão fosfato</td>
                </tr>
                <tr>
                  <th scope="row">Fosfato de sódio dibásico</th>
                  <td>0,54% m/v</td>
                  <td>0,54 g</td>
                  <td>Par básico do tampão fosfato</td>
                </tr>
                <tr>
                  <th scope="row">Cloreto de sódio</th>
                  <td>0,45% m/v</td>
                  <td>0,45 g</td>
                  <td>Isotonizante secundário</td>
                </tr>
                <tr>
                  <th scope="row">Cloreto de benzalcônio</th>
                  <td>0,01% m/v</td>
                  <td>0,01 g</td>
                  <td>Conservante antimicrobiano</td>
                </tr>
                <tr>
                  <th scope="row">Água purificada estéril</th>
                  <td>q.s.p. 100 mL</td>
                  <td>100 mL</td>
                  <td>Veículo de dissolução</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="card-note">
            Dois sais de fosfato em proporções diferentes formam o tampão: o monobásico acidifica, o
            dibásico alcaliniza. A combinação fixa o pH em torno de 6,5.
          </p>
        </article>

        <article id="preparo" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Procedimento</p>
              <h2>Passo a passo comentado</h2>
            </div>
          </header>

          <ol class="steps">
            <li>Paramentar-se e sanitizar a área de trabalho.</li>
            <li>Pesar nafazolina, os dois fosfatos, cloreto de sódio e cloreto de benzalcônio.</li>
            <li>Dissolver os fosfatos em 70 mL de água purificada até solução transparente.</li>
            <li>Conferir o pH no pHmetro: faixa esperada de 6,4 a 6,8.</li>
            <li>Adicionar nafazolina, NaCl e conservante sob agitação até dissolução completa.</li>
            <li>Transferir para balão volumétrico de 100 mL e completar o volume.</li>
            <li>Filtrar em membrana de 0,22 µm (clarificante/esterilizante).</li>
            <li>Envasar em frasco nebulizador de polietileno de 15 mL, lacrar e rotular.</li>
          </ol>

          <p class="card-note">
            O pH é conferido <em>antes</em> de acrescentar o ativo: se o tampão estiver fora da
            faixa, a correção é feita apenas com os sais de fosfato, sem mexer na concentração do
            fármaco.
          </p>
        </article>

        <article id="analise" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Análise crítica</p>
              <h2>Os três requisitos do tapete mucociliar</h2>
            </div>
          </header>

          <p>
            Os cílios da mucosa nasal batem de 10 a 15 vezes por segundo, transportando o muco em
            direção à nasofaringe. Manter esse movimento exige condições estritas:
          </p>

          <div class="table-scroll">
            <table class="data-table">
              <caption>
                Requisito → consequência do desvio
              </caption>
              <thead>
                <tr>
                  <th scope="col">Requisito</th>
                  <th scope="col">Fundamento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">pH 6,4–6,8</th>
                  <td>
                    O muco tem baixa capacidade tampão. Abaixo de 6,0 o batimento ciliar é inibido;
                    acima de 8,0 a viscosidade das mucinas se altera.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Isotonia</th>
                  <td>
                    Hipertônico retira água das células (dor e desidratação); hipotônico causa
                    intumescimento e lise ciliar. Os 0,45% de NaCl somados ao tampão igualam a
                    pressão do plasma.
                  </td>
                </tr>
                <tr>
                  <th scope="row">Sem tensoativos aniônicos</th>
                  <td>
                    Laurilsulfato de sódio causa paralisia ciliar irreversível por desnaturar
                    proteínas de membrana. O benzalcônio a 0,01% é tolerado.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            A nafazolina age em receptores α₁ e α₂, promovendo vasoconstrição dos sinusoides venosos
            da mucosa, o que reduz o edema e a resistência ao fluxo de ar.
          </p>
        </article>

        <article id="rebote" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Uso racional</p>
              <h2>Rinite medicamentosa</h2>
            </div>
          </header>

          <p>
            Uso por mais de 5 dias provoca isquemia local, dessensibilização dos receptores e efeito
            rebote: vasodilatação grave que piora a obstrução e leva o paciente a usar mais gotas. É
            a
            <strong>rinite medicamentosa</strong>.
          </p>

          <p class="card-note">
            Na dispensação, oriente: no máximo 3 a 5 dias, sem repetir doses por mais tempo, e
            procurar avaliação se a obstrução persistir. O frasco nebulizador de 15 mL evita a
            contaminação por retorno de secreção, desde que não seja compartilhado.
          </p>
        </article>

        <aside class="study-note">
          <h2>Pontos-chave para prova</h2>
          <ul class="key-points">
            <li>
              Errino: preparação líquida para ação local ou absorção sistêmica na cavidade nasal.
            </li>
            <li>Cílios batem 10–15 vezes/s; o pH fisiológico nasal é 6,4–6,8.</li>
            <li>Tampão fosfato: monobásico ácido + dibásico básico.</li>
            <li>Nunca usar tensoativo aniônico (laurilsulfato) em errino.</li>
            <li>Nafazolina α₁/α₂ → vasoconstrição; acima de 5 dias, rinite medicamentosa.</li>
          </ul>
          <p class="study-note__source">
            Base: Relatório Técnico 7 — solução nasal isotônica de cloridrato de nafazolina (DF 125,
            UNIFAL-MG).
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/formas/otologico">
            <span>Anterior</span>
            ← Cerumenolítico otológico
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/unifal/farmacotec1/formas/suspensao">
            <span>Próximo</span>
            Suspensão antiácida →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/resumins.css'
</script>
