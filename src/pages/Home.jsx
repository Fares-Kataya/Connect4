import React from "react";
import Navbar from "../components/navbar";
import PostCard from "../components/PostCard";
import Story from '../components/story'
export default function Home() {
	return (
		<>
			<Navbar></Navbar>
            <div className="grid grid-cols-3 h-screen w-screen">
                <div className="mt-10">
					<Story></Story>
				</div>
				<div className="mt-10">
					<PostCard></PostCard>
					<PostCard></PostCard>
					<PostCard></PostCard>
				</div>
				<div></div>
			</div>
		</>
	);
}
