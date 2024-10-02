import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    articles: [],
    article: {}
  },
  
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
  
    DELETE_ARTICLE(state, articleId) {
      state.articles = state.articles.filter(article => article.id !== articleId);
    },
  
    SET_ARTICLE(state, article) {
      state.article = article;
    }
  },
  
  actions: {
    async fetchArticles({ commit }) {
      try {
        const response = await axios.get('http://localhost:8080/api/article');
        commit('SET_ARTICLES', response.data);
      } catch (error) {
        console.error('Ошибка при получении статей:', error);
      }
    },
  
    async deleteArticle({ commit }, articleId) {
      try {
        await axios.delete(`http://localhost:8080/api/article/${articleId}`);
        commit('DELETE_ARTICLE', articleId);
        alert('Статья удалена');
      } catch (error) {
        console.error('Ошибка при удалении статьи:', error);
        alert('Ошибка при удалении статьи');
      }
    },
  
    async getArticle({ commit }, articleId) {
      try {
        const response = await fetch(`http://localhost:8080/api/article/${articleId}`);
        const article = await response.json();
        commit('SET_ARTICLE', article);
      } catch (error) {
        console.error('Ошибка при получении статьи:', error);
      }
    },
  }
});