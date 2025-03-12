import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import Logo from "../shared/Logo";
import BookATableButton from "../shared/buttons/BookATableButton";
import MobileNav from "./MobilNav";
import Navbar from "./Navbar";

function Header() {
	return (
		<header className="py-2">
			<MaxWidthWrapper>
				<div className="flex justify-between items-center min-h-[11vh] w-full">
					<Logo />

					{/* RIGHT SIDE */}
					<div className="flex justify-between items-center gap-2 md:gap-3">
						<BookATableButton />

						<Navbar />
						<MobileNav />
					</div>
				</div>
			</MaxWidthWrapper>
		</header>
	);
}
export default Header;
