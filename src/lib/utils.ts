import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function arrayCeil(arr: number[], number: number) {
	const sorted = arr.sort((a, b) => a - b);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > number) {
			return sorted[i];
		}
	}
	// If no index found return the last element
	return sorted[sorted.length - 1];
}

export function getLabelFor(str: string): string {
	return str.replaceAll("_", " ");
}

export function getFormattedPrice(price: number): string {
	return price.toFixed(2);
}
