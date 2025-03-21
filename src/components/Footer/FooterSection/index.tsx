import { FooterSectionType } from "@/type/enum";
import FooterSectionIcon from "./FooterSectionIcon";
import FooterSectionTitle from "./FooterSectionTitle";
import FooterSectionContent from "./FooterSectionContent";

interface FooterSectionProps {
	variant: FooterSectionType;
}

function FooterSection({ variant }: FooterSectionProps) {
	return (
		<section className="text-center">
			<div className="flex justify-center items-center gap-1 text-secondary">
				<FooterSectionIcon variant={variant} />
				<FooterSectionTitle variant={variant} />
			</div>

			<FooterSectionContent variant={variant} />
		</section>
	);
}
export default FooterSection;
