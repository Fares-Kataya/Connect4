"use client";

import "./App.css";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Addpost from "./pages/Addpost";

function App() {
	const [darkthemed, setdark] = useState(false);
	const [isLoggedIn, setLogin] = useState(true);
	const [activeBlog, setActiveBlog] = useState("Posts");
	const location = useLocation(); 
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
								login={isLoggedIn}
								dark={darkthemed}
								activeBlog={activeBlog}
								setActiveBlog={setActiveBlog}
							/>
						}
					/>
					<Route
						path="/login"
						element={<Login dark={darkthemed} setLogin={setLogin} />}
					/>
					<Route
						path="/register"
						element={<Register setLogin={setLogin}></Register>}></Route>
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
