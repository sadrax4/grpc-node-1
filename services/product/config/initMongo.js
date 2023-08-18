const { default: mongoose } = require("mongoose");
module.exports = mongoose.connect("mongodb://localhost:27017/gRPC-nodejs").then(console.log("connect too mongo db"));
