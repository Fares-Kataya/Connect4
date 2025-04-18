import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate();
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
					<div className="flex flex-row gap-10 items-center">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="44"
								height="44"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-users-icon lucide-users text-white p-2 bg-teal-600 rounded-full">
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<circle cx="9" cy="7" r="4" />
								<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
								<path d="M16 3.13a4 4 0 0 1 0 7.75" />
							</svg>
						</div>
						<div className="flex flex-col">
							<h3 className="text-lg font-medium text-white">
								Connect with others
							</h3>
							<p className="text-teal-100">
								Build meaningful relationships in the digital world
							</p>
						</div>
					</div>
					<div className="flex flex-row gap-10 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-message-square-icon lucide-message-square text-white p-2 bg-teal-600 rounded-full">
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
						</svg>
						<div className="flex flex-col justify-">
							<h3 className="text-lg font-medium text-white">
								Share your thoughts
							</h3>
							<p className="text-teal-100">
								Express yourself and engage in meaningful conversations
							</p>
						</div>
					</div>
					<div className="flex flex-row gap-10 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="44"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-shield-icon lucide-shield text-white p-2 bg-teal-600 rounded-full">
							<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
						</svg>
						<div className="flex flex-col">
							<h3 className="text-lg font-medium text-white">
								Safe and secure
							</h3>
							<p className="text-teal-100">
								Your privacy and security are our top priorities
							</p>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</>
	);
}
