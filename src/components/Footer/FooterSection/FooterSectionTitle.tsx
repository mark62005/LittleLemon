import { FooterSectionType } from "@/type/enum";

interface FooterSectionTitleProps {
	variant: FooterSectionType;
}

function FooterSectionTitle({ variant }: FooterSectionTitleProps) {
	return (
		<h4 className="font-bold text-lg">
			{variant === FooterSectionType.Location
				? "Location"
				: variant === FooterSectionType.Hours
					? "Opening Hours"
					: "Phone Number"}
		</h4>
	);
}
export default FooterSectionTitle;
