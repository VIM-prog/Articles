<template>
  <v-container>
    <v-card class="mx-auto" max-width="800">
      <v-card-title>
        {{ article.title }}
        <v-spacer></v-spacer>
        <v-btn icon @click="editArticle(article.id)">
          <v-tooltip activator="parent" location="end">Редактировать</v-tooltip>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="deleteArticle(article.id)">
          <v-icon>mdi-delete</v-icon>
          <v-tooltip activator="parent" location="end">Удалить</v-tooltip>
        </v-btn>
        <div class="text-right text-caption">
          id: {{ article.id }}
        </div>
      </v-card-title>
      <v-card-text>
        {{ article.content }}
      </v-card-text>
      <CommentsForm :article-id="article.id"/>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CommentsForm from '../components/CommentsForm.vue';

export default {
  name: 'ArticleView',
  components: {
    CommentsForm,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState(['article', 'comments']),
  },
  mounted() {
    this.getArticle(this.id);
    this.getComments(this.id);
  },
  methods: {
    ...mapActions(['getArticle', 'deleteArticle', 'getComments']),
    editArticle(id) {
      this.$router.push(`/article/${id}/edit`);
    },
    async deleteArticle(id) {
      try {
        await this.deleteArticle(id);
        this.$router.push('/');
      } catch (error) {
        console.error('Failed to delete article:', error);
      }
    },
  },
};
</script>