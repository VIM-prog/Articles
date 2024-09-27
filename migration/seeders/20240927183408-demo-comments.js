'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [
      {
        idArticle: 1,
        content: 'Отличная статья!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idArticle: 2,
        content: 'Интересная информация.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {});
  }
};
