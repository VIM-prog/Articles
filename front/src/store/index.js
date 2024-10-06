import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    articles: [],
    article: {},
    comments: [],
  },
  getters: {
    comments: (state) => state.comments,
  },

  mutations: {
    ADD_ARTICLE(state, article) {
      state.articles.push(article);
    },

    SET_COMMENTS(state, comments) {
      state.comments = comments;
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

    DELETE_COMMENT(state, commentId) {
      state.comments = state.comments.filter(comment => comment.id !== commentId);
    },

    SET_ARTICLE(state, article) {
      state.article = article;
    },
    ADD_COMMENT(state, comment) {
      state.comments.push(comment);
    },

    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
    ADD_COMMENT(state, comment) {
      state.comments.push(comment);
    },
    UPDATE_COMMENT(state, updatedComment) {
      const index = state.comments.findIndex(comment => comment.id === updatedComment.id);
      if (index !== -1) {
        state.comments.splice(index, 1, updatedComment);
      }
    },
    DELETE_COMMENT(state, commentId) {
      state.comments = state.comments.filter(comment => comment.id !== commentId);
    },
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

    async createComment({ commit }, { articleId, content }) {
      try {
        const response = await axios.post(`http://localhost:8080/api/article/${articleId}/comment`, { content });
        commit('ADD_COMMENT', response.data);
        return response.data;
      } catch (error) {
        console.error('Failed to create comment:', error);
        throw error;
      }
    },
    async getComments({ commit }, articleId) {
      try {
        const response = await axios.get(`http://localhost:8080/api/article/${articleId}/comment`);
        commit('SET_COMMENTS', response.data);
      } catch (error) {
        console.error('Ошибка загрузки комментариев:', error);
      }
    },
    async deleteComment({ commit }, { articleId, commentId }) {
      try {
        await axios.delete(`http://localhost:8080/api/article/${articleId}/comment/${commentId}`);
        commit('DELETE_COMMENT', commentId);
      } catch (error) {
        console.error('Failed to delete comment:', error);
        throw error;
      }
    }, 
    
    async updateComment({ commit }, { articleId, commentId, content }) {
      try {
        const response = await axios.put(`http://localhost:8080/api/article/${articleId}/comment/${commentId}`, { content });
        commit('UPDATE_COMMENT', response.data);
      } catch (error) {
        console.error('Error updating comment:', error);
        throw error;
      }
    },

    async getCommentsByPeriod({ commit }, { dateFrom, dateTo, articleId }) {
      try {
        const response = await axios.get('http://localhost:8080/api/analytic/comments', {
          params: { dateFrom, dateTo },
        });
        if (articleId) {
          const filteredComments = response.data.filter(comment => comment.idArticle === articleId);
          commit('SET_COMMENTS', filteredComments);
        } else {
          commit('SET_COMMENTS', response.data);
        }
      } catch (error) {
        console.error('Ошибка при получении комментариев:', error);
      }
    },
  },
});