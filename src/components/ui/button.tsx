import { Button as UiButton } from '@/components/ui-library/button';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'default' | 'secondary' | 'link';

type ButtonProps = {
	variant: ButtonVariant;
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ variant, children, ...props }: ButtonProps) => {
	return (
		<UiButton variant={variant} {...props}>
			{children}
		</UiButton>
	);
};
