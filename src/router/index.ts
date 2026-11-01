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
      path: '/test',
      name: 'test',
      component: () => import('@/views/TestView.vue'),
    },

    {
      path: '/html',
      name: 'html',
      component: () => import('@/views/HtmlView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
})

export default router
