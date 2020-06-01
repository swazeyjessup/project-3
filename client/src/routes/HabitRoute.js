const Habit = require("./Habit");

function SavedHabits(app) {

app.get('/api/SavedHabits', function(request, response) {
Habit.find({})
    .then(function(data) {
    response.json(data);
    });
});

app.put('/api/updateScore/:id', function(request,respons){
//Habit.update()
console.log(`
put route /api/

req.body :${req.body}
req.params: ${req.params.id}
`)

res.json({answer: 'Hello'})
})

}

module.exports = SavedHabits;