import { MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faYoutube,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

function Footer() {
	return (
		<footer className="">
			<MaxWidthWrapper>
				<div className="flex flex-col items-center">
					{/* LOCATION */}
					<div className="">
						{/* TITLE */}
						<div className="flex justify-center items-center">
							{/* ICON */}
							<MapPin className="w-4 h-4" />

							<h4 className="">Location</h4>
						</div>

						<p className="">Lorem ipsum dolor sit amet consectetur adipisig.</p>
					</div>

					{/* SOCIAL MEDIAS */}
					<div className="flex justify-center items-center">
						<FontAwesomeIcon icon={faFacebook} />
						<FontAwesomeIcon icon={faInstagram} />
						<FontAwesomeIcon icon={faYoutube} />
						<FontAwesomeIcon icon={faTwitter} />
					</div>
				</div>

				{/* COPYRIGHT */}
				<div className="text-center">© Copyright 2025 Ka Ho Wong</div>
			</MaxWidthWrapper>
		</footer>
	);
}
export default Footer;
