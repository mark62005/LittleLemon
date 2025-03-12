import { X } from "lucide-react";
import Logo from "@/components/shared/Logo";

interface MobileNavHeaderProps {
	toggleOpen: () => void;
}

function MobileNavHeader({ toggleOpen }: MobileNavHeaderProps) {
	return (
		<div className="flex justify-between items-center px-10 border-b-2">
			<Logo />
			<X
				className="h-14 w-14 p-3 cursor-pointer z-50 text-primary"
				onClick={toggleOpen}
			/>
		</div>
	);
}
export default MobileNavHeader;
