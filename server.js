const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const PORT = process.env.PORT || 3030;
const app = express();
const mongoose = require('mongoose');
const passport = require("./passport/setup");
const auth = require("./routes/auth");
//add route to login page - ask Chris?
const MONGO_URI = "mongodb://localhost:27017";

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, "mongodb://localhost:27017/HabitTracker", {
    useNewUrlParser: true
})
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err => console.log(err));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Express Session
app.use(
    session({
        secret: "Secret password!",
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", auth);
app.get("/", (req, res) => res.send("Hello!"));

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
