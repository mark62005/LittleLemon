import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import FoodPhoto from "./FoodPhoto";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

const IMAGE_URLS = [
	"/food/bread.jpg",
	"/food/fish.jpg",
	"/food/greek salad.jpg",
	"/food/lemon dessert.jpg",
];

function FoodGallerySection() {
	return (
		<section className="my-10">
			<MaxWidthWrapper>
				<Carousel
					opts={{
						align: "center",
						loop: true,
					}}
				>
					<CarouselContent>
						{IMAGE_URLS.map((url) => (
							<CarouselItem
								key={url}
								className="basis-1/3 flex items-center justify-center"
							>
								<FoodPhoto url={url} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden md:inline-flex" />
					<CarouselNext className="hidden md:inline-flex" />
				</Carousel>
			</MaxWidthWrapper>
		</section>
	);
}
export default FoodGallerySection;
