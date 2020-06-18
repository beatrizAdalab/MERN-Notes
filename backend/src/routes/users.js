const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/users.controller');


router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:id')
  //.get()
  //.put()
  .delete(deleteUser)




module.exports = router;