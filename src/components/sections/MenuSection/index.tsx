import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Menu from "@/components/shared/Menu";

const SAMPLE_MENUS: Menu[] = [
	{
		menuName: "lunch",
		categories: [
			{
				categoryName: "Appetizer",
				dishes: [
					{
						id: "F001",
						dishName: "Bruschetta al Pomodoro",
						description:
							"Toasted bread topped with fresh tomatoes, basil, garlic, and olive oil.",
						price: 8,
					},
					{
						id: "F002",
						dishName: "Hummus",
						description:
							"Classic hummus served with warm pita, olives, and cucumber slices.",
						price: 10,
					},
				],
			},
			{
				categoryName: "Main Dishes",
				dishes: [
					{
						id: "F003",
						dishName: "Lemon Herb Grilled Chicken",
						description:
							"Juicy grilled chicken marinated in lemon, olive oil, and Mediterranean herbs. Served with roasted veggies.",
						price: 15,
					},
					{
						id: "F004",
						dishName: "Seafood Linguine",
						description:
							"Fresh shrimp, mussels, and calamari tossed in a light garlic and white wine sauce.",
						price: 18,
					},
					{
						id: "F005",
						dishName: "Vegetarian Moussaka",
						description:
							"Layers of roasted eggplant, potatoes, and zucchini, topped with creamy béchamel.",
						price: 16,
					},
				],
			},
		],
	},
	{
		menuName: "dinner",
		categories: [
			{
				categoryName: "Appetizer",
				dishes: [
					{
						id: "F006",
						dishName: "Stuffed Grape Leaves",
						description:
							"Grape leaves filled with seasoned rice and herbs, served with tzatziki.",
						price: 9,
					},
					{
						id: "F007",
						dishName: "Garlic Shrimp Scampi",
						description:
							"Sautéed shrimp in garlic butter sauce, served with crusty bread.",
						price: 12,
					},
					{
						id: "F008",
						dishName: "Mezze Platter",
						description:
							"A mix of hummus, baba ghanoush, olives, and feta with warm pita.",
						price: 14,
					},
				],
			},
			{
				categoryName: "Main Dishes",
				dishes: [
					{
						id: "F009",
						dishName: "Lamb Shank with Rosemary Potatoes",
						description:
							"Slow-braised lamb shank served with rosemary-infused potatoes",
						price: 24,
					},
					{
						id: "F010",
						dishName: "Grilled Branzino",
						description:
							"Whole Mediterranean sea bass, grilled and drizzled with lemon-herb sauce.",
						price: 28,
					},
					{
						id: "F011",
						dishName: "Truffle Mushroom Risotto",
						description:
							"Creamy risotto with wild mushrooms, truffle oil, and Parmesan.",
						price: 20,
					},
				],
			},
			{
				categoryName: "Drinks",
				dishes: [
					{
						id: "D001",
						dishName: "House Red Wine",
						description: "A bold, dry Italian red wine.",
						price: 9,
					},
					{
						id: "D002",
						dishName: "Signature Cocktail",
						description:
							"Gin, lemon juice, elderflower liqueur, and a splash of prosecco.",
						price: 12,
					},
				],
			},
		],
	},
	{
		menuName: "take_out",
		categories: [
			{
				categoryName: "Appetizer",
				dishes: [
					{
						id: "F006",
						dishName: "Stuffed Grape Leaves",
						description:
							"Grape leaves filled with seasoned rice and herbs, served with tzatziki.",
						price: 9,
					},
					{
						id: "F007",
						dishName: "Garlic Shrimp Scampi",
						description:
							"Sautéed shrimp in garlic butter sauce, served with crusty bread.",
						price: 12,
					},
					{
						id: "F008",
						dishName: "Mezze Platter",
						description:
							"A mix of hummus, baba ghanoush, olives, and feta with warm pita.",
						price: 14,
					},
				],
			},
			{
				categoryName: "Main Dishes",
				dishes: [
					{
						id: "F009",
						dishName: "Lamb Shank with Rosemary Potatoes",
						description:
							"Slow-braised lamb shank served with rosemary-infused potatoes",
						price: 24,
					},
					{
						id: "F010",
						dishName: "Grilled Branzino",
						description:
							"Whole Mediterranean sea bass, grilled and drizzled with lemon-herb sauce.",
						price: 28,
					},
					{
						id: "F011",
						dishName: "Truffle Mushroom Risotto",
						description:
							"Creamy risotto with wild mushrooms, truffle oil, and Parmesan.",
						price: 20,
					},
				],
			},
			{
				categoryName: "Drinks",
				dishes: [
					{
						id: "D001",
						dishName: "House Red Wine",
						description: "A bold, dry Italian red wine.",
						price: 9,
					},
					{
						id: "D002",
						dishName: "Signature Cocktail",
						description:
							"Gin, lemon juice, elderflower liqueur, and a splash of prosecco.",
						price: 12,
					},
				],
			},
		],
	},
];

function MenuSection() {
	return (
		<section
			id="menu"
			className="bg-primary"
		>
			<MaxWidthWrapper className="bg-white w-11/12">
				<Menu menus={SAMPLE_MENUS} />
			</MaxWidthWrapper>
		</section>
	);
}
export default MenuSection;
