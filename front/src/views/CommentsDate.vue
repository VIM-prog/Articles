<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="startDate"
          label="Дата начала"
          type="date"
          :error-messages="startDateErrors"
          @input="validateStartDate"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="endDate"
          label="Дата окончания"
          type="date"
          :error-messages="endDateErrors"
          @input="validateEndDate"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn @click="submitDates" color="green" :disabled="isButtonDisabled">Принять</v-btn>

    <!-- Передаем articleId в компонент ListCommentsAnalyt -->
    <ListCommentsAnalyt :articleId="articleId" />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import ListCommentsAnalyt from '../components/ListCommentsAnalyt.vue';

export default {
  components: {
    ListCommentsAnalyt,
  },
  computed: {
    articleId() {
      return this.$route.params.id; 
    },
  },
  data() {
    return {
      startDate: '',
      endDate: '',
      startDateErrors: [],
      endDateErrors: [],
    };
  },
  computed: {
    isFormValid() {
      return this.startDateErrors.length === 0 && this.endDateErrors.length === 0;
    },
    isButtonDisabled() {
      return !this.startDate || !this.endDate || !this.isFormValid;
    },
  },
  methods: {
    ...mapActions(['getCommentsByPeriod']),
    submitDates() {
      if (this.startDate && this.endDate) {
        this.getCommentsByPeriod({
          dateFrom: this.startDate,
          dateTo: this.endDate,
          articleId: this.articleId, 
        });
      } else {
        this.getComments(this.articleId);
      }
    },
    validateStartDate() {
      this.startDateErrors = this.startDate ? [] : ['Дата начала обязательна'];
    },
    validateEndDate() {
      this.endDateErrors = this.endDate ? [] : ['Дата окончания обязательна'];
    },
  },
};
</script>