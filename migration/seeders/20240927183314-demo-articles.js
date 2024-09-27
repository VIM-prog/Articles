'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('articles', [
      {
        title: 'Первая статья',
        content: 'Это содержание первой статьи.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Вторая статья',
        content: 'Это содержание второй статьи.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('articles', null, {});
  }
};