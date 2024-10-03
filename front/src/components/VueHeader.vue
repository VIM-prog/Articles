<template>
  <v-app-bar height="100" color="green" density="compact">
    <template v-slot:prepend>
    </template>
    <template v-slot:append>
      <v-btn @click="AllArticles()">Все статьи</v-btn>
      <v-btn @click="NewArticle()">Добавить статью</v-btn>
    </template>
    <v-app-bar-title>Article</v-app-bar-title>
  </v-app-bar>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const NewArticle = () => {
      router.push({ path: `/article/new` });
    };

    const AllArticles = () => {
      router.push({ path: `/` });
    };

    return {
      NewArticle,
      AllArticles,
    };
  },
}
</script>