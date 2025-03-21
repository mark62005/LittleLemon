import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "@/components/shared/Menu";

describe("Menu", () => {
	const mockMenus: Menu[] = [
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

	function renderComponent() {
		render(<Menu menus={mockMenus} />);

		return {
			tabButtons: screen.getAllByTestId("menu-tab-button"),
			separator: screen.getByTestId("menu-separator"),
			menuContents: screen.getAllByTestId("menu-content"),
		};
	}

	describe("Render", () => {
		it("should render tab buttons for viewing different menus", () => {
			const { tabButtons } = renderComponent();

			expect(tabButtons.length).toStrictEqual(mockMenus.length);
			for (const tabButton of tabButtons) {
				expect(tabButton).toBeInTheDocument();
			}
		});

		it("should render the first tab button as active state by default", () => {
			const { tabButtons } = renderComponent();

			for (let i = 0; i < tabButtons.length; i++) {
				const tabButton = tabButtons[i];

				if (i === 0) {
					expect(tabButton).toHaveAttribute("data-state", "active");
				} else {
					expect(tabButton).toHaveAttribute("data-state", "inactive");
				}
			}
		});

		it("should render the items of the first menu in the array by default", () => {
			const { menuContents } = renderComponent();

			for (let i = 0; i < menuContents.length; i++) {
				const menuContent = menuContents[i];

				if (i === 0) {
					expect(menuContent).toHaveAttribute("data-state", "active");
				} else {
					expect(menuContent).toHaveAttribute("data-state", "inactive");
				}
			}
		});

		it("should render the all categories of a menu", () => {
			const mockMenus: Menu[] = [
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
			];

			render(<Menu menus={mockMenus} />);

			const categories = screen.getAllByRole("menu-category");

			expect(categories.length).toStrictEqual(mockMenus[0].categories.length);
			for (const category of categories) {
				expect(category).toBeInTheDocument();
			}
		});

		it("should render a separator between tab buttons and menu content", () => {
			const { separator } = renderComponent();

			expect(separator).toBeInTheDocument();
		});
	});

	describe("Behavior", () => {
		it("should change the state of the clicked tab button to active", async () => {
			const { tabButtons } = renderComponent();
			const lastButton = tabButtons[tabButtons.length - 1];

			const user = userEvent.setup();
			await user.click(lastButton);

			expect(lastButton).toHaveAttribute("data-state", "active");
			for (let i = 0; i < tabButtons.length; i++) {
				if (i !== tabButtons.length - 1) {
					expect(tabButtons[i]).toHaveAttribute("data-state", "inactive");
				}
				continue;
			}
		});

		it("should change the state of the corresponding menu content to active when switching tabs", async () => {
			const { tabButtons, menuContents } = renderComponent();
			const lastButton = tabButtons[tabButtons.length - 1];
			const lastMenu = menuContents[menuContents.length - 1];

			const user = userEvent.setup();
			await user.click(lastButton);

			expect(lastMenu).toHaveAttribute("data-state", "active");
			for (let i = 0; i < menuContents.length; i++) {
				if (i !== menuContents.length - 1) {
					expect(menuContents[i]).toHaveAttribute("data-state", "inactive");
				}
				continue;
			}
		});
	});
});
