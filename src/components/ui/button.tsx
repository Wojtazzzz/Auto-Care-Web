import { Button as UiButton } from '@/components/ui-library/button';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { SpinnerLoader } from '@/components/icons/SpinnerLoader';

type ButtonVariant = 'default' | 'secondary' | 'link';

type ButtonProps = {
	variant: ButtonVariant;
	isLoading?: boolean;
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
	variant,
	isLoading,
	children,
	...props
}: ButtonProps) => {
	return (
		<UiButton variant={variant} {...props}>
			{isLoading ? <SpinnerLoader /> : children}
		</UiButton>
	);
};
