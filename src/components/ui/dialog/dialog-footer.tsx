import { DialogFooter as UiDialogFooter } from '@/components/ui-library/dialog';
import { type ReactNode } from 'react';

type DialogFooterProps = {
	children: ReactNode;
};

export const DialogFooter = ({ children }: DialogFooterProps) => {
	return <UiDialogFooter>{children}</UiDialogFooter>;
};
