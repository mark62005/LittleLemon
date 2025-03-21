import { arrayCeil, cn, getFormattedPrice, getLabelFor } from "@/lib/utils";

describe("Util functions", () => {
	describe("cn", () => {
		it("should return a string of merged className", () => {
			const merged = cn("h-full", "w-full");

			expect(merged).toStrictEqual("h-full w-full");
		});
	});

	describe("arrayCeil", () => {
		const numArray = [4, 23, 7, 39, 19, 9, 14];

		it("should return the closest larger number from the array if the target number is not the largest", () => {
			const result = arrayCeil(numArray, 8);

			expect(result).toEqual(9);
		});

		it("should return the largest number from the array if the target number is the largest", () => {
			const result = arrayCeil(numArray, 100);

			expect(result).toEqual(39);
		});
	});

	describe("getLabelFor", () => {
		it("should replace all '_' in a string with space", () => {
			const label = getLabelFor("a_string_without_spaces");

			expect(label).toStrictEqual("a string without spaces");
		});
	});

	describe("getFormattedPrice", () => {
		it("should return a string", () => {
			const formattedPrice = getFormattedPrice(19);

			expect(formattedPrice).toBeTypeOf("string");
		});

		it("should return the price with 2 decimal places", () => {
			const formattedPrice = getFormattedPrice(19.99);

			expect(formattedPrice).toStrictEqual("19.99");
		});

		it("should return the price with 2 decimal places if price is an integer", () => {
			const formattedPrice = getFormattedPrice(19);

			expect(formattedPrice).toStrictEqual("19.00");
		});

		it("should return the price with 2 decimal places if price is more than 2 decimal places", () => {
			const formattedPrice = getFormattedPrice(19.999);

			expect(formattedPrice).toStrictEqual("20.00");
		});
	});
});
