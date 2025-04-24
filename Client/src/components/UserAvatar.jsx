import React from "react";
import PrivacySelector from "./PrivacySelector";

export default function UserAvatar({ name, avatarUrl, extraInfo, privLvl, setPrivLvl }) {
	return (
		<div className="flex items-center gap-3">
			<div className="avatar">
				<div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
					<img src={avatarUrl} alt={`${name} avatar`} />
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
