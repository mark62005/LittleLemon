import Link from "next/link";
import { Button } from "@/components/ui/button";

function BookATableButton() {
	return (
		<Link href="/reserve">
			<Button>Book a table</Button>
		</Link>
	);
}
export default BookATableButton;
