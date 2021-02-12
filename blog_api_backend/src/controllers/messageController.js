import { v4 as uuidv4 } from 'uuid';
import Messages from '../models/message';

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};


exports.index = (req, res) => {
  Message.find({}, (err, messages) => {
    if(err) {
      return err;
    } else {
      return res.send(messages);
    }
  });
}



exports.messages_get = (req, res) => {
  return res.send(Object.values(messages));
}

exports.messages_post = (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
  };
 
  messages[id] = message;
 
  return res.send(message);
}
