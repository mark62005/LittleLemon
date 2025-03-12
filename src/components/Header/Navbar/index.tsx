import Link from "next/link";
import { NAV_LINKS_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";

function Navbar() {
	return (
		<nav className="hidden justify-around items-center lg:flex">
			{NAV_LINKS_CONFIG.map((navLink: NavLink) => (
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
