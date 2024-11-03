import { type ReactNode } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

type DashboardLayoutProps = Readonly<{
	children: ReactNode;
}>;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<UserProvider>
			<main>{children}</main>
		</UserProvider>
	);
}
