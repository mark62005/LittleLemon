import Image from "next/image";

interface FoodPhotoProps {
	url: string;
}

function FoodPhoto({ url }: FoodPhotoProps) {
	return (
		<div className="">
			<Image
				src={url}
				alt="Bread"
				className="object-fill"
				width={500}
				height={500}
				loading="lazy"
			/>
		</div>
	);
}
export default FoodPhoto;
