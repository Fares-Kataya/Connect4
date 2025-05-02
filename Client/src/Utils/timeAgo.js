export function timeAgo(inputDate) {
	const now = Date.now();
	const then =
		inputDate instanceof Date
			? inputDate.getTime()
			: new Date(inputDate).getTime();
	const delta = now - then;

	const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
	const units = [
		{ name: "year", ms: 1000 * 60 * 60 * 24 * 365 },
		{ name: "month", ms: 1000 * 60 * 60 * 24 * 30 },
		{ name: "week", ms: 1000 * 60 * 60 * 24 * 7 },
		{ name: "day", ms: 1000 * 60 * 60 * 24 },
		{ name: "hour", ms: 1000 * 60 * 60 },
		{ name: "minute", ms: 1000 * 60 },
		{ name: "second", ms: 1000 },
	];

	for (const { name, ms } of units) {
		const amount = Math.floor(delta / ms);
		if (Math.abs(amount) >= 1) {
			return rtf.format(-amount, name);
		}
	}
	return "just now";
}
