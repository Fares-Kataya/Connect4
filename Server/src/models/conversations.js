const mongoose = require("mongoose");
const { Schema } = mongoose;

const LastMessageSchema = new Schema({
	sender_id: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	content: {
		type: String,
		required: true,
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
});

const ConversationSchema = new Schema(
	{
		participants: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				required: true,
			},
		],
		created_at: {
			type: Date,
			default: Date.now,
		},
		updated_at: {
			type: Date,
			default: Date.now,
		},
		last_message: {
			type: LastMessageSchema,
			default: null,
		},
		metadata: {
			name: {
				type: String,
				default: "",
			},
			is_group: {
				type: Boolean,
				default: false,
			},
		},
	},
	{
		timestamps: false,
	}
);

module.exports = mongoose.model("Conversation", ConversationSchema);
