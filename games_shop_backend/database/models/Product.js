import Sequelize from 'sequelize';
import db from '../conf_db.js';

const Product = db.define('products', {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageurl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  category: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  tags: {
    type: Sequelize.STRING,
    allowNull: true,
  }
},
  {
    timestamps: false,
    freezeTableName: true,
  });

export default Product;
