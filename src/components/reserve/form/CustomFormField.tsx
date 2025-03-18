import {
	ControllerRenderProps,
	FieldValues,
	useFormContext,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

interface CustomFormFieldProps {
	name: string;
	label: string;
	type?: "text" | "email" | "textarea" | "select";
	placeholder?: string;
	options?: { value: string; label: string }[];
	className?: string;
	labelClassName?: string;
	inputClassName?: string;
	value?: string;
	initialValue?: string | number | boolean | string[];
}

function CustomFormField({
	name,
	label,
	type = "text",
	placeholder,
	options,
	className,
	labelClassName,
	inputClassName,
	initialValue,
}: CustomFormFieldProps) {
	const { control } = useFormContext();

	function renderFormControl(
		field: ControllerRenderProps<FieldValues, string>
	) {
		switch (type) {
			/* TEXTAREA */
			case "textarea":
				return (
					<Textarea
						className={cn(`resize-none min-h-[20vh]`, inputClassName)}
						placeholder={placeholder}
						{...field}
					/>
				);
			/* SELECT */
			case "select":
				return (
					<Select
						value={field.value || (initialValue as string)}
						defaultValue={field.value || (initialValue as string)}
						onValueChange={field.onChange}
					>
						<SelectTrigger className={cn(inputClassName)}>
							<SelectValue placeholder={placeholder} />
						</SelectTrigger>

						<SelectContent>
							{options?.map((option) => (
								<SelectItem
									key={option.value}
									value={option.value}
								>
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				);
			/* TEXT & EMAIL */
			default:
				return (
					<Input
						className={cn(`bg-white`, inputClassName)}
						type={type}
						placeholder={placeholder}
						{...field}
					/>
				);
		}
	}

	return (
		<FormField
			name={name}
			defaultValue={initialValue}
			control={control}
			render={({ field }) => (
				<FormItem className={cn(``, className)}>
					<FormLabel className={cn(``, labelClassName)}>{label}</FormLabel>

					<FormControl>
						{renderFormControl({
							...field,
							value: field.value !== undefined ? field.value : initialValue,
						})}
					</FormControl>
					<FormMessage className="text-destructive" />
				</FormItem>
			)}
		/>
	);
}
export default CustomFormField;
