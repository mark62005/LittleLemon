"use client";

import { cn } from "@/lib/utils";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
	Calendar as CalendarIcon,
	ChartLine,
	Clock3,
	Timer,
	Users,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Textarea } from "@/components/ui/textarea";

const AVAILABLE_TIME_SLOTS = [
	"7:00 PM",
	"7:15 PM",
	"7:30 PM",
	"7:45 PM",
	"8:00 PM",
	"8:15 PM",
	"8:30 PM",
	"8:45 PM",
	"9:00 PM",
] as const;

function ReservationFormSection() {
	return (
		<section className="">
			<MaxWidthWrapper>
				<h2 className="">Reserve a table</h2>

				{/* FORM PART 1 */}
				<div className="">
					{/* ROW */}
					<div className="">
						{/* NUMBER OF GUESTS */}
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="2 people" />
							</SelectTrigger>
							<SelectContent>
								{[1, 2, 3, 4, 5, 6, 7].map((noOfGuests) => (
									<SelectItem
										value={`${noOfGuests}`}
										key={noOfGuests}
									>
										{noOfGuests} people
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{/* ROW */}
					<div className="grid grid-cols-2 justify-between items-center">
						{/* DATE */}
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									className={cn("w-full")}
								>
									<CalendarIcon />

									<span>Pick a date</span>
								</Button>
							</PopoverTrigger>

							<PopoverContent className="w-auto">
								<Calendar />
							</PopoverContent>
						</Popover>

						{/* TIME */}
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="7:30 PM" />
							</SelectTrigger>
							<SelectContent>
								{AVAILABLE_TIME_SLOTS.map((timeSlot) => (
									<SelectItem
										value={timeSlot}
										key={timeSlot}
									>
										{timeSlot}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>

				{/* SELECT TIME */}
				<div className="">
					<h3 className="">Select a time</h3>
					<div className="flex justify-start items-center">
						{/* TODO: Navigate to next form section on the same page */}
						<Button>7:15 PM</Button>
					</div>
				</div>

				{/* OTHER INFO */}
				<div className="">
					<div className="flex justify-start items-center">
						<ChartLine className="" />

						<p className="">Booked 1 time today</p>
					</div>

					<div className="flex justify-start items-center">
						<Timer className="" />

						<p className="">We still have 4 timeslots left</p>
					</div>
				</div>

				{/* TODO: Do not show below unless user has choosen an available timeslot */}

				{/* RESERVATION DETAILS */}
				<div className="">
					<h3 className="">Reservation details</h3>

					<div className="">
						{/* ROW */}
						<div className="flex justify-start items-center">
							{/* DATE */}
							<div className="flex justify-start items-center">
								<CalendarIcon className="" />

								<p className="">Wed, Jan 1 2025</p>
							</div>

							{/* TIME */}
							<div className="flex justify-start items-center">
								<Clock3 className="" />

								<p className="">7:15 PM</p>
							</div>
						</div>

						{/* NUMBER OF GUESTS */}
						<div className="flex justify-start items-center">
							<Users className="" />

							<p className="">2 people</p>
						</div>
					</div>
				</div>

				{/* DINER DETAILS */}
				{
					// <Form>
					// 	<form>
					// 		{/* NAME */}
					// 		<FormField
					// 			name="name"
					// 			render={({ field }) => (
					// 				<FormItem>
					// 					<FormLabel>Name (Required)</FormLabel>
					// 					<FormControl>
					// 						<Input placeholder="Your Name" />
					// 					</FormControl>
					// 				</FormItem>
					// 			)}
					// 		/>
					// 		{/* EMAIL */}
					// 		<FormField
					// 			name="email"
					// 			render={({ field }) => (
					// 				<FormItem>
					// 					<FormLabel>Email (Required)</FormLabel>
					// 					<FormControl>
					// 						<Input placeholder="Your email" />
					// 					</FormControl>
					// 				</FormItem>
					// 			)}
					// 		/>
					// 		{/* SPECIAL REQUESTS */}
					// 		<FormField
					// 			name="requests"
					// 			render={({ field }) => (
					// 				<FormItem>
					// 					<FormLabel>Special Requests (Optional)</FormLabel>
					// 					<FormControl>
					// 						<Textarea placeholder="Let us know how we can help here..." />
					// 					</FormControl>
					// 				</FormItem>
					// 			)}
					// 		/>
					// 		<Button>Submit</Button>
					// 	</form>
					// </Form>
				}
			</MaxWidthWrapper>
		</section>
	);
}
export default ReservationFormSection;
