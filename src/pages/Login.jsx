import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
export default function Login(setLogin) {
	const navigate = useNavigate();
	const [isPassword, setIsPassword] = useState(false);
    const handleValidation = ()=>{
        console.log("e.target")
    }
    return (
			<div className="w-screen h-screen grid grid-cols-[1fr_1fr]">
				<div className="flex flex-col items-center justify-center bg-gradient-to-b from-teal-600 to-emerald-700 shadow-2xl">
					<img
						src="../../public/icons/Frame 14favivon.png"
						alt="Connect4 Logo"
						className="max-w-xs"
					/>
					<h1 className="text-8xl font-bold text-white">
						Connect <span className="text-8xl font-specialgothic">4</span>
					</h1>
					<p className="font-handwriting font-semibold text-white">
						Sign in to sync up with the ones who matter.
					</p>
				</div>
				<div className="w-full flex flex-col gap-5 justify-center items-center animate">
					<h2 className="text-5xl font-bold p-3 text-teal-600 card-title mb-5">
						Sign in to Connect4
					</h2>
					<Input
						type={"Username"}
						svg={{
							xmlns: "http://www.w3.org/2000/svg",
							d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
							cx: 12,
							cy: 7,
							r: 4,
						}}
						placeholder={"Username"}></Input>
					<Input
						type={"password"}
						svg={{
							xmlns: "http://www.w3.org/2000/svg",
							d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
							cx: 16.5,
							cy: 7.5,
							r: 0.5,
						}}
						placeholder={"••••••••"} isPassword={isPassword} setIsPassword={setIsPassword}></Input>
					{/* <div className="card-actions justify-end mt-2"> */}
					<div className="flex flex-row mt-2 gap-5">
						<label className="label text-sm">
							<input
								type="checkbox"
								className="checkbox checkbox-sm border-[#009689] checked:bg-[#009689] checked:text-white checked:border-2 checked:border-black"
							/>
							Remember me
						</label>
						<a className="link text-sm font-medium text-teal-600 hover:text-teal-500">
							Forgot Password?
						</a>
					</div>
					<button
						className="btn btn-wide bg-teal-600 text-white font-semibold hover:bg-teal-500"
						onClick={() => handleValidation}>
						Log in{" "}
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
							class="ml-1 size-5 lucide lucide-arrow-right-to-line-icon lucide-arrow-right-to-line">
							<path d="M17 12H3" />
							<path d="m11 18 6-6-6-6" />
							<path d="M21 5v14" />
						</svg>
					</button>
					{/* </div> */}
					<div className="divider">Or Continue With</div>
					<div className="flex flex-row gap-2">
						<button className="btn bg-white text-black border-[#e5e5e5]">
							<svg
								aria-label="Email icon"
								width="16"
								height="16"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24">
								<g
									strokeLinejoin="round"
									strokeLinecap="round"
									strokeWidth="2"
									fill="none"
									stroke="black">
									<rect width="20" height="16" x="2" y="4" rx="2"></rect>
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
								</g>
							</svg>
							Login with Email
						</button>
						<button className="btn bg-white text-black border-[#e5e5e5]">
							<svg
								aria-label="Google logo"
								width="16"
								height="16"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								<g>
									<path d="m0 0H512V512H0" fill="#fff"></path>
									<path
										fill="#34a853"
										d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
									<path
										fill="#4285f4"
										d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
									<path
										fill="#fbbc02"
										d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
									<path
										fill="#ea4335"
										d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
								</g>
							</svg>
							Login with Google
						</button>
						<button className="btn bg-white text-black border-[#e5e5e5]">
							<svg
								aria-label="Facebook logo"
								width="16"
								height="16"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32 32">
								<path
									fill="blue"
									d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path>
							</svg>
							Login with Facebook
						</button>
					</div>
					<p>
						Don't have an account?
						<a
							className="link text-sm font-medium text-teal-600 hover:text-teal-500 ml-1 "
							onClick={() => navigate("/register")}>
							Register
						</a>
					</p>
				</div>
			</div>
		);
}
