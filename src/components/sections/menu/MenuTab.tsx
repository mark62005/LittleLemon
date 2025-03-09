import { Button } from "@/components/ui/button";

interface MenuTabProps {
	mealType?: "lunch" | "dinner" | "take-out";
}

function MenuTab({ mealType = "lunch" }: MenuTabProps) {
	return (
		<Button
			variant="outline"
			className=""
		>
			{mealType}
		</Button>
	);
}
export default MenuTab;
