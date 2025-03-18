import { CalendarIcon, Clock3, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReserveDetailsItemProps {
	variant: "date" | "time" | "guests";
	value: string;
	className?: string;
}

function ReserveDetailsItem({
	variant,
	value,
	className,
}: ReserveDetailsItemProps) {
	function renderIcon() {
		const iconClassName = "w-5 h-5";

		if (variant === "time") {
			return <Clock3 className={iconClassName} />;
		} else if (variant === "guests") {
			return <Users className={iconClassName} />;
		}
		return <CalendarIcon className={iconClassName} />;
	}

	return (
		<div
			className={cn(
				"flex justify-start items-center gap-2 text-primary font-semibold",
				className
			)}
		>
			{renderIcon()}
			<p className="grow">{value}</p>
		</div>
	);
}
export default ReserveDetailsItem;
