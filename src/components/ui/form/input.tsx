import type { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputType = 'text' | 'password' | 'email';

type InputProps<TName extends string> = {
	type: InputType;
	name: string;
	label: TName;
	register: (name: TName, options: object) => UseFormRegisterReturn;
	required: boolean;
	errorMessage?: string | null;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = <TName extends string>({
	type,
	label,
	register,
	required,
	errorMessage,
	...props
}: InputProps<TName>) => {
	return (
		<>
			<input
				{...props}
				{...register(label, { required })}
				type={type}
				aria-invalid={Boolean(errorMessage)}
				className="mt-1 p-2 border border-gray-300 rounded w-full"
				aria-describedby={`${props.name}-error`}
			/>

			<div role="alert" className="mt-1">
				{errorMessage && (
					<span id={`${props.name}-error`} className="text-sm text-red-600">
						{errorMessage}
					</span>
				)}
			</div>
		</>
	);
};
