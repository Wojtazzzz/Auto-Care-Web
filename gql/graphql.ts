/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthUserVerification = {
  __typename?: 'AuthUserVerification';
  authorized: Scalars['Boolean']['output'];
};

export type Car = {
  __typename?: 'Car';
  Insurance: Array<Insurance>;
  PeriodicService: Array<PeriodicService>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  vin: Scalars['String']['output'];
  weight: Scalars['Int']['output'];
};

export type GetUserCarsRequest = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type GetUserCarsResponse = {
  __typename?: 'GetUserCarsResponse';
  cars: Array<Car>;
};

export type Insurance = {
  __typename?: 'Insurance';
  expiredAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type PeriodicService = {
  __typename?: 'PeriodicService';
  expiredAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getUserCars: GetUserCarsResponse;
  verify: AuthUserVerification;
};


export type QueryGetUserCarsArgs = {
  params: GetUserCarsRequest;
};

export type GetUserCarsQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
}>;


export type GetUserCarsQuery = { __typename?: 'Query', getUserCars: { __typename?: 'GetUserCarsResponse', cars: Array<{ __typename?: 'Car', id: number, name: string, vin: string, weight: number, Insurance: Array<{ __typename?: 'Insurance', id: number, expiredAt: string }>, PeriodicService: Array<{ __typename?: 'PeriodicService', id: number, expiredAt: string }> }> } };

export type UserCarFragment = { __typename?: 'Car', id: number, name: string, vin: string, weight: number, Insurance: Array<{ __typename?: 'Insurance', id: number, expiredAt: string }>, PeriodicService: Array<{ __typename?: 'PeriodicService', id: number, expiredAt: string }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const UserCarFragmentDoc = new TypedDocumentString(`
    fragment UserCar on Car {
  id
  name
  vin
  weight
  Insurance {
    id
    expiredAt
  }
  PeriodicService {
    id
    expiredAt
  }
}
    `, {"fragmentName":"UserCar"}) as unknown as TypedDocumentString<UserCarFragment, unknown>;
export const GetUserCarsDocument = new TypedDocumentString(`
    query GetUserCars($limit: Int!) {
  getUserCars(params: {limit: $limit}) {
    cars {
      ...UserCar
    }
  }
}
    fragment UserCar on Car {
  id
  name
  vin
  weight
  Insurance {
    id
    expiredAt
  }
  PeriodicService {
    id
    expiredAt
  }
}`) as unknown as TypedDocumentString<GetUserCarsQuery, GetUserCarsQueryVariables>;