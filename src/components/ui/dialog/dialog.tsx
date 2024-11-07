import { Dialog as UiDialog } from '@/components/ui-library/dialog';
import { type ReactNode } from 'react';
import * as React from 'react';

type DialogProps = {
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?(open: boolean): void;
	modal?: boolean;
	children: ReactNode;
};

export const Dialog = ({ children, ...props }: DialogProps) => {
	return <UiDialog {...props}>{children}</UiDialog>;
};
