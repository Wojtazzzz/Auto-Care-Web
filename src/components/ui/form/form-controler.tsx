import { type ReactNode } from 'react';

type FormControlProps = {
	children: ReactNode;
};

export const FormControl = ({ children }: FormControlProps) => {
	return <div className="gap-4 w-full mx-auto">{children}</div>;
};
