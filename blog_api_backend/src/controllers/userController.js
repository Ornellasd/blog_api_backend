import User from '../models/user';

exports.index = (req, res) => {
  User.find({}, (err, users) => {
    if(err) {
      return err;
    } else {
      console.log(users);
    }
  });
}