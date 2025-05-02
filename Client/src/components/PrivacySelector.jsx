import React from "react";

const icons = {
	Public: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<circle cx="12" cy="12" r="10" />
			<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
			<path d="M2 12h20" />
		</svg>
	),
	Connections: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	),
	Private: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="15"
			height="15"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
			<path d="M7 11V7a5 5 0 0 1 10 0v4" />
		</svg>
	),
};
const Desc = {
	Public: "Anyone on or off Connect4",
	Connections: "Only people you're connected with",
	Private: "Only you can see this post",
};
export default function PrivacySelector({ level, setLevel }) {
	return (
		<div className="dropdown">
			<div
				tabIndex={0}
				role="button"
				className="btn btn-xs text-gray-600 btn-block px-3 flex items-center justify-start bg-teal-50 w-20">
				{icons[level]}
				{level}
			</div>
			<ul
				tabIndex={0}
				className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
				{Object.keys(icons).map((key) => (
					<li key={key} className="flex gap-2">
						<a onClick={() => setLevel(key)}>
							{icons[key]}
							<div className="flex flex-col">
								<h2 className="text-md font-semibold">{key}</h2>
								<h3 className="text-xs text-gray-500">{Desc[key]}</h3>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
