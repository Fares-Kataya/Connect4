import React, { useRef, useState } from 'react'

export default function Addpost({ activeBlog, setActiveBlog }) {
    const [privLvl, setprivLvl] = useState("Public");
    const [placeholder, setPlaceholder] = useState("What's on your mind?");
    const fileInputRef = useRef(null);
	return (
		<>
			<div className="flex justify-center relative top-10">
				<div className="card bg-base-100 w-200 shadow-sm">
					<div className="card-body">
						<h2 className="card-title text-4xl mb-5">
							Create New {activeBlog}
						</h2>
						<div className="flex h-10 justify-center bg-gray-200 rounded-lg p-0.5 px-2 items-center w-full join mb-5">
							<button
								className={`btn h-10/12 rounded-l-lg w-1/2 join-item ${
									activeBlog === "Posts"
										? "btn-active bg-blue-200"
										: "bg-blue-50 hover:bg-blue-100"
								}`}
								onClick={() => setActiveBlog("Posts")}>
								Post
							</button>
							<button
								className={`btn h-10/12 rounded-r-lg w-1/2 join-item ${
									activeBlog === "Articles"
										? "btn-active bg-blue-200"
										: "bg-blue-50 hover:bg-blue-100"
								}`}
								onClick={() => setActiveBlog("Articles")}>
								Article
							</button>
						</div>
						<div className="flex items-center gap-3">
							<div className="avatar">
								<div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
									<img
										src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
										alt=""
									/>
								</div>
							</div>
							<div className="flex flex-col">
								<h3 className="font-semibold">Fares Kataya</h3>
								<div className="dropdown">
									<div
										tabIndex={0}
										role="button"
										className="btn btn-xs btn-ghost p-0.5">
										{privLvl === "Public" && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="15"
												height="15"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-globe-icon lucide-globe">
												<circle cx="12" cy="12" r="10" />
												<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
												<path d="M2 12h20" />
											</svg>
										)}
										{privLvl === "Friends" && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="15"
												height="15"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-users-icon lucide-users">
												<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
												<circle cx="9" cy="7" r="4" />
												<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
												<path d="M16 3.13a4 4 0 0 1 0 7.75" />
											</svg>
										)}
										{privLvl === "Private" && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="15"
												height="15"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-lock-icon lucide-lock">
												<rect
													width="18"
													height="11"
													x="3"
													y="11"
													rx="2"
													ry="2"
												/>
												<path d="M7 11V7a5 5 0 0 1 10 0v4" />
											</svg>
										)}

										{privLvl}
									</div>
									<ul
										tabIndex={0}
										className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
										<li>
											<a onClick={() => setprivLvl("Public")}>Public</a>
										</li>
										<li>
											<a onClick={() => setprivLvl("Friends")}>Friends</a>
										</li>
										<li>
											<a onClick={() => setprivLvl("Private")}>Private</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<textarea
							className="textarea mt-5 h-30 w-full text-gray-400 text-2xl rounded-2xl"
							placeholder={placeholder}
							onFocus={() => setPlaceholder("")}
							onBlur={() => setPlaceholder("What's on your mind?")}
						/>
						<div className="flex w-full flex-col">
							<div className="divider mb-0"></div>
						</div>
						<div className="join flex flex-row justify-between w-full">
							<div>
								<button
									className="btn join-item btn-ghost"
									onClick={() => fileInputRef.current.click()}>
									<input
										type="file"
										ref={fileInputRef}
										className="absolute border-1 left-300 w-20 h-20 opacity-100 cursor-pointer"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-image-icon lucide-image">
										<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
										<circle cx="9" cy="9" r="2" />
										<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
									</svg>
								</button>
								<button
									className="btn join-item btn-ghost"
									onClick={() => fileInputRef.current.click()}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-video-icon lucide-video">
										<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
										<rect x="2" y="6" width="14" height="12" rx="2" />
									</svg>
								</button>
								<button className="btn join-item btn-ghost">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-smile-plus-icon lucide-smile-plus">
										<path d="M22 11v1a10 10 0 1 1-9-10" />
										<path d="M8 14s1.5 2 4 2 4-2 4-2" />
										<line x1="9" x2="9.01" y1="9" y2="9" />
										<line x1="15" x2="15.01" y1="9" y2="9" />
										<path d="M16 5h6" />
										<path d="M19 2v6" />
									</svg>
								</button>
								<button className="btn join-item btn-ghost">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-link-icon lucide-link">
										<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
										<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
									</svg>
								</button>
							</div>
							<div>
								<div className="join join-vertical lg:join-horizontal">
									<button className="btn join-item btn-ghost">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-map-pin-icon lucide-map-pin">
											<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
											<circle cx="12" cy="10" r="3" />
										</svg>
									</button>
									<button className="btn join-item btn-ghost">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-tag-icon lucide-tag">
											<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
											<circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">post</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
