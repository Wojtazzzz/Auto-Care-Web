import { DialogTrigger as UiDialogTrigger } from '@/components/ui-library/dialog';
import { type ReactNode } from 'react';

type DialogTriggerProps = {
	children: ReactNode;
};

export const DialogTrigger = ({ children }: DialogTriggerProps) => {
	return <UiDialogTrigger asChild>{children}</UiDialogTrigger>;
};
