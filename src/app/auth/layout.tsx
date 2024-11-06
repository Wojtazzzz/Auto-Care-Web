import { type ReactNode } from 'react';
import { guestGuard } from '@/utils/guards';

type AuthLayoutProps = Readonly<{
	children: ReactNode;
}>;

export default async function DashboardLayout({ children }: AuthLayoutProps) {
	await guestGuard();

	return <main className="bg-gray-50 min-h-screen">{children}</main>;
}
