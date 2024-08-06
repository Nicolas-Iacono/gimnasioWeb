const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class User extends Model {}

User.init({
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  freezeTableName: true,
  createdAt: false,
  updatedAt: false,
  tableName: 'user',
});

// Add a hook to insert initial values after the model is synced
User.addHook('afterSync', async () => {
  try {
    const count = await User.count();
    if (count === 0) {
      await User.bulkCreate([
        {
          id_usuario: 1,
          username: 'nicolas',
          lastname: 'iacono',
          email: 'nicolas@gmail.com',
          age: 30,
          weight: 93,
          height: 170,
        },
        {
          id_usuario: 2,
          username: 'marcos',
          lastname: 'perez',
          email: 'marcos@gmail.com',
          age: 20,
          weight: 78,
          height: 180,
        }
      ]);
    }
  } catch (error) {
    console.error('Error al insertar los valores iniciales:', error);
  }
});

module.exports = User;
