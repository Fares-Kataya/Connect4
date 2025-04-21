import React from "react";

export default function PostCard({dark}) {
	return (
		<div
			className={`card card-lg w-full h-fit ${
				!dark ? "bg-blue-50" : " bg-gray-700"
			} shadow-xl my-5 rounded-2xl`}>
			<div className="card-title flex flex-row justify-between mt-5 ml-3 items-center">
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
						<h3>Fares Kataya</h3>
						<h4 className="text-xs text-gray-400">9 hours ago</h4>
					</div>
				</div>
				<div className="ml-auto mr-2">
					<button
						className="btn btn-ghost btn-circle"
						popoverTarget="post-popover"
						style={{ anchorName: "--anchor-post" }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="size-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</button>
					<ul
						className={`dropdown menu w-52 rounded-box ${
							!dark ? "bg-blue-50" : "bg-gray-700"
						}  shadow-sm`}
						popover="auto"
						id="post-popover"
						style={{ positionAnchor: "--anchor-post" }}>
						<li>
							<a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="blue"
									class="size-4">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
									/>
								</svg>
								Edit
							</a>
						</li>
						<li>
							<a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="red"
									class="size-4">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
									/>
								</svg>
								Delete
							</a>
						</li>
						<li>
							<a>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="gold"
									class="size-4">
									<path
										fill-rule="evenodd"
										d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
										clip-rule="evenodd"
									/>
								</svg>
								Save
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="card-body flex-none p-0">
				<p className="font-serif p-3">my first attempt at photography</p>
				<figure>
					<img
						className="w-full rounded-2xl"
						src="https://images.unsplash.com/photo-1744771724991-745db3eb4910?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</figure>
			</div>
			<div className="flex-col w-full">
				<div className="flex justify-end mt-2 px-3 gap-3">
					<p
						className={`${
							!dark ? "text-gray-500" : "text-amber-50"
						} text-sm hover:underline cursor-pointer transition-all duration-1000`}>
						663 Comments
					</p>
					<p
						className={`${
							!dark ? "text-gray-500" : "text-amber-50"
						} text-sm hover:underline cursor-pointer transition-all duration-1000`}>
						23 Shares
					</p>
				</div>
				<hr className="my-2 opacity-30 px-5" />
				<div className="card-actions overflow-visible p-0">
					<div className="flex flex-row w-full object-contain join">
						<div className="w-1/3 dropdown dropdown-top dropdown-end">
							<button
								className={`w-full btn rounded-l-2xl ${
									dark ? "hover:bg-amber-50 hover:text-black" : ""
								}`}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2.5"
									stroke="currentColor"
									class="size-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
									/>
								</svg>
								Like
							</button>
							{/* <ul
								tabIndex={0}
								className="dropdown-content flex-row justify-between menu bg-base-100 rounded-box z-1 w-90 p-2 shadow-sm">
								<li>
									<a>Item 1</a>
								</li>
								<li>
									<a>Item 2</a>
								</li>
								<li>
									<a>Item 2</a>
								</li>
								<li>
									<a>Item 2</a>
								</li>
								<li>
									<a>Item 2</a>
								</li>
							</ul> */}
						</div>
						<button
							className={`btn w-1/3 join-item ${
								dark ? "hover:bg-amber-50 hover:text-black" : ""
							}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
								/>
							</svg>
							Comment
						</button>
						<button
							className={`btn w-1/3 rounded-r-2xl join-item ${
								dark ? "hover:bg-amber-50 hover:text-black" : ""
							}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
								/>
							</svg>
							Share
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
