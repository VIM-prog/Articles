<template>
    <v-container>
      <v-card class="mx-auto" max-width="800">
        <v-card-title>
          {{ article.title }}
          <v-spacer></v-spacer>
          <v-btn icon @click="editArticle">
            <v-tooltip activator="parent" location="end">Редактировать</v-tooltip>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deleteArticle">
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
  
  </script>
  
  <style scoped>