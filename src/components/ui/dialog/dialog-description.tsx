import { DialogDescription as UiDialogDescription } from '@/components/ui-library/dialog';
import { type ReactNode } from 'react';

type DialogDescriptionProps = {
	children: ReactNode;
};

export const DialogDescription = ({ children }: DialogDescriptionProps) => {
	return <UiDialogDescription>{children}</UiDialogDescription>;
};
