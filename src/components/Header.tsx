import Link from "next/link";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import Logo from "./shared/Logo";
import MobileNav from "./MobileNav";

const NAV_LINKS_CONFIG = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Menu",
		href: "menu",
	},
	{
		label: "Reserve a table",
		href: "reserve",
	},
];

function Header() {
	return (
		<header className="py-2">
			<MaxWidthWrapper>
				<div className="flex justify-between items-center min-h-[11vh] w-full">
					<Logo />

					{/* RIGHT SIDE */}
					<div className="flex justify-between items-center gap-2 md:gap-3">
						{/* BOOK A TABLE BUTTON */}
						<Link href="#reserve">
							<Button>Book a table</Button>
						</Link>

						{/* NAV LINKS */}
						<nav className="hidden justify-around items-center lg:flex">
							{NAV_LINKS_CONFIG.map((navLink) => (
								<Link
									href={navLink.href}
									key={navLink.href}
								>
									<Button variant={"link"}>{navLink.label}</Button>
								</Link>
							))}
						</nav>

						{/* MOBILE NAV LINKS */}
						<MobileNav navLinks={NAV_LINKS_CONFIG} />
					</div>
				</div>
			</MaxWidthWrapper>
		</header>
	);
}
export default Header;
