const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReactionSchema = new Schema({
	user_id: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	reaction: {
		type: String,
		required: true,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

const MessageSchema = new Schema(
	{
		conversation_id: {
			type: Schema.Types.ObjectId,
			ref: "Conversation",
			required: true,
			index: true,
		},
		sender_id: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		content_type: {
			type: String,
			enum: ["text", "image", "video", "file"],
			default: "text",
		},
		sent_at: {
			type: Date,
			default: Date.now,
		},
		read_by: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
		reactions: [ReactionSchema],
	},
	{
		timestamps: false,
	}
);

module.exports = mongoose.model("Message", MessageSchema);
