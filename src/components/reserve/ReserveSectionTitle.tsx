import { cn } from "@/lib/utils";

interface ReserveSectionTitleProps {
	title: string;
	className?: string;
}

function ReserveSectionTitle({ title, className }: ReserveSectionTitleProps) {
	return <h2 className={cn("text-lg font-bold", className)}>{title}</h2>;
}
export default ReserveSectionTitle;
