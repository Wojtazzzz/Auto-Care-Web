import { DialogContent as UiDialogContent } from '@/components/ui-library/dialog';
import { type ReactNode } from 'react';

type DialogContentWrapperProps = {
	children: ReactNode;
};

export const DialogContentWrapper = ({
	children,
}: DialogContentWrapperProps) => {
	return <UiDialogContent>{children}</UiDialogContent>;
};
