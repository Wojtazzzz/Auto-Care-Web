import { type GraphQLError } from 'graphql/error';
import { TypedDocumentString } from '../../gql/graphql';
import { getAccessToken } from '@auth0/nextjs-auth0';

type FetchApiMethod = 'POST';

type FetchApiArgs = {
	endpoint: string;
	method: FetchApiMethod;
	headers: Record<string, string>;
	body: Record<string, string | undefined | object>;
};

const fetchApi = async ({ endpoint, method, headers, body }: FetchApiArgs) => {
	return await fetch(`${process.env.API_SERVER_URL}${endpoint}`, {
		method,
		headers,
		body: JSON.stringify(body),
	});
};

type GraphQLResponse<GraphQLData> =
	| { data: GraphQLData }
	| { errors: GraphQLError[] };

export const fetchGraphData = async <Result, Variables extends object>(
	document: TypedDocumentString<Result, Variables>,
	variables?: Variables,
) => {
	const { accessToken } = await getAccessToken();

	const response = await fetchApi({
		endpoint: '/graphql',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
		body: {
			query: document.toString(),
			variables,
		},
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
