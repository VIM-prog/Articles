<template>
  <v-sheet class="mx-auto" width="800">
    <form @submit.prevent="handleSubmit">
      <v-container class="pa-md-12">
        <div class="form-group">
          <label for="title" style="text-align: center; display: block;">Заголовок:</label> 
          <v-text-field
           id="title"
            class="mx-auto"
            density="compact"
            label="Title"
            max-width="500"
            persistent-placeholder
            variant="outlined"
          />
        </div>
        <div class="form-group">
          <label for="content" style="text-align: center; display: block;">Содержание:</label>  
          <v-textarea
            id="content"
            class="mx-auto"
            label="Content"
            max-width="500"
            persistent-placeholder
            placeholder="Your text..."
            variant="outlined"
          />
        </div>
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-container>
    </form>
  </v-sheet>
</template>

<script>
</script>