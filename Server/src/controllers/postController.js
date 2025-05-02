const prisma = require("../db/prisma");

async function createPost(req, res, next) {
	try {
		const { title, body, imageUrl, type } = req.body;
		const post = await prisma.post.create({
			data: { userId: req.userId, title, body, imageUrl, type },
		});

		res.status(201).json(post);
	} catch (err) {
		next(err);
	}
}
async function getPosts(req, res, next) {
	try {
		const posts = await prisma.post.findMany({
			include: {
				user: {
					select: { id: true, firstName: true, lastName: true, PhotoUrl: true },
				},
			},
			orderBy: { createdAt: "desc" },
		});
		res.json(posts);
	} catch (err) {
		next(err);
	}
}

async function getPostById(req, res, next) {
	try {
		const post = await prisma.post.findUnique({
			where: { id: parseInt(req.params.id, 10) },
			include: {
				user: { select: { firstName: true, lastName: true, PhotoUrl: true } },
			},
		});
		if (!post) return res.status(404).json({ error: "Post not found" });
		res.json(post);
	} catch (err) {
		next(err);
	}
}

async function updatePost(req, res, next) {
	try {
		const { id } = req.params;
		const { title, body, imageUrl, type } = req.body;
		const post = await prisma.post.update({
			where: { id: Number(id) },
			data: { title, body, imageUrl, type },
		});
		res.json(post);
	} catch (err) {
		next(err);
	}
}

async function deletePost(req, res, next) {
	try {
		const postId = Number(req.params.id);
		await prisma.post.delete({
			where: { id: postId },
		});
		res.status(204).end();
	} catch (err) {
		next(err);
	}
}

module.exports = {
	createPost,
	getPosts,
	getPostById,
	updatePost,
	deletePost,
};
