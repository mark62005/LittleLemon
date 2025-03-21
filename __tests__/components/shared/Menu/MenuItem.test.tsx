import { render, screen } from "@testing-library/react";
import MenuItem from "@/components/shared/Menu/MenuItem";

describe("MenuItem", () => {
	const renderComponent = () => {
		const mockDish: Dish = {
			id: "F001",
			dishName: "Bruschetta al Pomodoro",
			description:
				"Toasted bread topped with fresh tomatoes, basil, garlic, and olive oil.",
			price: 8,
		};

		render(<MenuItem dish={mockDish} />);
	};

	describe("Render", () => {
		it("should render the dish name", () => {
			renderComponent();

			const dishNameLabel = screen.getByTestId("dish-name");

			expect(dishNameLabel).toBeInTheDocument();
		});

		it("should render the dish price", () => {
			renderComponent();

			const dishPriceLabel = screen.getByTestId("dish-price");

			expect(dishPriceLabel).toBeInTheDocument();
		});

		it("should render the dish description", () => {
			renderComponent();

			const dishDescriptionLabel = screen.getByTestId("dish-description");

			expect(dishDescriptionLabel).toBeInTheDocument();
		});
	});
});
