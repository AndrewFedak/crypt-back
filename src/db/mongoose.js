const mongoose = require("mongoose");
const mongodbUrl = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017';

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});