var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
    text: String,
    done: String,
});

const Habit = mongoose.model('habit', ToDoSchema);
module.exports = Habit;