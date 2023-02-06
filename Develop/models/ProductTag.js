const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {// defining id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // defining product id column
    product_id: {
      type: DataTypes.INTEGER,
      // product model's id's
      references:{
        model: 'product',
        key: 'id'
      }
    },
    // defining tag id column
    tag_id: {
      type: DataTypes.INTEGER,
      // tag model's id's
      references: {
        model: 'tag',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
