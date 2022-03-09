import bcrypt from 'bcrypt';
import User from '../../database/models/User.js';
import { reqHasBodyParameters, sendInternalServerError } from '../../utility/errorsManager.js';
import responseModels from '../../utility/responseModels.js';

// USER LOGIN

export const login = async (req, res) => {
  if (!reqHasBodyParameters(['user'], req, res)) {
    return;
  }

  const passedPassword = req.body?.user?.password;
  let findedPassword = '';


  await User.findAll(
    {
      where: { username: req.body?.user?.username },
      raw: true,
    },
  ).then((users) => {
    // check if user exists
    if (!users || users?.length === 0) { return res.status(responseModels.NOT_FOUND.code).json({ ...responseModels.NOT_FOUND }); }
    else {
      // check if the passed password is the same on the db
      findedPassword = users[0]?.password;
      bcrypt.compare(passedPassword, findedPassword, (err, data) => {
        if (data) {
          return res.status(responseModels.OK.code)
            .json(
              {
                ...responseModels.OK,
                user: {
                  fullname: users[0].fullname,
                  username: users[0].username,
                  type: users[0].type
                }
              }
            );
        } else {
          return res.status(responseModels.UNAUTHORIZED.code).json({ ...responseModels.UNAUTHORIZED, reason: 'Invalid Password!' });
        }
      });
    }
  }
  ).catch((err) => sendInternalServerError(err, res));

};