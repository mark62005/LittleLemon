"use client";

import { useReserveNavigation } from "@/hooks/useReserveNavigation";
import { Button } from "@/components/ui/button";
import ReserveSectionTitle from "@/components/reserve/ReserveSectionTitle";
import ReserveDetailsItem from "@/components/reserve/details/ReserveDetailsItem";
import ReservationForm from "@/components/reserve/form/ReservationForm";

const SAMPLE_RESERVATION_DETAILS = {
	date: "Wed, Jan 1 2025",
	time: "7:15 PM",
	noOfGuests: 2,
};

function ReserveDetailsPage() {
	const { navigateToStep } = useReserveNavigation();

	function handleEditDateTimeButtonClick() {
		navigateToStep(1);
	}

	return (
		<>
			{/* RESERVATION DETAILS */}
			<section className="grid gap-2">
				<div className="flex justify-start items-center gap-3">
					<ReserveSectionTitle
						title="Reservation details"
						className="inline-block"
					/>

					<Button
						variant="link"
						onClick={handleEditDateTimeButtonClick}
						className="text-accent normal-case text-base underline hover:text-accent/80"
					>
						Edit
					</Button>
				</div>

				<div className="flex flex-col items-start justify-center md:flex-row md:items-center md:justify-start md:gap-4">
					<div className="flex justify-start items-center gap-4">
						<ReserveDetailsItem
							variant="date"
							value={SAMPLE_RESERVATION_DETAILS.date}
						/>
						<ReserveDetailsItem
							variant="time"
							value={SAMPLE_RESERVATION_DETAILS.time}
						/>
					</div>

					<ReserveDetailsItem
						variant="guests"
						value={`${SAMPLE_RESERVATION_DETAILS.noOfGuests} people`}
						className=""
					/>
				</div>
			</section>

			{/* DINER DETAILS */}
			<ReserveSectionTitle title="Diner details" />
			<ReservationForm />
		</>
	);
}
export default ReserveDetailsPage;
