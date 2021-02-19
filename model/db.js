const mongoose = require('mongoose');
let dbconn = 'mongodb://localhost:27017/hotelReservation';

mongoose.connect(dbconn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});


const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

//require model classes