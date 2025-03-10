import Header from "@/components/Header";
import HeroSection from "@/components/sections/hero";
import MenuSection from "@/components/sections/menu";
import FoodPhotosSection from "@/components/sections/food-photos";
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
				<FoodPhotosSection />
				<ReservationFormSection />
			</main>

			<Footer />

			<BackToTopButton />
		</div>
	);
}
