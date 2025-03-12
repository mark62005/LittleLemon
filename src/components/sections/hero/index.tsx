"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useDimensions from "react-cool-dimensions";
import { arrayCeil } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const IMAGE_SIZES = [600, 1280, 1920];

function HeroSection() {
	const [heroImage, setHeroImage] = useState<string>("bruschettas-1920.png");

	const { observe } = useDimensions({
		onResize: ({ observe, unobserve, width }) => {
			setHeroImage(`bruschettas-${arrayCeil(IMAGE_SIZES, width)}.png`);

			unobserve(); // To stop observing the current target element
			observe(); // To re-start observing the current target element
		},
	});

	return (
		<section
			ref={observe}
			className="relative w-full h-screen overflow-hidden flex"
		>
			<Image
				src={`/food/bruschettas/${heroImage}`}
				alt="Bruschettas"
				className="opacity-45 object-cover z-[-10]"
				fill
				priority
			/>

			<MaxWidthWrapper className="flex flex-col justify-center gap-4 z-1">
				<h2 className="text-5xl font-bold">
					Little Lemon -
					<span className="block font-semibold text-3xl leading-7 pt-1">
						Mediterranean Flavors, Made Fresh
					</span>
				</h2>

				<p className="font-medium">
					We are a family-owned Mediterranean restaurant, focused on traditional
					recipes served with a modern twist.
				</p>

				{/* BUTTONS */}
				<div className="flex justify-start items-center gap-4">
					{/* VIEW MENU BUTTON */}
					<Button variant="secondary">
						<Link href="#menu">View Menu</Link>
					</Button>

					{/* BOOK A TABLE BUTTON */}
					<Button>
						<Link href="reserve">Book a table</Link>
					</Button>
				</div>
			</MaxWidthWrapper>
		</section>
	);
}
export default HeroSection;
