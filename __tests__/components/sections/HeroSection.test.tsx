import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/sections/HeroSection";

describe("HeroSection", () => {
	it("should render a background image", () => {
		render(<HeroSection />);

		const image = screen.getByRole("img");

		expect(image).toBeInTheDocument();
	});

	it("should render a slogan of Little Lemon", () => {
		render(<HeroSection />);

		const heading = screen.getByRole("heading", { level: 2 });

		expect(heading).toBeInTheDocument();
	});

	it("should render a description of Little Lemon", () => {
		render(<HeroSection />);

		const description = screen.getByRole("paragraph");

		expect(description).toBeInTheDocument();
	});

	it("should render a 'View Menu' button to menu section", () => {
		render(<HeroSection />);

		const viewMenuButton = screen.getByRole("link", { name: /menu/i });

		expect(viewMenuButton).toHaveAttribute("href", "#menu");
	});

	it("should render a 'Book a Table' button to reserve page", () => {
		render(<HeroSection />);

		const bookATableButton = screen.getByRole("link", {
			name: /book a table/i,
		});

		expect(bookATableButton).toHaveAttribute("href", "reserve");
	});
});
