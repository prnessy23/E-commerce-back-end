const { Model, DataTypes } = require('sequelize');
const { DatabaseError } = require('../config/connection.js');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {// defining id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // defining tag column name
    tag_name: {
      type: DataTypes.STRING 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
