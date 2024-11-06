import { clsx } from 'clsx';

type CarCardProps = {
	name: string;
	vin: string;
	insuranceTo: string;
	periodicServiceTo: string;
	weight: number;
};

export const CarCard = ({
	name,
	vin,
	insuranceTo,
	periodicServiceTo,
	weight,
}: CarCardProps) => {
	return (
		<div
			className={clsx(
				'flex flex-col justify-around w-80 h-48 rounded-xl p-4 shadow-lg',
				{
					'text-white bg-gradient-to-br from-blue-500 to-purple-700':
						weight === 0,
					'text-gray-800 bg-gray-100': weight > 0,
				},
			)}
		>
			<div className="flex justify-between items-center">
				<div>
					<p className="text-sm">
						{weight === 0 ? 'Pojazd główny' : 'Pojazd poboczny'}
					</p>
					<p className="text-xl font-semibold">{name}</p>
				</div>
			</div>

			<div className="flex justify-between mt-4">
				<div>
					<p className="text-sm">Przegląd do:</p>
					<p className="text-sm font-semibold">{periodicServiceTo}</p>
				</div>
				<div>
					<p className="text-sm">Ubezpieczenie do:</p>
					<p className="text-sm font-semibold text-right">{insuranceTo}</p>
				</div>
			</div>
			<div className="mt-2">
				<span className="text-lg tracking-widest font-semibold">{vin}</span>
			</div>
		</div>
	);
};
