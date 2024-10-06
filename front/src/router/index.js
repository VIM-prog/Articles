import { createRouter, createWebHistory } from 'vue-router'

import ArticleList from '../views/ArticleList.vue'
import ArticleViewer from '@/views/ArticleViewer.vue'
import ArticleForm from '@/views/ArticleForm.vue'
import CommentsDate from '@/views/CommentsDate.vue'

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
      props: (route) => ({ id: parseInt(route.params.id) }),
    },
    {
      path: '/article/new',
      component: ArticleForm,
    },
    {
      path: '/article/:id/edit',
      component: ArticleForm,
      props: true
    },
    {
      path: '/analytic/comments',
      component: CommentsDate,
      props: true
    }
  ]
})

export default router