import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import PostCard from "../components/PostCard";
import Story from '../components/story'
import Login from '../pages/Login';
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Home({ dark, activeBlog, setActiveBlog }) {
	const navigate = useNavigate();
	const location = useLocation();
	const login = useSelector((state) => Boolean(state.auth.token));
	const token = useSelector((state) => state.auth.token);
	const [posts, setPosts] = useState([]);
	const [Loading, setLoading] = useState(false);
	const handleAdd = () => {
		navigate("/Add-Post");
	};
	const dialogRef = useRef(null);

const handleDelete = async (postId) => {
	try {
		await fetch(`http://localhost:4000/posts/${postId}`, {
			method: "DELETE",
			headers: { Authorization: `Bearer ${token}` },
		});
		const idx = posts.findIndex((p) => p.id === postId);
		if (idx !== -1) {
			posts.splice(idx, 1);
			setPosts([...posts]);
		}
	} catch (err) {
		console.error("Failed to delete post:", err);
		alert("Could not delete post.");
	}
};
	useEffect(() => {
		if (!login && dialogRef.current) {
		dialogRef.current.showModal();
		}
	}, [login]);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

useEffect(() => {
	if (location.pathname === "/") {
		setLoading(true);

		const fetchData = async () => {
			try {
				const [response] = await Promise.all([
					axios.get("http://localhost:4000/posts"),
					delay(2000),
				]);
				setPosts(response.data);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}
}, [location.pathname]);
	console.log(posts)
	return (
		<>
			{login ? (
				<div className="grid grid-cols-3 h-screen w-screen-100">
					<div className="mt-10">
						<Story></Story>
					</div>
					{Loading ? (
						<>
							<div className="skeleton h-65 flex justify-center items-center w-full bg-teal-50">
								<div className="flex w-11/12 flex-col gap-3 ">
									<div className="flex items-center gap-2">
										<div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
										<div className="flex flex-col gap-2">
											<div className="skeleton h-2 w-25"></div>
											<div className="skeleton h-2 w-28"></div>
											<div className="skeleton h-2 w-28"></div>
										</div>
									</div>
									<div className="flex flex-col gap-1 w-full">
										<div className="skeleton h-2"></div>
										<div className="skeleton h-2"></div>
									</div>
									<div className="skeleton h-32 w-full"></div>
								</div>
							</div>
						</>
					) : (
						<div className="mt-10">
							<div className="flex join justify-center">
								<button
									className={`w-1/2 rounded-l-2xl btn bg-teal-50 btn-active active:bg-teal-600  join-item ${
										activeBlog === "Posts"
											? "btn-active bg-teal-600 text-white"
											: "bg-teal-50 hover:bg-teal-200"
									}`}
									onClick={() => setActiveBlog("Posts")}>
									Posts
								</button>
								<button
									className={`w-1/2 rounded-r-2xl btn bg-teal-50 btn-active active:bg-teal-600  join-item ${
										activeBlog === "Articles"
											? "btn-active bg-teal-600 text-white"
											: "bg-teal-50 hover:bg-teal-200"
									}`}
									onClick={() => setActiveBlog("Articles")}>
									Articles
								</button>
							</div>
							<div className="divider divider-end">
								<button className="btn btn-xs text-xs font-bold bg-teal-50">
									Sort By{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="15"
										height="15"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-arrow-down-up-icon lucide-arrow-down-up ">
										<path d="m3 16 4 4 4-4" />
										<path d="M7 20V4" />
										<path d="m21 8-4-4-4 4" />
										<path d="M17 4v16" />
									</svg>
								</button>
							</div>
							{posts.length > 0 ? (
								<>
									{posts.map((p) => (
										<PostCard
											key={p.id}
											post={p}
											dark={dark}
											onDelete={() => handleDelete(p.id)}
										/>
									))}
									<button
										className="btn btn-circle fixed left-1/2 transform -translate-x-1/2 bottom-8 bg-teal-50 hover:bg-teal-100"
										onClick={handleAdd}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="lucide lucide-plus-icon lucide-plus">
											<path d="M5 12h14" />
											<path d="M12 5v14" />
										</svg>
									</button>
								</>
							) : (
								<div className="grid gap-5 justify-center text-2xl font-semibold">
									<p>There are no posts yet</p>
									<button
										className="btn bg-teal-50 hover:bg-teal-100"
										onClick={() => navigate("/Add-Post")}>
										Add post
									</button>
								</div>
							)}
						</div>
					)}

					<div></div>
				</div>
			) : (
				<>
					<dialog id="my_modal_1" className="modal" ref={dialogRef}>
						<div className="modal-box">
							<h3 className="font-bold text-2xl">
								You have to be logged in to start connecting
							</h3>
							<div className="modal-action flex flex-row justify-center">
								{/* if there is a button in form, it will close the modal */}
								<button
									className="btn bg-teal-600 text-white"
									onClick={() => navigate("/register")}>
									Create New Account
								</button>
								<button className="btn " onClick={() => navigate("/login")}>
									Log in
								</button>
							</div>
						</div>
					</dialog>
				</>
			)}
		</>
	);
}
