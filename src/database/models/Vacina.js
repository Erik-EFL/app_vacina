const {sequelize, DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Vacina = sequelize.define("Vacina",
    {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vaccineName: DataTypes.STRING,
      userId: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      info: DataTypes.STRING,
      dose: DataTypes.INTEGER,
    },
    {
      tableName: 'Vacinas',
      timestamps: false,
    }
  )
  Vacina.associate = (models) => {
    Vacina.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  }
  return Vacina
}
