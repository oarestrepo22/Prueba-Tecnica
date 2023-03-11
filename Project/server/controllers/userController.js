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

module.exports = {
    createUser,
};
