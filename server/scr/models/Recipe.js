const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    
  })
}