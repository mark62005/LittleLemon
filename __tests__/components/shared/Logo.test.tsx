import { render, screen } from "@testing-library/react";
import Logo from "@/components/shared/Logo";

describe("Logo", () => {
	describe("Render", () => {
		it("should render Little Lemon's logo with alt text", () => {
			render(<Logo />);

			const image = screen.getByRole("img");

			expect(image).toHaveAttribute("alt");
		});

		it("should render nav link to home page with image", () => {
			render(<Logo />);

			const link = screen.getByRole("link");

			expect(link).toHaveAttribute("href", "/");
		});
	});
});
