import { CarCard } from '@/components/car-card';
import { fetchGraphData } from '@/utils/functions';
import { GetUserCarsDocument, UserCarFragment } from '../../../../gql/graphql';

type MyCarsListProps = {
	cars: UserCarFragment[] | undefined;
};

export const MyCarsList = async ({ cars }: MyCarsListProps) => {
	const data = await fetchGraphData(GetUserCarsDocument, {
		limit: 1,
	});

	console.log('Cars: ', data);

	if (!cars) {
		return <span>No cars</span>;
	}

	return (
		<ol className="flex gap-4">
			{cars.map((car) => (
				<li key={car.id}>
					<CarCard
						name={car.name}
						vin={car.vin}
						insuranceTo={
							car.Insurance.length === 1 ? car.Insurance[0].expiredAt : null
						}
						periodicServiceTo={
							car.PeriodicService.length === 1
								? car.PeriodicService[0].expiredAt
								: null
						}
						weight={car.weight}
					/>
				</li>
			))}
		</ol>
	);
};
