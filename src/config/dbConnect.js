import mongoose from "mongoose";

mongoose.connect('mongodb://root:example@localhost:27017/', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

export default db;