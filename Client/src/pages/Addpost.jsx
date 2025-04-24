import React, { useRef, useState } from "react";
import BlogTypeToggle from "../components/BlogTypeToggle";
import UserAvatar from "../components/UserAvatar";
import PostTextarea from "../components/PostTextarea";
import MediaActions from "../components/MediaActions";
import PostOptions from "../components/PostOptions";
import SubmitButton from "../components/SubmitButton";

export default function AddPost({ activeBlog, setActiveBlog }) {
	const [privLvl, setPrivLvl] = useState("Public");
	const [extraInfo, setExtraInfo] = useState("privacy");
	const [submitLabel, setSubmitLabel] = useState("Post");
	const submitBtn = useRef(null);
	const fileInputRef = useRef(null);
	const TextRef = useRef(null);
	const avatarUrl =
		"https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // update as needed
	const userName = "Fares Kataya";

	return (
		<div className="flex flex-col items-center relative top-10 gap-5">
			<div className="card bg-base-100 w-200 shadow-sm">
				<div className="card-body">
					<h2 className="card-title text-4xl mb-5">Create New {activeBlog}</h2>
					<BlogTypeToggle
						activeBlog={activeBlog}
						setActiveBlog={setActiveBlog}
					/>
					<div className="flex items-center gap-3 mb-5">
						<UserAvatar
							name={userName}
							avatarUrl={avatarUrl}
							extraInfo={extraInfo}
							privLvl={privLvl}
							setPrivLvl={setPrivLvl}
						/>
					</div>
					{activeBlog === "Posts" ? (
						<>
							<PostTextarea
								TextRef={TextRef}
								placeholderText="What's on your mind?"
							/>
							<div className="divider mb-0"></div>
							<MediaActions fileInputRef={fileInputRef} />{" "}
						</>
					) : (
						<>
							<input
								type="text"
								placeholder="Article Title"
								className="input input-xl w-full rounded-2xl font-bold"
							/>
								<PostTextarea
									activeBlog={activeBlog}
									TextRef={TextRef}
								placeholderText="Write your Article Content Here..."
							/>
						</>
					)}
				</div>
			</div>
			<PostOptions submitBtn={submitBtn} setSubmitLabel={setSubmitLabel} />
			<SubmitButton ref={submitBtn} label={submitLabel} />
		</div>
	);
}