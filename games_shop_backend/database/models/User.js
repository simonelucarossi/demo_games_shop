import Sequelize from 'sequelize';
import db from '../conf_db.js';

const User = db.define('users', {
  username: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  fullname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
},
  {
    timestamps: false,
    freezeTableName: true,
  });

export default User;