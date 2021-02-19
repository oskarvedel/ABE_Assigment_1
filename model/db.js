const mongoose = require('mongoose');
let dbconn = 'mongodb://localhost:27017/hotelReservation';

mongoose.connect(dbconn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});