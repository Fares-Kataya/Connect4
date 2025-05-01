const express = require("express");
const { port } = require("./config/index");
const cors = require("cors");
// Load DB connections
require("./db/mongo");
// require("./db/prisma"); // “touches” Prisma client

const app = express();

// Built-in middleware to parse JSON bodies
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
app.use("/auth", authRouter);

// A simple health-check / root route
app.get("/", (req, res) => {
	res.json({ status: "ok", timestamp: Date.now() });
});

// TODO: Mount your future routers here:
// app.use('/auth', require('./routes/authRoutes'));
// app.use('/posts', require('./routes/postRoutes'));
// app.use('/comments', require('./routes/commentRoutes'));
// app.use('/likes', require('./routes/likeRoutes'));

// Global error handler (placeholder)
app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ error: "Something went wrong." });
});

// Start the server
app.listen(port, () => {
	console.log(`🚀 Server listening on port ${port}`);
});
