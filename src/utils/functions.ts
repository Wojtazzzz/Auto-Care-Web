import { getSession } from '@auth0/nextjs-auth0';
import { TypedDocumentString } from '../../gql/graphql';
import { GraphQLError } from 'graphql/error';
import moment from 'moment';

type GraphQLResponse<GraphQLData> =
	| { data: GraphQLData }
	| { errors: GraphQLError[] };

export const fetchGraphData = async <Result, Variables>(
	document: TypedDocumentString<Result, Variables>,
	variables?: Variables,
) => {
	const session = await getSession();

	const response = await fetch(`${process.env.API_SERVER_URL}/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${session?.accessToken}`,
		},
		body: JSON.stringify({
			query: document.toString(),
			variables,
		}),
	});

	const result = (await response.json()) as GraphQLResponse<Result>;

	if ('errors' in result) {
		return {
			data: null,
			error: result.errors[0].message,
		};
	}

	return {
		data: result.data,
		error: null,
	};
};

export const formatUnixDate = (date: string | number, format: string) => {
	return moment.unix(Number(date) / 1000).format(format);
};
