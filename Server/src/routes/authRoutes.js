const express = require("express");
const { register, login } = require("../controllers/authController");
const { validateBody } = require("../middlewares/validate");
const { registerSchema, loginSchema } = require("../utils/schemas");
const prisma = require("../db/prisma");
const { authenticate } = require("../middlewares/auth");
const router = express.Router();

router.post("/register", validateBody(registerSchema), register);
router.post("/login", validateBody(loginSchema), login);
// router.post("/posts", authenticate, createPost);
router.get("/me", authenticate, async (req, res, next) => {
	try {
		const user = await prisma.user.findUnique({
			where: { id: req.userId },
			select: {
				id: true,
				username: true,
				email: true,
				firstName: true,
				lastName: true,
				avatarUrl: true,
				birthDate: true,
				gender: true,
			},
		});
		res.json({ user });
	} catch (err) {
		next(err);
	}
});
module.exports = router;
