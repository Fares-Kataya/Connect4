// components/SubmitButton.jsx
import React from "react";

const SubmitButton = React.forwardRef(function SubmitButton(
	{ label = "Post" },
	ref
) {
	return (
		<div className="flex flex-row justify-center gap-10 mb-10">
			<button className="btn btn-block">Cancel</button>
			<button className="btn btn-block btn-primary" ref={ref}>
				{label}
			</button>
		</div>
	);
});

export default SubmitButton;
