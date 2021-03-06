const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rustam:123656031@cluster0.2gbh0.mongodb.net/Shopping', (err) => {
    if(!err)
        console.log('MongoDB connection succeeded...');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
