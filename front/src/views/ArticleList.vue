<template>
  <v-app>
    <v-container>
      <table>
        <thead>
          <tr>
            <th>Название статьи</th>
            <th>Дата создания</th>
            <th>Дата обновления</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in articles" :key="article.id">
            <td>{{ article.title }}</td>
            <td>{{ formatDate(article.createdAt) }}</td>
            <td>{{ formatDate(article.updatedAt) }}</td>
            <td>
              <v-btn @click="viewArticle(article.id)">Просмотр</v-btn>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-if="articles.length === 0">Нет статей</p>
    </v-container>
  </v-app>
</template>
<script>
import '@/assets/table.css';
import { mapState, mapActions } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const viewArticle = (id) => {
      router.push({ path: `/article/${id}` });
    };

    return {
      viewArticle
    };
  },
  
  computed: {
    ...mapState(['articles']) 
  },
  
  mounted() {
    this.fetchArticles(); 
  },
  
  methods: {
    ...mapActions(['fetchArticles']),

    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${day}.${month}.${year}`;
    }
  }
};
</script>

<style scoped>
</style>
