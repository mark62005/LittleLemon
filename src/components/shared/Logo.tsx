import Image from "next/image";
import Link from "next/link";

interface LogoProps {
	variant?: "default" | "footer";
}
function Logo({ variant = "default" }: LogoProps) {
	return (
		<Link
			href="/"
			className="py-3 pr-2"
		>
			<Image
				src="logo.svg"
				alt={"Logo of Little Lemon"}
				width={163}
				height={44}
			/>

			<h1 className="hidden">Little Lemon</h1>
		</Link>
	);
}
export default Logo;
