<template>
  <v-card class="mx-auto mt-4" max-width="800">
    <v-card-title>Комментарии</v-card-title>
    <v-list lines="two">
      <template v-for="comment in commentsForArticle" :key="comment.id">
        <v-list-item>
          <template v-slot:subtitle>
            {{ comment.content }}
          </template>
          <template v-slot:append>
            <span class="text-caption">{{ formatDate(comment.createdAt) }}</span>
            <v-btn icon @click="handleEditComment(comment)">
              <v-icon>mdi-pencil</v-icon>
              <v-tooltip activator="parent" location="end">Редактировать</v-tooltip>
            </v-btn>
            <v-btn icon @click="deleteComment(comment.id, articleId)">
              <v-icon>mdi-delete</v-icon>
              <v-tooltip activator="parent" location="end">Удалить</v-tooltip>
            </v-btn>
          </template>
        </v-list-item>
      </template>
    </v-list>
    <comments-form
      :article-id="articleId"
      :comment-id="editingCommentId"
      :initial-content="editingCommentContent"
      v-if="editingCommentId"
      @updated="onCommentUpdated"
    />
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CommentsForm from './CommentsForm.vue';

export default {
  components: {
    CommentsForm,
  },
  props: {
    articleId: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    ...mapState({
      comments: state => state.comments,
    }),
    commentsForArticle() {
      return this.comments.filter(comment => comment.idArticle === parseInt(this.articleId));
    },
  },
  data() {
    return {
      editingCommentId: null,
      editingCommentContent: '',
    };
  },
  methods: {
    formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  },
    ...mapActions(['deleteComment']),
    handleEditComment(comment) {
      this.editingCommentId = comment.id;
      this.editingCommentContent = comment.content;
    },
    onCommentUpdated() {
      this.editingCommentId = null;
      this.editingCommentContent = '';
    },
    deleteComment(commentId) {
      this.$store.dispatch('deleteComment', { articleId: this.articleId, commentId })
        .then(() => {
          this.$store.dispatch('getComments', this.articleId);
        })
        .catch(error => {
          console.error('Error deleting comment:', error);
        });
    },
  },
  async mounted() {
    await this.$store.dispatch('getComments', parseInt(this.articleId));
  },
};
</script>