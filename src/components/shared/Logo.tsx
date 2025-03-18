import Image from "next/image";
import Link from "next/link";

interface LogoProps {
	variant?: "default" | "reservation" | "footer";
}
function Logo({ variant = "default" }: LogoProps) {
	if (variant === "reservation") {
		return (
			<Link
				href="/"
				className="p-2"
			>
				<Image
					src="logo.svg"
					alt={"Logo of Little Lemon"}
					width={250}
					height={44}
					priority
				/>

				<h1 className="hidden">Little Lemon</h1>
			</Link>
		);
	}

	return (
		<Link
			href="/"
			className="py-2 pr-2"
		>
			<Image
				src="logo.svg"
				alt={"Logo of Little Lemon"}
				width={163}
				height={44}
				priority
			/>

			<h1 className="hidden">Little Lemon</h1>
		</Link>
	);
}
export default Logo;
