import { type Car } from '@/app/(dashboard)/page';
import { CarCard } from '@/components/car-card';

type MyCarsListProps = {
	cars: Car[];
};

export const MyCarsList = ({ cars }: MyCarsListProps) => {
	return (
		<ol className="flex gap-4">
			{cars.map((car) => (
				<li key={car.id}>
					<CarCard
						name={car.name}
						vin={car.vin}
						insuranceTo={car.insuranceTo}
						periodicServiceTo={car.periodicServiceTo}
						weight={car.weight}
					/>
				</li>
			))}
		</ol>
	);
};
