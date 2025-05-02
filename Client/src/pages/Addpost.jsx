import React, { useRef, useState, useEffect } from "react";
import BlogTypeToggle from "../components/BlogTypeToggle";
import UserAvatar from "../components/UserAvatar";
import PostTextarea from "../components/PostTextarea";
import MediaActions from "../components/MediaActions";
import PostOptions from "../components/PostOptions";
import SubmitButton from "../components/SubmitButton";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddPost({ activeBlog, setActiveBlog }) {
	const location = useLocation();
	const navigate = useNavigate();
	const editState = location.state?.mode === "edit";
	const existing = editState ? location.state.post : null;

	const [privLvl, setPrivLvl] = useState("Public");
	const [extraInfo, setExtraInfo] = useState("privacy");
	const [submitLabel, setSubmitLabel] = useState(
		editState ? "Save Changes" : "Post"
	);
	const [imagePreview, setImagePreview] = useState(null);

	const submitBtn = useRef(null);
	const fileInputRef = useRef(null);
	const TextRef = useRef(null);
	const TitleRef = useRef(null);

	const user = useSelector((state) => state.auth.user);
	const token = useSelector((state) => state.auth.token);

	useEffect(() => {
		if (!user || !token) {
			navigate("/login");
		}
	}, [user, token, navigate]);

	useEffect(() => {
		if (existing) {
			setActiveBlog(existing.type === "ARTICLE" ? "Articles" : "Posts");
			if (TitleRef.current) TitleRef.current.value = existing.title;
			if (TextRef.current) TextRef.current.value = existing.body;
			if (existing.imageUrl) {
				setImagePreview(existing.imageUrl);
			}
		}
	}, [existing, setActiveBlog]);

	const handleImagePreview = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => setImagePreview(reader.result);
			reader.readAsDataURL(file);
		} else {
			setImagePreview(null);
		}
	};

	const handleSubmit = async () => {
		const body = TextRef.current.value.trim();
		if (!body) return alert("Please write something!");

		let imageUrl = null;
		const file = fileInputRef.current.files[0];
		if (file) {
			const form = new FormData();
			form.append("image", file);
			const res = await fetch(
				`https://api.imgbb.com/1/upload?key=b5fcb7575f6c4db45e48b7930d3a67ba`,
				{ method: "POST", body: form }
			);
			const data = await res.json();
			if (data.success) imageUrl = data.data.url;
		}

		const title =
			activeBlog === "Articles" ? TitleRef.current?.value.trim() || "" : "post";
		const type = activeBlog === "Articles" ? "ARTICLE" : "POST";

		const payload = { title, body, imageUrl, type };
		const method = editState ? "PUT" : "POST";
		const url = editState
			? `http://localhost:4000/posts/${existing.id}`
			: "http://localhost:4000/posts";

		try {
			const r = await fetch(url, {
				method,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(payload),
			});
			if (!r.ok) {
				const { error } = await r.json();
				throw new Error(error);
			}
			navigate("/");
		} catch (err) {
			console.error(err);
			alert(err.message);
		}
	};

	return (
		<div className="flex flex-col items-center relative top-10 gap-5">
			<div className="card bg-base-100 w-200 shadow-sm">
				<div className="card-body">
					<h2 className="card-title text-4xl mb-5">
						{editState ? "Edit" : "Create New"} {activeBlog}
					</h2>
					<BlogTypeToggle
						activeBlog={activeBlog}
						setActiveBlog={setActiveBlog}
					/>
					<div className="flex items-center gap-3 mb-5">
						<UserAvatar
							name={`${user.firstName} ${user.lastName}`}
							avatarUrl={user.photoUrl}
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
							<div className="divider mb-0" />
							<MediaActions fileInputRef={fileInputRef} />
							{imagePreview && (
								<div className="relative mt-4">
									<img
										src={imagePreview}
										alt="Preview"
										className="w-40 h-48 rounded-lg border"
									/>
									<button
										onClick={() => {
											setImagePreview(null);
											fileInputRef.current.value = "";
										}}
										className="absolute bottom-42 left-35 btn btn-circle btn-sm">
										X
									</button>
								</div>
							)}
						</>
					) : (
						<>
							<input
								type="text"
								ref={TitleRef}
								placeholder="Article Title"
								className="input input-xl w-full rounded-2xl font-bold"
							/>
							<PostTextarea
								TextRef={TextRef}
								placeholderText="Write your Article Content Here..."
								activeBlog={activeBlog}
							/>
						</>
					)}

					<input
						type="file"
						accept="image/*"
						ref={fileInputRef}
						className="hidden"
						onChange={handleImagePreview}
					/>
				</div>
			</div>

			<PostOptions submitBtn={submitBtn} setSubmitLabel={setSubmitLabel} />
			<SubmitButton
				ref={submitBtn}
				label={submitLabel}
				onClick={handleSubmit}
			/>
		</div>
	);
}
