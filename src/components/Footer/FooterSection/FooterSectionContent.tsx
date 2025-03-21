import { FooterSectionType } from "@/type/enum";

interface FooterSectionContentProps {
	variant: FooterSectionType;
}

function FooterSectionContent({ variant }: FooterSectionContentProps) {
	const contentClassNames = "text-base font-medium";

	if (variant === FooterSectionType.Hours) {
		return (
			<p className={contentClassNames}>
				<span className="font-bold">Monday – Thursday:</span> 11:00 AM – 9:00 PM
				<br />
				<span className="font-bold">Friday – Saturday:</span> 11:00 AM – 10:30
				PM
				<br /> <span className="font-bold">Sunday:</span> 12:00 PM – 8:00 PM
			</p>
		);
	} else if (variant === FooterSectionType.Phone) {
		return <p className={contentClassNames}>(604) 123-4567</p>;
	}

	return (
		<a
			href="https://www.google.ca/maps/"
			target="_blank"
			className={contentClassNames}
		>
			123 Granville St, Vancouver,
			<br className="sm:hidden" /> BC V6C 1X8
		</a>
	);
}
export default FooterSectionContent;
