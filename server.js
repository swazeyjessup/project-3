var express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3030;
const app = express();
const mongoose = require('mongoose');

const Habit = require('./models/SaveToDo/');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/HabitTracker", { 
    useNewUrlParser: true 
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define any API routes before this runs
app.get("*", (request, response) => {
    Habit.find({})
    .then(function (data) {
    response.status(200).json(data);
    })
    .catch(function () {
    response.status(404).end("404!! Information BLACK HOLE!!");
    });
});

app.delete("*", (request, response) => {
const mongoID = request.params.id;
ToDo.remove({
    _id: mongoID,
})
.then((data) => {
    response.status(200).end();
})
.catch((error) => {
    response.status(404).send(error.message);
});
});

// app.post("*", (request, response) => {
// const bookData = request.body;
// console.log(bookData)
// SaveToDo.create(bookData)
// .then(function () {
//     response.status(200).end();
// })
// .catch(function (error) {
//     response.status(404).send(error.message);
// });
// });

app.listen(PORT, () => {
console.log(`🌎 ==> API server now on port ${PORT}!`);
});
