<template>
  <v-card class="mx-auto mt-4" max-width="800">
    <v-card-title>Комментарии</v-card-title>
    <v-list lines="two">
      <template v-for="(articleComments, articleId) in groupedComments" :key="articleId">
        <div class="d-flex justify-center">
          <v-subheader>Статья ID: {{ articleId }}</v-subheader>
        </div>
        <template v-for="(comment, index) in articleComments" :key="comment.id">
          <v-list-item>
            <template v-slot:subtitle>
              {{ comment.content }}
            </template>
          </v-list-item>
        </template>
        <v-divider v-if="articleId !== lastArticleId"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    articleId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState(["comments"]),
    groupedComments() {
      const grouped = {};
      this.comments.forEach((comment) => {
        if (!grouped[comment.idArticle]) {
          grouped[comment.idArticle] = [];
        }
        grouped[comment.idArticle].push(comment);
      });
      return grouped;
    },
    lastArticleId() {
      const articleIds = Object.keys(this.groupedComments);
      return articleIds[articleIds.length - 1];
    },
    commentsForArticle() {
      return this.groupedComments[this.articleId] || [];
    },
  },
};
</script>
