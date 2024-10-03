<template>
    <div>
      <h2>Создать статью</h2>
      <ArticleForm @submit="submitForm" />
    </div>
  </template>
  
  <script>
import ArticleForm from '../components/ArticleForm.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    ArticleForm,
  },
  data() {
    return {
      article: {
        title: '',
        content: '',
      },
      error: null,
    };
  },
  methods: {
    async submitForm(article) {
      try {
          //Отправляем данные в API или в Vuex
          const response = await this.createArticle(article); //Изменили на createArticle
          if (response.status === 200 || response.status === 201) {
            this.article = { title: "", content: "" }; // Обнуляем форму для следующей статьи
            this.$router.push('/');
          } else {
            // Обработка ошибки
            this.error = 'Ошибка при сохранении статьи';
          }
      } catch (error) {
        this.error = error.message;
      }
    },

    // Метод для создания статьи (вместо this.$router.push('/'))
    createArticle(articleData) {
      return new Promise((resolve, reject) => {
        // Ваш код для отправки данных на сервер или в Vuex
        // Например:
        setTimeout(() => {
          if (articleData.title && articleData.content) {
            resolve({ status: 200 });
          } else {
            reject(new Error('Некорректные данные статьи'));
          }
        }, 1000); // Задержка для имитации запроса
      });
    }
  },
};
</script>