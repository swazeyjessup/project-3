const Habit = require("./Habit");

function SavedHabits(app) {

app.get('/api/SavedHabits', function(request, response) {
Habit.find({})
    .then(function(data) {
    response.json(data);
    });
});

}

module.exports = SavedHabits;