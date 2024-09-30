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
  export default {
    name: 'ArticleView',
    data() {
      return {
        article: {
          title: 'Заголовок статьи',
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque vitae diam ac viverra. 
          Praesent id bibendum est, vitae mollis augue. Mauris est ante, aliquet vitae ultrices dictum, facilisis nec urna. 
          Donec quis accumsan purus. Suspendisse euismod tortor in pretium fermentum. Duis ac metus consectetur, sollicitudin 
          nisi placerat, placerat ipsum. Nam malesuada consectetur turpis ut lobortis. Duis id lobortis augue. Donec quis mauris 
          tellus. Pellentesque vel luctus ipsum. Nunc sagittis est quam, non ultricies purus blandit et. Maecenas nulla nisi, 
          varius efficitur sollicitudin non, mattis non orci. Vivamus dapibus consectetur maximus.

        Sed mollis erat consectetur varius ultricies. Donec consequat augue tortor, nec tristique lectus auctor vitae. 
        Ut pulvinar semper aliquet. In scelerisque mi sit amet erat egestas, nec pharetra ex congue. Integer commodo ante et 
        nunc placerat, ut dignissim leo ornare. Morbi sagittis, tellus eget commodo varius, tellus quam facilisis nibh, vel 
        iaculis eros felis vel ex. Curabitur tempus lorem id pulvinar bibendum. Praesent placerat cursus magna, vel pellentesque 
        magna ullamcorper sit amet. Ut non dolor et ligula elementum varius. Donec dignissim dolor id velit consequat ultrices.

        Proin eleifend augue sit amet porta convallis. Sed venenatis risus nisi, nec venenatis ipsum egestas sed. Suspendisse 
        finibus vel lorem ut pharetra. Donec velit turpis, lobortis sit amet odio aliquam, tincidunt viverra erat. Integer 
        volutpat non orci nec accumsan. Sed rutrum ullamcorper malesuada. Donec dapibus risus et neque vulputate, in consectetur 
        mauris semper. Nam molestie posuere ex id convallis. Curabitur venenatis ante turpis, id pretium dolor fringilla eu.

        Proin rutrum felis vel dolor ultrices, at pretium ipsum laoreet. Fusce eget ullamcorper mauris. Nam neque est, imperdiet 
        eget placerat nec, cursus quis neque. Aenean ut dolor accumsan, tincidunt lorem et, convallis metus. Class aptent taciti 
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut suscipit sem sed mi tincidunt dignissim. 
        Morbi aliquet metus et consequat lobortis. Maecenas a dui dapibus, volutpat ante ac, venenatis lacus. In id mauris 
        faucibus, sollicitudin nisl a, ullamcorper orci. Maecenas commodo purus lacus, nec iaculis ex venenatis bibendum. Ut 
        vitae viverra turpis, sed imperdiet sem.

        Ut quis arcu euismod, vestibulum nulla eget, vehicula ligula. Donec eleifend, neque in placerat imperdiet, orci arcu 
        ullamcorper neque, at elementum urna nunc quis risus. Aenean sodales, tellus in pharetra feugiat, neque mauris accumsan 
        nulla, at condimentum sem lacus interdum dui. In hac habitasse platea dictumst. Duis egestas tellus est, lobortis congue
         nunc dignissim in. Praesent eget lectus ipsum. Donec blandit ipsum risus, eget ultrices odio scelerisque at. Aenean 
         eleifend erat tristique nunc rhoncus, eget luctus leo gravida. Vestibulum facilisis diam at rhoncus pellentesque. Donec 
         id mi convallis, efficitur sem eget, luctus urna. Nam eleifend velit mi, sit amet sagittis massa dignissim sed. Mauris 
         viverra libero vel massa viverra, et varius nisi tincidunt. Cras volutpat nulla vitae euismod volutpat. Ut nec dictum 
         tellus.`,
        },
      };
    },
    methods: {
      editArticle() {
        
      },
      deleteArticle() {

        }
      }
    }
  </script>
  
  <style scoped>
  </style>