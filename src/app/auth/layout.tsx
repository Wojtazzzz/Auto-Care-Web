import { type ReactNode } from 'react';
import { authGuard } from '@/utils/guards';

type AuthLayoutProps = Readonly<{
	children: ReactNode;
}>;

export default async function DashboardLayout({ children }: AuthLayoutProps) {
	await authGuard();

	return <main className="bg-gray-50 min-h-screen">{children}</main>;
}
