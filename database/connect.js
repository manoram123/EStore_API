const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EStore_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
