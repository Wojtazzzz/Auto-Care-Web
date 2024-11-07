import { DialogContent as UiDialogContent } from '@/components/ui-library/dialog';
import { type ReactNode } from 'react';

type DialogContentProps = {
	children: ReactNode;
};

export const DialogContent = ({ children }: DialogContentProps) => {
	return <UiDialogContent>{children}</UiDialogContent>;
};
