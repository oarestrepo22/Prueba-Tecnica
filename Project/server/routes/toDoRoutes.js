const { Router } = require('express');
const { check } = require('express-validator');
const { fieldValidate } = require('../middlewares/fieldValidate');
const {
    createToDo,
    getToDosByUserId,
    updateToDo,
    deleteToDoById,
} = require('../controllers/toDoController');
const router = Router();

router.post(
    '/:uid/todos',
    [check('title', 'El titulo es obligatorio').not().isEmpty(), fieldValidate],
    createToDo
);

router.get('/:uid/todos', getToDosByUserId);

router.put(
    '/todos/:id',
    [check('title', 'El titulo es obligatorio').not().isEmpty(), fieldValidate],
    updateToDo
);

router.delete( '/todos/:id', deleteToDoById);

module.exports = router;
