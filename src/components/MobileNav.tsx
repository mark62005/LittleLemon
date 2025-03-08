"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./shared/Logo";

interface MobileNavProps {
	navLinks: { href: string; label: string }[];
}

function MobileNav({ navLinks }: MobileNavProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const pathname = usePathname();

	function toggleOpen() {
		setIsOpen((prev) => !prev);
	}

	useEffect(() => {
		if (isOpen) toggleOpen();
	}, [pathname]);

	function closeOnCurrent(href: string) {
		if (pathname === href) {
			toggleOpen();
		}
	}

	return (
		<div className="lg:hidden">
			<Menu
				className="h-14 w-14 p-3 cursor-pointer z-50 text-primary"
				onClick={toggleOpen}
			/>

			{isOpen ? (
				<div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
					<nav className="absolute bg-white shadow-xl grid w-full">
						{/* LOGO AND CLOSE BUTTON */}
						<div className="flex justify-between items-center px-10 border-b-2">
							<Logo />

							<X
								className="h-14 w-14 p-3 cursor-pointer z-50 text-primary"
								onClick={toggleOpen}
							/>
						</div>

						{navLinks.map((navLink) => (
							<Link
								key={navLink.href}
								onClick={() => closeOnCurrent(navLink.href)}
								href={navLink.href}
								className="flex items-center w-full px-10 py-2 border-b-2 font-semibold text-primary"
							>
								{navLink.label}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						))}
					</nav>
				</div>
			) : null}
		</div>
	);
}
export default MobileNav;
