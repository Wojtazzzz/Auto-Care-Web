import { getAccessToken } from '@auth0/nextjs-auth0';
import { VerifyUserDocument } from '../../../../../gql/graphql';
import { z } from 'zod';

const responseSchema = z.object({
	data: z.object({
		verify: z.object({
			authorized: z.boolean(),
		}),
	}),
});

export const GET = async () => {
	const { accessToken } = await getAccessToken();

	if (!accessToken) {
		return Response.json({ status: 401 });
	}

	const res = await fetch(`${process.env.API_SERVER_URL}/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
		body: JSON.stringify({
			query: VerifyUserDocument.toString(),
		}),
	});

	if (!res.ok) {
		return Response.json({ status: 401 });
	}

	const { success } = await responseSchema.safeParseAsync(await res.json());

	if (!success) {
		return Response.json({ status: 401 });
	}

	return Response.redirect(process.env.APP_URL ?? 'http://localhost:3000');
};
