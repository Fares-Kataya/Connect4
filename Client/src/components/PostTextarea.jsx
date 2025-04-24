import React, { useState, useRef } from "react";

export default function PostTextarea({ placeholderText, TextRef, activeBlog }) {
	const [placeholder, setPlaceholder] = useState(placeholderText);
	const containerRef = useRef(null);
	const showDock = activeBlog === "Articles";

	return (
		<div className="relative mt-5 w-full" ref={containerRef}>
			<textarea
				ref={TextRef}
				className={`
          textarea
          w-full
          ${activeBlog !== "Articles" ? "h-40" : "h-80"}
          ${showDock ? "pb-16" : ""}
          ${placeholder === "" ? "text-black" : "text-gray-400"}
          text-2xl
          rounded-2xl
        `}
				placeholder={placeholder}
				onFocus={() => setPlaceholder("")}
				onBlur={() => setPlaceholder(placeholderText)}
			/>

			{showDock && (
				<div
					className="
            absolute
            left-0 right-0 bottom-0
            flex justify-between items-center
            bg-white
            border-t border-gray-200
            p-2
            rounded-bl-2xl
            border-2 w-fit
          "
					style={{ marginBottom: "-1px" }}>
					<button className="btn btn-sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-4">
							<path
								stroke-linejoin="round"
								d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z"
							/>
						</svg>
					</button>
					<button className="btn btn-sm">
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
							class="lucide lucide-italic-icon lucide-italic">
							<line x1="19" x2="10" y1="4" y2="4" />
							<line x1="14" x2="5" y1="20" y2="20" />
							<line x1="15" x2="9" y1="4" y2="20" />
						</svg>
					</button>
					<button className="btn btn-sm">
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
							class="lucide lucide-underline-icon lucide-underline">
							<path d="M6 4v6a6 6 0 0 0 12 0V4" />
							<line x1="4" x2="20" y1="20" y2="20" />
						</svg>
					</button>
				</div>
			)}
		</div>
	);
}
