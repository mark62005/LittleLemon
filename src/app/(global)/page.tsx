import HeroSection from "@/components/sections/hero";
import MenuSection from "@/components/sections/menu";
import FoodGallerySection from "@/components/sections/food-gallery";
import ReservationFormSection from "@/components/sections/reservation-form";

export default function Home() {
	return (
		<main className="min-h-screen">
			<HeroSection />
			<MenuSection />
			<FoodGallerySection />
			<ReservationFormSection />
		</main>
	);
}
