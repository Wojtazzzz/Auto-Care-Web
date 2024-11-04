import { type ReactNode } from 'react';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { UserProvider } from '@auth0/nextjs-auth0/client';

type DashboardLayoutProps = Readonly<{
	children: ReactNode;
}>;

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<UserProvider>
			<main className="bg-gray-50 min-h-screen">
				<Sidebar />
				<Header />

				<div className="pl-72 pt-28">{children}</div>
			</main>
		</UserProvider>
	);
}
