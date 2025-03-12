import { FooterSectionType } from "@/type/enum";
import { Clock3, MapPin, Phone } from "lucide-react";

interface FooterSectionIconProps {
	variant: FooterSectionType;
}

function FooterSectionIcon({ variant }: FooterSectionIconProps) {
	const iconClassNames = "w-4 h-4";

	if (variant === FooterSectionType.Hours) {
		return <Clock3 className={iconClassNames} />;
	} else if (variant === FooterSectionType.Phone) {
		return <Phone className={iconClassNames} />;
	}
	return <MapPin className={iconClassNames} />;
}
export default FooterSectionIcon;
