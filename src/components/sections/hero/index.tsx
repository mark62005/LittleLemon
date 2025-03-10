import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
	return (
		<section className="relative w-full h-screen flex">
			<Image
				src="/bruschettas/bruschettas-1920.png"
				alt="Bruschettas"
				className="opacity-70 object-cover z-0"
				fill
				priority
			/>

			<MaxWidthWrapper className="flex flex-col justify-center z-10">
				<h2 className="">
					Little Lemon -{" "}
					<span className="">Mediterranean Flavors, Made Fresh</span>
				</h2>

				<p className="">
					We are a family-owned Mediterranean restaurant, focused on traditional
					recipes served with a modern twist.{" "}
				</p>

				{/* BUTTONS */}
				<div className="">
					<Button>
						<Link
							href="#menu"
							className=""
						>
							View Menu
						</Link>
					</Button>
				</div>
			</MaxWidthWrapper>
		</section>
	);
}
export default HeroSection;
