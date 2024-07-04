const ToDoModel = require('../models/ToDoModel');

module.exports.getTodo= async (req, res) => {
    const todo = await ToDoModel.find()
    res.send(todo)}


module.exports.saveTodo = async (req, res) => {
    const {text} = req.body;
    
    ToDoModel.create({text})
    .then((data) => {
        console.log('Todo added successfully');
        console.log(data);
        res.send(data);
    })}

module.exports.deleteTodo = async (req, res) => {
    const {_id} = req.body;

    ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Todo deleted successfully"))
    .catch((err) => console.log(err))
    }