/* eslint-disable import/extensions */
import responseModels from './responseModels.js';

export const hasRequiredParams = (requiredParams, req, res) => {
  const errors = [];
  requiredParams.forEach((param) => {
    if (!req.query[param]) {
      errors.push(`${param} cannot be empty`);
    }
  });

  if (errors.length > 0) {
    res.status(responseModels.BAD_REQUEST.code)
      .json({ ...responseModels.BAD_REQUEST, errors: errors.toString() });
    return false;
  }

  return true;
};

export const reqHasBodyParameters = (requiredParams, req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(responseModels.BAD_REQUEST.code)
      .json({ ...responseModels.BAD_REQUEST, error: 'Body cannot be empty' });
    return false;
  }
  if (req.body.constructor !== Object) {
    res.status(responseModels.BAD_REQUEST.code)
      .json({ ...responseModels.BAD_REQUEST, error: 'Body should be a JSON' });
    return false;
  }

  const errors = [];
  requiredParams.forEach((param) => {
    if (!req.body[param]) {
      errors.push(`${param} cannot be empty`);
    }
  });

  if (errors.length > 0) {
    res.status(responseModels.BAD_REQUEST.code)
      .json({ ...responseModels.BAD_REQUEST, errors: errors.toString() });
    return false;
  }

  return true;
};

export const sendInternalServerError = (err, res) => {
  console.log(err);
  res.status(responseModels.INTERNAL_ERROR.code).json(responseModels.INTERNAL_ERROR);
};
