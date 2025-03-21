import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Menu from "@/components/shared/Menu";

function MenuSection() {
	return (
		<section
			id="menu"
			className="bg-primary"
		>
			<MaxWidthWrapper className="bg-white w-11/12">
				<Menu />
			</MaxWidthWrapper>
		</section>
	);
}
export default MenuSection;
