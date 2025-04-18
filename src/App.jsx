"use client";

import "./App.css";
import Navbar from "./components/navbar";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	const [darkthemed, setdark] = useState(false);
	const [isLoggedIn, setLogin] = useState(false);
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
						element={<Home login={isLoggedIn} dark={darkthemed} />}
					/>
					<Route
						path="/login"
						element={<Login dark={darkthemed} setLogin={setLogin} />}
					/>
					<Route path="/register" element={<Register></Register>}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
