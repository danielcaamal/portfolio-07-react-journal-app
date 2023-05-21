import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateNoteInput = {
  /** body */
  body: Scalars['String'];
  /** files */
  files?: InputMaybe<Array<NoteFileInput>>;
  /** title */
  title: Scalars['String'];
  /** userId */
  userId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote: NoteEntity;
  removeFileNote: NotesFileEntity;
  removeNote: NoteEntity;
  updateNote: NoteEntity;
};


export type MutationCreateNoteArgs = {
  createNoteInput: CreateNoteInput;
};


export type MutationRemoveFileNoteArgs = {
  id: Scalars['String'];
};


export type MutationRemoveNoteArgs = {
  id: Scalars['String'];
};


export type MutationUpdateNoteArgs = {
  updateNoteInput: UpdateNoteInput;
};

export type NoteEntity = {
  __typename?: 'NoteEntity';
  body: Scalars['String'];
  date: Scalars['DateTime'];
  files?: Maybe<Array<NotesFileEntity>>;
  id: Scalars['ID'];
  title: Scalars['String'];
  user: UserEntity;
};

export type NoteFileInput = {
  /** base64 */
  base64: Scalars['String'];
  /** title */
  title: Scalars['String'];
};

export type NotesFileEntity = {
  __typename?: 'NotesFileEntity';
  /** File base64 */
  base64: Scalars['String'];
  /** File id */
  id: Scalars['ID'];
  note: NoteEntity;
  /** File title */
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findAllNotes: Array<NoteEntity>;
  findAllNotesByUserId: Array<NoteEntity>;
  findOneNoteById: NoteEntity;
};


export type QueryFindAllNotesByUserIdArgs = {
  id: Scalars['String'];
};


export type QueryFindOneNoteByIdArgs = {
  id: Scalars['String'];
};

export type UpdateNoteInput = {
  /** body */
  body?: InputMaybe<Scalars['String']>;
  /** files */
  files?: InputMaybe<Array<NoteFileInput>>;
  id: Scalars['ID'];
  /** title */
  title?: InputMaybe<Scalars['String']>;
  /** userId */
  userId?: InputMaybe<Scalars['ID']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  photoURL?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type CreateNoteMutationVariables = Exact<{
  createNoteInput: CreateNoteInput;
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', createNote: { __typename?: 'NoteEntity', id: string, title: string, body: string, date: any, files?: Array<{ __typename?: 'NotesFileEntity', id: string, base64: string, title: string }> | null } };

export type FindAllNotesByUserIdQueryVariables = Exact<{
  findAllNotesByUserIdId: Scalars['String'];
}>;


export type FindAllNotesByUserIdQuery = { __typename?: 'Query', findAllNotesByUserId: Array<{ __typename?: 'NoteEntity', id: string, title: string, body: string, date: any }> };

export type FindOneNoteByIdQueryVariables = Exact<{
  findOneNoteByIdId: Scalars['String'];
}>;


export type FindOneNoteByIdQuery = { __typename?: 'Query', findOneNoteById: { __typename?: 'NoteEntity', id: string, title: string, body: string, date: any, files?: Array<{ __typename?: 'NotesFileEntity', id: string, base64: string, title: string }> | null } };

export type UpdateNoteMutationVariables = Exact<{
  updateNoteInput: UpdateNoteInput;
}>;


export type UpdateNoteMutation = { __typename?: 'Mutation', updateNote: { __typename?: 'NoteEntity', id: string, title: string, body: string, date: any, files?: Array<{ __typename?: 'NotesFileEntity', id: string, base64: string, title: string }> | null } };

export type RemoveNoteMutationVariables = Exact<{
  removeNoteId: Scalars['String'];
}>;


export type RemoveNoteMutation = { __typename?: 'Mutation', removeNote: { __typename?: 'NoteEntity', id: string } };

export type RemoveFileNoteMutationVariables = Exact<{
  removeFileNoteId: Scalars['String'];
}>;


export type RemoveFileNoteMutation = { __typename?: 'Mutation', removeFileNote: { __typename?: 'NotesFileEntity', id: string } };


export const CreateNoteDocument = gql`
    mutation createNote($createNoteInput: CreateNoteInput!) {
  createNote(createNoteInput: $createNoteInput) {
    id
    title
    body
    date
    files {
      id
      base64
      title
    }
  }
}
    `;
export type CreateNoteMutationFn = Apollo.MutationFunction<CreateNoteMutation, CreateNoteMutationVariables>;

/**
 * __useCreateNoteMutation__
 *
 * To run a mutation, you first call `useCreateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoteMutation, { data, loading, error }] = useCreateNoteMutation({
 *   variables: {
 *      createNoteInput: // value for 'createNoteInput'
 *   },
 * });
 */
export function useCreateNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateNoteMutation, CreateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNoteMutation, CreateNoteMutationVariables>(CreateNoteDocument, options);
      }
export type CreateNoteMutationHookResult = ReturnType<typeof useCreateNoteMutation>;
export type CreateNoteMutationResult = Apollo.MutationResult<CreateNoteMutation>;
export type CreateNoteMutationOptions = Apollo.BaseMutationOptions<CreateNoteMutation, CreateNoteMutationVariables>;
export const FindAllNotesByUserIdDocument = gql`
    query FindAllNotesByUserId($findAllNotesByUserIdId: String!) {
  findAllNotesByUserId(id: $findAllNotesByUserIdId) {
    id
    title
    body
    date
  }
}
    `;

/**
 * __useFindAllNotesByUserIdQuery__
 *
 * To run a query within a React component, call `useFindAllNotesByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllNotesByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllNotesByUserIdQuery({
 *   variables: {
 *      findAllNotesByUserIdId: // value for 'findAllNotesByUserIdId'
 *   },
 * });
 */
export function useFindAllNotesByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FindAllNotesByUserIdQuery, FindAllNotesByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllNotesByUserIdQuery, FindAllNotesByUserIdQueryVariables>(FindAllNotesByUserIdDocument, options);
      }
