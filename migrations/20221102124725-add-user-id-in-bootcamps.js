'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Crear la columna que se llame user_id FK con users 
    // addColumn: Parámatros:
    // 1. La tabla en la cual poner la nueva columna
    // 2. El nombre de la nueva columna
    // 3. Opciones de la neuva columna
    await queryInterface.addColumn('bootcamps', 'user_id', { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' }, onUpdate:'CASCADE', onDelete:'SET NULL' })
  },

  async down (queryInterface, Sequelize) {
    // Método removeColumn
    // Parámetros:
    // 1. La tabla donde vas a remover
    // 2. La  columna a eliminar
    await queryInterface.removeColumn('bootcamps', 'user_id')
  }
};
