import { FooterSectionType } from "@/type/enum";
import { Separator } from "../ui/separator";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import FooterSection from "./FooterSection";
import SocialMedias from "./SocialMedias";
import Copyright from "./Copyright";

function Footer() {
	return (
		<footer className="bg-primary text-primary-foreground">
			<MaxWidthWrapper className="py-10">
				<div className="flex flex-col items-center gap-5">
					{Object.values(FooterSectionType).map((section) => (
						<FooterSection
							variant={section}
							key={section}
						/>
					))}

					<SocialMedias />
				</div>
			</MaxWidthWrapper>

			<Separator className="bg-secondary-foreground" />

			<Copyright />
		</footer>
	);
}
export default Footer;
