import MenuTab from "./MenuTab";

function MenuHeader() {
	return (
		<div className="flex justify-center items-center">
			<MenuTab />
			<MenuTab />
			<MenuTab />
		</div>
	);
}
export default MenuHeader;
