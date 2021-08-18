const { getUsers, createUser, deleteUser, updateUser } = require('../controllers/users');

const router = require('express').Router();

router.get('/', getUsers);
router.get('/:id', getUsers);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

module.exports = router;
