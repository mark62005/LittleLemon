import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
	navLinks: NavLink[];
}

function Navbar({ navLinks }: NavbarProps) {
	return (
		<nav className="hidden justify-around items-center lg:flex">
			{navLinks.map((navLink: NavLink) => (
				<Link
					href={navLink.href}
					key={navLink.href}
				>
					<Button variant={"link"}>{navLink.label}</Button>
				</Link>
			))}
		</nav>
	);
}
export default Navbar;
