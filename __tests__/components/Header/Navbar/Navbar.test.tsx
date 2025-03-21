import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Header/Navbar";

describe("Navbar", () => {
	describe("Render", () => {
		it("should render nav links with href", () => {
			render(<Navbar />);

			const navLinks = screen.getAllByRole("link");

			expect(navLinks.length).toBeGreaterThanOrEqual(1);
			for (const navLink of navLinks) {
				expect(navLink).toHaveAttribute("href");
			}
		});
	});
});
