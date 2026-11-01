<template>
  <div class="test-view">
    <header class="test-header">
      <h1>Teste de Componentes UI</h1>
      <p class="test-subtitle">
        Página de teste dos componentes <code>Base*</code> e <code>AppSection</code>.
      </p>
    </header>

    <!-- ============ BOTÕES ============ -->
    <AppSection title="BaseButton">
      <div class="row">
        <BaseButton variant="primary">Primary</BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton variant="ghost">Ghost</BaseButton>
        <BaseButton variant="danger">Danger</BaseButton>
        <BaseButton icon="fa-plus" size="sm">Ícone</BaseButton>
        <BaseButton disabled>Disabled</BaseButton>
      </div>
    </AppSection>

    <!-- ============ BADGES ============ -->
    <AppSection title="BaseBadge">
      <div class="row">
        <BaseBadge variant="info">Info</BaseBadge>
        <BaseBadge variant="success">Success</BaseBadge>
        <BaseBadge variant="warning">Warning</BaseBadge>
        <BaseBadge variant="danger">Danger</BaseBadge>
        <BaseBadge variant="neutral">Neutral</BaseBadge>
        <BaseBadge variant="primary">Primary</BaseBadge>
        <BaseBadge variant="primary" icon="oi-star" clickable @click="alert('badge!')">
          Clicável
        </BaseBadge>
        <BaseBadge variant="info" dismissible @dismiss="alert('dismiss')">
          Fechável
        </BaseBadge>
        <BaseBadge variant="success" size="sm">sm</BaseBadge>
        <BaseBadge variant="success" size="lg">lg</BaseBadge>
      </div>
    </AppSection>

    <!-- ============ AVATARES ============ -->
    <AppSection title="BaseAvatar">
      <div class="row" style="align-items: flex-end;">
        <BaseAvatar name="Ana Souza" size="xs" status="online" />
        <BaseAvatar name="Bruno Lima" size="sm" status="offline" />
        <BaseAvatar name="Carla Dias" size="md" status="busy" bordered />
        <BaseAvatar name="Diego Reis" size="lg" />
        <BaseAvatar name="Eva Nunes" size="xl" status="online" />
        <BaseAvatar :src="inlineSvgDataUri" name="Imagem" size="lg" />
      </div>
    </AppSection>

    <!-- ============ ALERTS ============ -->
    <AppSection title="BaseAlert">
      <BaseAlert variant="info" title="Info">Alerta informativo padrão.</BaseAlert>
      <BaseAlert variant="success" title="Sucesso">Ação concluída.</BaseAlert>
      <BaseAlert variant="warning" title="Atenção">Verifique os dados.</BaseAlert>
      <BaseAlert variant="danger" title="Erro" @dismiss="alert('alert dismiss')">
        Algo deu errado.
        <template #actions>
          <BaseButton size="sm" variant="danger">Tentar</BaseButton>
        </template>
      </BaseAlert>
    </AppSection>

    <!-- ============ INPUTS / SELECT / TEXTAREA ============ -->
    <AppSection title="Formulário">
      <form @submit.prevent="handleSubmit" @reset="handleReset">
        <BaseFieldset legend="Dados">
          <div class="grid-2">
            <BaseInput v-model="form.nome" label="Nome" placeholder="Seu nome" />
            <BaseInput v-model="form.email" label="Email" type="email" />
            <BaseInput v-model="form.idade" label="Idade" numeric suffix="anos" :min="0" :max="120" />
            <BaseInput v-model="form.busca" label="Busca" placeholder="Pesquisar..." inline />
            <BaseSelect
              v-model="form.select"
              label="Opção"
              placeholder="Escolha..."
              :options="selectOptions"
            />
            <BaseInput v-model="form.desabilitado" label="Disabled" disabled />
          </div>
          <BaseTextarea v-model="form.mensagem" label="Mensagem" :rows="3" />
          <div class="row">
            <label class="checkbox-row">
              <input v-model="form.aceito" type="checkbox" /> Aceito
            </label>
            <label class="radio-row">
              <input v-model="form.radio" type="radio" value="a" /> A
            </label>
            <label class="radio-row">
              <input v-model="form.radio" type="radio" value="b" /> B
            </label>
          </div>
          <div class="row">
            <BaseButton type="submit" icon="fa-paper-plane">Enviar</BaseButton>
            <BaseButton type="reset" variant="secondary">Limpar</BaseButton>
          </div>
        </BaseFieldset>
      </form>
      <BaseCard v-if="lastSubmitted" variant="info" title="Último envio">
        <pre class="code-block">{{ lastSubmitted }}</pre>
      </BaseCard>
    </AppSection>

    <!-- ============ TABS ============ -->
    <AppSection title="BaseTabs">
      <BaseTabs v-model="tabActive" :tabs="tabs">
        <template #geral>Conteúdo da aba Geral.</template>
        <template #dados>Conteúdo da aba Dados.</template>
        <template #config>Conteúdo da aba Config.</template>
      </BaseTabs>
      <small>Ativa: <code>{{ tabActive }}</code></small>
    </AppSection>

    <!-- ============ CARDS ============ -->
    <AppSection title="BaseCard">
      <div class="grid-2">
        <BaseCard title="Default">Card padrão.</BaseCard>
        <BaseCard variant="info" title="Info">Card informativo.</BaseCard>
        <BaseCard variant="warning" title="Warning">Card de alerta.</BaseCard>
        <BaseCard variant="success" title="Success">
          Card de sucesso.
          <template #footer><small>Rodapé.</small></template>
        </BaseCard>
      </div>
    </AppSection>

    <!-- ============ POST CARD ============ -->
    <AppSection title="BasePostCard">
      <div class="grid-2">
        <BasePostCard
          title="Introdução ao Vue 3"
          excerpt="Composition API, reatividade e boas práticas para começar bem."
          category="Vue"
          author="Ana Souza"
          date="2024-05-10"
          :read-time="6"
          :likes="42"
          :comments="7"
          to="/post/vue3"
          emoji="💚"
        />
        <BasePostCard
          title="Sem link, com capa"
          excerpt="Card sem rota e com imagem SVG inline."
          category="Design"
          author="Bruno Lima"
          date="2024-04-22"
          :read-time="4"
          :likes="12"
          :comments="2"
          :cover="inlineSvgDataUri"
        />
      </div>
    </AppSection>

    <!-- ============ PROGRESS ============ -->
    <AppSection title="BaseProgress">
      <BaseProgress :value="progressValue" label="Progresso" />
      <BaseProgress :value="progressValue" label="Com meter" with-meter />
      <div class="row">
        <BaseButton size="sm" @click="increaseProgress">+10</BaseButton>
        <BaseButton size="sm" variant="secondary" @click="resetProgress">Reset</BaseButton>
      </div>
    </AppSection>

    <!-- ============ PAGINATION ============ -->
    <AppSection title="BasePagination">
      <BasePagination v-model:current="currentPage" :total="10" />
      <small>Página atual: {{ currentPage }}</small>
    </AppSection>

    <!-- ============ EMPTY STATE ============ -->
    <AppSection title="BaseEmptyState">
      <BaseEmptyState
        title="Nenhum item"
        description="Adicione um novo item para começar."
        icon="bi-card-checklist"
      >
        <template #action>
          <BaseButton icon="fa-plus">Adicionar</BaseButton>
        </template>
      </BaseEmptyState>
    </AppSection>

    <!-- ============ MODAL ============ -->
    <AppSection title="BaseModal">
      <BaseButton @click="modalOpen = true">Abrir modal</BaseButton>
      <BaseModal v-model="modalOpen" title="Exemplo de modal" size="md">
        <p>Conteúdo do modal. Feche pelo X, ESC ou botão abaixo.</p>
        <template #footer>
          <BaseButton variant="secondary" @click="modalOpen = false">Cancelar</BaseButton>
          <BaseButton @click="modalOpen = false">Confirmar</BaseButton>
        </template>
      </BaseModal>
    </AppSection>

    <footer class="test-footer">
      <hr />
      <small>&copy; {{ currentYear }} — Teste de componentes UI.</small>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

