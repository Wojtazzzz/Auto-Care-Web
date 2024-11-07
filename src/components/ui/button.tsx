import { Button as UiButton } from '@/components/ui-library/button';
import { type ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
	return <UiButton variant="outline">{children}</UiButton>;
};
