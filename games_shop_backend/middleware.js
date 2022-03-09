/* eslint-disable import/extensions */
import jwt from 'jsonwebtoken';
import { app } from './utility/conf.js';
import responseModels from './utility/responseModels.js';

// export const checkAuthorization = (req, res, next) => {
//   if (req.headers.authorization) {
//     next();
//     return;
//   }
//   res.status(responseModels.UNAUTHORIZED.code).json(responseModels.UNAUTHORIZED);
// };

// export const tokenIsValid = (req, res, next) => {
//   const token = req.headers?.authorization ?? undefined;

//   try {
//     jwt.verify(token, process.env.SECRET_KEY);
//     if (token) {
//       next();
//       return;
//     }
//   } catch (err) {
//     res.status(401).json('Invalid Token');
//   }
// };

const MiddleWare = (cors) => {
  app.use(cors({
    'allowedHeaders': ['*'],
    'exposedHeaders': [],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
};

export default MiddleWare;