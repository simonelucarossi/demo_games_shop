/* eslint-disable import/extensions */
import bodyParser from 'body-parser';
import cors from 'cors';
import { app, startServer } from './utility/conf.js';
import Router from './router.js';
import db from './database/conf_db.js';
import MiddleWare from './middleware.js';

db.authenticate().then(() => console.log('db connected')).catch((err) => console.log(err));

// parse application/json
app.use(bodyParser.json());
MiddleWare(cors);
Router();

startServer();