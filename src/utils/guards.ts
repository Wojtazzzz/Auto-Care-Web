import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export const authGuard = async () => {
	const session = await getSession();

	if (!session?.accessToken) {
		redirect('/auth');
	}
};

export const guestGuard = async () => {
	const session = await getSession();

	if (session?.accessToken) {
		redirect('/');
	}
};
