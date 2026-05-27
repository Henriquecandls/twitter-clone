const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { authenticateTokenFromHeaders, requireAdmin } = require('../middleware/auth');

router.post('/:id/follow', authenticateTokenFromHeaders, usersController.follow);
router.delete('/:id/follow', authenticateTokenFromHeaders, usersController.unfollow);
router.get('/', authenticateTokenFromHeaders, requireAdmin, usersController.listUsers);
router.get('/:id', authenticateTokenFromHeaders, usersController.getUser);
router.put('/:id', authenticateTokenFromHeaders, usersController.updateUser);
router.delete('/:id', authenticateTokenFromHeaders, requireAdmin, usersController.deleteUser);

module.exports = router;
