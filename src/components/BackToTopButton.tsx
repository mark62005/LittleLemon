"use client";

import { ArrowUp } from "lucide-react";

function BackToTopButton() {
	function navigateToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<button
			onClick={navigateToTop}
			className="fixed bottom-10 right-10 z-50 opacity-80 bg-zinc-600 p-4 rounded-full cursor-pointer hover:bg-zinc-600/70 hover:text-foreground/70"
		>
			<ArrowUp className="w-6 h-6" />
		</button>
	);
}
export default BackToTopButton;
