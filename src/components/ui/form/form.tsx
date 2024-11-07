import { FormHTMLAttributes, type ReactNode } from 'react';

type FormProps = {
	children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ children, ...props }: FormProps) => {
	return (
		<form {...props} className="space-y-4">
			{children}
		</form>
	);
};
