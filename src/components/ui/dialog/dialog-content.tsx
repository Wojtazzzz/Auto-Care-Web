import { type ReactNode } from 'react';

type DialogContentProps = {
	children: ReactNode;
};

export const DialogContent = ({ children }: DialogContentProps) => {
	return <div className="py-5">{children}</div>;
};
