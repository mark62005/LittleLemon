"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReservationFormData, reservationSchema } from "@/lib/schema";
import { useReserveNavigation } from "@/hooks/useReserveNavigation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "./CustomFormField";

function ReservationForm() {
	const { navigateToStep } = useReserveNavigation();

	const formMethods = useForm<ReservationFormData>({
		resolver: zodResolver(reservationSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			specialRequests: "",
		},
	});

	function onSubmit(data: ReservationFormData) {
		// TODO: Send the form data and complete reservation
		const reservation = {
			date: "Jan 1, 2025",
			time: "7:15 PM",
			noOfGuests: 2,
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			specialRequests: data.specialRequests,
		};
		console.log("Reservation sent: ", reservation);

		navigateToStep(3);
	}

	return (
		<Form {...formMethods}>
			<form
				onSubmit={formMethods.handleSubmit(onSubmit)}
				className="space-y-6"
			>
				<div className="grid grid-cols-2 items-center gap-4">
					{/* FIRST NAME */}
					<CustomFormField
						type="text"
						name="firstName"
						label="First Name (required)"
						placeholder="First Name"
					/>
					{/* FIRST NAME */}
					<CustomFormField
						type="text"
						name="lastName"
						label="Last Name (required)"
						placeholder="Last Name"
					/>
				</div>
				{/* EMAIL */}
				<CustomFormField
					type="email"
					name="email"
					label="Email (required)"
					placeholder="example@email.com"
				/>
				{/* SPECIAL REQUESTS */}
				<CustomFormField
					type="textarea"
					name="specialRequests"
					label="Special Requests (optional)"
					placeholder="Let us know how we can help here..."
				/>

				<Button
					type="submit"
					className="w-full"
				>
					Complete Reservation
				</Button>
			</form>
		</Form>
	);
}
export default ReservationForm;
