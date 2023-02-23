const {sequelize, DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      street: DataTypes.STRING,
      houseNumber: DataTypes.INTEGER,
      zipCode: DataTypes.INTEGER,
    },
    {
      tableName: 'Users',
      timestamps: false,
    }
  );
  User.associate = (models) => {
    User.hasMany(models.Vacina, {
      foreignKey: 'userId',
      as: 'vacinas'
    })
  }
  return User
}
