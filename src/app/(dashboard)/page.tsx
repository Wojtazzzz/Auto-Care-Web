import { ServicesList } from '@/components/modules/dashboard/services-list';

export default async function DashboardPage() {
	return (
		<section>
			<h2 className="text-xl font-semibold text-gray-700 mb-6">
				Ostatnie serwisy
			</h2>

			<ServicesList services={services} />
		</section>
	);
}

const services = [
	{
		id: 1,
		icon: 'briefcase',
		title: 'Business loans',
		subtitle: 'It is a long established',
	},
	{
		id: 2,
		icon: 'bank',
		title: 'Checking accounts',
		subtitle: 'Lorem Ipsum',
	},
	{
		id: 3,
		icon: 'chart',
		title: 'Savings accounts',
		subtitle: 'It is a long established',
	},
];

export type Service = (typeof services)[number];
