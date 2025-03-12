import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MobileNavLinkProps {
	navLink: NavLink;
	pathname: string;
	toggleOpen: () => void;
}

function MobileNavLink({ navLink, pathname, toggleOpen }: MobileNavLinkProps) {
	function closeOnCurrent(href: string) {
		if (pathname === href) {
			toggleOpen();
		}
	}

	return (
		<Link
			key={navLink.href}
			onClick={() => closeOnCurrent(navLink.href)}
			href={navLink.href}
			className="flex items-center w-full px-10 py-2 border-b-2 font-semibold text-primary hover:bg-primary/90 hover:text-primary-foreground/90"
		>
			{navLink.label}
			<ArrowRight className="ml-2 h-4 w-4" />
		</Link>
	);
}
export default MobileNavLink;
