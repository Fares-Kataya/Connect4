import React from "react";
import Navbar from "../components/navbar";
import PostCard from "../components/PostCard";
import Story from '../components/story'
import Login from '../pages/Login';
import { Routes, Route } from "react-router-dom";
export default function Home({login, dark}) {
	return (
		<>
			<div className="grid grid-cols-3 h-screen w-screen-100">
				<div className="mt-10">
					<Story></Story>
				</div>
				<div className="mt-10">
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
