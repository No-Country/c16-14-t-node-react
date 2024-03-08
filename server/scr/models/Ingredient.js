const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Ingredient', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
  })
}