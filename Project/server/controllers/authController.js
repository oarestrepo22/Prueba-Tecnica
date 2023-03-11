const { response } = require('express');
const User = require('../models/User');

const createUser = async (req, res = response) => {
    //const { name, email, password } = req.body;

    const user = new User(req.body);
    await user.save();

    res.status(201).json({
        ok: true,
        msg: 'registro',
    });
};

module.exports = {
    createUser,
};
