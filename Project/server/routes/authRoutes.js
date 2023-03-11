/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidate } = require('../middlewares/fieldValidate');
const { createUser, createToDo } = require('../controllers/authController');

const router = Router();

router.get('/');

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

router.post('/:uid/todos', createToDo);

module.exports = router;
