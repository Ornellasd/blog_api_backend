import { v4 as uuidv4 } from 'uuid';
import User from '../models/user';

exports.index = (req, res) => {
  User.find({}, (err, users) => {
    if(err) {
      return err;
    } else {
      return res.send(users);
    }
  });
}