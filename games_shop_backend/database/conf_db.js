import { Sequelize } from 'sequelize';

const db = new Sequelize('orsfgzzi', 'orsfgzzi', 'vHH9EpDXDJm89_YG_r1-n8krFQFak5Sx', {
  host: 'tyke.db.elephantsql.com',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
