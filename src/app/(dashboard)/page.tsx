import { ServicesList } from '@/components/modules/dashboard/services-list';
import { MyCarsList } from '@/components/modules/dashboard/my-cars';

type DashboardPageProps = {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function DashboardPage({
	searchParams,
}: DashboardPageProps) {
	const mainCarIdParam = Number((await searchParams).mainCarId);
	const mainCarId = isNaN(mainCarIdParam) ? null : mainCarIdParam;

	return (
		<div className="space-y-8">
			<section>
				<h2 className="text-xl font-semibold text-gray-700 mb-6">
					Moje pojazdy
				</h2>

				<MyCarsList mainCarId={mainCarId} />
			</section>

			<section>
				<h2 className="text-xl font-semibold text-gray-700 mb-6">
					Ostatnie serwisy
				</h2>

				<ServicesList mainCarId={mainCarId} />
			</section>
		</div>
	);
}
