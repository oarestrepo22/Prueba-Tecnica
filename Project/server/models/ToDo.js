const { Schema, model } = require('mongoose');

const ToDoSchema = Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    priority: {
        type: String,
        enum: ['baja', 'media', 'alta'],
        default: 'baja',
    },
    dueDate: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

module.exports = model('ToDo', ToDoSchema);
