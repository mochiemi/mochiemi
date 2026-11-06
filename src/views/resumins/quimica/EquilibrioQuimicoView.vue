<template>
  <div class="resumins">
    <div class="page-shell">
      <nav class="breadcrumb" aria-label="Você está aqui">
        <router-link to="/resumins">Resumins</router-link>
        <span class="breadcrumb__sep" aria-hidden="true">/</span>
        <span>Química</span>
      </nav>

      <header class="intro">
        <p class="intro__eyebrow">QUÍMICA · EQUILÍBRIO</p>
        <h1 class="intro__title">Equilíbrio químico</h1>
        <p class="intro__lead">
          Reações podem acontecer nos dois sentidos ao mesmo tempo. Entenda
          como reconhecer o equilíbrio, prever deslocamentos e interpretar as
          constantes que descrevem cada sistema.
        </p>
        <div class="intro__meta">
          <span>Guia de estudo</span>
          <span aria-hidden="true">·</span>
          <span>5 tópicos essenciais</span>
        </div>
      </header>

      <nav class="contents" aria-label="Nesta página">
        <span class="contents__label">Neste resumo</span>
        <a href="#conceito">Conceito</a>
        <a href="#reacoes">Reações</a>
        <a href="#le-chatelier">Le Chatelier</a>
        <a href="#constantes">K e Q</a>
        <a href="#aplicacoes">Ka e Kps</a>
      </nav>

      <div class="lesson">
        <article id="conceito" class="summary-card summary-card--featured">
          <header class="card-heading">
            <span class="card-heading__number">01</span>
            <div>
              <p class="card-heading__eyebrow">A ideia central</p>
              <h2>O que é equilíbrio químico?</h2>
            </div>
          </header>
          <p>
            É o estado <strong>dinâmico</strong> de uma reação reversível em que
            as velocidades da reação direta e da reação inversa se igualam.
            Reagentes continuam formando produtos, e produtos continuam
            regenerando reagentes.
          </p>
          <div class="reaction" aria-label="Reagentes em equilíbrio com produtos">
            <span>reagentes</span>
            <span class="reaction__arrow" aria-hidden="true">⇌</span>
            <span>produtos</span>
          </div>
          <ul class="key-points">
            <li>
              No equilíbrio, as concentrações ficam constantes ao longo do
              tempo — mas não necessariamente são iguais.
            </li>
            <li>
              O sistema precisa permitir que as espécies permaneçam em contato;
              em geral, considera-se um sistema fechado.
            </li>
            <li>
              Igualdade entre velocidades não significa que a reação parou:
              as transformações direta e inversa seguem acontecendo.
            </li>
          </ul>
        </article>

        <article id="reacoes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">02</span>
            <div>
              <p class="card-heading__eyebrow">Sentidos da reação</p>
              <h2>Reações reversíveis e irreversíveis</h2>
            </div>
          </header>
          <div class="two-columns">
            <section class="concept-panel concept-panel--mint">
              <h3>Reversível</h3>
              <p>
                A reação ocorre nos dois sentidos. Os produtos podem voltar a
                formar reagentes, então o sistema pode atingir equilíbrio.
              </p>
              <p class="equation">N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)</p>
              <small>Síntese da amônia</small>
            </section>
            <section class="concept-panel concept-panel--rose">
              <h3>Irreversível</h3>
              <p>
                Nas condições consideradas, a reação segue essencialmente em
                um sentido. Se um produto gasoso escapa, por exemplo, a reação
                inversa fica impedida.
              </p>
              <p class="equation">CaCO₃(s) → CaO(s) + CO₂(g)</p>
              <small>Calcinação do carbonato de cálcio</small>
            </section>
          </div>
          <p class="card-note">
            A seta dupla <strong>⇌</strong> indica que os dois sentidos são
            possíveis; ela não indica que as quantidades dos dois lados são
            iguais.
          </p>
        </article>

        <article id="le-chatelier" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">03</span>
            <div>
              <p class="card-heading__eyebrow">Previsão de mudanças</p>
              <h2>Princípio de Le Chatelier</h2>
            </div>
          </header>
          <p>
            Quando um sistema em equilíbrio sofre uma alteração, ele se
            desloca no sentido que tende a reduzir o efeito dessa perturbação.
            Use a equação balanceada para contar espécies e identificar os
            sentidos direto e inverso.
          </p>

          <div class="factor-grid">
            <section class="factor">
              <span class="factor__icon" aria-hidden="true">[ ]</span>
              <h3>Concentração</h3>
              <p>
                Adicionar reagente ou retirar produto favorece a formação de
                produtos. Adicionar produto ou retirar reagente favorece os
                reagentes.
              </p>
              <p class="factor__example">
                Retirar NH₃ desloca N₂ + 3 H₂ ⇌ 2 NH₃ para a direita.
              </p>
            </section>

            <section class="factor">
              <span class="factor__icon" aria-hidden="true">P</span>
              <h3>Pressão e volume</h3>
              <p>
                Para equilíbrios gasosos, aumentar a pressão (diminuir o
                volume) favorece o lado com menos mols de gás. Diminuir a
                pressão favorece o lado com mais mols gasosos.
              </p>
              <p class="factor__example">
                N₂ + 3 H₂ ⇌ 2 NH₃: 4 mols gasosos à esquerda e 2 à direita.
              </p>
            </section>

            <section class="factor">
              <span class="factor__icon" aria-hidden="true">T</span>
              <h3>Temperatura</h3>
              <p>
                Pense no calor como reagente ou produto: elevar a temperatura
                favorece o sentido endotérmico; baixar favorece o exotérmico.
              </p>
              <p class="factor__example">
                Se a síntese da amônia libera calor (ΔH &lt; 0), aquecer
                favorece a reação inversa.
              </p>
            </section>

            <section class="factor">
              <span class="factor__icon" aria-hidden="true">⚡</span>
              <h3>Catalisador</h3>
              <p>
                Acelera as reações direta e inversa. Não desloca o equilíbrio
                nem altera a constante; apenas ajuda o sistema a alcançá-lo
                mais rapidamente.
              </p>
            </section>
          </div>
          <p class="card-note">
            Se os dois lados tiverem o mesmo número total de mols gasosos, uma
            mudança de pressão não desloca o equilíbrio. A adição de um gás
            inerte a volume constante também não altera as pressões parciais
            dos participantes.
          </p>
        </article>

        <article id="constantes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">04</span>
            <div>
              <p class="card-heading__eyebrow">Composição do sistema</p>
              <h2>Constante de equilíbrio (K) e quociente (Q)</h2>
            </div>
          </header>
          <p>
            Para <span class="equation">aA + bB ⇌ cC + dD</span>, a expressão
            em concentração é:
          </p>
          <div class="formula" aria-label="K c é igual à concentração de C elevada a c vezes D elevada a d, dividido por A elevada a a vezes B elevada a b">
            <span class="formula__label">Kc</span>
            <span class="formula__fraction">
              <span>[C]<sup>c</sup> · [D]<sup>d</sup></span>
              <span>[A]<sup>a</sup> · [B]<sup>b</sup></span>
            </span>
          </div>
          <ul class="key-points">
            <li>
              Expoentes são os coeficientes estequiométricos da equação
              balanceada.
            </li>
            <li>
              Use as concentrações no equilíbrio. Sólidos e líquidos puros
              não aparecem na expressão.
            </li>
            <li>
              Para uma reação específica, K depende da temperatura. Alterar
              concentração ou pressão muda a composição de equilíbrio, mas
              não o valor de K se a temperatura ficar constante.
            </li>
            <li>
              Para gases, também se pode escrever Kp usando as pressões
              parciais.
            </li>
          </ul>

          <section class="worked-example">
            <h3>Exemplo: calculando Kc</h3>
            <p>
              Para H₂(g) + I₂(g) ⇌ 2 HI(g), considere no equilíbrio
              [H₂] = 0,20 mol/L, [I₂] = 0,20 mol/L e [HI] = 1,60 mol/L:
            </p>
            <p class="equation">
              Kc = [HI]² / ([H₂] · [I₂]) = 1,60² / (0,20 · 0,20) = 64
            </p>
          </section>

          <section class="worked-example worked-example--soft">
            <h3>Q mostra para onde a reação tende</h3>
            <p>
              Q usa a mesma forma da expressão de K, mas com as concentrações
              (ou pressões) do momento — ainda não necessariamente no
              equilíbrio. Compare Q com K:
            </p>
            <ul class="comparison-list">
              <li><strong>Q &lt; K:</strong> a reação tende a formar produtos.</li>
              <li><strong>Q &gt; K:</strong> a reação tende a formar reagentes.</li>
              <li><strong>Q = K:</strong> o sistema está em equilíbrio.</li>
            </ul>
            <p class="card-note">
              O equilíbrio não exige Q = 1: exige Q = K. O valor de K pode
              ser diferente para cada reação e temperatura.
            </p>
          </section>
        </article>

        <article id="aplicacoes" class="summary-card">
          <header class="card-heading">
            <span class="card-heading__number">05</span>
            <div>
              <p class="card-heading__eyebrow">Equilíbrios em solução</p>
              <h2>Aplicações: acidez e solubilidade</h2>
            </div>
          </header>
          <div class="two-columns">
            <section class="concept-panel concept-panel--rose">
              <h3>Constante de acidez (Ka)</h3>
              <p>
                Para o ácido fraco HA em água, HA + H₂O ⇌ H₃O⁺ + A⁻. Como a
                água é um líquido puro, ela não entra na expressão:
              </p>
              <p class="equation">Ka = [H₃O⁺] · [A⁻] / [HA]</p>
              <p>
                Um Ka maior indica maior ionização e, portanto, um ácido mais
                forte. Como pKa = −log Ka, um pKa menor também indica um ácido
                mais forte. Quando [HA] = [A⁻], pH = pKa.
              </p>
            </section>

            <section class="concept-panel concept-panel--mint">
              <h3>Produto de solubilidade (Kps)</h3>
              <p>
                Para um sal pouco solúvel AₘBₙ(s) ⇌ m Aⁿ⁺ + n Bᵐ⁻, o sólido
                não entra na expressão:
              </p>
              <p class="equation">Kps = [Aⁿ⁺]ᵐ · [Bᵐ⁻]ⁿ</p>
              <p>
                Compare o produto iônico Qps com Kps: abaixo de Kps, a solução
                pode dissolver mais sal; igual a Kps, está saturada; acima de
                Kps, pode ocorrer precipitação até o equilíbrio.
              </p>
            </section>
          </div>
          <p class="card-note">
            Ka e Kps são aplicações do mesmo princípio: descrever a composição
            de equilíbrio por meio de uma expressão de concentrações.
          </p>
        </article>

        <aside class="study-note">
          <h2>Para lembrar</h2>
          <p>
            <strong>Equilíbrio é dinâmico</strong>: velocidades iguais,
            concentrações constantes. Diante de uma perturbação, aplique Le
            Chatelier. Para saber se a mistura já está em equilíbrio, calcule
            Q e compare com K.
          </p>
          <p class="study-note__source">
            Conteúdo elaborado a partir do material “Equilíbrio Químico”,
            enviado para este resumo.
          </p>
        </aside>

        <nav class="topic-nav" aria-label="Navegação entre resumos">
          <router-link class="topic-nav__link" to="/resumins">
            <span>Voltar</span>
            ← Todos os resumos
          </router-link>
          <router-link class="topic-nav__link" to="/resumins/quimica/cinetica">
            <span>Próximo</span>
            Cinética química →
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup>
import '@/assets/styles/resumins.css'
</script>
