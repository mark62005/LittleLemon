import { render, screen } from "@testing-library/react";
import Category from "@/components/shared/Menu/Category";

describe("Category", () => {
	const mockCategory: Category = {
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
	};

	it("should render the category name", () => {
		render(
			<Category
				category={mockCategory}
				className=""
			/>
		);

		const heading = screen.getByRole("heading", { level: 4 });

		expect(heading).toBeInTheDocument();
	});

	it("should render all dishes of the category", () => {
		render(
			<Category
				category={mockCategory}
				className=""
			/>
		);

		const menuItems = screen.getAllByTestId("menu-item");

		expect(menuItems.length).toStrictEqual(mockCategory.dishes.length);
		for (const menuItem of menuItems) {
			expect(menuItem).toBeInTheDocument();
		}
	});

	it("should not render any dish if given an empty dishes array", () => {
		render(
			<Category
				category={{
					...mockCategory,
					dishes: [],
				}}
				className=""
			/>
		);

		const menuItems = screen.queryAllByTestId("menu-item");

		expect(menuItems.length).toStrictEqual(0);
		for (const menuItem of menuItems) {
			expect(menuItem).not.toBeInTheDocument();
		}
	});
});
