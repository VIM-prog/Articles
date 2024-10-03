<template>
  <v-sheet class="mx-auto" width="800">
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
            max-width="500"
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
            max-width="500"
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

</script>