import { getFormattedPrice } from "@/lib/utils";

interface MenuItemProps {
	dish: Dish;
}

function MenuItem({ dish }: MenuItemProps) {
	const { dishName, price, description } = dish;

	return (
		<div className="col-span-1">
			<div className="flex justify-between items-center font-medium">
				<p className="uppercase">{dishName}</p>
				<p>{getFormattedPrice(price)}</p>
			</div>

			<p className="w-3/4 font-light">{description}</p>
		</div>
	);
}
export default MenuItem;
