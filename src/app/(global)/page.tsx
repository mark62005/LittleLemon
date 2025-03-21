import HeroSection from "@/components/sections/HeroSection";
import MenuSection from "@/components/sections/MenuSection";
import FoodGallerySection from "@/components/sections/FoodGallerySection";

export default function Home() {
	return (
		<main className="min-h-screen">
			<HeroSection />
			<MenuSection />
			<FoodGallerySection />
		</main>
	);
}
