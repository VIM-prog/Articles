<template>
  <v-sheet class="mx-auto" width="800">
    <form @submit.prevent="handleSubmit">
      <v-container class="pa-md-12">
        <div class="form-group">
          <label for="content" style="text-align: center; display: block;">
            {{ isEditing ? 'Редактировать комментарий' : 'Комментарий:' }}
          </label>
          <v-textarea
            v-model="content"
            id="content"
            class="mx-auto"
            label="Content"
            max-width="800"
            persistent-placeholder
            placeholder="Your text..."
            variant="outlined"
          />
        </div>
        <v-btn class="mt-2" type="submit" block :disabled="isSubmitDisabled">
          {{ isEditing ? 'Сохранить' : 'Отправить' }}
        </v-btn>
      </v-container>
    </form>
  </v-sheet>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CommentsForm',
  props: {
    articleId: {
      type: Number,
      required: true,
    },
    commentId: {
      type: Number,
      default: null,
    },
    initialContent: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: this.initialContent,
    };
  },
  computed: {
    isSubmitDisabled() {
      return !this.content || this.content.trim() === '';
    },
    isEditing() {
      return this.commentId !== null;
    },
  },
  methods: {
    ...mapActions(['createComment', 'updateComment', 'getComments']),

    async handleSubmit() {
      try {
        if (this.isEditing) {
          await this.updateComment({
            articleId: this.articleId,
            commentId: this.commentId,
            content: this.content,
          });
        } else {
          await this.createComment({
            articleId: this.articleId,
            content: this.content,
          });
        }

        this.content = '';
        await this.getComments(this.articleId);

        if (this.isEditing) {
          this.$emit('updated');
        }
      } catch (error) {
        console.error('Failed comment updates:', error);
      }
    },
  },
};
</script>