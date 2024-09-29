<template>
    <v-card class="mx-auto" max-width="500">
      <v-list lines="two">
        <v-list-item v-for="(comment, index) in comments" :key="index">
          <template v-slot:subtitle>
            {{ comment.text }}
          </template>
          <template v-slot:append>
            <v-btn icon @click="editComment(index)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deleteComment(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template> 
          <v-divider v-for="n in comments.length - 1" :key="`divider-${n}`" color="white" thickness="2"></v-divider>
        </v-list-item>
        
        
      </v-list>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comments: [
          { text: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { text: "Wish I could come, but I'm out of town this weekend." },
          { text: "Do you have Paris recommendations? Have you ever been?" }
        ]
      };
    },
    methods: {
      editComment(index) {
        console.log(`Editing comment at index ${index}`);
      },
      deleteComment(index) {
        console.log(`Deleting comment at index ${index}`);
        this.comments.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>