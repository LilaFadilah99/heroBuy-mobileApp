"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.Product, { foreignKey: "ProductId" });
    }
  }
  Favorite.init(
    {
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
      ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            args: true,
            msg: "ProductId cannot be null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
