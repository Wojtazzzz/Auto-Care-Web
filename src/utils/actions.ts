'use server';

import { fetchGraphData } from '@/utils/fetchers';
import { CreateCarDocument } from '../../gql/graphql';

type ActionState = {
	status: 'SUCCESS' | 'ERROR' | 'IDLE';
	error: string | null;
};

type CreateCarPayload = {
	name: string;
	vin: string;
};

export const createCar = async (
	variables: CreateCarPayload,
): Promise<ActionState> => {
	const { error } = await fetchGraphData(CreateCarDocument, variables);

	if (error) {
		return {
			status: 'ERROR',
			error,
		};
	}

	return {
		status: 'SUCCESS',
		error: null,
	};
};
