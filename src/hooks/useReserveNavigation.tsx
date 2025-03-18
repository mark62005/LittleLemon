"use client";

import { useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useReserveNavigation() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const reserveStep = parseInt(searchParams.get("step") ?? "1", 10);

	const navigateToStep = useCallback(
		(step: number) => {
			const newStep = Math.min(Math.max(1, step), 3);

			router.push(`/reserve?step=${newStep}`, {
				scroll: false,
			});
		},
		[router]
	);

	// useEffect(() => {
	// 	if (reserveStep > 1) {
	// 		navigateToStep(1);
	// 	}
	// }, [reserveStep, navigateToStep]);

	return {
		reserveStep,
		navigateToStep,
	};
}
