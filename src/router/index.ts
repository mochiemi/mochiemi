import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },

    {
      path: '/posts',
      name: 'PostsList',
      component: () => import('@/views/PostsListView.vue'),
    },
    {
      path: '/post/:id',
      name: 'PostDetail',
      component: () => import('@/views/PostDetailView.vue'),
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/horarios',
      name: 'Horarios',
      component: () => import('@/views/HorariosView.vue'),
    },
    {
      path: '/resumins',
      name: 'Resumins',
      component: () => import('@/views/ResuminsView.vue'),
    },
    {
      path: '/resumins/quimica/equilibrio',
      name: 'ResuminsQuimicaEquilibrio',
      component: () => import('@/views/resumins/quimica/EquilibrioQuimicoView.vue'),
    },
    {
      path: '/resumins/quimica/cinetica',
      name: 'ResuminsQuimicaCinetica',
      component: () => import('@/views/resumins/quimica/CineticaQuimicaView.vue'),
    },
    {
      path: '/resumins/unifal/farmacovigilancia/resumogeral',
      alias: '/resumins/unifal/farmacovigilancia/resumogeral.view',
      name: 'ResuminsUnifalFarmacovigilanciaResumoGeral',
      component: () => import('@/views/resumins/unifal/FarmacovigilanciaResumoGeralView.vue'),
    },
    {
      path: '/resumins/unifal/operacoes',
      alias: '/resumins/unifal/operacoes.view',
      name: 'ResuminsUnifalOperacoes',
      component: () => import('@/views/resumins/unifal/OperacoesResumoGeralView.vue'),
    },
    {
      path: '/resumins/unifal/operacoes/filtracao',
      alias: '/resumins/unifal/operacoes/filtracao.view',
      name: 'ResuminsUnifalOperacoesFiltracao',
      component: () => import('@/views/resumins/unifal/OperacoesFiltracaoView.vue'),
    },
    {
      path: '/resumins/farmacotec1',
      name: 'ResuminsFarmacotec1',
      component: () => import('@/views/resumins/farmacotec1/Farmacotec1IndexView.vue'),
    },
    {
      path: '/resumins/farmacotec1/classificacao',
      name: 'ResuminsFarmacotec1Classificacao',
      component: () => import('@/views/resumins/farmacotec1/ClassificacaoMedicamentosView.vue'),
    },
    {
      path: '/resumins/farmacotec1/conservacao',
      name: 'ResuminsFarmacotec1Conservacao',
      component: () => import('@/views/resumins/farmacotec1/ConservacaoAcondicionamentoView.vue'),
    },
    {
      path: '/resumins/farmacotec1/adjuvantes',
      name: 'ResuminsFarmacotec1Adjuvantes',
      component: () => import('@/views/resumins/farmacotec1/AdjuvantesView.vue'),
    },
    {
      path: '/resumins/farmacotec1/corretivos',
      name: 'ResuminsFarmacotec1Corretivos',
      component: () => import('@/views/resumins/farmacotec1/CorretivosView.vue'),
    },
    {
      path: '/resumins/farmacotec1/calculos',
      name: 'ResuminsFarmacotec1Calculos',
      component: () => import('@/views/resumins/farmacotec1/CalculosFarmaceuticosView.vue'),
    },
    {
      path: '/resumins/farmacotec1/solucoes',
      name: 'ResuminsFarmacotec1Solucoes',
      component: () => import('@/views/resumins/farmacotec1/SolucoesSimplesView.vue'),
    },
    {
      path: '/resumins/farmacotec1/extrativas',
      name: 'ResuminsFarmacotec1Extrativas',
      component: () => import('@/views/resumins/farmacotec1/SolucoesExtrativasView.vue'),
    },
    {
      path: '/resumins/farmacotec1/xaropes',
      name: 'ResuminsFarmacotec1Xaropes',
      component: () => import('@/views/resumins/farmacotec1/XaropesElixiresView.vue'),
    },
    {
      path: '/resumins/farmacotec1/alcooleos',
      name: 'ResuminsFarmacotec1Alcooleos',
      component: () => import('@/views/resumins/farmacotec1/AlcooleosGliceroleosView.vue'),
    },
    {
      path: '/resumins/farmacotec1/colirios',
      name: 'ResuminsFarmacotec1Colirios',
      component: () => import('@/views/resumins/farmacotec1/ColiriosView.vue'),
    },
    {
      path: '/resumins/farmacotec1/otologicos',
      name: 'ResuminsFarmacotec1Otologicos',
      component: () => import('@/views/resumins/farmacotec1/OtofarmacosErrinosView.vue'),
    },
    {
      path: '/resumins/farmacotec1/relatorios',
      name: 'ResuminsFarmacotec1Relatorios',
      component: () => import('@/views/resumins/farmacotec1/RelatoriosPraticaView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
})

export default router
