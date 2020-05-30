const express = require("express");
const PORT = process.env.PORT || 3030;
const app = express();
const mongoose = require('mongoose');
const Habit = require('./client/src/models/Habit');
// const passport = require("./client/src/passport/setup");
// const auth = require("./client/src/routes/auth");
// const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/HabitTracker", {
    useNewUrlParser: true
})
    .then(console.log(`MongoDB connected`))
    .catch(err => console.log(err));



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/HabitTracker", {
    useNewUrlParser: true
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// // Express Session
// app.use(
//     session({
//         secret: "Secret password!",
//         resave: false,
//         saveUninitialized: true,
//         store: new MongoStore({ mongooseConnection: mongoose.connection })
//     })
// );

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Routes
// app.use("/api/auth", auth);
// app.get("/", (req, res) => res.send("Hello!"));

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

app.post("*", (request, response) => {
    const HabitData = request.body;
    console.log(HabitData)
    Habit.create(HabitData)
        .then(function () {
            response.status(200).end();
        })
        .catch(function (error) {
            response.status(404).send(error.message);
        });
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
