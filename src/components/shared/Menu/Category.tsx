import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import MenuItem from "./MenuItem";

interface CategoryProps {
	category: Category;
	className: ClassValue;
}

function Category({ category, className }: CategoryProps) {
	const { categoryName, dishes } = category;

	return (
		<div
			className={cn("grid grid-cols-1 gap-3 mt-4", className)}
			role="menu-category"
		>
			<h4 className="col-span-1 uppercase font-bold text-lg">{categoryName}</h4>

			{dishes.map((dish) => (
				<MenuItem
					key={dish.id}
					dish={dish}
				/>
			))}
		</div>
	);
}
export default Category;
