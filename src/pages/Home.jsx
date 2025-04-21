import React from "react";
import Navbar from "../components/navbar";
import PostCard from "../components/PostCard";
import Story from '../components/story'
import Login from '../pages/Login';
import { Routes, Route, useNavigate } from "react-router-dom";
export default function Home({login, dark}) {
	const navigate = useNavigate();
	const handleAdd = () => {
		navigate("/Add-Post");
	}
	return (
		<>
			<div className="grid grid-cols-3 h-screen w-screen-100">
				<div className="mt-10">
					<Story></Story>
				</div>
				<div className="mt-10">
					<div className="divider divider-end text-xs font-bold">
						Sort By{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-arrow-down-up-icon lucide-arrow-down-up">
							<path d="m3 16 4 4 4-4" />
							<path d="M7 20V4" />
							<path d="m21 8-4-4-4 4" />
							<path d="M17 4v16" />
						</svg>
					</div>
					{login ? (
						<button
							className={`btn btn-circle absolute left-255 ${
								!dark ? "bg-blue-50" : "bg-gray-700"
							} ${!dark ? "hover:bg-gray-300" : "hover:bg-gray-900"}`}
							onClick={() => handleAdd()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-plus-icon lucide-plus">
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
