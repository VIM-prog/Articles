<template>
  <div>
    <h2>Редактировать статью</h2>
    <ArticleForm :article="article" @submit="submitForm" />
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import ArticleForm from "../components/ArticleForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ArticleForm,
  },
  data() {
    return {
      error: null,
    };
  },
  computed: {
    ...mapGetters(["article"]),
  },
  created() {
    this.fetchArticle(this.$route.params.id);
  },
  methods: {
    ...mapActions(["fetchArticle", "updateArticle"]),
    async submitForm(article) {
      try {
        await this.updateArticle({ id: this.$route.params.id, ...article });
        this.$router.push("/");
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>