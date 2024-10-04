<template>
  <v-card class="mx-auto mt-4" max-width="800">
    <v-card-title>Комментарии</v-card-title>
    <v-list lines="two">
      <template v-for="(articleComments, articleId) in groupedComments" :key="articleId">
        <template v-for="(comment, index) in articleComments" :key="comment.id">
          <v-list-item>
            <template v-slot:subtitle>
              {{ comment.content }}
            </template>
            <template v-slot:append>
              <v-btn icon @click="editComment(comment.id)">
                <v-icon>mdi-pencil</v-icon>
                <v-tooltip activator="parent" location="end">Редактировать</v-tooltip>
              </v-btn>
              <v-btn icon @click="deleteComment(comment.id)">
                <v-icon>mdi-delete</v-icon>
                <v-tooltip activator="parent" location="end">Удалить</v-tooltip>
              </v-btn>
            </template>
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['comments']),
    groupedComments() {
      const grouped = {};
      this.comments.forEach(comment => {
        if (!grouped[comment.idArticle]) {
          grouped[comment.idArticle] = [];
        }
        grouped[comment.idArticle].push(comment);
      });
      return grouped;
    },
  },
  methods: {
    editComment(commentId) {

    },
    deleteComment(commentId) {

    },
  },
};
</script>
