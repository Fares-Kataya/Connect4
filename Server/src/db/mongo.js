const { mongoUri } = require("../config/index");
const mongoose = require("mongoose");
console.log(mongoUri)
mongoose
	.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("MongoDB error:", err));

module.exports = mongoose;