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
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },
    // Agregar un campo para la referencia al usuario que creó la tarea
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = model('ToDo', ToDoSchema);
