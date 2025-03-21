import { getLabelFor } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Category from "./Category";

interface MenuProps {
	menus: Menu[];
}

function Menu({ menus }: MenuProps) {
	const menuNames = menus.map((menu: Menu) => menu.menuName);

	return (
		<div className="py-12">
			<Tabs defaultValue={menuNames[0]}>
				<TabsList>
					{menuNames.map((name) => (
						<TabsTrigger
							key={name}
							value={name}
							data-testid="menu-tab-button"
						>
							{getLabelFor(name)}
						</TabsTrigger>
					))}
				</TabsList>

				<Separator data-testid="menu-separator" />

				{menus.map((menu: Menu) => (
					<TabsContent
						key={menu.menuName}
						value={menu.menuName}
						className="w-full"
						data-testid="menu-content"
					>
						{menu.categories.map((category, index) => (
							<Category
								key={category.categoryName}
								category={category}
								className={index === 0 ? "mt-0" : ""}
							/>
						))}
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}
export default Menu;
