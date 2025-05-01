"use client";

import "./App.css";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Addpost from "./pages/Addpost";
import { useSelector } from "react-redux";

function App() {
	const [darkthemed, setdark] = useState(false);
	const [activeBlog, setActiveBlog] = useState("Posts");
	const location = useLocation(); 
	const token = useSelector((state) => state.auth.token);
	const isLoggedIn = Boolean(token);
	const isLoginPage =
		location.pathname === "/login" || location.pathname === "/register";

	return (
		<div className="app-wrapper">
			{!isLoginPage && (
				<Navbar login={isLoggedIn} dark={darkthemed} setdark={setdark} />
			)}

			<div className="content-wrapper">
				<Routes>
					<Route
						path="/"
						element={
							<Home
								login={Boolean(token)}
								dark={darkthemed}
								activeBlog={activeBlog}
								setActiveBlog={setActiveBlog}
							/>
						}
					/>
					<Route
						path="/login"
						element={<Login dark={darkthemed} />}
					/>
					<Route
						path="/register"
						element={<Register></Register>}></Route>
					<Route
						path="/Add-Post"
						element={
							<Addpost
								activeBlog={activeBlog}
								setActiveBlog={setActiveBlog}></Addpost>
						}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
