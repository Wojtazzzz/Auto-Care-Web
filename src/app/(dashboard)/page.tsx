import { ServicesList } from '@/components/modules/dashboard/services-list';
import { MyCarsList } from '@/components/modules/dashboard/my-cars';
import { fetchGraphData } from '@/utils/functions';
import { GetUserCarsDocument } from '../../../gql/graphql';

export default async function DashboardPage() {
	const { data } = await fetchGraphData(GetUserCarsDocument, { limit: 5 });

	return (
		<div className="space-y-8">
			<section>
				<h2 className="text-xl font-semibold text-gray-700 mb-6">
					Moje pojazdy
				</h2>

				<MyCarsList cars={data?.getUserCars.cars} />
			</section>

			<section>
				<h2 className="text-xl font-semibold text-gray-700 mb-6">
					Ostatnie serwisy
				</h2>

				<ServicesList services={services} />
			</section>
		</div>
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