export function useFindAllNotesByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllNotesByUserIdQuery, FindAllNotesByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllNotesByUserIdQuery, FindAllNotesByUserIdQueryVariables>(FindAllNotesByUserIdDocument, options);
        }
export type FindAllNotesByUserIdQueryHookResult = ReturnType<typeof useFindAllNotesByUserIdQuery>;
export type FindAllNotesByUserIdLazyQueryHookResult = ReturnType<typeof useFindAllNotesByUserIdLazyQuery>;
export type FindAllNotesByUserIdQueryResult = Apollo.QueryResult<FindAllNotesByUserIdQuery, FindAllNotesByUserIdQueryVariables>;
export const FindOneNoteByIdDocument = gql`
    query FindOneNoteById($findOneNoteByIdId: String!) {
  findOneNoteById(id: $findOneNoteByIdId) {
    id
    title
    body
    date
    files {
      id
      base64
      title
    }
  }
}
    `;

/**
 * __useFindOneNoteByIdQuery__
 *
 * To run a query within a React component, call `useFindOneNoteByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneNoteByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneNoteByIdQuery({
 *   variables: {
 *      findOneNoteByIdId: // value for 'findOneNoteByIdId'
 *   },
 * });
 */
export function useFindOneNoteByIdQuery(baseOptions: Apollo.QueryHookOptions<FindOneNoteByIdQuery, FindOneNoteByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneNoteByIdQuery, FindOneNoteByIdQueryVariables>(FindOneNoteByIdDocument, options);
      }
export function useFindOneNoteByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneNoteByIdQuery, FindOneNoteByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneNoteByIdQuery, FindOneNoteByIdQueryVariables>(FindOneNoteByIdDocument, options);
        }
export type FindOneNoteByIdQueryHookResult = ReturnType<typeof useFindOneNoteByIdQuery>;
export type FindOneNoteByIdLazyQueryHookResult = ReturnType<typeof useFindOneNoteByIdLazyQuery>;
export type FindOneNoteByIdQueryResult = Apollo.QueryResult<FindOneNoteByIdQuery, FindOneNoteByIdQueryVariables>;
export const UpdateNoteDocument = gql`
    mutation UpdateNote($updateNoteInput: UpdateNoteInput!) {
  updateNote(updateNoteInput: $updateNoteInput) {
    id
    title
    body
    date
    files {
      id
      base64
      title
    }
  }
}
    `;
export type UpdateNoteMutationFn = Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      updateNoteInput: // value for 'updateNoteInput'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, options);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = Apollo.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = Apollo.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const RemoveNoteDocument = gql`
    mutation RemoveNote($removeNoteId: String!) {
  removeNote(id: $removeNoteId) {
    id
  }
}
    `;
export type RemoveNoteMutationFn = Apollo.MutationFunction<RemoveNoteMutation, RemoveNoteMutationVariables>;

/**
 * __useRemoveNoteMutation__
 *
 * To run a mutation, you first call `useRemoveNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeNoteMutation, { data, loading, error }] = useRemoveNoteMutation({
 *   variables: {
 *      removeNoteId: // value for 'removeNoteId'
 *   },
 * });
 */
export function useRemoveNoteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveNoteMutation, RemoveNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveNoteMutation, RemoveNoteMutationVariables>(RemoveNoteDocument, options);
      }
export type RemoveNoteMutationHookResult = ReturnType<typeof useRemoveNoteMutation>;
export type RemoveNoteMutationResult = Apollo.MutationResult<RemoveNoteMutation>;
export type RemoveNoteMutationOptions = Apollo.BaseMutationOptions<RemoveNoteMutation, RemoveNoteMutationVariables>;
export const RemoveFileNoteDocument = gql`
    mutation RemoveFileNote($removeFileNoteId: String!) {
  removeFileNote(id: $removeFileNoteId) {
    id
  }
}
    `;
export type RemoveFileNoteMutationFn = Apollo.MutationFunction<RemoveFileNoteMutation, RemoveFileNoteMutationVariables>;

/**
 * __useRemoveFileNoteMutation__
 *
 * To run a mutation, you first call `useRemoveFileNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFileNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFileNoteMutation, { data, loading, error }] = useRemoveFileNoteMutation({
 *   variables: {
 *      removeFileNoteId: // value for 'removeFileNoteId'
 *   },
 * });
 */
export function useRemoveFileNoteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFileNoteMutation, RemoveFileNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFileNoteMutation, RemoveFileNoteMutationVariables>(RemoveFileNoteDocument, options);
      }
export type RemoveFileNoteMutationHookResult = ReturnType<typeof useRemoveFileNoteMutation>;
export type RemoveFileNoteMutationResult = Apollo.MutationResult<RemoveFileNoteMutation>;
export type RemoveFileNoteMutationOptions = Apollo.BaseMutationOptions<RemoveFileNoteMutation, RemoveFileNoteMutationVariables>;