"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const dateNow = new Date();
    await queryInterface.bulkInsert("Categories", [
      {
        id: 1,
        name: "wanita",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        id: 2,
        name: "pria",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        id: 3,
        name: "anak-anak",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        id: 4,
        name: "bayi",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
