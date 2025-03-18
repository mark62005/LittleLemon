"use client";

import { useReserveNavigation } from "@/hooks/useReserveNavigation";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ReserveStepper from "@/components/reserve/ReserveStepper";
import ReserveDateAndTimePage from "./date-and-time";
import ReserveDetailsPage from "./details";
import ReserveCompletionPage from "./completion";

function ReservePage() {
	const { reserveStep } = useReserveNavigation();

	function renderStep() {
		switch (reserveStep) {
			case 1:
				return <ReserveDateAndTimePage />;
			case 2:
				return <ReserveDetailsPage />;
			case 3:
				return <ReserveCompletionPage />;

			default:
				return <ReserveDateAndTimePage />;
		}
	}

	return (
		<main className="bg-tertiary">
			<MaxWidthWrapper className="flex flex-col items-stretch gap-4 py-12">
				<ReserveStepper currentStep={reserveStep} />

				{renderStep()}
			</MaxWidthWrapper>
		</main>
	);
}
export default ReservePage;
