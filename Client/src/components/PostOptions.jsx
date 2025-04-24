import React, { useState } from "react";
import Option from "../components/Option";
export default function PostOptions({ submitBtn }) {
	const [scheduleEnabled, setScheduleEnabled] = useState(false);
	const [saveDraftEnabled, setSaveDraftEnabled] = useState(false);
	const [previewEnabled, setPreviewEnabled] = useState(false);

	const now = new Date();
	now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
	const localISO = now.toISOString().slice(0, 16);
	const ClockIcon = (
		<svg
			className="lucide lucide-clock-icon w-6 h-6"
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-clock-icon lucide-clock">
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
	const NoteIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-sticky-note-icon lucide-sticky-note">
			<path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
			<path d="M15 3v4a2 2 0 0 0 2 2h4" />
		</svg>
	);
	const EyeIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-eye-icon lucide-eye">
			<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
			<circle cx="12" cy="12" r="3" />
		</svg>
    );
    const handleSaveDraftToggle = () => {
			const next = !saveDraftEnabled;
			setSaveDraftEnabled(next);
            
			if (submitBtn.current) {
                submitBtn.current.textContent = next ? 'Save Draft' : 'Post';
			}
		};

	return (
		<div className="card bg-base-100 w-200 shadow-sm">
			<div className="space-y-4 card-body">
				<div className="card-title">Post Options</div>
				<Option
					icon={ClockIcon}
					name="Schedule Post"
					description="Publish your post at a specific time"
					checked={scheduleEnabled}
					onChange={() => setScheduleEnabled(!scheduleEnabled)}
				/>
				{scheduleEnabled ? (
					<input
						type="datetime-local"
						defaultValue={localISO}
						className="input"
					/>
				) : null}
				<Option
					icon={NoteIcon}
					name="Save as Draft"
					description="Save your post to finish later"
					checked={saveDraftEnabled}
					saveDraftEnabled={saveDraftEnabled}
					submitBtn={submitBtn}
					onChange={handleSaveDraftToggle}
				/>
				<Option
					icon={EyeIcon}
					name="Preview your Post"
					description="See how your post will look"
					checked={previewEnabled}
					onChange={() => setPreviewEnabled(!previewEnabled)}
				/>
			</div>
		</div>
	);
}