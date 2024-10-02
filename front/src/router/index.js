import { createRouter, createWebHistory } from 'vue-router'

import ArticleList from '../views/ArticleList.vue'
import ArticleViewer from '@/components/ArticleViewer.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ArticleList
    },
    {
      path: '/article/:id',
      component: ArticleViewer,
      props: true
    }
  ]
})

export default router