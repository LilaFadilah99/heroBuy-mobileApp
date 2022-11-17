"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: "CategoryId" });
      Product.hasMany(models.Image, { foreignKey: "ProductId" });
      Product.hasMany(models.ShoppingBag, { foreignKey: "ProductId" });
      Product.hasMany(models.Favorite, { foreignKey: "ProductId" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            args: true,
            msg: "name cannot be null",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            args: true,
            msg: "slug cannot be null",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            args: true,
            msg: "description cannot be null",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            args: true,
            msg: "price cannot be null",
          },
        },
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            args: true,
            msg: "main image cannot be null",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            args: true,
            msg: "CategoryId cannot be null",
          },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            args: true,
            msg: "UserId cannot be null",
          },
        },
      },
      userMongoId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            args: true,
            msg: "userMongoId cannot be null",
          },
        },
      },
    },

    {
      hooks: {
        beforeCreate(product) {
          product.slug = product.slug.replaceAll(" ", "-");
          // console.log(slug);
        },
      },
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
