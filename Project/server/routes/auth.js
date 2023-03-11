/* 
Rutas  de Usuarios / Auth
host + /api/auth
 */

const { Router } = require('express');
const router = Router();

const { createUser } = require('../controllers/authController');

router.post('/', createUser);

module.exports = router;
