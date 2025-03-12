import MaxWidthWrapper from "../shared/MaxWidthWrapper";

function Copyright() {
	const year = new Date().getFullYear();

	return (
		<MaxWidthWrapper>
			<div className="text-center py-1.5">© Copyright {year} Ka Ho Wong</div>
		</MaxWidthWrapper>
	);
}
export default Copyright;
