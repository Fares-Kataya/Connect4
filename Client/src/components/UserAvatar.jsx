import React from "react";
import PrivacySelector from "./PrivacySelector";

export default function UserAvatar({ name, avatarUrl, extraInfo, privLvl, setPrivLvl }) {
	return (
		<div className="flex items-center gap-3">
			<div className="avatar">
				<div className=" w-15 rounded-full">
					{avatarUrl ? <img src={avatarUrl} alt={`${name} avatar`} /> :
										(
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-full h-full">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
											/>
										</svg>
									)}
				</div>
			</div>
			<div className="flex flex-col">
				<h3 className="font-semibold">{name}</h3>
				{extraInfo === "privacy" ? (
					<PrivacySelector level={privLvl} setLevel={setPrivLvl} />
				) : (
					<h4 className="text-xs text-gray-400">9 hours ago</h4>
				)}
			</div>
		</div>
	);
}
