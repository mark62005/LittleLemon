import * as z from "zod";

/* Reservation Schema */
export const reservationSchema = z.object({
	firstName: z.string().min(2, "First name is required"),
	lastName: z.string().min(2, "Last name is required"),
	email: z
		.string()
		.email(
			"Invalid email address, please follow the format: example@email.com"
		),
	occasion: z.string(),
	specialRequests: z
		.string()
		.max(2500, "This message must not exceed 2500 charaters"),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;
