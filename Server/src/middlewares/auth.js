const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

function authenticate(req, res, next) {
	const auth = req.headers.authorization;
	if (!auth)
		return res.status(401).json({ error: "Missing Authorization header" });
	const token = auth.split(" ")[1];
	try {
		const payload = jwt.verify(token, jwtSecret);
		req.userId = payload.userId;
		next();
	} catch {
		return res.status(401).json({ error: "Invalid or expired token" });
	}
}

module.exports = { authenticate };
