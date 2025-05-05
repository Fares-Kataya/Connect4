const express = require("express");
const prisma = require("../db/prisma");
const { authenticate } = require("../middlewares/auth");
const router = express.Router();

router.get("/", authenticate, async (req, res, next) => {
	try {
		const all = await prisma.user.findMany({
			select: {
				id: true,
				firstName: true,
				lastName: true,
				username: true,
				PhotoUrl: true,
			},
		});
		const others = all.filter((u) => u.id !== req.userId);
		res.json(others);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
