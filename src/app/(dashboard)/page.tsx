import { ServicesList } from '@/components/modules/dashboard/services-list';
import { MyCarsList } from '@/components/modules/dashboard/my-cars';

export default async function DashboardPage() {
	return (
		<div className="space-y-8">
			<section>
				<h2 className="text-xl font-semibold text-gray-700 mb-6">
					Moje pojazdy
				</h2>

				<MyCarsList cars={cars} />
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

const cars = [
	{
		id: 1,
		name: 'Volkswagen Passat',
		insuranceTo: '01/01/2024',
		periodicServiceTo: '01/01/2024',
		vin: '00000000000000000',
		weight: 0,
	},
	{
		id: 2,
		name: 'Opel Astra',
		insuranceTo: '01/01/2024',
		periodicServiceTo: '01/01/2024',
		vin: '00000000000000000',
		weight: 1,
	},
	{
		id: 3,
		name: 'Honda Civic',
		insuranceTo: '01/01/2024',
		periodicServiceTo: '01/01/2024',
		vin: '00000000000000000',
		weight: 2,
	},
];

export type Car = (typeof cars)[number];
