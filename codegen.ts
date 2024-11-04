import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:8000/graphql',
	documents: 'graphql/**/*.graphql',
	generates: {
		'gql/': {
			preset: 'client',
			config: {
				documentMode: 'string',
			},
			plugins: [],
		},
	},
};

export default config;
