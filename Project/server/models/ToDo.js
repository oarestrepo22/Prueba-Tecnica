const { Schema, model } = require('mongoose');

const ToDoSchema = Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    dueDate: {
        type: Date,
    },
    state: {
        type: String,
    },
});

module.exports = model('ToDo', ToDoSchema);
