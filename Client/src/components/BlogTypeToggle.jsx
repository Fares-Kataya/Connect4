import React from "react";

export default function BlogTypeToggle({ activeBlog, setActiveBlog }) {
	return (
		<div className="flex h-10 justify-center bg-gray-200 rounded-lg p-0.5 px-2 items-center w-full join mb-5">
			{["Posts", "Articles"].map((type, idx) => (
				<button
					key={type}
					className={`btn h-10/12 rounded-${
						idx === 0 ? "l" : "r"
					}-lg w-1/2 join-item ${
						activeBlog === type
							? "btn-active bg-teal-600 text-white"
							: "bg-teal-50 hover:bg-teal-100"
					}`}
					onClick={() => setActiveBlog(type)}>
					{type.slice(0, -1)}
				</button>
			))}
		</div>
	);
}
