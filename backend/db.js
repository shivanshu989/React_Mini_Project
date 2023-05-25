const mongoose = require('mongoose');
connectMongo = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/health-edit")
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.log(err);
})}

module.exports = connectMongo;