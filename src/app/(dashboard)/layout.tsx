import { type ReactNode } from 'react';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { authGuard } from '@/utils/guards';

type DashboardLayoutProps = Readonly<{
	children: ReactNode;
}>;

export default async function DashboardLayout({
	children,
}: DashboardLayoutProps) {
	await authGuard();

	return (
		<main className="bg-gray-50 min-h-screen">
			<Sidebar />
			<Header />

			<div className="pl-72 pt-[98px] pr-8">{children}</div>
		</main>
	);
}
