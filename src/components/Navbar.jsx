import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ login, dark, setdark }) {
	const navigate = useNavigate();
	return (
		<>
			<div className="navbar bg-base-100 shadow-sm">
				<div className="navbar-start">
					<div className="dropdown">
						<div className="drawer">
							<input id="my-drawer" type="checkbox" className="drawer-toggle" />
							<div className="drawer-content">
								{/* Page content here */}
								<label htmlFor="my-drawer" className="drawer-button">
									<div
										tabIndex={0}
										role="button"
										className="btn btn-ghost btn-circle">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											{" "}
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4 6h16M4 12h16M4 18h7"
											/>{" "}
										</svg>
									</div>
								</label>
							</div>
							<div className="drawer-side">
								<label
									htmlFor="my-drawer"
									aria-label="close sidebar"
									className="drawer-overlay"></label>
								<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
									{/* Sidebar content here */}
									<li>
										<a>Sidebar Item 1</a>
									</li>
									<li>
										<a>Sidebar Item 2</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<a className="btn btn-ghost text-3xl font-specialgothic">
							<img
								src={`${
									dark
										? "../../public/icons/Frame 14favivon.png"
										: "../../public/icons/Logo.png"
								}`}
								alt=""
								className="logo w-7 h-7"
							/>
							Connect<span className="text-3xl font-specialgothic">4</span>
						</a>
					</div>
				</div>
				<div className="navbar-center flex gap-5">
					<button
						className={`btn btn-ghost ${
							!dark ? "bg-blue-100" : "bg-gray-700"
						} btn-circle w-20`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-6">
							<path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
							<path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
						</svg>
						<p className="active-text">Home</p>
					</button>
					<button className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-6">
							<path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
						</svg>
					</button>
					<button className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-6">
							<path
								fill-rule="evenodd"
								d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
								clip-rule="evenodd"
							/>
							<path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
						</svg>
					</button>
				</div>
				<div className="navbar-end gap-2">
					<input
						type="text"
						placeholder="Search"
						className="input input-sm w-1/4"
					/>
					<button className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>{" "}
						</svg>
					</button>
					<button className="btn btn-ghost btn-circle">
						<div className="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="size-6">
								<path
									fill-rule="evenodd"
									d="M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z"
									clip-rule="evenodd"
								/>
							</svg>
							<span className="badge badge-xs badge-primary indicator-item">
								2
							</span>
						</div>
					</button>
					<button className="btn btn-ghost btn-circle">
						<div className="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>{" "}
							</svg>
							<span className="badge badge-xs badge-primary indicator-item">
								5
							</span>
						</div>
					</button>
					<label className="swap swap-rotate">
						{/* this hidden checkbox controls the state */}
						<input
							type="checkbox"
							className="theme-controller"
							value="dark"
							onClick={() => setdark(!dark)}
						/>

						{/* sun icon */}
						<svg
							className="swap-off h-10 w-7 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
						</svg>

						{/* moon icon */}
						<svg
							className="swap-on h-10 w-7 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
						</svg>
					</label>
					{login ? (
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar w-full">
								<div className="w-8 rounded-full">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="size-8">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										/>
									</svg>
								</div>
								<p>Fares Kataya</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="size-3">
									<path
										fill-rule="evenodd"
										d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
								<li>
									<a className="justify-between">Profile</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a>Logout</a>
								</li>
							</ul>
						</div>
					) : (
						<button
							onClick={() => navigate("/login")}
							className="btn btn-ghost rounded-2xl">
							Login/Register
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
								class="lucide lucide-log-in-icon lucide-log-in">
								<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
								<polyline points="10 17 15 12 10 7" />
								<line x1="15" x2="3" y1="12" y2="12" />
							</svg>
						</button>
					)}
				</div>
			</div>
		</>
	);
}
