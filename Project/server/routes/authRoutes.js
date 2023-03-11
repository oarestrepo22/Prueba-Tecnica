/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidate } = require('../middlewares/fieldValidate');
const {
    createUser,
    loginUser,
    //revalidarToken,
} = require('../controllers/authController');
//const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post(
    '/new',
    [
        // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({
            min: 3,
        }),
        fieldValidate,
    ],
    createUser
);

router.get('/');

module.exports = router;
