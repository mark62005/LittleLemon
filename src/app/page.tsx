import Header from "@/components/Header";
import HeroSection from "@/components/sections/hero";
import MenuSection from "@/components/sections/menu";
import FoodGallerySection from "@/components/sections/food-gallery";
import ReservationFormSection from "@/components/sections/reservation-form";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
	return (
		<div className="">
			<Header />

			<main className="">
				<HeroSection />
				<MenuSection />
				<FoodGallerySection />
				<ReservationFormSection />
			</main>

			<Footer />

			<BackToTopButton />
		</div>
	);
}
