export default async function DashboardPage() {
	return (
		<>
			<h2 className="text-xl font-semibold text-gray-700 mb-6">
				Ostatnie serwisy
			</h2>

			<div className="space-y-4">
				{services.map((service) => (
					<div
						key={service.id}
						className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
					>
						<div className="flex items-center space-x-4">
							{/*{iconMap[icon]}*/}
							<div>
								<h3 className="text-gray-800 font-medium">{service.title}</h3>
								<p className="text-gray-500 text-sm">{service.subtitle}</p>
							</div>
						</div>
						<button className="text-blue-600 font-medium py-1 px-3 rounded-full">
							Szczegóły
						</button>
					</div>
				))}
			</div>
		</>
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
