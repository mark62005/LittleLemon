"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon, ChartLine, Clock4, Timer, User } from "lucide-react";
import { useReserveNavigation } from "@/hooks/useReserveNavigation";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const SAMPLE_NO_OF_GUESTS = [2, 3, 4, 5, 6] as const;

const SAMPLE_AVAILABLE_DATES = [
	new Date(2025, 2, 20),
	new Date(2025, 2, 21),
	new Date(2025, 2, 22),
	new Date(2025, 2, 23),
];

const SAMPLE_AVAILABLE_DATE_TIME = [
	{
		date: new Date(2025, 2, 20).getDate(),
		availableTimeSlots: [
			"7:00 PM",
			"7:15 PM",
			"7:30 PM",
			"7:45 PM",
			"8:00 PM",
			"8:15 PM",
			"8:30 PM",
			"8:45 PM",
			"9:00 PM",
		],
	},
	{
		date: new Date(2025, 2, 21).getDate(),
		availableTimeSlots: [
			"7:00 PM",
			"7:15 PM",
			"7:45 PM",
			"8:00 PM",
			"8:15 PM",
			"8:45 PM",
		],
	},
	{
		date: new Date(2025, 2, 22).getDate(),
		availableTimeSlots: [
			"7:15 PM",
			"7:30 PM",
			"7:45 PM",
			"8:00 PM",
			"8:30 PM",
			"8:45 PM",
		],
	},
	{
		date: new Date(2025, 2, 23).getDate(),
		availableTimeSlots: ["7:00 PM", "7:15 PM", "8:00 PM", "8:30 PM", "9:00 PM"],
	},
];

function ReserveDateAndTimePage() {
	const [selectedNoOfGuests, setSelectedNoOfGuests] = useState<number>(
		SAMPLE_NO_OF_GUESTS[0]
	);
	const [selectedDate, setSelectedDate] = useState<Date>();
	const [selectedTime, setSelectedTime] = useState<{
		index: number;
		value: string;
	}>();

	const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
	const [isDayPickerOpen, setIsDayPickerOpen] = useState<boolean>(false);

	const { navigateToStep } = useReserveNavigation();

	useEffect(() => {
		setAvailableTimeSlots(
			SAMPLE_AVAILABLE_DATE_TIME.find(
				(dt) => dt.date === selectedDate?.getDate()
			)?.availableTimeSlots ?? []
		);
	}, [selectedDate]);

	function handleNoOfGuestsSelect(value: string) {
		setSelectedNoOfGuests(parseInt(value));
	}

	function handleCalendarSelect(selectedDate: Date | undefined) {
		setSelectedDate(selectedDate);
		setIsDayPickerOpen((prev) => !prev);
	}

	function handleTimeSlotSelect(value: string) {
		const index = availableTimeSlots.findIndex((ts) => ts === value);
		setSelectedTime({ index, value });
	}

	function checkHasInfoMissing(): boolean {
		return (
			selectedNoOfGuests === 0 ||
			selectedDate === undefined ||
			selectedTime === undefined
		);
	}

	function handleNextButtonClick() {
		/* TODO: Pass data selected to next step */
		console.log({
			noOfguests: selectedNoOfGuests,
			date: selectedDate,
			time: selectedTime,
		});

		navigateToStep(2);
	}

	return (
		<>
			<h2 className="text-xl font-bold uppercase">Reserve your table</h2>

			<div className="grid grid-cols-2 gap-2">
				<div className="col-span-2">
					{/* NUMBER OF GUESTS PICKER */}
					<Select onValueChange={handleNoOfGuestsSelect}>
						<SelectTrigger className="w-full">
							<div className="flex items-center justify-between gap-2">
								<User className="w-4 h-4 text-secondary-foreground" />
								<SelectValue placeholder={`2 people`} />
							</div>
						</SelectTrigger>
						<SelectContent>
							{SAMPLE_NO_OF_GUESTS.map((noOfGuests) => (
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

				<div className="col-span-2 grid grid-cols-2 gap-2 justify-between items-center">
					{/* DATE PICKER */}
					<Popover
						open={isDayPickerOpen}
						onOpenChange={setIsDayPickerOpen}
					>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className={cn(
									"col-span-1 border-none justify-start normal-case"
								)}
							>
								<CalendarIcon />
								{selectedDate ? (
									format(selectedDate, "PPP")
								) : (
									<span>Pick a date</span>
								)}
							</Button>
						</PopoverTrigger>

						<PopoverContent className="w-auto">
							<Calendar
								mode="single"
								selected={selectedDate}
								onSelect={handleCalendarSelect}
								disabled={{
									before: SAMPLE_AVAILABLE_DATES[0],
									after:
										SAMPLE_AVAILABLE_DATES[SAMPLE_AVAILABLE_DATES.length - 1],
								}}
								required
							/>
						</PopoverContent>
					</Popover>

					{/* TIME PICKER */}
					<Select onValueChange={handleTimeSlotSelect}>
						<SelectTrigger
							className="w-full"
							disabled={availableTimeSlots.length === 0}
						>
							<div className="flex items-center justify-between gap-2">
								<Clock4 className="w-4 h-4 text-sidebar-foreground" />
								<SelectValue
									placeholder={
										availableTimeSlots.length > 0
											? availableTimeSlots[0]
											: "Pick a time"
									}
								/>
							</div>
						</SelectTrigger>
						<SelectContent>
							{availableTimeSlots.map((timeSlot) => (
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

			{/* OTHER INFO */}
			<div className={cn({ hidden: selectedTime === undefined })}>
				<div className="flex justify-start items-center mb-2">
					<ChartLine className="" />
					{/* TODO: Show number of times booked from database */}
					<p className="">Booked 1 time today</p>
				</div>

				<div className="flex justify-start items-center">
					<Timer className="" />
					<p className="">
						We still have {availableTimeSlots.length} timeslots left
					</p>
				</div>
			</div>

			<Button
				variant={"secondary"}
				onClick={handleNextButtonClick}
				disabled={checkHasInfoMissing()}
			>
				Next
			</Button>
		</>
	);
}
export default ReserveDateAndTimePage;
