import { Fragment } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const RESERVE_STEP = ["Date & Time", "Details", "Completion"];

type ReserveStepperProps = { currentStep: number };

function ReserveStepper({ currentStep }: ReserveStepperProps) {
	return (
		<div className="w-11/12 mx-auto mb-4 flex flex-col items-center md:w-5/6 lg:w-1/2">
			<div className="w-full flex items-start justify-between mb-2 sm:items-center">
				{RESERVE_STEP.map((stepLabel, index) => {
					const step = index + 1;

					return (
						<Fragment key={index}>
							{/* ICON AND TEXT */}
							<div className="flex flex-col items-center mt-1 sm:mt-0">
								<div
									className={cn(
										"w-6 h-6 flex items-center justify-center rounded-full mb-2 lg:w-8 lg:h-8",
										{
											"bg-form-success":
												currentStep > step || (currentStep === 3 && step === 3),
											"bg-secondary": currentStep === step && step !== 3,
											"border border-highlight text-highlight":
												currentStep < step,
										}
									)}
								>
									{currentStep > step || (currentStep === 3 && step === 3) ? (
										<Check className="w-4 h-4 lg:w-5 lg:h-5" />
									) : (
										<span>{step}</span>
									)}
								</div>

								<p
									className={cn("text-xs text-center sm:text-sm", {
										"text-highlight": currentStep < step,
									})}
								>
									{stepLabel}
								</p>
							</div>

							{/* LINE */}
							{index < 2 && (
								<div
									className={cn("w-1/4 h-[1px] self-start mt-4", {
										"bg-form-success": currentStep > step,
										"bg-highlight": currentStep <= step,
									})}
								/>
							)}
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}
export default ReserveStepper;
