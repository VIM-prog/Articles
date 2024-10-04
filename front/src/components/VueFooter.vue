<template>
    <v-footer padless color="green lighten-1" app height="100">
      <v-col class="text-center" cols="12">
        <a href="https://github.com/VIM-prog/Articles" target="_blank" rel="noopener noreferrer">
          <v-icon>mdi-github</v-icon>
        </a>
        <span>&copy; {{ new Date().getFullYear() }} Vim</span>
      </v-col>
    </v-footer>
  </template>
  <style scoped>
  .v-footer {
    display: flex;
  }
  </style>