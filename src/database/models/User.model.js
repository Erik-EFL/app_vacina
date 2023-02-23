const {sequelize, DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Usuario",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,

      },
      email: {
        type: DataTypes.STRING,

      },
      password: {
        type: DataTypes.STRING,

      },
      logradouro: {
        type: DataTypes.STRING,

      },
      numberHome: {
        type: DataTypes.INTEGER,

      },
      cep: {
        type: DataTypes.INTEGER,

      }
    },
    {
      tableName: 'user',
      underscored: true,
      timestampes: false,
    }
  );
  User.associate = function(models){
    User.hasMany(models.Vacina,{
      as: 'Vacina',
      foreiignKey: 'userId'
    })
  }
  return User
}
