import Image from "next/image";

function FoodPhoto() {
	return (
		<Image
			src="/food/bread.jpg"
			alt="Bread"
			className="object-fill"
			width={300}
			height={300}
		/>
	);
}
export default FoodPhoto;
