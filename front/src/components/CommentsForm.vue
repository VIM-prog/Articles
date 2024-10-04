<template>
  <v-sheet class="mx-auto" width="800">
    <form @submit.prevent="handleSubmit">
      <v-container class="pa-md-12">
        <div class="form-group">
          <label for="content" style="text-align: center; display: block;">Комментарий:</label>
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
        <v-btn class="mt-2" type="submit" block>Отправить</v-btn>
      </v-container>
    </form>
  </v-sheet>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CommentForm',
  props: {
    articleId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      content: '',
    };
  },
  methods: {
    ...mapActions(['createComment', 'getComments']),
    async handleSubmit() {
      try {
        await this.createComment({
          articleId: this.articleId,
          content: this.content,
        });
        this.content = '';
        await this.getComments(this.articleId); 
      } catch (error) {
        console.error('Failed to submit comment:', error);
      }
    },
  },
};
</script>