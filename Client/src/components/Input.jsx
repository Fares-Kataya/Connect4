import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
export default function Input({
	type,
	svg,
	placeholder,
	isPassword,
	setIsPassword,
	classNames,
	validation,
	error,
}) {
	console.log(svg.rect);
	const [passShow, setPassShow] = useState(false);
	const [isFocused, setisFocused] = useState(false);
	const username = useRef(null);
	useEffect(() => {
		if (type === "password") {
			setIsPassword(true);
		}
	}, [type, setIsPassword]);
	const handleBlur = () => {
		if (!username.current.value) {
			setisFocused(false);
		}
	};
	return (
		<div className={`form-control relative ${classNames?.w || "w-1/3"}`}>
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
								{svg.rect ? (
									<rect
										width={svg.rect.width}
										height={svg.rect.height}
										x={svg.rect.x}
										y={svg.rect.y}
										rx={svg.rect.rx}></rect>
								) : (
									<circle cx={svg.cx} cy={svg.cy} r={svg.r}></circle>
								)}
							</g>
						</svg>
						{type}
					</div>
				</span>
				<input
					type={isPassword ? (passShow ? "text" : "password") : type}
					placeholder={"     " + placeholder}
					className={`input input-md bg-gray-50 ${"w-" + classNames?.w || " "}`}
					onFocus={() => setisFocused(true)}
					onBlur={() => handleBlur()}
					ref={username}
					{...validation}
				/>
				{!isFocused ? (
					<div>
						<svg
							className="h-[1.2em] opacity-50 absolute top-1/4 left-2"
							xmlns={svg.xmlns}
							viewBox="0 0 24 24">
							<g
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeWidth="2.5"
								fill="none"
								stroke="currentColor">
								<path d={svg.d}></path>
								{svg.rect ? (
									<rect
										width={svg.rect.width}
										height={svg.rect.height}
										x={svg.rect.x}
										y={svg.rect.y}
										rx={svg.rect.rx}></rect>
								) : (
									<circle cx={svg.cx} cy={svg.cy} r={svg.r}></circle>
								)}
							</g>
						</svg>
					</div>
				) : (
					" "
				)}
				{isPassword ? (
					passShow ? (
						<button
							className="absolute right-2 top-1/8 btn btn-ghost btn-sm btn-circle z-10"
							onClick={() => setPassShow(!passShow)}
							onFocus={() => setisFocused(true)}
							onBlur={() => handleBlur()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								class="lucide lucide-eye-icon lucide-eye text-gray-500">
								<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
								<circle cx="12" cy="12" r="3" />
							</svg>{" "}
						</button>
					) : (
						<button
							className="absolute right-2 top-1/8 btn btn-ghost btn-sm btn-circle z-10"
							onClick={() => setPassShow(!passShow)}
							onFocus={() => setisFocused(true)}
							onBlur={() => handleBlur()}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-eye-off-icon lucide-eye-off text-gray-500">
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
			{error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
		</div>
	);
}
