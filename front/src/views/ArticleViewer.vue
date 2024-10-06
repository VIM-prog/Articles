<template>
  <v-container>
    <v-card class="mx-auto" max-width="800">
      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-text>{{ article.content }}</v-card-text>
      <CommentsForm :article-id="id" />
      <ListCommentsArticle :article-id="id" />
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CommentsForm from "@/components/CommentsForm.vue";
import ListCommentsArticle from "@/components/ListCommentsArticle.vue";

export default {
  components: {
    CommentsForm,
    ListCommentsArticle,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    articleId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState(["article"]),
    ListCommentsArticle() {
      return this.comments.filter(
        (comment) => comment.idArticle === this.articleId
      );
    },
  },
  mounted() {
    this.getArticle(this.id);
  },
  methods: {
    ...mapActions(["getArticle"]),
    async mounted() {
      await this.$store.dispatch("getComments", this.articleId);
    },
  },
};
</script>
