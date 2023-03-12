const { response } = require('express');
const User = require('../models/User');
const ToDo = require('../models/ToDo');

const createUser = async (req, res = response) => {
    const { email } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe',
            });
        }

        user = new User(req.body);

        await user.save();

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        });
    }
};

const createToDo = async (req, res = response) => {
    //const { title, description, dueDate, state } = req.body;
    const { uid } = req.params;

    try {
        // Buscar al usuario que creó la tarea
        const user = await User.findById(uid);
        console.log(uid);
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

module.exports = {
    createUser,
    createToDo,
};
