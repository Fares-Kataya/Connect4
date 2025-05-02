import React from "react";

const SubmitButton = React.forwardRef(function SubmitButton(
	{ label = "Post", onClick },
	ref
) {
	return (
		<div className="flex flex-row justify-center gap-10 mb-10">
			<button className="btn btn-block">Cancel</button>
			<button
				type="button"
				className="btn btn-block text-white bg-teal-600"
				ref={ref}
				onClick={onClick}>
				{label}
			</button>
		</div>
	);
});

export default SubmitButton;
