import React, { useState } from 'react'

export default function Input({ type, svg, placeholder, isPassword, setIsPassword }) {
	const [passShow, setPassShow] = useState(false);
	if (type === "password") {
		setIsPassword(true);
	}
	return (
		<div className="form-control relative w-1/3">
			<label className="floating-label">
				<span>
					<div className="flex flex-row gap-2">
						<svg
							className="h-[1.4em] opacity-80"
							xmlns={svg.xmlns}
							viewBox="0 0 24 24">
							<g
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeWidth="2.5"
								fill="none"
								stroke="currentColor">
								<path d={svg.d}></path>
								<circle cx={svg.cx} cy={svg.cy} r={svg.r}></circle>
							</g>
						</svg>
						{type}
					</div>
				</span>
				<input
					type={isPassword ? passShow ? "text" : "password" : type}
					placeholder={placeholder}
					className="input input-md bg-gray-50"
				/>
				{isPassword ? (
					passShow ? (
						<button
							className="btn btn-circle btn-sm border-0 z-10 absolute left-55 bottom-0.5"
							onClick={() => setPassShow(!passShow)}>
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
								class="lucide lucide-eye-icon lucide-eye text-gray-500">
								<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
								<circle cx="12" cy="12" r="3" />
							</svg>{" "}
						</button>
					) : (
						<button
							className="btn btn-circle btn-sm border-0 absolute left-55 bottom-0.5 z-10"
							onClick={() => setPassShow(!passShow)}>
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
								class="lucide lucide-eye-off-icon lucide-eye-off text-gray-500">
								<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
								<path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
								<path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
								<path d="m2 2 20 20" />
							</svg>
						</button>
					)
				) : (
					""
				)}
			</label>
		</div>
	);
}