import AppSection from '@/components/ui/AppSection.vue'
import BaseAlert from '@/components/ui/BaseAlert.vue'
import BaseAvatar from '@/components/ui/BaseAvatar.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseEmptyState from '@/components/ui/BaseEmptyState.vue'
import BaseFieldset from '@/components/ui/BaseFieldset.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BasePagination from '@/components/ui/BasePagination.vue'
import BasePostCard from '@/components/ui/BasePostCard.vue'
import BaseProgress from '@/components/ui/BaseProgress.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseTabs from '@/components/ui/BaseTabs.vue'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'

const inlineSvgDataUri =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="120" viewBox="0 0 200 120">
      <rect width="200" height="120" fill="#fee5c0"/>
      <circle cx="60" cy="60" r="35" fill="#da3f87"/>
      <rect x="110" y="30" width="60" height="60" fill="#16bdff"/>
    </svg>`
  )

const form = reactive({
  nome: '', email: '', idade: null as number | null, busca: '',
  select: '', desabilitado: 'Não editável', mensagem: '',
  aceito: false, radio: '',
})
const selectOptions = [
  { value: 'opcao1', label: 'Opção 1' },
  { value: 'opcao2', label: 'Opção 2' },
  { value: 'opcao3', label: 'Opção 3' },
]

const lastSubmitted = ref<string | null>(null)
function handleSubmit() { lastSubmitted.value = JSON.stringify(form, null, 2) }
function handleReset() {
  Object.assign(form, {
    nome: '', email: '', idade: null, busca: '', select: '',
    desabilitado: 'Não editável', mensagem: '', aceito: false, radio: '',
  })
  lastSubmitted.value = null
}

const tabs = [
  { value: 'geral', label: 'Geral', icon: 'bi-card-checklist' },
  { value: 'dados', label: 'Dados', icon: 'bi-clipboard-data-fill' },
  { value: 'config', label: 'Config', icon: 'md-settingssuggest-outlined' },
]
const tabActive = ref('geral')

const progressValue = ref(70)
const increaseProgress = () => (progressValue.value = Math.min(100, progressValue.value + 10))
const resetProgress = () => (progressValue.value = 0)

const currentPage = ref(1)
const modalOpen = ref(false)
const currentYear = computed(() => new Date().getFullYear())

const alert = (msg: string) => console.log(msg)
</script>

<style scoped>
.test-view { max-width: 1100px; margin: 0 auto; padding: 1.5em 1em 3em; }
.test-header {
  text-align: center; margin-bottom: 2em; padding-bottom: 1em;
  border-bottom: 2px dashed var(--border-contrast);
}
.test-subtitle { color: var(--text-secondary); font-size: 0.95em; max-width: 700px; margin: 0.5em auto 0; }

.grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1em 1.5em; }
.row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75em; margin: 0.75em 0; }

.checkbox-row, .radio-row {
  display: inline-flex; align-items: center; gap: 0.4em;
  margin: 0; font-weight: 500; cursor: pointer;
}
.checkbox-row input, .radio-row input { margin: 0; }

.code-block { font-size: 0.85em; white-space: pre-wrap; word-break: break-word; }
.test-footer { margin-top: 2em; text-align: center; color: var(--text-secondary); }

@media (max-width: 480px) {
  .test-view { padding: 0.75em 0.5em 1.5em; }
  .row { gap: 0.5em; }
}
</style>
