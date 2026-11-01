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
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
})

export default router
