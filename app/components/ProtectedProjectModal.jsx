import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProtectedProjectModal = ({ project, onClose }) => {
	const [password, setPassword] = useState("");

	useEffect(() => {
		// Prevent scrolling on the main document body
		document.body.style.overflow = "hidden";
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			// Re-enable scrolling when the component unmounts
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	const handleSubmit = (event) => {
		event.preventDefault();
		toast.error("You do not have permission to view this project.", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<div className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4">
			<div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
				<button onClick={onClose} className="absolute top-0 right-0 p-2">
					<XMarkIcon className="h-5 w-5 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400" />
				</button>
				<div className="flex flex-col items-center">
					<h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
						Enter Password
					</h3>
					<form onSubmit={handleSubmit} className="w-full">
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mb-4 w-full px-4 py-2 border-2 rounded-lg text-white bg-transparent border-gray-300 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
						/>
						<button
							type="submit"
							className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ProtectedProjectModal;
