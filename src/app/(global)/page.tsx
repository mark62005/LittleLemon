import HeroSection from "@/components/sections/hero";
import MenuSection from "@/components/sections/MenuSection";
import FoodGallerySection from "@/components/sections/food-gallery";

export default function Home() {
	return (
		<main className="min-h-screen">
			<HeroSection />
			<MenuSection />
			<FoodGallerySection />
		</main>
	);
}
