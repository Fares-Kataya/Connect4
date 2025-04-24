import React from "react";

export default function Option({
	icon,
	name,
	description,
	checked,
    onChange,
    saveDraftEnabled,
    submitBtn
}) {
	return (
		<div className="flex items-center gap-2 w-full">
			<div className="flex items-center gap-2">
				{icon}
				<div className="flex flex-col">
					<h2 className="text-xs font-medium">{name}</h2>
					<h3 className="text-xs text-gray-500">{description}</h3>
				</div>
			</div>
			{name === "Preview your Post" ? (
				<button className="btn btn-block w-1/10 ml-auto">Preview</button>
			) : (
				<input
					type="checkbox"
					className="toggle toggle-primary bg-gray-100 ml-auto"
					checked={checked}
					onChange={onChange}
                    />
            )}
            {saveDraftEnabled ? console.log(submitBtn.current) : ""}
		</div>
	);
}
