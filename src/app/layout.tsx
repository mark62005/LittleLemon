import type { Metadata } from "next";
import { Markazi_Text, Karla } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${markaziTextSans.variable} ${karlaSans.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
