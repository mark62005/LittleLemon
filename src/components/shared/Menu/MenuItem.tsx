import { getFormattedPrice } from "@/lib/utils";

interface MenuItemProps {
	dish: Dish;
}

function MenuItem({ dish }: MenuItemProps) {
	const { dishName, price, description } = dish;

	return (
		<div
			className="col-span-1"
			data-testid="menu-item"
		>
			<div className="flex justify-between items-center font-medium">
				<p
					className="uppercase"
					data-testid="dish-name"
				>
					{dishName}
				</p>
				<p data-testid="dish-price">{getFormattedPrice(price)}</p>
			</div>

			<p
				className="w-3/4 font-light"
				data-testid="dish-description"
			>
				{description}
			</p>
		</div>
	);
}
export default MenuItem;
