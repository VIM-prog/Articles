import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    articles: [],
    article: {}
  },
  
  mutations: {
    ADD_ARTICLE(state, article) {
      state.articles.push(article);
    },

    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },

    UPDATE_ARTICLE(state, updatedArticle) {
      const index = state.articles.findIndex(article => article.id === updatedArticle.id);
      if (index !== -1) {
        state.articles.splice(index, 1, updatedArticle);
      }
      state.article = updatedArticle;
    },
  
    DELETE_ARTICLE(state, articleId) {
      state.articles = state.articles.filter(article => article.id !== articleId);
    },
  
    SET_ARTICLE(state, article) {
      state.article = article;
    }
  },
  
  actions: {
    async createArticle({ commit }, article) {
      try {
        const response = await axios.post('http://localhost:8080/api/article', article);
        commit('ADD_ARTICLE', response.data);
        return response.data;
      } catch (error) {
        console.error('Failed to create article:', error);
        throw error;
      }
    },
    
    async fetchArticles({ commit }) {
      try {
        const response = await axios.get('http://localhost:8080/api/article');
        commit('SET_ARTICLES', response.data);
        return response.data;
      } catch (error) {
        console.error('Ошибка при получении статей:', error);
        throw error;
      }
    },
  
    async deleteArticle({ commit }, articleId) {
      try {
        await axios.delete(`http://localhost:8080/api/article/${articleId}`);
        commit('DELETE_ARTICLE', articleId);
      } catch (error) {
        console.error('Ошибка при удалении статьи:', error);
        throw error;
      }
    },

    async updateArticle({ commit }, article) {
      try {
        const response = await axios.put(`http://localhost:8080/api/article/${article.id}`, article);
        commit('UPDATE_ARTICLE', response.data);
        return response.data;
      } catch (error) {
        console.error('Ошибка при обновлении статьи:', error);
        throw error;
      }
    },

    async getArticle({ commit }, articleId) {
      try {
        const response = await axios.get(`http://localhost:8080/api/article/${articleId}`);
        commit('SET_ARTICLE', response.data);
        return response.data;
      } catch (error) {
        console.error('Ошибка при получении статьи:', error);
        throw error;
      }
    },
  }
});