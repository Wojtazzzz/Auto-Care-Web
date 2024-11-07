import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z
	.object({
		name: z.string().min(3, 'Podaj przynajmniej 3 znaki.'),
		vin: z.string().length(17, 'Numer VIN składa się z 17 znaków.'),
	})
	.required();

type FormValues = z.infer<typeof formSchema>;

export const useAddCarForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			vin: '',
		},
	});

	const submit = (callback: (payload: FormValues) => void) =>
		handleSubmit((values: FormValues) => {
			return callback(values);
		});

	return {
		register,
		errors,
		handleSubmit,
		submit,
	};
};
