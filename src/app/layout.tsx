import type { Metadata } from "next";
import { Markazi_Text, Karla } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const markaziTextSans = Markazi_Text({
	variable: "--font-markazi",
	subsets: ["latin"],
});

const karlaSans = Karla({
	variable: "--font-karla",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Little Lemon",
	description:
		"Experience the best of Mediterranean cuisine at Little Lemon, a family-owned restaurant blending traditional recipes with a modern twist. Enjoy fresh, flavorful dishes made with love. Reserve your table today!",
	openGraph: {
		title: "Little Lemon – Fresh Mediterranean Cuisine with a Modern Twist",
		description:
			"At Little Lemon, we serve authentic Mediterranean dishes crafted with fresh ingredients and a touch of modern creativity. Join us for a dining experience full of rich flavors and warm hospitality. Reserve your table today!",
		siteName: "Little Lemon",
		images: [
			{
				url: "https://example.com/og.png",
				alt: "Image of Little Lemon's signature dish - Bruschetta",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen antialiased",
					markaziTextSans.className,
					karlaSans.className
				)}
			>
				{children}
			</body>
		</html>
	);
}
