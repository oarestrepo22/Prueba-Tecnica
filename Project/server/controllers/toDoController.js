const { response } = require('express');
const User = require('../models/User');
const ToDo = require('../models/ToDo');

const createToDo = async (req, res = response) => {
    //uid -> userId
    const { uid } = req.params;

    try {
        const user = await User.findById(uid);
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe',
            });
        }

        const toDo = new ToDo(req.body, (req.body.createdBy = uid));

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
        const { uid } = req.params;
        const tasks = await ToDo.find({ createdBy: uid });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ msg: 'Hubo un error al encontrar la lista' });
    }
};

const updateToDo = async (req, res) => {
    const { id } = req.params;
    const { title, description, priority, active } = req.body;

    try {
        const toDo = await ToDo.findByIdAndUpdate(
            id,
            { title, description, priority, active },
            { new: true }
        );
        res.json(toDo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error al actualizar la tarea' });
    }
};

const deleteToDoById = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    try {
        const todo = await ToDo.findOneAndDelete({
            _id: id,
        });

        if (!todo) {
            return res.status(404).json({
                ok: false,
                msg: 'La tarea no existe o no pertenece al usuario',
            });
        }

        res.json({
            ok: true,
            msg: 'Tarea eliminada correctamente',
            todo,
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
    createToDo,
    getToDosByUserId,
    updateToDo,
    deleteToDoById,
};
