import { Dialog as UiDialog } from '@/components/ui-library/dialog';
import { type ReactNode } from 'react';

type DialogProps = {
	children: ReactNode;
};

export const Dialog = ({ children }: DialogProps) => {
	return <UiDialog>{children}</UiDialog>;
};
