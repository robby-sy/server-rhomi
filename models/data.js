'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data.init({
    tegangan: DataTypes.REAL,
    arus: DataTypes.REAL,
    suhu: DataTypes.REAL,
    kelembapan: DataTypes.REAL,
    intensitas: DataTypes.REAL,
    daya: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'Data',
  });
  return Data;
};