const {sequelize, DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Vacina = sequelize.define(
    "Vacina",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      info: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dose: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      tableName: 'vacina',
      underscored: true,
      timestampes: false,
    }
  )
  Vacina.associate = function(models){
    Vacina.belongsTo(models.User,{
      as: 'User',
      foreignKey: 'userId'
    })
  }
  return Vacina
}
