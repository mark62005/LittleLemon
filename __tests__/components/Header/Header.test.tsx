import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
	describe("Render", () => {
		it("should render a 'Book A Table' call-to-action button", () => {
			render(<Header />);

			const bookATableButton = screen.getByRole("link", {
				name: /book a table/i,
			});

			expect(bookATableButton).toHaveAttribute("href", "/reserve");
		});
	});
});
