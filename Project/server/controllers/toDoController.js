const { response } = require('express');
const User = require('../models/User');
const ToDo = require('../models/ToDo');

const createToDo = async (req, res = response) => {
    const { uid } = req.params;

    try {
        // Buscar al usuario que creó la tarea
        const user = await User.findById(uid);
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe',
            });
        }

        // Crear la tarea con la referencia al usuario que la creó
        const toDo = new ToDo(req.body);

        await toDo.save();

        res.status(201).json({
            ok: true,
            toDo,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }
};

const getToDosByUserId = async (req, res = response) => {
    try {
        const userId = req.params.userId;
        const tasks = await ToDo.find({ userId: userId });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    createToDo,
    getToDosByUserId,
};
