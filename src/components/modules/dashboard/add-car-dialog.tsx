'use client';

import { Dialog } from '@/components/ui/dialog/dialog';
import { DialogTrigger } from '@/components/ui/dialog/dialog-trigger';
import { DialogContentWrapper } from '@/components/ui/dialog/dialog-content-wrapper';
import { DialogHeader } from '@/components/ui/dialog/dialog-header';
import { DialogTitle } from '@/components/ui/dialog/dialog-title';
import { DialogDescription } from '@/components/ui/dialog/dialog-description';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/form/label';
import { Input } from '@/components/ui/form/input';
import { Form } from '@/components/ui/form/form';
import { FormControl } from '@/components/ui/form/form-controler';
import { DialogFooter } from '@/components/ui/dialog/dialog-footer';
import { DialogContent } from '@/components/ui/dialog/dialog-content';
import { useAddCarForm } from '@/components/modules/dashboard/useAddCarForm';

export const AddCarDialog = () => {
	const { register, errors, handleSubmit, onSubmit } = useAddCarForm();

	return (
		<Dialog>
			<DialogTrigger>
				<Button variant="default">Dodaj pojazd</Button>
			</DialogTrigger>
			<DialogContentWrapper>
				<DialogHeader>
					<DialogTitle>Dodaj pojazd</DialogTitle>
					<DialogDescription>
						Dodaj nowy pojazd. Wprowadzone dane będą dostępne tylko dla Ciebie.
						Nie będziesz możliwości ich potem zmienić.
					</DialogDescription>
				</DialogHeader>
				<DialogContent>
					<Form id="add-car" noValidate onSubmit={handleSubmit(onSubmit)}>
						<FormControl>
							<Label htmlFor="add-car-name">Nazwa</Label>
							<Input
								id="add-car-name"
								type="text"
								name="name"
								label="name"
								register={register}
								required
								placeholder="Volkswagen Passat B5"
								errorMessage={errors.name?.message}
							/>
						</FormControl>
						<FormControl>
							<Label htmlFor="add-car-vin">VIN</Label>
							<Input
								id="add-car-vin"
								type="text"
								name="vin"
								label="vin"
								register={register}
								required
								placeholder="3TMKU72N87M089290"
								errorMessage={errors.vin?.message}
							/>
						</FormControl>
					</Form>
				</DialogContent>
				<DialogFooter>
					<Button variant="default" type="submit" form="add-car">
						Dodaj
					</Button>
				</DialogFooter>
			</DialogContentWrapper>
		</Dialog>
	);
};
