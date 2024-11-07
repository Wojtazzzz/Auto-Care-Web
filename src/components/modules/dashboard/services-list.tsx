import { ServiceItem } from '@/components/service-item';
import { fetchGraphData } from '@/utils/fetchers';
import { GetCarServicesDocument } from '../../../../gql/graphql';

type ServicesListProps = {
	mainCarId: number | null;
};

export const ServicesList = async ({ mainCarId }: ServicesListProps) => {
	const { data } = await fetchGraphData(GetCarServicesDocument, {
		carId: mainCarId,
		limit: 5,
	});

	if (!data || data.getCarServices.services.length === 0) {
		return <span>No services</span>;
	}

	return (
		<ol className="space-y-4">
			{data.getCarServices.services.map((service) => (
				<li key={service.id}>
					<ServiceItem name={service.name} date={service.createdAt} />
				</li>
			))}
		</ol>
	);
};
