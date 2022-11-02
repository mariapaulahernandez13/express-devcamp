'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('courses', [{
      title: 'PHP Bootcamp',
      description: 'Bootcamp for PHP learning',
      weeks: 3,
      enroll_cost: 3,
      minimum_skill: 'Avanzado',
      bootcamp_id: 1
    },
    {
      title: 'Express Backend',
      description: 'Bootcamp for Javascript learning',
      weeks: 4,
      enroll_cost: 3,
      minimum_skill: 'Principiante',
      bootcamp_id: 2
    },
    {
      title: 'CSS Bootcamp',
      description: 'Bootcamp for CSS learning',
      weeks: 5,
      enroll_cost: 3,
      minimum_skill: 'Avanzado',
      bootcamp_id: 3
    },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
