declare global {
	/* MENU */
	interface Menu {
		menuName: string;
		categories: Category[];
	}
	interface Category {
		categoryName: string;
		dishes: Dish[];
	}

	interface Dish {
		id: string;
		dishName: string;
		description: string;
		price: number;
	}

	/* UTILS */
	interface NavLink {
		label: string;
		href: string;
	}
}

export {};
