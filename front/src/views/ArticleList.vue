<template>
  <v-app>
    <v-container>
      <table>
        <thead>
          <tr>
            <th>Название статьи</th>
            <th @click="sortByDate('createdAt')">Дата создания</th>
            <th @click="sortByDate('updatedAt')">Дата обновления</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in sortedArticles" :key="article.id">
            <td>{{ article.title }}</td>
            <td>{{ formatDate(article.createdAt) }}</td>
            <td>{{ formatDate(article.updatedAt) }}</td>
            <td>
              <v-btn @click="viewArticle(article.id)">Просмотр</v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const viewArticle = (id) => {
      router.push({ path: `/article/${id}` });
    };

    return {
      viewArticle,
    };
  },

  data() {
    return {
      sortKey: 'createdAt',
      sortOrder: 1,
    };
  },

  computed: {
    ...mapState(["articles"]),

    sortedArticles() {
      return [...this.articles].sort((a, b) => {
        return (a[this.sortKey] > b[this.sortKey] ? 1 : -1) * this.sortOrder;
      });
    },
  },

  mounted() {
    this.fetchArticles();
  },

  methods: {
    ...mapActions(["fetchArticles"]),

    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${day}.${month}.${year}`;
    },

    sortByDate(key) {
      if (this.sortKey === key) {
        this.sortOrder *= -1;
      } else {
        this.sortKey = key;
        this.sortOrder = 1;
      }
    },
  },
};
</script>

<style scoped></style>
