import { type ReactNode } from 'react';

type IconContainerProps = {
	children: ReactNode;
};

export const IconContainer = ({ children }: IconContainerProps) => {
	return <div>{children}</div>;
};
