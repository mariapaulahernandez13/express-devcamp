'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [{
        name: 'PHP Bootcamp',
        description: 'Bootcamp for PHP learning',
        website: 'phpbootcamp.com',
        phone: '64576652',
        average_rating: 3,
        average_cost: 6540,
        user_id: 1
      },
      {
        name: 'Express Backend',
        description: 'Bootcamp for Javascript learning',
        website: 'bootcampjavascript.com',
        phone: '64575652',
        average_rating: 3,
        average_cost: 6540,
        user_id: 2
      },
      {
        name: 'CSS Bootcamp',
        description: 'Bootcamp for CSS learning',
        website: 'cssbootcamp.com',
        phone: '6465852',
        average_rating: 3,
        average_cost: 6540,
        user_id: 3
      },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};
