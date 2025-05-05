import React from "react";

export default function PostSkeleton() {
	return (
		<div className="skeleton h-90 mt-5 flex justify-center items-center w-full bg-teal-50 rounded-2xl">
			<div className="flex w-11/12 flex-col gap-3">
				<div className="flex items-center gap-2">
					<div className="skeleton h-16 w-16 shrink-0 rounded-full" />
					<div className="flex flex-col gap-2 flex-1">
						<div className="skeleton h-2 w-1/4" />
						<div className="skeleton h-2 w-1/4" />
						<div className="skeleton h-2 w-1/4" />
					</div>
				</div>
				<div className="flex flex-col gap-1 w-full">
					<div className="skeleton h-2 w-full" />
					<div className="skeleton h-2 w-full" />
				</div>
				<div className="skeleton h-32 w-full rounded-lg" />
				<div className="flex items-center gap-2 mt-4">
					<div className="skeleton h-4 w-4 rounded-full" />
					<div className="skeleton h-4 w-4 rounded-full" />
					<div className="skeleton h-4 w-4 rounded-full" />
					<div className="skeleton h-4 w-1/8" />
					<div className="skeleton h-4 w-1/4 ml-auto" />
				</div>
			</div>
		</div>
	);
}
