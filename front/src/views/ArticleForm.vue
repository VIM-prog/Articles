<template>
  <v-sheet class="mx-auto" width="600">
    <form @submit.prevent="handleSubmit">
      <v-container class="pa-4">
        <div class="form-group">
          <label for="title" style="text-align: center; display: block;">Заголовок:</label>
          <v-text-field
            id="title"
            v-model="localArticle.title"
            class="mx-auto"
            density="compact"
            label="Title"
            max-width="550"
            persistent-placeholder
            variant="outlined"
            :error-messages="titleErrors"
          />
        </div>
        <div class="form-group">
          <label for="content" style="text-align: center; display: block;">Содержание:</label>
          <v-textarea
            id="content"
            v-model="localArticle.content"
            class="mx-auto"
            label="Content"
            max-width="550"
            persistent-placeholder
            placeholder="Your text..."
            variant="outlined"
            :error-messages="contentErrors"
          />
        </div>
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-container>
    </form>
  </v-sheet>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    return { router, route };
  },
  data() {
    return {
      localArticle: { id: null, title: '', content: '' },
      titleErrors: [],
      contentErrors: [],
      titleRules: [(v) => !!v || 'Заголовок обязателен'],
    };
  },
  computed: {
    ...mapState(['article']),
    articleId() {
      return Number(this.route.params.id);
    },
  },
  methods: {
    ...mapActions(['createArticle', 'fetchArticles', 'deleteArticle', 'updateArticle', 'getArticle']),

    NewArticle() {
      this.localArticle = { id: null, title: '', content: '' };
    },
    async editArticle(articleId) {
      try {
        await this.getArticle(articleId);
        this.localArticle = { ...this.article };
      } catch (err) {
        console.error('Error fetching article:', err);
      }
    },
    handleSubmit() {
      console.log('Submitting article:', this.localArticle);
      if (!this.localArticle.id) {
        this.createArticle(this.localArticle)
          .then(() => {
            this.router.push('/');
          })
          .catch((err) => {
            this.contentErrors = ['Ошибка при создании статьи'];
            console.error(err);
          });
      } else {
        this.updateArticle(this.localArticle)
          .then(() => {
            this.router.push('/');
          })
          .catch((err) => {
            this.contentErrors = ['Ошибка при обновлении статьи'];
            console.error(err);
          });
      }
    },
  },
  mounted() {
    if (this.articleId) {
      this.editArticle(this.articleId);
    }
  },
};
</script>