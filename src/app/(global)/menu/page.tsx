import MenuSection from "@/components/sections/MenuSection";
import FoodGallerySection from "@/components/sections/food-gallery";

function MenuPage() {
	return (
		<main className="min-h-screen">
			<MenuSection />
			<FoodGallerySection />
		</main>
	);
}
export default MenuPage;
