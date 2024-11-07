import moment from 'moment';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const formatUnixDate = (date: string | number, format: string) => {
	return moment.unix(Number(date) / 1000).format(format);
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
