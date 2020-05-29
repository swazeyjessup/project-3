var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HabitSchema = new Schema({
    text: String,
    done: String,
});

const Habit = mongoose.model('habit', HabitSchema);
module.exports = Habit;