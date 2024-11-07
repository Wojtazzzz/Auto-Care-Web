import { type ReactNode } from 'react';

type LabelProps = {
	htmlFor: string;
	children: ReactNode;
};

export const Label = ({ htmlFor, children }: LabelProps) => {
	return (
		<label htmlFor={htmlFor} className="cursor-pointer text-gray-700">
			{children}
		</label>
	);
};
