const express = require("express");
const { port } = require("./config/index");
const cors = require("cors");
require("./db/mongo");

const app = express();

app.use(express.json());
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin) return callback(null, true);
			if (allowedOrigins.includes(origin)) {
				return callback(null, true);
			}
			callback(new Error("Not allowed by CORS"));
		},
		credentials: true,
	})
);
app.use("/auth", require("./routes/authRoutes"));
const authRouter = require("./routes/authRoutes");
const postRouter = require("./routes/postRoutes");
app.use("/users", require("./routes/userRoutes"));
app.use("/auth", authRouter);
app.use("/posts", postRouter);

app.get("/", (req, res) => {
	res.json({ status: "ok", timestamp: Date.now() });
});

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ error: "Something went wrong." });
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
