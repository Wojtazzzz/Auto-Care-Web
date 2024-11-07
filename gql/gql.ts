/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query GetUserCars($limit: Int!) {\n  getUserCars(params: {limit: $limit}) {\n    cars {\n      ...UserCar\n    }\n  }\n}\n\nfragment UserCar on Car {\n  id\n  name\n  vin\n  weight\n  Insurance {\n    id\n    expiredAt\n  }\n  PeriodicService {\n    id\n    expiredAt\n  }\n}": types.GetUserCarsDocument,
    "query GetCarServices($carId: Int, $limit: Int) {\n  getCarServices(params: {carId: $carId, limit: $limit}) {\n    services {\n      id\n      name\n      createdAt\n    }\n  }\n}": types.GetCarServicesDocument,
    "mutation VerifyUser {\n  verify {\n    authorized\n  }\n}": types.VerifyUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserCars($limit: Int!) {\n  getUserCars(params: {limit: $limit}) {\n    cars {\n      ...UserCar\n    }\n  }\n}\n\nfragment UserCar on Car {\n  id\n  name\n  vin\n  weight\n  Insurance {\n    id\n    expiredAt\n  }\n  PeriodicService {\n    id\n    expiredAt\n  }\n}"): typeof import('./graphql').GetUserCarsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCarServices($carId: Int, $limit: Int) {\n  getCarServices(params: {carId: $carId, limit: $limit}) {\n    services {\n      id\n      name\n      createdAt\n    }\n  }\n}"): typeof import('./graphql').GetCarServicesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation VerifyUser {\n  verify {\n    authorized\n  }\n}"): typeof import('./graphql').VerifyUserDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
