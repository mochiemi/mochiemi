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
      path: '/resumins/unifal/farmacovigilancia',
      alias: '/resumins/unifal/farmacovigilancia.view',
      name: 'ResuminsUnifalFarmacovigilancia',
      component: () => import('@/views/resumins/unifal/farmacovigilancia/FarmacovigilanciaIndexView.vue'),
    },
    {
      path: '/resumins/unifal/farmacovigilancia/resumogeral',
      alias: '/resumins/unifal/farmacovigilancia/resumogeral.view',
      name: 'ResuminsUnifalFarmacovigilanciaResumoGeral',
      component: () =>
        import('@/views/resumins/unifal/farmacovigilancia/FarmacovigilanciaResumoGeralView.vue'),
    },
    {
      path: '/resumins/unifal/farmacovigilancia/reacoes-adversas',
      name: 'ResuminsUnifalFarmacovigilanciaReacoesAdversas',
      component: () =>
        import('@/views/resumins/unifal/farmacovigilancia/FarmacovigilanciaReacoesAdversasView.vue'),
    },
    {
      path: '/resumins/unifal/farmacovigilancia/hospitalar',
      name: 'ResuminsUnifalFarmacovigilanciaHospitalar',
      component: () =>
        import('@/views/resumins/unifal/farmacovigilancia/FarmacovigilanciaHospitalarView.vue'),
    },
    {
      path: '/resumins/unifal/farmacovigilancia/busca-ativa',
      name: 'ResuminsUnifalFarmacovigilanciaBuscaAtiva',
      component: () =>
        import('@/views/resumins/unifal/farmacovigilancia/FarmacovigilanciaBuscaAtivaView.vue'),
    },
    {
      path: '/resumins/unifal/farmacovigilancia/escalas',
      name: 'ResuminsUnifalFarmacovigilanciaEscalas',
      component: () =>
        import('@/views/resumins/unifal/farmacovigilancia/FarmacovigilanciaEscalasView.vue'),
    },
    {
      path: '/resumins/unifal/farmacovigilancia/causalidade',
      name: 'ResuminsUnifalFarmacovigilanciaCausalidade',
      component: () =>
        import('@/views/resumins/unifal/farmacovigilancia/FarmacovigilanciaCausalidadeView.vue'),
    },
    {
      path: '/resumins/unifal/farmacovigilancia/industria-rdc',
      name: 'ResuminsUnifalFarmacovigilanciaIndustriaRdc',
      component: () =>
        import('@/views/resumins/unifal/farmacovigilancia/FarmacovigilanciaIndustriaRdcView.vue'),
    },
    {
      path: '/resumins/unifal/farmacovigilancia/industria-pratica',
      name: 'ResuminsUnifalFarmacovigilanciaIndustriaPratica',
      component: () =>
        import('@/views/resumins/unifal/farmacovigilancia/FarmacovigilanciaIndustriaPraticaView.vue'),
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
      path: '/resumins/farmacotec1/formas',
      name: 'ResuminsFarmacotec1Formas',
      component: () => import('@/views/resumins/farmacotec1/formas/FormasFarmaceuticasView.vue'),
    },
    {
      path: '/resumins/farmacotec1/formas/iodeto',
      name: 'ResuminsFarmacotec1FormasIodeto',
      component: () => import('@/views/resumins/farmacotec1/formas/FormasIodetoPotassioView.vue'),
    },
    {
      path: '/resumins/farmacotec1/formas/xarope',
      name: 'ResuminsFarmacotec1FormasXarope',
      component: () =>
        import('@/views/resumins/farmacotec1/formas/FormasXaropeClorfeniraminaView.vue'),
    },
    {
      path: '/resumins/farmacotec1/formas/elixir',
      name: 'ResuminsFarmacotec1FormasElixir',
      component: () =>
        import('@/views/resumins/farmacotec1/formas/FormasElixirParacetamolView.vue'),
    },
    {
      path: '/resumins/farmacotec1/formas/tintura',
      name: 'ResuminsFarmacotec1FormasTintura',
      component: () => import('@/views/resumins/farmacotec1/formas/FormasTinturaBeladonaView.vue'),
    },
    {
      path: '/resumins/farmacotec1/formas/colirio',
      name: 'ResuminsFarmacotec1FormasColirio',
      component: () => import('@/views/resumins/farmacotec1/formas/FormasColirioZincoView.vue'),
    },
    {
      path: '/resumins/farmacotec1/formas/otologico',
      name: 'ResuminsFarmacotec1FormasOtologico',
      component: () =>
        import('@/views/resumins/farmacotec1/formas/FormasOtologicoCarbonatoView.vue'),
    },
    {
      path: '/resumins/farmacotec1/formas/errino',
      name: 'ResuminsFarmacotec1FormasErrino',
      component: () => import('@/views/resumins/farmacotec1/formas/FormasErrinoNafazolinaView.vue'),
    },
    {
      path: '/resumins/farmacotec1/formas/suspensao',
      name: 'ResuminsFarmacotec1FormasSuspensao',
      component: () =>
        import('@/views/resumins/farmacotec1/formas/FormasSuspensaoAntiacidaView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
})

export default router
