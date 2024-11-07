import { DialogHeader as UiDialogHeader } from '@/components/ui-library/dialog';
import { type ReactNode } from 'react';

type DialogHeaderProps = {
	children: ReactNode;
};

export const DialogHeader = ({ children }: DialogHeaderProps) => {
	return <UiDialogHeader>{children}</UiDialogHeader>;
};
