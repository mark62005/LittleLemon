import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faYoutube,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SOCIAL_MEDIAS_CONFIG = [
	{
		href: "https://www.facebook.com/",
		icon: faFacebook,
	},
	{
		href: "https://www.instagram.com/",
		icon: faInstagram,
	},
	{
		href: "https://www.youtube.com/",
		icon: faYoutube,
	},
	{
		href: "https://x.com/",
		icon: faTwitter,
	},
];

function SocialMedias() {
	return (
		<div className="grid grid-cols-4 justify-center items-center gap-4 text-secondary">
			{SOCIAL_MEDIAS_CONFIG.map((social) => (
				<Link
					key={social.href}
					href={social.href}
					target="_blank"
					className="col-span-1 inline-flex justify-center items-center w-7.5 hover:text-secondary/90"
				>
					<FontAwesomeIcon icon={social.icon} />
				</Link>
			))}
		</div>
	);
}
export default SocialMedias;
