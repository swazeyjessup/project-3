import React from 'react';
const Habit = require('../../models/Habit');

function savedH(app) {

    app.get('/api/HabitItem', function(request, response) {
    Habit.find({})
        .then(function(data) {
        response.json(data);
        });
    });

    console.log('SavedH used')
    }
    
    module.exports = savedH;