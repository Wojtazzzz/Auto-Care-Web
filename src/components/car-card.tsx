import { clsx } from 'clsx';
import { formatUnixDate } from '@/utils/functions';
import Link from 'next/link';

type CarCardProps = {
	id: number;
	name: string;
	vin: string;
	insuranceTo: string | null;
	periodicServiceTo: string | null;
	isMain: boolean;
};

export const CarCard = ({
	id,
	name,
	vin,
	insuranceTo,
	periodicServiceTo,
	isMain,
}: CarCardProps) => {
	return (
		<Link href={`/?mainCarId=${id}`}>
			<div
				className={clsx(
					'flex flex-col justify-around w-80 h-48 rounded-xl p-4 shadow-lg',
					{
						'text-white bg-gradient-to-br from-blue-500 to-purple-700': isMain,
						'text-gray-800 bg-gray-100': !isMain,
					},
				)}
			>
				<div className="flex justify-between items-center">
					<div>
						<p className="text-sm">
							{isMain ? 'Pojazd główny' : 'Pojazd poboczny'}
						</p>
						<p className="text-xl font-semibold">{name}</p>
					</div>
				</div>

				<div className="flex justify-between mt-4">
					<div>
						<p className="text-sm">Przegląd do:</p>
						<p className="text-sm font-semibold">
							{periodicServiceTo
								? formatUnixDate(periodicServiceTo, 'DD/MM/YYYY')
								: '-'}
						</p>
					</div>
					<div>
						<p className="text-sm">Ubezpieczenie do:</p>
						<p className="text-sm font-semibold text-right">
							{insuranceTo ? formatUnixDate(insuranceTo, 'DD/MM/YYYY') : '-'}
						</p>
					</div>
				</div>
				<div className="mt-2">
					<span className="text-lg tracking-widest font-semibold">{vin}</span>
				</div>
			</div>
		</Link>
	);
};
