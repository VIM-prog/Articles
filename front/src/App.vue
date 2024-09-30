<template>
  <v-app>
    <v-main>
      <ArticleViewer/>
      <CommentsForm/>
      <ListComments/>
    </v-main>
  </v-app>
</template>

<script setup>
import ArticleViewer from './components/ArticleViewer.vue'
import ArticleForm from './components/ArticleForm.vue'; 
import ListComments from './components/ListComments.vue';
import CommentsForm from './components/CommentsForm.vue';
</script>
