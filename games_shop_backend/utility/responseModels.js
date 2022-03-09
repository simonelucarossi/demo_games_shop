const responseModels = {
  OK: {
    code: 200,
    message: 'OK',
  },
  BAD_REQUEST: {
    code: 400,
    message: 'Bad request',
  },
  UNAUTHORIZED: {
    code: 401,
    message: 'User not authorized',
  },
  NOT_FOUND: {
    code: 404,
    message: 'User not found',
  },
  INTERNAL_ERROR: {
    code: 500,
    message: 'Internal Server Error',
  },
};

export default responseModels;
