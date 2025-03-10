import { ArrowUp } from "lucide-react";

function BackToTopButton() {
	return (
		<button className="fixed bottom-0 right-0 z-50 bg-zinc-800 p-4 cursor-pointer">
			<ArrowUp className="w-6 h-6" />
		</button>
	);
}
export default BackToTopButton;
