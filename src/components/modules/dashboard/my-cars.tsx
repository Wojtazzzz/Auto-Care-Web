import { CarCard } from '@/components/car-card';
import { fetchGraphData } from '@/utils/fetchers';
import { GetUserCarsDocument } from '../../../../gql/graphql';

type MyCarsListProps = {
	mainCarId: number | null;
};

export const MyCarsList = async ({ mainCarId }: MyCarsListProps) => {
	const { data } = await fetchGraphData(GetUserCarsDocument, { limit: 5 });

	if (!data || data.getUserCars.cars.length === 0) {
		return <span>No cars</span>;
	}

	return (
		<ol className="flex gap-4">
			{data.getUserCars.cars.map((car) => (
				<li key={car.id}>
					<CarCard
						id={car.id}
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
						isMain={
							mainCarId === null ? car.weight === 0 : car.id === mainCarId
						}
					/>
				</li>
			))}
		</ol>
	);
};
