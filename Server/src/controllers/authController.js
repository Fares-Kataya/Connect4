const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const prisma = require("../db/prisma");
const { jwtSecret } = require("../config");

async function register(req, res, next) {
	try {
		const {
			username,
			email,
			password,
			firstName,
			lastName,
			birthDate,
			gender,
        } = req.body;
		const hash = await bcrypt.hash(password, 10);
		const user = await prisma.user.create({
			data: {
				username,
				email,
				passwordHash: hash,
				firstName,
				lastName,
				birthDate: new Date(birthDate),
				gender,
			},
		});
		res.status(201).json({
			id: user.id,
			username: user.username,
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			birthDate: user.birthDate,
			gender: user.gender,
		});
	} catch (err) {
		if (err.code === "P2002") {
			return res
				.status(409)
				.json({ error: "Username or email already exists" });
		}
		next(err);
	}
}

async function login(req, res, next) {
	try {
        const { login, password } = req.body;
        let user = await prisma.user.findUnique({ where: { email: login } });
        if (!user) {
					user = await prisma.user.findUnique({ where: { username: login } });
        }
		if (!user) return res.status(401).json({ error: "Invalid credentials" });

		const valid = await bcrypt.compare(password, user.passwordHash);
		if (!valid) return res.status(401).json({ error: "Invalid credentials" });

		const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: "1h" });
		res.json({ token });
	} catch (err) {
		next(err);
	}
}
module.exports = { register, login };