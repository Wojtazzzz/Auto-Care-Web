type ServiceItemProps = {
	name: string;
	date: string;
};

export function ServiceItem({ name, date }: ServiceItemProps) {
	return (
		<div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
			<div className="flex items-center space-x-4">
				{/*{iconMap[icon]}*/}
				<div>
					<h3 className="text-gray-800 font-medium">{name}</h3>
					<p className="text-gray-500 text-sm">{date}</p>
				</div>
			</div>
			<button className="text-blue-600 font-medium py-1 px-3 rounded-full">
				Szczegóły
			</button>
		</div>
	);
}
