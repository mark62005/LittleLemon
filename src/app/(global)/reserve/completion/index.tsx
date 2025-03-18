import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";

function ReserveCompletionPage() {
	return (
		<section className="flex flex-col items-center text-center gap-4">
			<Logo variant="reservation" />

			<h2 className="text-2xl font-bold text-primary">
				Thank you for your reservation!
			</h2>

			<p className="mb-2 text-lg w-3/4">
				A confirmation email has been sent to you. Please check your{" "}
				<a
					href="https://mail.google.com"
					target="_blank"
					className="text-accent font-bold hover:text-accent/80"
				>
					inbox
				</a>{" "}
				to verify your email. We look forward to seeing you at{" "}
				<span className="text-primary font-medium">Little Lemon</span>!
			</p>

			<Link href="/menu">
				<Button variant="secondary">View menu</Button>
			</Link>
		</section>
	);
}
export default ReserveCompletionPage;
