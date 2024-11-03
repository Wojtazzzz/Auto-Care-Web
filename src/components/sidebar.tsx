import { HomeIcon } from '@/components/icons/HomeIcon';
import { clsx } from 'clsx';

const items = [
	{
		name: 'Dashboard',
		icon: <HomeIcon />,
		href: '/',
	},
] as const;

export const Sidebar = () => {
	const isLogged = true;

	return (
		<header className="h-screen w-64 bg-gray-50 px-4 py-8 shadow-lg fixed top-0 left-0 z-10">
			<h1 className="text-2xl font-bold text-blue-700 flex justify-center items-center space-x-2 mb-8">
				AutoCare
			</h1>

			<nav>
				<ul className="space-y-4">
					{items.map((item) => (
						<li
							key={item.name}
							className={clsx(
								'flex items-center space-x-3 p-2 rounded-lg cursor-pointer',
								{
									'text-blue-700 bg-blue-100': isLogged,
									'text-gray-400 hover:bg-gray-100': !isLogged,
								},
							)}
						>
							{item.icon}
							<span className="text-sm font-medium">{item.name}</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
