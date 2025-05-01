const router = require("express").Router();
const { authenticate } = require("../middlewares/auth");
const { validateBody } = require("../middlewares/validate");
const { postSchema, postUpdateSchema } = require("../utils/schemas");
const {
	createPost,
	getPosts,
	getPostById,
	updatePost,
	deletePost,
} = require("../controllers/postController");

router.post("/", authenticate, validateBody(postSchema), createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.put("/:id", authenticate, validateBody(postUpdateSchema), updatePost);
router.delete("/:id", authenticate, deletePost);

module.exports = router;
