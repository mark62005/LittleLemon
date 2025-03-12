"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_LINKS_CONFIG } from "@/lib/constants";
import MobileNavHeader from "./MobileNavHeader";
import MobileNavLink from "./MobileNavLink";

function MobileNav() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const pathname = usePathname();

	function toggleOpen() {
		setIsOpen((prev) => !prev);
	}

	useEffect(() => {
		if (isOpen) toggleOpen();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<div className="lg:hidden">
			<Menu
				className="h-14 w-14 p-3 cursor-pointer z-50 text-primary"
				onClick={toggleOpen}
			/>

			{isOpen ? (
				<div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-50 w-full">
					<nav className="absolute bg-white shadow-xl grid w-full">
						<MobileNavHeader toggleOpen={toggleOpen} />

						{NAV_LINKS_CONFIG.map((navLink) => (
							<MobileNavLink
								navLink={navLink}
								pathname={pathname}
								toggleOpen={toggleOpen}
								key={navLink.href}
							/>
						))}
					</nav>
				</div>
			) : null}
		</div>
	);
}
export default MobileNav;
