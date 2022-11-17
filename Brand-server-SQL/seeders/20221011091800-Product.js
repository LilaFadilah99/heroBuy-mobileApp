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

    const slugName = (slug) => {
      let replace = slug.replaceAll(" ", "-");
      return replace;
    };
    await queryInterface.bulkInsert("Products", [
      {
        name: "Shimmering Metallic Muless",
        slug: slugName("Shimmering Metallic Muless"),
        description: "Shimmering metallic mules with padded, crossover foot straps that have quilted seams. Square, open toes and covered heels. Heel 8 cm.",
        price: 564888,
        mainImg: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/73c76025a861e376c68a5f4a2c4f51d4801536b5_xxl-1.jpg",
        CategoryId: 1,
        UserId: 1,
        userMongoId: "635b6c0c01f93591336751a7",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        name: "Sandals",
        slug: slugName("Sandals"),
        description: "Sandals in imitation leather with covered block heels and square toes. Narrow foot straps and a narrow, elasticated heel strap. Imitation leather insoles. Heel 5 cm.",
        price: 543000,
        mainImg: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/d683cc3ba669a2c811a8f53b3a8fddd59381d23c_xxl-1.jpg",
        CategoryId: 1,
        UserId: 1,
        userMongoId: "635b6c0c01f93591336751a7",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        name: "Terry Bucket Hat",
        slug: slugName("Terry Bucket Hat"),
        description: "Smiley® x H&M. Bucket hat in soft, tie-dye terry with an embroidered motif on the front. Embroidered eyelets at each side, a cotton sweatband and a wide brim.",
        price: 362800,
        mainImg: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/2cdd9063f2d8533219f8478241a9b5e51bdf19da_xxl-1.jpg",
        CategoryId: 2,
        UserId: 2,
        userMongoId: "635b6c0c01f93591336751a8",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        name: "Tulle-skirt Dress",
        slug: slugName("Tulle-skirt Dress"),
        description: "Short-sleeved dress in textured jersey with a small opening and button at the back of the neck, a glittery elastic waistband and a lined, voluminous skirt in multiple layers of shiny tulle.",
        price: 349800,
        mainImg: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/42ade7a25d7d528399e9b0957c5a3717e50e2e8b_xxl-1.jpg",
        CategoryId: 3,
        UserId: 2,
        userMongoId: "635b6c0c01f93591336751a8",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        name: "Baby Formal Set",
        slug: slugName("Baby Formal Set"),
        description:
          "ADJUSTABLE WAIST Set yang terdiri atas kemeja dari katun tenun dengan dasi kupu-kupu, rompi dan celana pendek dari linen dan katun tenun. Rompi berfuring dengan kancing di bagian depan. Celana pendek ukuran selutut dengan pinggang elastis yang bisa disesuaikan, ritsleting dan kancing imitasi, serta saku samping diagonal imitasi. ",
        price: 599900,
        mainImg: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/5c56513d0d3d63e4e54c7f5733c1d597a307631d_xxl-1.jpg",
        CategoryId: 4,
        UserId: 2,
        userMongoId: "635b6c0c01f93591336751a8",
        createdAt: dateNow,
        updatedAt: dateNow,
      },
      {
        name: "Gaun Rok Tule",
        slug: slugName("Gaun Rok Tule"),
        description: "Gaun dari jersey berkerut dengan rok kembang dengan beberapa lapis tulle. Tali bahu tipis dengan pita dekoratif di bagian atas dan jahitan dengan karet berkilauan di bagian pinggang. Rok berfuring.",
        price: 349900,
        mainImg: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/1443b101281aadbe5c195ee2b38ec902130cca8e_xxl-1.jpg",
        CategoryId: 3,
        UserId: 2,
        userMongoId: "635b6c0c01f93591336751a8",
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
    await queryInterface.bulkDelete("Products", null, {});
  },
};
