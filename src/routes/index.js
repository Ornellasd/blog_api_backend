import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import user_controller from '../controllers/userController';
import message_controller from '../controllers/messageController';

const router = express.Router();

//router.get('/', user_controller.index);

router.get('/messages', message_controller.messages_get);
router.post('/messages', message_controller.messages_post);


/*
router.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});
 
router.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
 
router.put('/users', (req, res) => {
  return res.send('PUT HTTP method on user resource');
});
 
router.delete('/users', (req, res) => {
  return res.send('DELETE HTTP method on user resource');
});
*/

module.exports = router;