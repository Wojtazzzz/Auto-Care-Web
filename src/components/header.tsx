import { getSession } from '@auth0/nextjs-auth0';
import { SearchIcon } from '@/components/icons/SearchIcon';
import { SettingsIcon } from '@/components/icons/SettingsIcon';
import { NotificationIcon } from '@/components/icons/NotificationIcon';
import Link from 'next/link';
import { ExitIcon } from '@/components/icons/ExitIcon';

export const Header = async () => {
	const session = await getSession();

	return (
		<header className="pl-72 flex items-center justify-between px-6 py-4 bg-gray-50 shadow-md fixed top-0 left-0 w-full">
			<h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>

			<div className="flex items-center space-x-4">
				<div className="relative">
					<input
						type="text"
						placeholder="Search for something"
						className="pl-10 pr-4 py-2 w-64 bg-gray-100 rounded-full text-sm text-gray-600 focus:outline-none"
					/>

					<div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5">
						<SearchIcon />
					</div>
				</div>

				<button
					className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
					aria-label="Ustawienia"
				>
					<SettingsIcon />
				</button>

				<button
					className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
					aria-label="Powiadomienia"
				>
					<NotificationIcon />
				</button>

				<Link
					className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
					aria-label="Powiadomienia"
					href="/api/auth/logout"
				>
					<ExitIcon />
				</Link>

				<img
					src={session?.user.picture}
					alt="Zdjęcie profilowe"
					width={40}
					height={40}
					className="w-10 h-10 rounded-full"
				/>
			</div>
		</header>
	);
};
