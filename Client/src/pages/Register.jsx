import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
export default function Register({setLogin}) {
	const navigate = useNavigate();
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({
				mode: "onChange",
				defaultValues: {
				firstName: "",
				lastName: "",
				DOB: "",
				gender: "",
				username: "",
				email: "",
				password: "",
				confirmPassword: "",
				terms: false,
				},
				});
	const dobValue = watch("DOB", "");
	const password = watch("password", "");
	const genderValue = watch("gender", "");
	const [isPassword, setIsPassword] = useState(false);
	const [FocusedDOB, setFocusedDOB] = useState(false);
	const onSubmit = async (data) => {
			console.log("Validated data:", data);
			// await submitRegistration(data);
			setLogin(true);
			navigate("/");
		};

	return (
		<>
			<div className="w-screen h-screen grid grid-cols-[1fr_1fr]">
				<div className="flex flex-col items-center justify-center bg-gradient-to-b from-teal-600 to-emerald-700 shadow-2xl">
					<img
						src="../../public/icons/Frame 14favivon.png"
						alt="Connect4 Logo"
						className="max-w-xs"
					/>
					<h1 className="text-8xl font-bold text-white">Connect 4</h1>
					<div className="grid grid-cols-[1fr_6fr] gap-5 ml-2.5">
						<div className="grid-rows-3">
							<div className="grid justify-end">
								<div className="mt-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="44"
										height="44"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-users-icon lucide-users text-white p-2 bg-teal-600 rounded-full">
										<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								</div>
								<div className="mt-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="44"
										height="44"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-message-square-icon lucide-message-square text-white p-2 bg-teal-600 rounded-full">
										<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
									</svg>
								</div>
								<div className="mt-5">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="44"
										height="44"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-shield-icon lucide-shield text-white p-2 bg-teal-600 rounded-full">
										<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
									</svg>
								</div>
							</div>
						</div>
						<div className="grid-rows-3">
							<div className="mt-3.5">
								<h3 className="text-lg font-medium text-white">
									Connect with others
								</h3>
								<p className="text-teal-100">
									Build meaningful relationships in the digital world
								</p>
							</div>
							<div className="mt-3.5">
								<h3 className="text-lg font-medium text-white">
									Share your thoughts
								</h3>
								<p className="text-teal-100">
									Express yourself and engage in meaningful conversations
								</p>
							</div>
							<div className="mt-3.5">
								<h3 className="text-lg font-medium text-white">
									Safe and secure
								</h3>
								<p className="text-teal-100">
									Your privacy and security are our top priorities
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="grid grid-rows-8 justify-center mt-20 gap-5">
							<div className="grid grid-cols-2 gap-5">
								<div>
									<label className="floating-label">
										<span>First Name</span>
										<input
											id="First Name"
											type="text"
											placeholder="First Name"
											className="input input-md bg-gray-50"
											{...register("firstName", {
												required: "First name is required",
												pattern: {
													value: /^[A-Za-z]+$/i,
													message: "Letters only",
												},
												minLength: {
													value: 3,
													message: "At least 3 characters",
												},
												maxLength: {
													value: 30,
													message: "No more than 30 characters",
												},
											})}
										/>
										{errors.firstName && (
											<p className="text-red-500 text-sm mt-1">
												{errors.firstName.message}
											</p>
										)}
									</label>
								</div>
								<div>
									<label className="floating-label">
										<span>Last Name</span>
										<input
											id="Last Name"
											type="text"
											placeholder="Last Name"
											className="input input-md bg-gray-50"
											{...register("lastName", {
												required: "Last name is required",
												pattern: {
													value: /^[A-Za-z]+$/i,
													message: "Letters only",
												},
												minLength: {
													value: 3,
													message: "At least 3 characters",
												},
												maxLength: {
													value: 30,
													message: "No more than 30 characters",
												},
											})}
										/>
										{errors.lastName && (
											<p className="text-red-500 text-sm mt-1">
												{errors.lastName.message}
											</p>
										)}
									</label>
								</div>
							</div>
							<div>
								<label className="floating-label">
									<span>Date Of Birth</span>
									<input
										type="date"
										onFocus={() => setFocusedDOB(true)}
										onBlur={() => setFocusedDOB(false)}
										className={`
											input w-full bg-gray-50
											${FocusedDOB || dobValue ? "text-black" : "text-gray-400"}
										`}
										{...register("DOB", {
											required: "Date of birth is required",
											validate: (val) =>
												new Date(val) <= new Date() ||
												"Cannot be a future date",
										})}
									/>
									{errors.DOB && (
										<p className="text-red-500 text-sm mt-1">
											{errors.DOB.message}
										</p>
									)}
								</label>
							</div>
							<div className="w-full max-w-xs">
								<label className="floating-label">
									<span className="label-text">Gender</span>
								</label>
								<select
									{...register("gender", {
										required: "Please select a gender",
									})}
									defaultValue=""
									className={`select select-bordered w-full bg-gray-50 ${
										genderValue ? "text-black" : "text-gray-400"
									}`}>
									<option value="" disabled>
										Pick a gender
									</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
								{errors.gender && (
									<p className="text-red-500 text-sm mt-1">
										{errors.gender.message}
									</p>
								)}
							</div>
							<div>
								<Input
									type={"Username"}
									svg={{
										xmlns: "http://www.w3.org/2000/svg",
										d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
										cx: 12,
										cy: 7,
										r: 4,
									}}
									placeholder={"Username"}
									classNames={{ w: "full" }}
									validation={register("username", {
										required: "Username is required",
										pattern: {
											value: /^[a-zA-Z0-9]+$/,
											message: "Letters & Numbers only",
										},
										minLength: { value: 4, message: "At least 4 characters" },
										maxLength: {
											value: 20,
											message: "No more than 20 characters",
										},
									})}
									error={errors.username}></Input>
							</div>
							<div>
								<Input
									type={"Email Address"}
									svg={{
										xmlns: "http://www.w3.org/2000/svg",
										d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
										rect: {
											width: 20,
											height: 16,
											x: 2,
											y: 4,
											rx: 2,
										},
									}}
									placeholder={"Email Address"}
									classNames={{ w: "full" }}
									validation={register("email", {
										required: "Email is required",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Invalid email address",
										},
									})}
									error={errors.email}></Input>
							</div>
							<div>
								<Input
									type={"password"}
									svg={{
										xmlns: "http://www.w3.org/2000/svg",
										d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
										cx: 16.5,
										cy: 7.5,
										r: 0.5,
									}}
									placeholder={"••••••••"}
									isPassword={isPassword}
									setIsPassword={setIsPassword}
									classNames={{ w: "full" }}
									validation={register("password", {
										required: "Password is required",
										minLength: { value: 8, message: "At least 8 characters" },
										pattern: {
											value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/,
											message:
												"Must include uppercase, lowercase, and a number",
										},
									})}
									error={errors.password}></Input>
							</div>
							<div>
								<Input
									type={"Confirm password"}
									svg={{
										xmlns: "http://www.w3.org/2000/svg",
										d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
										cx: 16.5,
										cy: 7.5,
										r: 0.5,
									}}
									placeholder={"••••••••"}
									isPassword={isPassword}
									setIsPassword={setIsPassword}
									classNames={{ w: "full" }}
									validation={register("confirmPassword", {
										required: "Please confirm your password",
										validate: (val) =>
											val === password || "Passwords do not match",
									})}
									error={errors.confirmPassword}></Input>
							</div>
							<div className="flex justify-center">
								<label className="label text-sm">
									<input
										type="checkbox"
										className="checkbox checkbox-sm border-[#009689] checked:bg-[#009689] checked:text-white checked:border-2 checked:border-black"
										{...register("terms", {
											required: "You must accept the terms",
										})}
									/>
									I agree to the{" "}
									<a
										href=""
										className="link text-sm font-medium text-teal-600 hover:text-teal-500">
										Terms of Service
									</a>{" "}
									and{" "}
									<a className="link text-sm font-medium text-teal-600 hover:text-teal-500">
										Privacy
									</a>
									Policy
								</label>
							</div>
							{errors.terms && (
								<p className="text-red-500 text-sm mt-1">
									{errors.terms.message}
								</p>
							)}
							<div className="flex justify-center items-center">
								<button
									type="submit"
									className="btn btn-wide bg-teal-600 text-white font-semibold hover:bg-teal-500"
									onClick={() => handleSubmit()}>
									Continue{" "}
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
							</div>
						</div>
					</form>
					{/* </div> */}
					<div className="divider">Or Continue With</div>
					<div className="flex flex-row gap-2 justify-center">
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
				</div>
			</div>
		</>
	);
}
