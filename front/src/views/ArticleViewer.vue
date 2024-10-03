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
      </v-card-title>
      <v-card-text>
        {{ article.content }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ArticleView",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState(["article"]),
  },
  mounted() {
    this.getArticle(this.id);
  },
  methods: {
    ...mapActions(["getArticle", "deleteArticle"]),
    editArticle(id) {
      this.$router.push(`/article/${id}/edit`);
    },
    async deleteArticle(id) {
      try {
        await this.$store.dispatch("deleteArticle", id);
        this.$router.push("/");
        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
</script>
