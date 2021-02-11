import express from 'express';

import user_controller from '../controllers/userController';

const router = express.Router();

router.get('/', user_controller.index);

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


module.exports = router;