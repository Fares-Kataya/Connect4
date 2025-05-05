import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import PostCard from "../components/PostCard";
import Story from '../components/story'
import Login from '../pages/Login';
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PostSkeleton from "../components/PostSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home({ dark, activeBlog, setActiveBlog }) {
	const navigate = useNavigate();
	const location = useLocation();
	const login = useSelector((state) => Boolean(state.auth.token));
	const token = useSelector((state) => state.auth.token);
	const [posts, setPosts] = useState([]);
	const [Loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const [loadingMore, setLoadingMore] = useState(false);
	const postsPerPage = 2;
	const handleAdd = () => {
		navigate("/Add-Post");
	};
	const dialogRef = useRef(null);

const handleDelete = async (postId) => {
	try {
		await fetch(`http://localhost:4000/posts/${postId}`, {
			method: "DELETE",
			headers: { Authorization: `Bearer ${token} `},
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
		if ((!login || location.state?.showLoginModal) && dialogRef.current)
    	{
		dialogRef.current.showModal();
		}
	}, [login]);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
useEffect(() => {
	return () => {
		window.allPosts = undefined;
	};
}, []);
useEffect(() => {
	if (location.pathname === "/") {
		setLoading(true);
		fetchInitialPosts();
	}
}, [location.pathname]);
const fetchInitialPosts = async () => {
	try {
		const totalCountResponse = await axios.head("http://localhost:4000/posts");
		const totalCount = parseInt(
			totalCountResponse.headers["x-total-count"] || "0"
		);

		const [response] = await Promise.all([
			axios.get(`http://localhost:4000/posts?_page=1&_limit=${postsPerPage}`),
			delay(1000),
		]);
		const responseData = response.data;
		if (responseData.length > postsPerPage) {
			setPosts(responseData.slice(0, postsPerPage));
			window.allPosts = responseData;
			setHasMore(postsPerPage < responseData.length);
		} else {
			setPosts(responseData);
			setHasMore(
				responseData.length === postsPerPage && responseData.length < totalCount
			);
		}

		setPage(2);
	} catch (err) {
		console.error("Failed to fetch initial posts:", err);
	} finally {
		setLoading(false);
	}
	};
const fetchMorePosts = async () => {
	setLoadingMore(true);
	await delay(800);
	if (window.allPosts) {
		const start = (page - 1) * postsPerPage;
		const end = page * postsPerPage;
		const nextBatch = window.allPosts.slice(start, end);

		if (nextBatch.length > 0) {
			setPosts((prevPosts) => [...prevPosts, ...nextBatch]);
			setPage(page + 1);
			setHasMore(end < window.allPosts.length);
		} else {
			setHasMore(false);
		}

		setLoadingMore(false);
		return;
	}
	try {
		const response = await axios.get(
			`http://localhost:4000/posts?_page=${page}&_limit=${postsPerPage}`
		);
	if (response.data.length < postsPerPage) {
			setHasMore(false);
		}
		setPosts((prevPosts) => [...prevPosts, ...response.data]);
		setPage(page + 1);
	} catch (err) {
		console.error("Failed to fetch more posts:", err);
		setHasMore(false);
	} finally {
		setLoadingMore(false);
	}
};
	return (
		<>
			{login ? (
				<div className="grid grid-cols-3 h-screen w-screen-100">
					<div className="mt-10"></div>
					{Loading ? (
						<div className="flex flex-col">
							{[1, 2, 3].map((n) => (
								<PostSkeleton key={n} />
							))}
						</div>
					) : (
						<div className="mt-10">
							{[1, 2, 3, 5, 6, 7, 8, 9].map((n) => (
								<Story key={n} />
							))}

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
									<InfiniteScroll
										dataLength={posts.length}
										next={fetchMorePosts}
										hasMore={hasMore}
										loader={
											<div className="flex flex-col items-center my-6">
												<div className="loading loading-spinner loading-md text-teal-600"></div>
												<p className="text-sm text-gray-500 mt-2">
													Loading more posts...
												</p>
											</div>
										}
										scrollThreshold={0.8}
										scrollableTarget="scrollableDiv"
										endMessage={
											<p className="text-center mt-4 mb-4 text-gray-500">
												No more posts to load
											</p>
										}>
										{posts.map((p) => (
											<PostCard
												key={p.id}
												post={p}
												dark={dark}
												onDelete={() => handleDelete(p.id)}
											/>
										))}
									</InfiniteScroll>

									<button
										className="btn btn-circle fixed left-1/2 absolute left-255 bottom-130 bg-teal-50 hover:bg-teal-100"
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

					<div className="flex flex-col relative left-15 h-100 bottom-15 w-80 mt-20 ">
						<h2 className="card-title text-3xl">Articles</h2>
						<div className="overflow-scroll w-100 h-100 bg-teal-50">
							<div className="card bg-base-100 w-96 shadow-sm h-100 bg-teal-50">
								<figure>
									<img
										src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*3rpD-4OikxmCYusJ"
										alt="Shoes"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title font-bold">
										This Is How Tesla Will Die
									</h2>

									<p>The vultures are circling the tech giant.</p>
									<div className="card-actions justify-end">
										<button className="btn bg-teal-600 text-white">
											Read More
										</button>
									</div>
								</div>
							</div>
							<div className="card bg-base-100 w-96 shadow-sm h-100 bg-teal-50">
								<figure>
									<img
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBKCTVF_Q3P8p9hHPaxZlSlr1QCJ_f8fKbg&s"
										alt="Shoes"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title font-bold">
										A tariff loophole has expired, ringing alarms across social
										media
									</h2>

									<p>
										Trump’s crackdown on Chinese imports has now ended a key
										shipping exemption — and millions of Americans will soon
										feel the impact
									</p>
									<div className="card-actions justify-end">
										<button className="btn bg-teal-600 text-white">
											Read More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
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