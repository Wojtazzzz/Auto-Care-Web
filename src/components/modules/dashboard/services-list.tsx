import { ServiceItem } from '@/components/service-item';
import { Service } from '@/app/(dashboard)/page';

type ServicesListProps = {
	services: Service[];
};

export const ServicesList = ({ services }: ServicesListProps) => {
	return (
		<ol className="space-y-4">
			{services.map((service) => (
				<li key={service.id}>
					<ServiceItem name={service.title} date="01/01/2024" />
				</li>
			))}
		</ol>
	);
};
