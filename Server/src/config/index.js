const process = require("dotenv").config();
console.log(process.parsed.DATABASE_URL)
module.exports = {
	port: process.parsed.PORT,
	mongoUri: process.parsed.MONGODB_URI,
	databaseUrl: process.parsed.DATABASE_URL,
	jwtSecret: process.parsed.JWT_SECRET,
};
