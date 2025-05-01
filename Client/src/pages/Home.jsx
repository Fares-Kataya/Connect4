import React, { useState } from "react";
import Navbar from "../components/navbar";
import PostCard from "../components/PostCard";
import Story from '../components/story'
import Login from '../pages/Login';
import { Routes, Route, useNavigate } from "react-router-dom";
export default function Home({ login, dark, activeBlog, setActiveBlog }) {
	const navigate = useNavigate();
	const handleAdd = () => {
		navigate("/Add-Post");
	};
	return (
		<>
			<div className="grid grid-cols-3 h-screen w-screen-100">
				<div className="mt-10">
					<Story></Story>
				</div>
				<div className="mt-10">
					<div className="flex join justify-center">
						<button
							className={`w-1/2 rounded-l-2xl btn bg-blue-50 btn-active active:bg-blue-200  join-item ${
								activeBlog === "Posts"
									? "btn-active bg-blue-200"
									: "bg-blue-50 hover:bg-blue-100"
							}`}
							onClick={() => setActiveBlog("Posts")}>
							Posts
						</button>
						<button
							className={`w-1/2 rounded-r-2xl btn bg-blue-50 btn-active active:bg-blue-200  join-item ${
								activeBlog === "Articles"
									? "btn-active bg-blue-200"
									: "bg-blue-50 hover:bg-blue-100"
							}`}
							onClick={() => setActiveBlog("Articles")}>
							Articles
						</button>
					</div>
					<div className="divider divider-end">
						<button className="btn btn-xs text-xs font-bold bg-blue-50">
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
					{login ? (
						<button
							className={`btn btn-circle absolute left-255 fixed ${
								!dark ? "bg-blue-50" : "bg-gray-700"
							} ${!dark ? "hover:bg-gray-300" : "hover:bg-gray-800"}`}
							onClick={() => handleAdd()}>
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
					) : null}
					<PostCard dark={dark}></PostCard>
					<PostCard dark={dark}></PostCard>
					<PostCard dark={dark}></PostCard>
					<PostCard dark={dark}></PostCard>
					<PostCard dark={dark}></PostCard>
					<PostCard dark={dark}></PostCard>
				</div>
				<div></div>
			</div>
		</>
	);
}
