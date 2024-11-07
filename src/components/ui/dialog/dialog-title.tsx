import { DialogTitle as UiDialogTitle } from '@/components/ui-library/dialog';
import { type ReactNode } from 'react';

type DialogTitleProps = {
	children: ReactNode;
};

export const DialogTitle = ({ children }: DialogTitleProps) => {
	return <UiDialogTitle>{children}</UiDialogTitle>;
};
