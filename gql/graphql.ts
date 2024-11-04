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
  id: Scalars['Int']['output'];
};

export type GetCarDetailsRequest = {
  carId: Scalars['Int']['input'];
};

export type GetCarDetailsResponse = {
  __typename?: 'GetCarDetailsResponse';
  car: Car;
};

export type Query = {
  __typename?: 'Query';
  getCarDetails: GetCarDetailsResponse;
  verify: AuthUserVerification;
};


export type QueryGetCarDetailsArgs = {
  params: GetCarDetailsRequest;
};

export type GetCarDetailsQueryVariables = Exact<{
  carId: Scalars['Int']['input'];
}>;


export type GetCarDetailsQuery = { __typename?: 'Query', getCarDetails: { __typename?: 'GetCarDetailsResponse', car: { __typename?: 'Car', id: number } } };

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

export const GetCarDetailsDocument = new TypedDocumentString(`
    query GetCarDetails($carId: Int!) {
  getCarDetails(params: {carId: $carId}) {
    car {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<GetCarDetailsQuery, GetCarDetailsQueryVariables>;